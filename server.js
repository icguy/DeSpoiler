let admin = require("firebase-admin");
let dayjs = require("dayjs");
let express = require("express");

const warningRatio = 0.6;
const maxMessageLength = 100;
const port = 3000;

function getSecret(envKey, fallbackLocation) {
	try {
		const secret = JSON.parse(process.env[envKey]);
		return secret;
	}
	catch (err) {
	}

	let fs = require("fs");
	let fallback = JSON.parse(fs.readFileSync(fallbackLocation, { encoding: "utf-8" }));
	return fallback;
}

function getCert() {
	return getSecret("cert", "./cert-test.json");
}

function getConfig(cert) {
	let config = getSecret("config", "./config-test.json")
	return {
		...config,
		credential: admin.credential.cert(cert)
	}
}

function getList(ref) {
	function normalizeList(objList) {
		return Object.keys(objList).map(k => ({ key: k, ...objList[k] }))
	}

	return new Promise((resolve, reject) => {
		ref.once("value", snapshot => resolve(normalizeList(snapshot.val())), err => reject(err));
	});
}

function getSpoilState(added, expires) {
	let now = dayjs();
	if (expires.isBefore(now))
		return "spoiled";

	let totalLifetime = expires.diff(added);
	let currentLifetime = now.diff(added);
	if (currentLifetime * 1.0 / totalLifetime > warningRatio)
		return "warning";

	return "ok";
}

function getNotificationData(item) {
	let added = dayjs(item.added);
	let expires = dayjs(item.expires);
	let spoilState = getSpoilState(added, expires);
	if (spoilState !== "ok" && item["lastNotification"] !== spoilState)
		return { name: item.name, key: item.key, spoilState };
	return undefined;
}

function getNotification(list) {
	let shouldWarn = [];
	for (let item of list) {
		let result = getNotificationData(item);
		if (result) {
			shouldWarn.push(result);
		}
	}
	let numTotal = shouldWarn.length;
	if (numTotal > 0) {
		let message = shouldWarn.map(a => a.name).join(", ");
		if (message.length > maxMessageLength) {
			message = message.substr(0, maxMessageLength - 3) + "...";
		}
		let title = `Warning about ${numTotal} items`;
		return { message, title, items: shouldWarn };
	}
	return undefined;
}

async function processNotifications(config) {
	admin.initializeApp(config);

	let listRef = admin.database().ref("items").orderByChild("isActive").equalTo(true);
	let list = await getList(listRef);
	let notification = getNotification(list);
	if (notification) {
		let usersRef = admin.database().ref("users");
		let users = await getList(usersRef);
		let tokens = users
			.map(a => a.notificationToken)
			.filter(a => !!a);
		let numSuccesfullySentMessages = 0;
		if (tokens.length > 0) {
			console.log(`sending messages to ${tokens.length} devices...`)
			let resp = await admin.messaging().sendMulticast({
				notification: {
					title: notification.title,
					body: notification.message
				},
				tokens
			});
			console.log(`sent ${resp.successCount} messages`);
			numSuccesfullySentMessages = resp.successCount;
		}
		let updates = {};
		for (let item of notification.items) {
			updates[`${item.key}/lastNotification`] = item.spoilState;
		}
		await admin.database().ref("items").update(updates);
		return `successfully sent ${numSuccesfullySentMessages}/${tokens.length} messages`;
	}
	return "no notifications to send";
}

let app = express();

app.get("/process", async (_, res) => {
	let cert = getCert();
	let config = getConfig(cert);
	let result = await processNotifications(config);
	res.status(200).send(result);
});

app.listen(port, () => {
	console.log(`server started on port ${port}`);
});
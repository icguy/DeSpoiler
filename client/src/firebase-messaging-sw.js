// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
	apiKey: "AIzaSyAjQ8JgwxsESsW0FTIL3HMmj7DSqTqkUP0",
	authDomain: "despoiler-test.firebaseapp.com",
	projectId: "despoiler-test",
	storageBucket: "despoiler-test.appspot.com",
	messagingSenderId: "28456551983",
	appId: "1:28456551983:web:a1072e9103d21460ea28da"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

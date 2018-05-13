import * as moment from "moment";

export function getDaysUntil(date: moment.Moment): number {
	let originalDate = date.startOf("day");
	let now = moment().startOf("day");
	return originalDate.diff(now, "day");
}
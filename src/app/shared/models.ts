import * as moment from "moment";

export interface FoodItem {
	key: string;
	name: string;
	added: moment.Moment;
	expiresOn: moment.Moment;
	completed: boolean;
}

export interface User {
	username: string;
	key: string;
}
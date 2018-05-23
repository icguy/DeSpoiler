import * as moment from "moment";

export interface FoodItem {
	key: string;
	name: string;
	expiresOn: moment.Moment;
	completed: boolean;
}

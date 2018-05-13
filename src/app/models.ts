import * as moment from "moment";

export interface FoodItem {
	key: string | undefined;
	name: string;
	expiresOn: moment.Moment | undefined;
}

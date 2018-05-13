import { DbFoodItem } from "../db-models";
import { FoodItem } from "../models";
import * as moment from "moment";

export function fromDb(item: DbFoodItem): FoodItem {
	return {
		name: item.name,
		key: item.key,
		expiresOn: item.expiresOn ? moment(new Date(item.expiresOn)) : undefined
	};
}
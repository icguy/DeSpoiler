import { DbFoodItem } from "../db-models";
import { FoodItem } from "../models";
import * as moment from "moment";

export function fromDb(item: DbFoodItem): FoodItem {
	return {
		name: item.name,
		key: item.key,
		expiresOn: moment.unix(item.expiresOn)
	};
}

export function toDb(item: FoodItem): DbFoodItem {
	return {
		key: item.key,
		name: item.name,
		expiresOn: item.expiresOn.unix()
	};
}
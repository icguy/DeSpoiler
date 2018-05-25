import { DbFoodItem } from "../db-models";
import { FoodItem } from "../models";
import * as moment from "moment";

export function fromDb(item: DbFoodItem): FoodItem {
	return {
		name: item.name,
		key: item.key,
		added: moment.unix(item.added),
		expiresOn: moment.unix(item.expiresOn),
		completed: item.completed
	};
}

export function toDb(item: FoodItem): DbFoodItem {
	return {
		key: item.key,
		name: item.name,
		added: item.expiresOn.unix(),
		expiresOn: item.expiresOn.unix(),
		completed: item.completed
	};
}
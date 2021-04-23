import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabase, AngularFireList, QueryFn } from "@angular/fire/database";

export type WithKey<T> = T & {
	key: string;
};

export interface FoodItem {
	name: string;
	added: string;
	expires: string;
	isActive: boolean;
}

@Injectable()
export class DbService {
	constructor(private db: AngularFireDatabase) {

	}

	public getItems(filters?: { activeOnly?: boolean }): AngularFireList<FoodItem> {
		let query: QueryFn | undefined = filters?.activeOnly ? ref => ref.orderByChild("isActive").equalTo(true) : undefined;
		return this.db.list("/items", query);
	}
}
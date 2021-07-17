import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList, AngularFireObject, QueryFn } from "@angular/fire/database";
import { first } from "rxjs/operators";

export type WithKey<T> = T & {
	key: string;
};

export interface FoodItem {
	name: string;
	added: string;
	expires: string;
	isActive: boolean;
}

export interface UserInfo {
	readonly enabled: boolean;
	notificationTokens?: string[];
}

@Injectable()
export class DbService {
	constructor(private db: AngularFireDatabase) { }

	public getItems(filters?: { activeOnly?: boolean }): AngularFireList<FoodItem> {
		let query: QueryFn | undefined = filters?.activeOnly ? ref => ref.orderByChild("isActive").equalTo(true) : undefined;
		return this.db.list("/items", query);
	}

	public getItem(key: string): AngularFireObject<FoodItem> {
		return this.db.object(`/items/${key}`);
	}

	public async createItem(data: FoodItem): Promise<string> {
		let ref = await this.getItems().push(data);
		return ref.key!;
	}

	public async updateNotificationToken(token: string, userId: string): Promise<void> {
		let tokensList = await this.db.list<string>(`/users/${userId}/notificationTokens`);
		let tokens = await tokensList.valueChanges().pipe(first()).toPromise();
		if(!tokens.includes(token)) {
			await tokensList.push(token);
		}
	}
}
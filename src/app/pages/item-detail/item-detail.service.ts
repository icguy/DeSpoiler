import { Injectable } from "@angular/core";
import { FoodItemDbService } from "../../food-item-db.service";
import { Observable } from "rxjs";
import { FoodItem } from "../../models";
import { fromDb, toDb } from "../../utils/db-converter";


@Injectable()
export class ItemDetailService {
	constructor(
		private db: FoodItemDbService
	) {

	}

	public getItem(key: string): Observable<FoodItem | undefined> {
		return this.db.getItems()
			.map(items => items.find(it => it.key === key))
			.map(item => item ? fromDb(item) : undefined);
	}

	public deleteItem(key: string): Observable<void> {
		return this.db.deleteItem(key);
	}

	public createItem(item: FoodItem): Observable<string> {
		return this.db.addItem(toDb(item));
	}

	public updateItem(item: FoodItem): Observable<void> {
		return this.db.updateItem(toDb(item));
	}

	public completeItem(item: FoodItem): Observable<FoodItem> {
		let newItem: FoodItem = { ...item };
		newItem.completed = true;
		return this.db.updateItem(toDb(newItem)).switchMap(() => Observable.of(newItem));
	}
}
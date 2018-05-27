import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { fromDb, toDb } from "../../utils/db-converter";
import { FoodItemDbService } from "../../shared/food-item-db.service";
import { FoodItem } from "../../shared/models";


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
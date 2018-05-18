import { AngularFireDatabase } from "angularfire2/database";
import { Injectable } from "@angular/core";
import { FoodItem } from "../../models";
import { Observable } from "rxjs/Observable";
import { DbFoodItem } from "../../db-models";
import { FoodItemDbService } from "../../food-item-db.service";
import * as moment from "moment";
import { fromDb, toDb } from "../../utils/db-converter";

@Injectable()
export class ItemListService {

	constructor(
		private dbItems: FoodItemDbService
	) {
	}

	public getListStream(): Observable<FoodItem[]> {
		return this.dbItems.items
			.map(items => items.map(item => fromDb(item)));
	}

	public getList(): Observable<FoodItem[]> {
		return this.dbItems.getItems()
			.map(items => items.map(item => fromDb(item)));
	}

	public removeItem(key: string): Observable<void> {
		return this.dbItems.deleteItem(key);
	}

	public completeItem(item: FoodItem): Observable<void> {
		item.completed = true;
		return this.dbItems.updateItem(toDb(item));
	}
}

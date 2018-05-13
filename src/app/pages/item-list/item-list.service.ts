import { AngularFireDatabase } from "angularfire2/database";
import { Injectable } from "@angular/core";
import { FoodItem } from "../../models";
import { Observable } from "rxjs/Observable";
import { DbFoodItem } from "../../db-models";
import { FoodItemDbService } from "../../food-item-db.service";
import * as moment from "moment";
import { fromDb } from "../../utils/db-converter";

@Injectable()
export class ItemListService {

	constructor(
		private dbItems: FoodItemDbService
	) {
	}

	public getListStream(activeOnly: boolean): Observable<FoodItem[]> {
		return this.dbItems.items
			.map(items => items.map(item => fromDb(item)));
	}

	public getList(activeOnly: boolean): Observable<FoodItem[]> {
		return this.dbItems.getItems()
			.map(items => items.map(item => fromDb(item)));
	}

	public removeItem(key: string): Observable<void> {
		return this.dbItems.deleteItem(key);
	}
}

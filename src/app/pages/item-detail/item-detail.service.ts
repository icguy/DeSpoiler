import { Injectable } from "@angular/core";
import { FoodItemDbService } from "../../food-item-db.service";
import { Observable } from "rxjs";
import { FoodItem } from "../../models";
import { fromDb } from "../../utils/db-converter";


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
}
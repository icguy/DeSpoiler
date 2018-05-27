import { DbFoodItem } from "./db-models";
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { DbList } from "../db-list/db-list";

@Injectable()
export class FoodItemDbService extends DbList<DbFoodItem> {

	constructor(
		db: AngularFireDatabase
	) {
		super(db, "/items");
	}
}

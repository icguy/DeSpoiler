import { DbFoodItem } from "./db-models";
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { DbList } from "../db-list/db-list";
import { AuthService } from "./auth.service";

@Injectable()
export class FoodItemDbService extends DbList<DbFoodItem> {

	constructor(
		db: AngularFireDatabase,
		auth: AuthService
	) {
		if (auth.user)
			super(db, `${auth.user.username}/items`);
	}
}

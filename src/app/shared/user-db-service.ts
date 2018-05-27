import { DbFoodItem } from "./db-models";
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { DbList } from "../db-list/db-list";
import { User } from "./models";

@Injectable()
export class UserDbService extends DbList<User> {

	constructor(
		db: AngularFireDatabase
	) {
		super(db, "/users");
	}
}

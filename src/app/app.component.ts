import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase, AngularFireObject, AngularFireList } from "angularfire2/database";
import { FoodItem } from "./models";
import * as moment from "moment";
import { Observable } from "rxjs";
import { DbList } from "./db-list/db-list";
import { DbFoodItem } from "./db-models";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

	private dbItems: DbList<DbFoodItem>;

	constructor(
		private readonly db: AngularFireDatabase
	) {

	}

	public add(): void {
		this.dbItems.addItem({
			key: "",
			// expires: moment(new Date()).format("YYYY/MM/DD HH:mm:ss"),
			expires: new Date().getTime(),
			name: "asdf"
		});
	}

	public removeFirst(): void {
		this.dbItems.items.first().subscribe(items =>
			this.dbItems.deleteItem(items[0].key)
		);
	}

	public clear(): void {
		this.dbItems.clear();
	}

	public ngOnInit(): void {
		this.dbItems = new DbList(this.db, "/items");

		this.dbItems.items.subscribe(items => {
			console.log(items);
		});
	}
}

import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase, AngularFireObject, AngularFireList } from "angularfire2/database";
import { FoodItem } from "./models";
import * as moment from "moment";
import { Observable } from "rxjs";
import { DbFoodItem } from "./db-models";
import { FoodItemDbService } from "./food-item-db.service";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {


	constructor(
		private dbItems: FoodItemDbService
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
		this.dbItems.items.subscribe(items => {
			console.log(items);
		});
	}
}

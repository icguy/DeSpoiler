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
			// expiresOn: new Date().getTime(),
			// expiresOn: moment().add(this.randomInt(-5, 5), "days").unix(),
			expiresOn: moment().add(this.randomInt(30, 50), "seconds").unix(),
			added: moment().unix(),
			name: "asdf",
			completed: false
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



	public randomInt(min: number, max: number): number {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}


}

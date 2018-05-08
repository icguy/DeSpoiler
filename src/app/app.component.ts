import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase, AngularFireObject, AngularFireList } from "angularfire2/database";
import { FoodItem } from "./models";
import * as moment from "moment";
import { Observable } from "rxjs";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

	private dbItems: AngularFireList<FoodItem>;
	private asyncItems: Observable<any[]>;
	private items: FoodItem[];

	constructor(
		private readonly db: AngularFireDatabase
	) {

	}

	public add(): void {
		this.dbItems.push({
			goodUntil: moment(new Date()).format("YYYY/MM/DD HH:mm:ss")
		});
	}

	public removeFirst(): void {
		this.dbItems.remove(JSON.stringify(this.items[0]));
	}

	public clear(): void {
		this.db.database.ref("/items").set(null);
	}

	public ngOnInit(): void {
		this.dbItems = this.db.list<FoodItem>("/items");

		this.asyncItems = this.dbItems.snapshotChanges().map(changes => {
			console.log(changes);
			return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
		});
		this.asyncItems.subscribe();

		this.dbItems.valueChanges()
			.subscribe(val => {
				console.clear();
				val.forEach(v => console.log(v));
				this.items = val;
			});
	}
}

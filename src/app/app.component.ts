import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { Observable, of } from "rxjs";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
	title = "despoiler";
	list!: AngularFireList<string>;
	items: Observable<string[]> = of([]);

	constructor(private db: AngularFireDatabase) { }

	ngOnInit(): void {
		this.list = this.db.list<string>("v2");
		this.items = this.list.valueChanges();
	}

	add(text: string): void {
		this.list.push(text);
	}
}

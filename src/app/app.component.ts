import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
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

	username: string = "";
	password: string = "";
	userdata: Observable<any>;

	constructor(
		private db: AngularFireDatabase,
		private auth: AngularFireAuth
	) {
		this.userdata = auth.user;
		this.auth.user.subscribe((u) => console.log("user", u));
	}

	ngOnInit(): void {
		this.list = this.db.list<string>("v2");
		this.items = this.list.valueChanges();
	}

	add(text: string): void {
		this.list.push(text);
	}

	async login(): Promise<void> {
		await this.auth.signInWithEmailAndPassword(this.username, this.password);
	}
}

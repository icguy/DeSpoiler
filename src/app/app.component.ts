import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	constructor(
		private readonly db: AngularFireDatabase
	) {

	}

	ngOnInit(): void {
		let items = this.db.list("/items")
			.valueChanges()
			.subscribe(val =>
				console.log(val)
			);
	}
}

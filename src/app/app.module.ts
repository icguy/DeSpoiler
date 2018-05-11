import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";
import { ItemListService } from "./pages/item-list/item-list.service";
import { ItemListComponent } from "./pages/item-list/item-list.component";
import { FoodItemDbService } from "./food-item-db.service";

import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

const materialModules = [
	MatCardModule,
	MatButtonModule,
	MatIconModule
];

@NgModule({
	declarations: [
		AppComponent,
		ItemListComponent
	],
	imports: [
		BrowserModule,
		AngularFireModule.initializeApp(environment.firebase, "despoiler"),
		AngularFireDatabaseModule,
		...materialModules
	],
	providers: [
		ItemListService,
		FoodItemDbService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }

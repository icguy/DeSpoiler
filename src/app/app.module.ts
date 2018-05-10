import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";
import { ItemListService } from "./pages/item-list/item-list.service";
import { ItemListComponent } from "./pages/item-list/item-list.component";

@NgModule({
	declarations: [
		AppComponent,
		ItemListComponent
	],
	imports: [
		BrowserModule,
		AngularFireModule.initializeApp(environment.firebase, "despoiler"),
		AngularFireDatabaseModule
	],
	providers: [ItemListService],
	bootstrap: [AppComponent]
})
export class AppModule { }

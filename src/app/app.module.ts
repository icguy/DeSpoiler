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
import { AppRoutingModule } from "./app-routing.module";
import { ItemDetailComponent } from "./pages/item-detail/item-detail.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { ItemDetailService } from "./pages/item-detail/item-detail.service";
import { MatNativeDateModule } from "@angular/material/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const materialModules = [
	MatCardModule,
	MatButtonModule,
	MatIconModule,
	MatFormFieldModule,
	MatInputModule,
	MatDatepickerModule,
	MatNativeDateModule
];

@NgModule({
	declarations: [
		AppComponent,
		ItemListComponent,
		ItemDetailComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		AngularFireModule.initializeApp(environment.firebase, "despoiler"),
		AngularFireDatabaseModule,
		AppRoutingModule,
		...materialModules
	],
	providers: [
		ItemListService,
		ItemDetailService,
		FoodItemDbService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }

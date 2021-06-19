import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireMessagingModule, VAPID_KEY } from "@angular/fire/messaging";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { environment } from "../environments/environment";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemDetailComponent } from "./pages/item-detail/item-detail.component";
import { ItemListComponent } from "./pages/item-list/item-list.component";
import { LoginComponent } from "./pages/login/login.component";
import { AuthGuard } from "./shared/auth.guard";
import { AuthService } from "./shared/auth.service";
import { BusyService } from "./shared/busy.service";
import { DbService } from "./shared/db.service";
import { IconService } from "./shared/icon.service";

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		ItemListComponent,
		ItemDetailComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		FontAwesomeModule,
		ReactiveFormsModule,
		AppRoutingModule,
		AngularFireModule.initializeApp(environment.firebaseConfig),
		AngularFireMessagingModule,
		AngularFireDatabaseModule
	],
	providers: [
		{
			provide: VAPID_KEY,
			useValue: "BLEKb-9jgQZdfFx8ZX91IRYlSXBUpS-QxeudB90y64CAHUUnHZ_7aRII9MsmV3sZXGY4jLEKSD466r_dVCmF_X4"
		},
		AuthService,
		BusyService,
		IconService,
		AuthGuard,
		DbService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }

import { APP_INITIALIZER, Injectable, NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireMessaging, AngularFireMessagingModule, SERVICE_WORKER, VAPID_KEY } from "@angular/fire/messaging";
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

@Injectable()
export class AppInitService {
	constructor(private messaging: AngularFireMessaging) {

	}

	public async init(): Promise<void> {
		let registration = await navigator.serviceWorker.register("/DeSpoiler/firebase-messaging-sw.js");
		await this.messaging.useServiceWorker(registration);
	}
}

export function initApp(initService: AppInitService): () => Promise<void> {
	return () => initService.init();
}

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
			useValue: environment.fcmVapidKey
		},
		{
			provide: APP_INITIALIZER,
			useFactory: initApp,
			deps: [AppInitService],
			multi: true
		},
		AppInitService,
		AuthService,
		BusyService,
		IconService,
		AuthGuard,
		DbService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
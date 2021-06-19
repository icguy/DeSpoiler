import { Component } from "@angular/core";
import { BusyService } from "./shared/busy.service";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent {

	constructor(
		public readonly busy: BusyService
	) {
	}
}

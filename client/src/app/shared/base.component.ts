import { Directive, Injectable, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

@Directive()
// tslint:disable-next-line: directive-class-suffix
export abstract class BaseComponent implements OnDestroy {
	protected subscriptions: Subscription[] = [];

	ngOnDestroy(): void {
		this.subscriptions.forEach(s => s.unsubscribe());
	}
}
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { distinctUntilChanged, map, startWith, switchMap } from "rxjs/operators";
import { AuthService } from "../../shared/auth.service";
import { BaseComponent } from "../../shared/base.component";
import { DbService, FoodItem, WithKey } from "../../shared/db.service";
import { IconService } from "../../shared/icon.service";
import { StorageKeys } from "../../shared/storage-keys";

@Component({
	selector: "app-item-list",
	templateUrl: "./item-list.component.html",
	styleUrls: ["./item-list.component.scss"]
})
export class ItemListComponent extends BaseComponent implements OnInit, OnDestroy {

	public isMenuOpen = false;
	public activeOnlyControl: FormControl;
	public items: Observable<WithKey<FoodItem>[]> = of();

	constructor(
		public readonly icons: IconService,
		private auth: AuthService,
		private router: Router,
		private db: DbService
	) {
		super();
		this.activeOnlyControl = new FormControl(localStorage.getItem(StorageKeys.showActiveOnly) === "true");
	}

	public ngOnInit(): void {
		this.subscriptions.push(this.activeOnlyControl.valueChanges.subscribe(value => {
			localStorage.setItem(StorageKeys.showActiveOnly, value ? "true" : "false");
		}));

		this.items = this.activeOnlyControl.valueChanges.pipe(
			distinctUntilChanged(),
			startWith(this.activeOnlyControl.value),
			switchMap(value => {
				return this.db.getItems({ activeOnly: value }).snapshotChanges().pipe(
					map(changes => changes.map(a => ({ key: a.payload.key!, ...a.payload.val()! }))));
			})
		);
	}

	// public getExpiresText(item: FoodItem): string {
	// 	let days = getDaysUntil(item.expiresOn);
	// 	if (days === 0)
	// 		return "omg expires TODAY";
	// 	if (days > 0)
	// 		return `expires in ${days} days`;
	// 	return `expired ${-days} days ago`;
	// }

	// public getItemRoute(item: FoodItem): string {
	// 	return `/item`;
	// }

	// public getItemQueryParams(item: FoodItem): any {
	// 	return {
	// 		key: item.key
	// 	};
	// }

	// public deleteButtonClicked(item: FoodItem): void {
	// 	this.service.removeItem(item.key).subscribe();
	// }

	// public completedButtonClicked(item: FoodItem): void {
	// 	this.service.completeItem(item).subscribe();
	// }

	// public addButtonClicked(): void {
	// 	this.router.navigateByUrl("item");
	// }

	// public logoutClicked(): void {
	// 	this.auth.logout();
	// 	const baseHref = (document.getElementsByTagName('base')[0] || {}).href || "/";
	// 	location.href = baseHref;
	// }

	// public onFilterChange(change: MatSlideToggleChange): void {
	// 	this.activeOnly = !change.checked;
	// }

	// public getItemsFiltered(): FoodItem[] {
	// 	if (this.items)
	// 		return this.items.filter(it => !(this.activeOnly && it.completed));
	// 	return [];
	// }

	// public getColorClass(item: FoodItem): any {
	// 	if (item.completed)
	// 		return {};
	// 	else
	// 		return {
	// 			"mod-spoiling": this.isSpoiling(item),
	// 			"mod-spoiled": this.isSpoiled(item)
	// 		};
	// }

	// private isSpoiling(item: FoodItem): boolean {
	// 	if (item) {
	// 		let totalLifetime = item.expiresOn.diff(item.added);
	// 		let currentLifetime = moment().diff(item.added);
	// 		return currentLifetime * 1.0 / totalLifetime > Config.SpoilingRatio;
	// 	}
	// 	return false;
	// }

	// private isSpoiled(item: FoodItem): boolean {
	// 	return item && item.expiresOn.isBefore(moment());
	// }

	addItem(): void {
		this.router.navigate(["/", "detail"]);
	}

	async signOut(): Promise<void> {
		await this.auth.logout();
		this.router.navigate(["/", "login"]);
	}

	toggleMenu(): void { this.isMenuOpen = !this.isMenuOpen; }
}

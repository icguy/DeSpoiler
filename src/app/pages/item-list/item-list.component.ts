import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import * as dayjs from "dayjs";
import { Observable, of } from "rxjs";
import { distinctUntilChanged, map, startWith, switchMap } from "rxjs/operators";
import { AuthService } from "../../shared/auth.service";
import { BaseComponent } from "../../shared/base.component";
import { DbService, FoodItem, WithKey } from "../../shared/db.service";
import { IconService } from "../../shared/icon.service";
import { StorageKeys } from "../../shared/storage-keys";

const warningRatio = 0.6;

type SpoilState = "ok" | "warning" | "spoiled";

interface ListItem {
	key: string;
	name: string;
	isActive: boolean;
	spoilState: SpoilState;
	expiresText?: string;
}

@Component({
	selector: "app-item-list",
	templateUrl: "./item-list.component.html",
	styleUrls: ["./item-list.component.scss"]
})
export class ItemListComponent extends BaseComponent implements OnInit, OnDestroy {

	public isMenuOpen = false;
	public activeOnlyControl: FormControl;
	public items: Observable<ListItem[]> = of();

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
					map(changes => changes.map(a => {
						let item = a.payload.val()!;
						let added = dayjs(item.added);
						let expires = dayjs(item.expires);
						let result: ListItem = {
							key: a.payload.key!,
							name: item.name,
							isActive: item.isActive,
							spoilState: this.getSpoilState(added, expires),
							expiresText: this.getExpiresText(expires)
						};
						return result;
					})));
			})
		);
	}

	addItem(): void {
		this.router.navigate(["/", "detail"]);
	}

	async signOut(): Promise<void> {
		await this.auth.logout();
		this.router.navigate(["/", "login"]);
	}

	toggleMenu(): void { this.isMenuOpen = !this.isMenuOpen; }

	openDetails(item: ListItem): void {
		this.router.navigate(["/", "detail"], { queryParams: { key: item.key } });
	}

	async markComplete(item: ListItem): Promise<void> {
		this.db.getItems().update(item.key, { isActive: false });
	}

	private getSpoilState(added: dayjs.Dayjs, expires: dayjs.Dayjs): SpoilState {
		let now = dayjs();
		if (expires.isBefore(now))
			return "spoiled";

		let totalLifetime = expires.diff(added);
		let currentLifetime = now.diff(added);
		if (currentLifetime * 1.0 / totalLifetime > warningRatio)
			return "warning";

		return "ok";
	}

	private getExpiresText(expires: dayjs.Dayjs): string {
		let days = this.getDaysUntil(expires);
		if (days === 0)
			return "OMG expires TODAY";
		if (days > 0)
			return `expires in ${days} days`;
		return `expired ${-days} days ago`;
	}

	private getDaysUntil(date: dayjs.Dayjs): number {
		let originalDate = dayjs(date).startOf("day");
		let now = dayjs().startOf("day");
		return originalDate.diff(now, "day");
	}
}

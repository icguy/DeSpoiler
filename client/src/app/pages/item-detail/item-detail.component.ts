import { Component, OnDestroy, OnInit } from "@angular/core";
import { AngularFireObject } from "@angular/fire/database";
import { ActivatedRoute, Router } from "@angular/router";
import * as dayjs from "dayjs";
import { of } from "rxjs";
import { filter, map, switchMap } from "rxjs/operators";
import { BaseComponent } from "../../shared/base.component";
import { BusyService } from "../../shared/busy.service";
import { DbService, FoodItem } from "../../shared/db.service";
import { IconService } from "../../shared/icon.service";
import { ItemDetailForm } from "./item-detail-form";

interface ItemDetail {
	isActive: boolean;
	added: string;
}

@Component({
	templateUrl: "./item-detail.component.html",
	styleUrls: ["./item-detail.component.scss"]
})
export class ItemDetailComponent extends BaseComponent implements OnInit, OnDestroy {

	private ref: AngularFireObject<FoodItem> | undefined;
	public form: ItemDetailForm = new ItemDetailForm();
	public itemData: ItemDetail | undefined;
	public expiresInDaysView = true;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private busy: BusyService,
		public icons: IconService,
		private db: DbService
	) {
		super();
	}

	public ngOnInit(): void {
		this.subscriptions.push(
			this.route.queryParams.pipe(
				switchMap(params => {
					let key = params["key"];
					if (!key) {
						return of(undefined);
					}
					this.ref = this.db.getItem(key);
					return this.ref.valueChanges();
				}),
				filter(item => !!item),
				map(a => a!)
			)
				.subscribe(item => {
					this.itemData = {
						isActive: item.isActive,
						added: dayjs(item.added).format("YYYY. MM. DD.")
					};
					this.form.setData({
						expires: item.expires,
						name: item.name
					});
					this.form.markAsPristine();
				})
		);
	}

	public ngOnDestroy(): void {
		super.ngOnDestroy();
		this.form.destroy();
	}

	public toggleExpiresInDaysView(): void {
		this.expiresInDaysView = !this.expiresInDaysView;
	}

	public async reactivate(): Promise<void> {
		if (this.ref) {
			await this.busy.do(() => this.ref!.update({ isActive: true }));
		}
	}

	public back(): void {
		this.router.navigateByUrl("list");
	}

	public async deleteItem(): Promise<void> {
		if (this.ref) {
			await this.busy.do(() => this.ref!.remove());
			this.router.navigateByUrl("list");
		}
	}

	public async save(): Promise<void> {
		if (this.form.invalid) {
			return;
		}

		let formData = this.form.getData();
		if (this.ref) {
			await this.busy.do(() => this.ref!.update({
				name: formData.name,
				expires: formData.expires
			}));
		}
		else {
			await this.busy.do(() => this.db.createItem({
				name: formData.name,
				added: dayjs().format("YYYY-MM-DD"),
				expires: formData.expires,
				isActive: true,
			}));
		}

		this.router.navigate(["/", "list"]);
	}

	public async completeButtonClicked(): Promise<void> {
		if (this.ref) {
			await this.busy.do(() => this.ref!.update({
				isActive: false
			}));
		}
	}
}
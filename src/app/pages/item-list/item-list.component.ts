import { Component, OnInit } from "@angular/core";
import { ItemListService } from "./item-list.service";
import { FoodItem } from "../../models";
import { getDaysUntil } from "../../utils/date-helper";
import { Router } from "@angular/router";
import { MatSlideToggleChange } from "@angular/material/slide-toggle";
import * as moment from "moment";
import { Config } from "../../config";

@Component({
	selector: "app-item-list",
	templateUrl: "./item-list.component.html",
	styleUrls: ["./item-list.component.scss"]
})
export class ItemListComponent implements OnInit {

	public items: FoodItem[];
	private activeOnly: boolean = true;

	constructor(
		private service: ItemListService,
		private router: Router
	) {
	}

	public ngOnInit(): void {
		this.service.getListStream()
			.subscribe(items => this.items = items);
	}

	public getExpiresText(item: FoodItem): string {
		let days = getDaysUntil(item.expiresOn);
		if (days === 0)
			return "omg expires TODAY";
		if (days > 0)
			return `expires in ${days} days`;
		return `expired ${-days} days ago`;
	}

	public getItemRoute(item: FoodItem): string {
		return `/item`;
	}

	public getItemQueryParams(item: FoodItem): any {
		return {
			key: item.key
		};
	}

	public deleteButtonClicked(item: FoodItem): void {
		this.service.removeItem(item.key).subscribe();
	}

	public completedButtonClicked(item: FoodItem): void {
		this.service.completeItem(item).subscribe();
	}

	public addButtonClicked(): void {
		this.router.navigateByUrl("item");
	}

	public onFilterChange(change: MatSlideToggleChange): void {
		this.activeOnly = !change.checked;
	}

	public getItemsFiltered(): FoodItem[] {
		if (this.items)
			return this.items.filter(it => !(this.activeOnly && it.completed));
		return [];
	}

	public getColorClass(item: FoodItem): any {
		if (item.completed)
			return {};
		else
			return {
				"mod-spoiling": this.isSpoiling(item),
				"mod-spoiled": this.isSpoiled(item)
			};
	}

	private isSpoiling(item: FoodItem): boolean {
		if (item) {
			let totalLifetime = item.expiresOn.diff(item.added);
			let currentLifetime = moment().diff(item.added);
			return currentLifetime * 1.0 / totalLifetime > Config.SpoilingRatio;
		}
		return false;
	}

	private isSpoiled(item: FoodItem): boolean {
		return item && item.expiresOn.isBefore(moment());
	}
}

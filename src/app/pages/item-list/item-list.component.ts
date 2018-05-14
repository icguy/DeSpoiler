import { Component, OnInit } from "@angular/core";
import { ItemListService } from "./item-list.service";
import { FoodItem } from "../../models";
import { getDaysUntil } from "../../utils/date-helper";

@Component({
	selector: "app-item-list",
	templateUrl: "./item-list.component.html",
	styleUrls: ["./item-list.component.scss"]
})
export class ItemListComponent implements OnInit {

	public items: FoodItem[];

	constructor(private service: ItemListService) {
	}

	public ngOnInit(): void {
		this.service.getListStream(false)
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
}

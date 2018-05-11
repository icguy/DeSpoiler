import { Component, OnInit } from "@angular/core";
import { ItemListService } from "./item-list.service";
import { FoodItem } from "../../models";

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
		let days = item.expiresInDays;
		if (days === 0)
			return "omg expires TODAY";
		if (days > 0)
			return `expires in ${days} days`;
		return `expired ${-days} days ago`;
	}
}

import { Component, OnInit } from "@angular/core";
import { FoodItemDbService } from "../../food-item-db.service";
import { FoodItem } from "../../models";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { ItemDetailService } from "./item-detail.service";
import { ItemDetailForm } from "./item-detail-form";
import { FormBuilder } from "@angular/forms";


@Component({
	templateUrl: "./item-detail.component.html",
	styleUrls: ["./item-detail.component.scss"]
})
export class ItemDetailComponent implements OnInit {

	public item: FoodItem | undefined;
	public form: ItemDetailForm;

	constructor(
		private service: ItemDetailService,
		private route: ActivatedRoute,
		private router: Router,
		private fb:  FormBuilder
	) {
		this.item = {
			key: "asdf",
			expiresOn: undefined,
			name: "asdf"
		};

		this.form = new ItemDetailForm(fb);
	}

	public ngOnInit(): void {
		this.route.queryParams
			.switchMap(params => {
				let key = params["key"];
				if (key)
					return this.service.getItem(key);
				return Observable.of(undefined);
			})
			.subscribe(item => {
				this.item = item;
				this.form.setData(item);
			});
	}

	public backButtonClicked(): void {
		this.router.navigateByUrl("list");
	}
}
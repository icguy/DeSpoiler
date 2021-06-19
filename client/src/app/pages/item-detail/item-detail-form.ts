import { FormControl, FormGroup, Validators } from "@angular/forms";
import * as dayjs from "dayjs";
import { Subscription } from "rxjs";

export interface ItemFormData {
	name: string;
	expires: string;
}

export class ItemDetailForm extends FormGroup {

	private subscriptions: Subscription[];

	public get name(): FormControl { return this.controls["name"] as FormControl; }
	public get expiresDate(): FormControl { return this.controls["expiresDate"] as FormControl; }
	public get expiresInDays(): FormControl { return this.controls["expiresInDays"] as FormControl; }

	constructor() {
		let group = new FormGroup({
			["name"]: new FormControl("", Validators.required),
			["expiresDate"]: new FormControl(null, Validators.required),
			["expiresInDays"]: new FormControl(null, Validators.required),
		});

		super(group.controls, group.validator, group.asyncValidator);

		this.subscriptions = [];
		this.subscriptions.push(this.expiresDate.valueChanges.subscribe(value => this.updateExpiresInDays(value)));
		this.subscriptions.push(this.expiresInDays.valueChanges.subscribe(value => this.updateExpiresDate(value)));
	}

	public setData(value: ItemFormData): void {
		this.setValue({
			name: value.name,
			expiresInDays: this.getNumberFromDate(value.expires),
			expiresDate: value.expires
		});
	}
	public getData(): ItemFormData {
		return {
			name: this.name.value,
			expires: this.expiresDate.value
		};
	}

	public destroy(): void {
		for (let sub of this.subscriptions) {
			sub.unsubscribe();
		}
	}

	private updateExpiresInDays(value: any): void {
		if (typeof value === "string" && /\d{4}-\d{2}-\d{2}/.test(value)) {
			let diff = this.getNumberFromDate(value);
			if (this.expiresInDays.value !== diff)
				this.expiresInDays.setValue(diff);
		}
	}

	private updateExpiresDate(value: any): void {
		if (typeof value === "number") {
			let date = this.getDateFromNumber(value);
			if (this.expiresDate.value !== date) {
				this.expiresDate.setValue(date);
			}
		}
	}

	private getDateFromNumber(num: number): string {
		return dayjs().add(num, "days").format("YYYY-MM-DD");
	}

	private getNumberFromDate(date: string): number {
		let valDate = dayjs(date).startOf("day");
		let now = dayjs().startOf("day");
		let diff = Math.round(valDate.diff(now, "days"));
		return diff;
	}
}
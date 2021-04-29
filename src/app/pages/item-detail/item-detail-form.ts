import { FormControl, FormGroup, Validators } from "@angular/forms";

export interface ItemFormData {
	name: string;
	expires: string;
}

export class ItemDetailForm extends FormGroup {

	public get name(): FormControl { return this.controls["name"] as FormControl; }
	public get expiresOn(): FormControl { return this.controls["expires"] as FormControl; }

	constructor() {
		let group = new FormGroup({
			["name"]: new FormControl("", Validators.required),
			["expires"]: new FormControl(null, Validators.required),
		});

		super(group.controls, group.validator, group.asyncValidator);
	}

	public setData(value: ItemFormData): void { this.setValue(value); }
	public getData(): ItemFormData { return this.value; }
}
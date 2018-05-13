import { FormGroup, FormControl, AbstractControl, Validators, FormBuilder } from "@angular/forms";
import { FoodItem } from "../../models";

export class ItemDetailForm extends FormGroup {

	public readonly NameControlName: string = "NAME";
	public readonly ExpiresOnControlName: string = "EXPIRES_ON";

	public get nameControl(): AbstractControl { return this.controls[this.NameControlName]; }
	public get expiresOnControl(): AbstractControl { return this.controls[this.ExpiresOnControlName]; }

	private originalData: FoodItem;

	constructor(fb: FormBuilder) {
		super({});

		this.controls = {
			[this.NameControlName]: fb.control(["", Validators.required]),
			[this.ExpiresOnControlName]: fb.control(["", Validators.required])
		};
	}

	public setData(data: FoodItem): void {
		this.originalData = data;

		this.nameControl.setValue(data.name);
		this.expiresOnControl.setValue(data.expiresOn.toDate());
	}

	public getData(): FoodItem {
		return {
			key: this.originalData ? this.originalData.key : undefined,
			name: this.nameControl.value,
			expiresOn: this.expiresOnControl.value
		};
	}

	public markAsUntouched(): void {
		this.nameControl.markAsUntouched();
		this.expiresOnControl.markAsUntouched();
	}
}
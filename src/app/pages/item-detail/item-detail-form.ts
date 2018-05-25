import { FormGroup, FormControl, AbstractControl, Validators, FormBuilder } from "@angular/forms";
import { FoodItem } from "../../models";
import * as moment from "moment";

export class ItemDetailForm extends FormGroup {

	public static readonly NAME: string = "NAME";
	public static readonly EXPIRES_ON: string = "EXPIRES_ON";

	public get name(): AbstractControl { return this.controls[ItemDetailForm.NAME]; }
	public get expiresOn(): AbstractControl { return this.controls[ItemDetailForm.EXPIRES_ON]; }

	private originalData: FoodItem | undefined;

	constructor(fb: FormBuilder) {
		let group = fb.group({
			[ItemDetailForm.NAME]: ["", Validators.required],
			[ItemDetailForm.EXPIRES_ON]: ["", Validators.required]
		});

		super(group.controls, group.validator, group.asyncValidator);
	}

	public setData(data: FoodItem): void {
		this.originalData = data;

		this.name.setValue(data.name);
		this.expiresOn.setValue(data.expiresOn.toDate());
	}

	public getData(): FoodItem {
		return {
			key: this.originalData ? this.originalData.key : "",
			name: this.name.value,
			added: moment(),
			expiresOn: moment(this.expiresOn.value),
			completed: false
		};
	}

	public markAsUntouched(): void {
		this.name.markAsUntouched();
		this.expiresOn.markAsUntouched();
	}
}
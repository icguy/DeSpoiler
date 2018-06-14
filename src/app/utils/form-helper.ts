import { AbstractControl } from "@angular/forms";

export function traverseControls(control: AbstractControl, action: (control: AbstractControl) => void): void {
	action(control);
	let subControls = (<any>control).controls;
	if (subControls) {
		Object.values(subControls).forEach(sub => {
			if (sub instanceof AbstractControl)
				traverseControls(sub, action);
		});
	}
}
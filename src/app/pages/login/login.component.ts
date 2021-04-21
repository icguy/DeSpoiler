import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../shared/auth.service";
import { BusyService } from "../../shared/busy.service";

class LoginForm extends FormGroup {
	public get username(): FormControl { return this.controls.username as FormControl; }
	public get password(): FormControl { return this.controls.password as FormControl; }

	constructor() {
		super({
			username: new FormControl(""),
			password: new FormControl("")
		});
	}
}

@Component({
	styleUrls: ["./login.component.scss"],
	templateUrl: "./login.component.html"
})
export class LoginComponent {

	public form: LoginForm;

	constructor(
		private auth: AuthService,
		private router: Router,
		private busy: BusyService
	) {
		this.form = new LoginForm();
	}

	async login(): Promise<void> {
		let user = this.busy.do(() => this.auth.login(this.form.username.value, this.form.password.value));
		if (user) {
			this.router.navigate(["/"]);
		}
	}
}
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../shared/auth.service";
import { BaseComponent } from "../../shared/base.component";
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
export class LoginComponent extends BaseComponent implements OnInit {

	public form: LoginForm;

	constructor(
		private auth: AuthService,
		private router: Router,
		private busy: BusyService
	) {
		super();
		this.form = new LoginForm();
	}

	ngOnInit(): void {
		this.subscriptions.push(this.auth.user.subscribe(u => {
			if (u) {
				this.router.navigate(["/"]);
			}
		}));
	}

	login(): void {
		this.busy.do(() => this.auth.login(this.form.username.value, this.form.password.value));
	}
}
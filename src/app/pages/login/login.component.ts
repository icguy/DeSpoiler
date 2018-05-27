import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { AuthService } from "../../shared/auth.service";
import { Router } from "@angular/router";

@Component({
	styleUrls: ["./login.component.scss"],
	templateUrl: "./login.component.html"
})
export class LoginComponent {

	public usernameControl: FormControl;

	constructor(
		private auth: AuthService,
		private router: Router
	) {
		this.usernameControl = new FormControl("", Validators.required);
	}

	public onLoginClicked(): void {
		this.usernameControl.markAsTouched();
		if (this.usernameControl.valid) {
			this.auth.login(this.usernameControl.value)
				.subscribe(() => this.router.navigate(["/"]));
		}
	}
}
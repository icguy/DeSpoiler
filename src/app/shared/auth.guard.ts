import { AuthService } from "./auth.service";
import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(
		private auth: AuthService,
		private router: Router
	) {
	}

	public canActivate(): boolean {
		if (this.auth.user)
			return true;
		this.router.navigate(["/login"]);
		return false;
	}
}
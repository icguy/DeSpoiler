import { Injectable } from "@angular/core";
import { CanActivate, Router, UrlTree } from "@angular/router";
import { take } from "rxjs/operators";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(
		private auth: AuthService,
		private router: Router
	) {
	}

	async canActivate(): Promise<boolean | UrlTree> {
		let user = await this.auth.user.pipe(take(1)).toPromise();
		if (user)
			return true;
		return this.router.createUrlTree(["/login"]);
	}
}
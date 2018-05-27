import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "./models";
import { UserDbService } from "./user-db-service";

@Injectable()
export class AuthService {
	public user: User | undefined;

	constructor(
		private userDb: UserDbService
	) {

	}

	public login(username: string): Observable<User> {
		return this.userDb.getItems()
			.map(users => users.find(u => u.username === username))
			.switchMap(user => {
				if (user)
					return Observable.of(user);
				else
					return this.create({
						username: username,
						key: ""
					});
			});
	}

	public create(user: User): Observable<User> {
		return this.userDb.addItem(user)
			.map(key => ({
				...user,
				key: key
			}));
	}

	public logout(): void {
		this.user = undefined;
	}
}
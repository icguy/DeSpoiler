import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "./models";
import { UserDbService } from "./user-db-service";
import { Persistence } from "./persistence";

const USER_KEY = "DESPOILER_USER";

@Injectable()
export class AuthService {
	public get user(): User | undefined {
		return this._user || Persistence.getData<User>(USER_KEY);
	}

	private _user: User | undefined;

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
			})
			.do(user => {
				Persistence.setData(USER_KEY, user);
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
		this._user = undefined;
		Persistence.clearData(USER_KEY);
	}
}
import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import auth from "firebase";

@Injectable()
export class AuthService {

	private isPersistenceSet = false;

	public user = this.ngAuth.user;

	constructor(
		private ngAuth: AngularFireAuth
	) {

	}

	async login(username: string, password: string): Promise<auth.auth.UserCredential> {
		await this.setPersistence();
		return this.ngAuth.signInWithEmailAndPassword(username, password);
	}

	async logout(): Promise<void> {
		await this.setPersistence();
		await this.ngAuth.signOut();
	}

	private async setPersistence(): Promise<void> {
		if (!this.isPersistenceSet) {
			await this.ngAuth.setPersistence(auth.auth.Auth.Persistence.LOCAL);
			this.isPersistenceSet = true;
		}
	}
}
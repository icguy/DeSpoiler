import { Injectable } from "@angular/core";
import { faBars, faPlus, faSignOutAlt, faTimes } from "@fortawesome/free-solid-svg-icons";

@Injectable()
export class IconService {
	public readonly menu = faBars;
	public readonly close = faTimes;
	public readonly signOut = faSignOutAlt;
	public readonly add = faPlus;
}
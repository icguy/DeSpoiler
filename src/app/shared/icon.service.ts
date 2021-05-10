import { Injectable } from "@angular/core";
import { faArrowLeft, faBars, faCheck, faExclamationTriangle, faPlus, faSave, faSignOutAlt, faSwatchbook, faSync, faTimes } from "@fortawesome/free-solid-svg-icons";

@Injectable()
export class IconService {
	public readonly menu = faBars;
	public readonly close = faTimes;
	public readonly signOut = faSignOutAlt;
	public readonly add = faPlus;
	public readonly check = faCheck;
	public readonly warning = faExclamationTriangle;
	public readonly back = faArrowLeft;
	public readonly save = faSave;
	public readonly swap = faSync;
}
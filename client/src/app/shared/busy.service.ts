import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

@Injectable()
export class BusyService {

	public isBusy: Observable<boolean>;
	private _isBusy = new BehaviorSubject(false);

	private counter = 0;

	constructor(
	) {
		this.isBusy = this._isBusy.asObservable().pipe(distinctUntilChanged());
	}

	async do<T>(block: () => Promise<T>): Promise<T> {
		this.counter++;
		this.updateValue();
		this._isBusy.next(true);
		try {
			return await block();
		}
		finally {
			this.counter--;
			this.updateValue();
		}
	}

	private updateValue(): void {
		this._isBusy.next(this.counter > 0);
	}
}
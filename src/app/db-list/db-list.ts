import { Observable, Subject, BehaviorSubject } from "rxjs";
import { AngularFireList, AngularFireDatabase } from "angularfire2/database";
import { Injectable } from "@angular/core";

export interface DbItem {
	key: string;
}

export class DbList<T extends DbItem> {

	public itemsRef: AngularFireList<T>;
	public items: Observable<T[]>;

	constructor(db: AngularFireDatabase, path: string) {
		this.itemsRef = db.list(path);
		// Use snapshotChanges().map() to store the key
		const items = new BehaviorSubject<T[] | undefined>(undefined);

		this.itemsRef.snapshotChanges()
			.map(changes => changes.map(c => ({ ...c.payload.val(), key: c.payload.key, })))
			.subscribe(val => items.next(val), err => items.error(err));

		this.items = items.asObservable()
			.filter(it => it !== undefined)
			.map(it => it!);
	}

	public addItem(item: T): Observable<any> {
		const subj = new Subject<any>();
		this.itemsRef.push(item).then(val => subj.next(val), err => subj.error(err));
		return subj;
	}

	public updateItem(item: T): Observable<void> {
		return Observable.fromPromise(this.itemsRef.update(item.key, item));
	}

	public deleteItem(param: string | T): Observable<void> {
		let key: string = (<T>param).key;
		if (!key) {
			key = <string>param;
		}
		return Observable.fromPromise(this.itemsRef.remove(key));
	}

	public clear(): Observable<void> {
		return Observable.fromPromise(this.itemsRef.remove());
	}

	public getItems(): Observable<T[]> {
		return this.items.first();
	}
}

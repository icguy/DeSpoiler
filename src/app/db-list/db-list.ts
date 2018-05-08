import { Observable, Subject, BehaviorSubject } from "rxjs";
import { AngularFireList, AngularFireDatabase } from "angularfire2/database";

export interface DbItem {
	key: string;
}

export class DbList<T extends DbItem> {
	public itemsRef: AngularFireList<T>;
	public items: Observable<T[]>;
	constructor(db: AngularFireDatabase, path: string) {
		this.itemsRef = db.list(path);
		// Use snapshotChanges().map() to store the key
		const items = new BehaviorSubject<T[]>([]);

		this.itemsRef.snapshotChanges()
			.map(changes => {
				return changes.map(c => ({ ...c.payload.val(), key: c.payload.key, }));
			}).subscribe(val => items.next(val), err => items.error(err));

		this.items = items.asObservable();

	}
	public addItem(item: T): Observable<any> {
		const subj = new Subject<any>();
		this.itemsRef.push(item).then(val => subj.next(val), err => subj.error(err));
		return subj;
	}
	public updateItem(item: T): Promise<void> {
		return this.itemsRef.update(item.key, item);
	}
	public deleteItem(param: string | T): Promise<void> {
		let key: string = (<T>param).key;
		if (!key) {
			key = <string>param;
		}
		return this.itemsRef.remove(key);
	}
	public clear(): Promise<void> {
		return this.itemsRef.remove();
	}
	public getItems(): Observable<T[]> {
		return this.items.first();
	}
}

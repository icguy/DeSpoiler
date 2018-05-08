import { Observable, Subject } from "rxjs";
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
		this.items = this.itemsRef.snapshotChanges()
			.map(changes => {
				return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
			}).share();
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
		const key: string = (param as string) ? (param as string) : (param as T).key;
		return this.itemsRef.remove(key);
	}
	public deleteEverything(): Promise<void> {
		return this.itemsRef.remove();
	}
}

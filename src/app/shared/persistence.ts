export class Persistence {

	public static setData(key: string, data: any): void {
		localStorage.setItem(key, JSON.stringify(data));
	}

	public static getData<T>(key: string): T | undefined {
		try {
			let json = localStorage.getItem(key);
			if (json)
				return JSON.parse(json);
		} catch (error) {
			return undefined;
		}
	}

	public static clearData(key: string): void {
		localStorage.removeItem(key);
	}
}
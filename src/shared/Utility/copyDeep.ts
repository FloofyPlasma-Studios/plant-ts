/*
	Creates and returns a copy of the given table and any nested tables.
	If given a non-table type, it just returns the given value.
	Uses table.clone under the hood, which preserves metatables, but does not clone the metatable.
*/

export function copyDeep<T>(source: T): T {
	if (typeIs(source, "table")) {
		const copied = [...(source as [])];

		copied.forEach((value, key) => {
			if (typeIs(value, "table")) {
				copied[key] = copyDeep(value);
			}
		});

		return copied as T;
	} else {
		return source;
	}
}

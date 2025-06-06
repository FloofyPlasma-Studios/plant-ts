/**
 * Merges all arrays into one array, eliminating duplicate values
 */
export function mergeArraysUniqueOnly<T extends defined>(...args: T[][]): T[] {
	const results: T[] = [];

	for (const array of args) {
		for (const value of array) {
			if (!results.includes(value)) {
				results.push(value);
			}
		}
	}

	return results;
}

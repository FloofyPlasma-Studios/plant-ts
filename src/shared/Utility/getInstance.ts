/*
	Returns the instance corresponding with the given path of object names. Errors if this instance does not exist.

	Useful for accessing Instance trees generated at runtime. For example:

	const mast: Model = getInstance<Model>(rootInstance, "Ship", "Mast")
*/

export function getInstance<T extends Instance>(instance: Instance, ...path: string[]): T {
	for (const childName of path) {
		const child = instance.FindFirstChild(childName);
		assert(child, `${childName} is not a child of ${instance.GetFullName()}`);
		instance = child;
	}

	return instance as T;
}

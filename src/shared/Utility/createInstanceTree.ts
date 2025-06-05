/*
    This is an ugly hack to force TS to work with our object[property] = value syntax.
*/
type PropertiesTable<T extends Instance> = Partial<WritableInstanceProperties<T>>;
type MappedProperties<T extends Instance> = {
	[K in keyof WritableInstanceProperties<T>]: [K, WritableInstanceProperties<T>[K]];
}[keyof WritableInstanceProperties<T>];
type PairsResult<T extends Instance> = IterableFunction<LuaTuple<MappedProperties<T>>>;

/*
    Creates instances with given properties based on the given tree data table.
    This streamlines the tedious process of calling Instance.new and setting each property
    by creating a table of properties and a ClassName instead.
*/

export function createInstanceTree<T extends keyof CreatableInstances>(tree: {
	className: T;
	properties?: PropertiesTable<CreatableInstances[T]>;
	children?: Array<typeof tree>;
}): Instance {
	const object = new Instance(tree.className);

	if (tree.properties !== undefined) {
		for (const [property, value] of tree.properties as unknown as PairsResult<CreatableInstances[T]>) {
			assert(property !== "Parent", "Cannot set Parent as property through createInstanceTree");
			object[property] = value;
		}
	}

	if (tree.children !== undefined) {
		for (const childTree of tree.children) {
			const childObject = createInstanceTree<T>(childTree);
			childObject.Parent = object;
		}
	}

	return object;
}

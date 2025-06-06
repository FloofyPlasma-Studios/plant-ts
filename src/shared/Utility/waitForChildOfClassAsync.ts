/*
	Waits for a child to be added with the specified class, or returns one
	if it exists already.
*/

export function waitForChildOfClassAsync(instance: Instance, className: keyof Instances) {
	let child = instance.FindFirstChildOfClass(className);

	while (!child) {
		instance.ChildAdded.Wait();
		child = instance.FindFirstChildOfClass(className);
	}

	return child;
}

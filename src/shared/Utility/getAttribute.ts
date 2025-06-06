import { Attribute } from "shared/Constants/Attribute";

/*
	Returns the value of an attribute on an instance, erroring if the
	attribute doesn't exist. Normally, calling :GetAttribute() doesn't error,
	but in most cases, getting an attribute should only happen where it's guaranteed
	to exist, and we therefore want it to error.
*/

export function getAttribute<T>(instance: Instance, attributeName: keyof Attribute): T {
	const value = instance.GetAttribute(attributeName as string);
	assert(value !== undefined, `${attributeName as string} is not a valid attribute of ${instance.GetFullName()}`);

	return value as T;
}

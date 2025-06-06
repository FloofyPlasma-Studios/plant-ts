import { Attribute } from "shared/Constants/Attribute";

/**
 * 	Searches children of an instance, returning the first child containing an attribute
	matching the given name and value.
 */
export function findFirstChildWithAttribute(
	parent: Instance,
	attributeName: Attribute,
	attributeValue: defined,
): Instance | undefined {
	return parent.GetChildren().find((instance: Instance, index: number) => {
		return instance.GetAttribute(attributeName as string) === attributeValue;
	});
}

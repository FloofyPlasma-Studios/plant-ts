import { DoNotWeldTag } from "shared/Constants/CollectionServiceTag/DoNotWeldTag";
import { weldParts } from "./weldParts";

/**
 * Iterates over a model's descendants, welding all the BaseParts
 * to the model's PrimaryPart. Useful for welding models together at runtime.
 */
export function weldDescendantsToPrimaryPart(model: Model) {
	assert(model.PrimaryPart, `Cannot weld model missing primary part: ${model.GetFullName()}`);
	const primaryPart = model.PrimaryPart;

	model.GetDescendants().forEach((child) => {
		if (child.IsA("BasePart")) {
			// Avoid welding the primary part to itself
			if (child !== primaryPart) {
				// Developer can add a DoNotWeld tag to avoid an object being welded.
				// One case a developer may use this is if teh part already attached by another constraint
				if (!child.HasTag(DoNotWeldTag.DoNotWeld)) {
					weldParts(child, primaryPart);
					child.Anchored = false;
				}
			}
		}
	});
}

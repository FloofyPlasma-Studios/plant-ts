/**
 * Welds primaryPart to secondaryPart in place
 */
export function weldParts(primaryPart: BasePart, secondaryPart: BasePart) {
	const weld = new Instance("Weld");
	weld.Part0 = primaryPart;
	weld.Part1 = secondaryPart;
	weld.Parent = secondaryPart;

	return weld;
}

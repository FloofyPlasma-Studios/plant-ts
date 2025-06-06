/*
	Returns the height offset from the bottom of a character to the middle of its HumanoidRootPart
*/

export function getHumanoidRootPartOffset(humanoid: Humanoid) {
	const rootPart = humanoid.RootPart;
	assert(rootPart, "Humanoid has no RootPart set");

	return rootPart.Size.Y * 0.5 + humanoid.HipHeight;
}

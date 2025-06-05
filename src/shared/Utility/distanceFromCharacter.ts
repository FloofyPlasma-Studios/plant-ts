/*
	Returns the magnitude in studs of the distance between a player's character primary part
	and a Vector3 point

	Differs from Player.DistanceFromCharacter() by returning 'undefined' if the character doesn't exist,
	rather than an often undesired result of 0.
*/

export function distanceFromCharacter(player: Player, point: Vector3): number | undefined {
	if (player.Character === undefined || player.Character.PrimaryPart === undefined) {
		return undefined;
	}

	const character = player.Character as Model;
	const primaryPart = character.PrimaryPart as BasePart;

	const distance = primaryPart.Position.sub(point).Magnitude;
	return distance;
}

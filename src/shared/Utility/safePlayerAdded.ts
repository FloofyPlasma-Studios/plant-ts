/*
	Calls the given callback for all existing players in the game, and any that join thereafter.

	Useful in situations where you want to run code for every player, even players who are already in the game.
*/

import { Players } from "@rbxts/services";

export function safePlayerAdded(onPlayerAddedCallback: (player: Player) => undefined) {
	for (const player of Players.GetPlayers()) {
		task.spawn(onPlayerAddedCallback, player);
	}

	return Players.PlayerAdded.Connect(onPlayerAddedCallback);
}

import { OnStart } from "@flamework/core";
import { Component, BaseComponent } from "@flamework/components";
import { CharacterTag } from "shared/Constants/CollectionServiceTag/CharacterTag";
import { Players } from "@rbxts/services";

interface Attributes {}

const localPlayer = Players.LocalPlayer;

/**
 * Handles client-side effects for holding a pickup
 */
@Component({ tag: CharacterTag.Holding })
export class Holding extends BaseComponent<Attributes, Model> implements OnStart {
	onStart() {
		if (this.instance === localPlayer.Character) {
			this._onHoldingStarted();
		}
	}

	private _onHoldingStarted() {
		// TODO: Start holding animation
	}

	destroy(): void {
		// TODO: Stop holding animation
	}
}

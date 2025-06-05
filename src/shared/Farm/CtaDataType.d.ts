import Signal from "@rbxutil/signal";
import { EnumType } from "shared/Constants/CollectionServiceTag/TagEnumType";
import { PlayerDataKey } from "shared/Constants/PlayerDataKey";

export type PromptTriggeredCallback = (promptParent: Instance) => void;

export type PromptData = {
	properties?: {
		gamepadKeyCode?: Enum.KeyCode;
		keyboardKeyCode?: Enum.KeyCode;
		uiOffset?: Vector2;
	};
	functions: {
		getActionText: (promptParent: Instance) => string;
		getObjectText: (promptParent: Instance) => string;
		onTriggered: PromptTriggeredCallback;
	};
};

export type PromptIconData = { imageColor3: Color3; backgroundColor3: Color3; imageId: number };

export type CtaData = {
	tag: EnumType;
	listenToPlayerDataValues?: [PlayerDataKey];
	listenToTags?: [EnumType];
	listenToSignals: [RBXScriptSignal | Signal.Connection];
	iconData?: PromptIconData;
	promptData?: PromptData;
	shouldEnable?: (promptParent: Instance) => boolean;
};

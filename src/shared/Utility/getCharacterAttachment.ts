import { getInstance } from "./getInstance";

type RigType = "R6" | "R15";

type AttachmentLocations = {
	[attachmentName: string]: {
		[rig in RigType]: string;
	};
};

// There can be multiple attachments with the same name in a character.
// This table specifies exactly where to find the attachment point on the character
// given an attachment name. R6 and R15 characters have differently named parts, so
// we must include them both here.
const ATTACHMENT_LOCATIONS: AttachmentLocations = {
	LeftGripAttachment: { R6: "Left Arm", R15: "LeftHand" },
	LeftShoulderAttachment: { R6: "Left Arm", R15: "LeftUpperArm" },
	RightGripAttachment: { R6: "Right Arm", R15: "RightHand" },
	RightShoulderAttachment: { R6: "Right Arm", R15: "RightUpperArm" },
	BodyFrontAttachment: { R6: "Torso", R15: "UpperTorso" },
	BodyBackAttachment: { R6: "Torso", R15: "UpperTorso" },
	LeftCollarAttachment: { R6: "Torso", R15: "UpperTorso" },
	RightCollarAttachment: { R6: "Torso", R15: "UpperTorso" },
	NeckAttachment: { R6: "Torso", R15: "UpperTorso" },
	WaistCenterAttachment: { R6: "Torso", R15: "LowerTorso" },
	WaistFrontAttachment: { R6: "Torso", R15: "LowerTorso" },
	WaistBackAttachment: { R6: "Torso", R15: "LowerTorso" },
	FaceCenterAttachment: { R6: "Head", R15: "Head" },
	FaceFrontAttachment: { R6: "Head", R15: "Head" },
	HairAttachment: { R6: "Head", R15: "Head" },
	HatAttachment: { R6: "Head", R15: "Head" },
};

export function getCharacterAttachment(character: Model, attachmentName: string) {
	const locations = ATTACHMENT_LOCATIONS[attachmentName];
	assert(locations !== undefined, `Invalid attachmentName given: ${attachmentName}`);
	assert(character !== undefined, "Character does not exist");

	const humanoid: Humanoid = getInstance(character, "Humanoid");

	const parentPartName = locations[humanoid.RigType.Name];
	const parentPart: Instance = getInstance(character, parentPartName);

	const attachment: Attachment = getInstance(parentPart, attachmentName);

	return attachment;
}

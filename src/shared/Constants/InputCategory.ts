/**
 * 	Provides types that can be used to categorize groups of UserInputTypes.
 * For example, instead of checking against Gamepad1 .. Gamepad8, you can just check
 * if it's in the "Gamepad" category.
 *
 * This categorization logic is in InputCategorizer
 */
export enum InputCategory {
	KeyboardMouse,
	Gamepad,
	Touch,
	Other,
}

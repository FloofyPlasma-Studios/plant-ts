/**
 * Pseudo enums used as reasons for failure to compare by name rather than comparing
 * typo-prone strings.
 */
export enum ItemPurchaseFailureReason {
	InvalidItemCategory,
	InvalidItemId,
	InsufficientFunds,
}

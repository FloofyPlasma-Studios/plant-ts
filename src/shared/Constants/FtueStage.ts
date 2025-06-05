/**
 * Stages for a player's First Time User Experience (FTUE), used in the player's data to keep track of
 * FTUE state and elsewhere to show appropriate prompts and customize the world according to the stage
 */
export enum FtueStage {
	InFarm = "InFarm",
	SellingPlant = "SellingPlant",
	PurchasingSeed = "PurchasingSeed",
	PurchasingPot = "PurchasingPot",
	ReturningToFarm = "ReturningToFarm",
	Complete = "Complete",
}

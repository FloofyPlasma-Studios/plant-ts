/**
 * A source of truth list of all attributes used by scripts. Allows
 * scripts to reference attributes by name without typo-prone strings
 * that won't be caught until runtime.
 */
export enum Attribute {
	CurrentStage = "CurrentStage",
	StageNumber = "StageNumber",
	OnwerId = "OnwerId",
	FinishesGrowingAt = "FinishesGrowingAt",
	GrowTime = "GrowTime",
	Holding = "Holding",
	OriginalCollisionGroup = "OriginalCollisionGroup",
	ZoneId = "ZoneId",
	MaxPlantSize = "MaxPlantSize",
	HarvestValue = "HarvestValue",
	DescriptionLong = "DescriptionLong",
	DescriptionShort = "DescriptionShort",
	DisplayName = "DisplayName",
	PurchaseCost = "PurchaseCost",
	DeveloperProductId = "DeveloperProductId",
	CoinBundleSize = "CoinBundleSize",
	DoorOpenAngle = "DoorOpenAngle",
	DoorCloseAngle = "DoorCloseAngle",
	PlantId = "PlantId",
	PickupAttachmentName = "PickupAttachmentName",
}

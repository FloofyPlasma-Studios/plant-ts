/**
 * A source of truth list of all attributes used by scripts. Allows
 * scripts to reference attributes by name without typo-prone strings
 * that won't be caught until runtime.
 */
export enum Attribute {
	CurrentStage,
	StageNumber,
	OnwerId,
	FinishesGrowingAt,
	GrowTime,
	Holding,
	OriginalCollisionGroup,
	ZoneId,
	MaxPlantSize,
	HarvestValue,
	DescriptionLong,
	DescriptionShort,
	DisplayName,
	PurchaseCost,
	DeveloperProductId,
	CoinBundleSize,
	DoorOpenAngle,
	DoorCloseAngle,
	PlantId,
	PickupAttachmentName,
}

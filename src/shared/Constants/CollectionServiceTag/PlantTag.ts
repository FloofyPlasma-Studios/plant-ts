/**
 * CollectionService tags indicating state of plants,
 * used by CallToAction logic and water timer UI to determine UI visibility
 */
export enum PlantTag {
	NeedsWater,
	Growing,
	CanHarvest,
}

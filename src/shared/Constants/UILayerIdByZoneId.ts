import { ZoneIdTag } from "./CollectionServiceTag/ZoneIdTag";
import { UILayerId } from "./UILayerId";

/**
 * A mapping of ZoneIds to UILayers used for setting up zone connections to open corresponding shop UI
 */
export const UILayerByZoneId = {
	[ZoneIdTag.InShop]: UILayerId.SeedMarket,
	[ZoneIdTag.InGardenStore]: UILayerId.GardenStore,
};

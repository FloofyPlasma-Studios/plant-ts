import { ZoneIdTag } from "./CollectionServiceTag/ZoneIdTag";
import { UILayerId } from "./UILayerId";

export const UILayerByZoneId = {
	[ZoneIdTag.InShop]: UILayerId.SeedMarket,
	[ZoneIdTag.InGardenStore]: UILayerId.GardenStore,
};

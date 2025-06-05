import { AnalyticsService } from "@rbxts/services";
import { CustomAnalyticsEvent } from "./CustomAnalyticsEvent";

/**
 * Provides functions to track core game loop via custom events for analytics purposes.
 * This populates charts that show up in Creator Hub's analytics pages.
 * Examples of events that can be tracked here include:
 * - Player sold their harvest
 * - Player planted a seed
 * - Player watered a plant
 * - Player harvested a plant
 */
export namespace CustomAnalytics {
	export function logHarvestSold(player: Player, numSoldPlants: number) {
		task.spawn(() => {
			AnalyticsService.LogCustomEvent(player, CustomAnalyticsEvent.HarvestSold, numSoldPlants);
		});
	}

	export function logSeedPlanted(player: Player, potId: string, seedId: string) {
		task.spawn(() => {
			AnalyticsService.LogCustomEvent(player, CustomAnalyticsEvent.SeedPlanted, 1, {
				[Enum.AnalyticsCustomFieldKeys.CustomField01.Name]: potId,
				[Enum.AnalyticsCustomFieldKeys.CustomField02.Name]: seedId,
			});
		});
	}

	export function logPlantWatered(player: Player, plantId: string) {
		task.spawn(() => {
			AnalyticsService.LogCustomEvent(player, CustomAnalyticsEvent.PlantWatered, 1, {
				[Enum.AnalyticsCustomFieldKeys.CustomField01.Name]: plantId,
			});
		});
	}

	export function logPlantHarvested(player: Player, plantId: string) {
		task.spawn(() => {
			AnalyticsService.LogCustomEvent(player, CustomAnalyticsEvent.PlantHarvested, 1, {
				[Enum.AnalyticsCustomFieldKeys.CustomField01.Name]: plantId,
			});
		});
	}
}

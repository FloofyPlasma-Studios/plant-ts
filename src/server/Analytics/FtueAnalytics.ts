import { AnalyticsService } from "@rbxts/services";
import { FtueStage } from "shared/Constants/FtueStage";

/**
 * Maps each stage into a numeric value for analytics.
 *
 * NOTE: this is not the source of truth for FTUE stages and their order,
 * It should be kept up to date to reflect the stages and their order if they are changed.
 */
const FtueStageToStep = {
	[FtueStage.InFarm]: 1,
	[FtueStage.SellingPlant]: 2,
	[FtueStage.PurchasingSeed]: 3,
	[FtueStage.PurchasingPot]: 4,
	[FtueStage.ReturningToFarm]: 5,
	[FtueStage.Complete]: 6,
};

/**
 * Provides functions to track events related to the FTUE for analytics purposes.
 * This populates charts that show up in Creator Hub's analytics pages.
 *
 * Examples of events that can be tracked here include:
 * - Player reaches FtueStage to sell plants
 * - Player reaches FtueStage to purchase seeds
 * - Player reaches FtueStage to purchase a pot
 */
export namespace FtueAnalytics {
	export function logFtueStage(player: Player, ftueStage: FtueStage) {
		AnalyticsService.LogOnboardingFunnelStepEvent(player, FtueStageToStep[ftueStage], ftueStage, {});
	}
}

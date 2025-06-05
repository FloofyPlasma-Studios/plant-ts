import { AnalyticsService } from "@rbxts/services";
import { ItemCategory } from "shared/Constants/ItemCategory";
import { PlayerDataKey } from "shared/Constants/PlayerDataKey";

/**
 * Provides functions to track events related to the in-game economy for analytics purposes.
 * This populates charts that show up in Creator Hub's analytics pages.
 *
 * Examples of events that can be tracked here include:
 * - Player purchases a seed
 * - Player sells their harvest
 * - Player buys a Coin Bundle with Robux
 */
export namespace EconomyAnalytics {
	export function logHarvestSold(player: Player, plantId: string, endingBalance: number, amount: number) {
		AnalyticsService.LogEconomyEvent(
			player,
			Enum.AnalyticsEconomyFlowType.Source,
			PlayerDataKey.Coins,
			amount,
			endingBalance,
			Enum.AnalyticsEconomyTransactionType.Gameplay.Name,
			plantId,
			{ [Enum.AnalyticsCustomFieldKeys.CustomField01.Name]: ItemCategory.Plants },
		);
	}

	export function logItemPurchased(
		player: Player,
		itemId: string,
		itemCategory: ItemCategory,
		endingBalance: number,
		amount: number,
	) {
		AnalyticsService.LogEconomyEvent(
			player,
			Enum.AnalyticsEconomyFlowType.Sink,
			PlayerDataKey.Coins,
			amount,
			endingBalance,
			Enum.AnalyticsEconomyTransactionType.Gameplay.Name,
			itemId,
			{ [Enum.AnalyticsCustomFieldKeys.CustomField01.Name]: itemCategory },
		);
	}

	export function logBundlePurchased(
		player: Player,
		coinBundleId: string,
		bundleSize: number,
		endingBalance: number,
	) {
		AnalyticsService.LogEconomyEvent(
			player,
			Enum.AnalyticsEconomyFlowType.Source,
			PlayerDataKey.Coins,
			bundleSize,
			endingBalance,
			Enum.AnalyticsEconomyTransactionType.IAP.Name,
			coinBundleId,
			{ [Enum.AnalyticsCustomFieldKeys.CustomField01.Name]: ItemCategory.CoinBundles },
		);
	}
}

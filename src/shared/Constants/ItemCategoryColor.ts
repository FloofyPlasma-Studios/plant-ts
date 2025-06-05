import { ColorTheme } from "./ColorTheme";
import { ItemCategory } from "./ItemCategory";

type CategoryColorSchemeType = { Primary: Color3; Secondary: Color3 };
type ItemCategoryColorsType = { [key in ItemCategory]: CategoryColorSchemeType };

/**
 * A dictionary of primary and secondary colors associated with Item Categories.
 *
 * Used to determine the colors a given item's ListItems should have in a ListSelector
 */
export const ItemCategoryColor: ItemCategoryColorsType = {
	[ItemCategory.Plants]: {
		Primary: ColorTheme.Green,
		Secondary: ColorTheme.LightGreen,
	},
	[ItemCategory.Seeds]: {
		Primary: ColorTheme.Green,
		Secondary: ColorTheme.LightGreen,
	},
	[ItemCategory.Pots]: {
		Primary: ColorTheme.Orange,
		Secondary: ColorTheme.LightOrange,
	},
	[ItemCategory.Tables]: {
		Primary: ColorTheme.Orange,
		Secondary: ColorTheme.LightOrange,
	},
	[ItemCategory.Wagons]: {
		Primary: ColorTheme.Orange,
		Secondary: ColorTheme.LightOrange,
	},
	[ItemCategory.CoinBundles]: {
		Primary: ColorTheme.Orange,
		Secondary: ColorTheme.LightOrange,
	},
};

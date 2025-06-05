/*
	A mapping of ItemCategory to their container so that item lookups can
	be performed by item category and itemId
*/

import { ReplicatedStorage } from "@rbxts/services";

import { ItemCategory } from "./ItemCategory";
import { getInstance } from "shared/Utility/getInstance";

export const ContainerByCategory: { [key in ItemCategory]: Folder } = {
	[ItemCategory.Plants]: getInstance<Folder>(ReplicatedStorage, "Instances", "Plants"),
	[ItemCategory.Pots]: getInstance<Folder>(ReplicatedStorage, "Instances", "Pots"),
	[ItemCategory.Seeds]: getInstance<Folder>(ReplicatedStorage, "Instances", "Seeds"),
	[ItemCategory.Wagons]: getInstance<Folder>(ReplicatedStorage, "Instances", "Wagons"),
	[ItemCategory.Tables]: getInstance<Folder>(ReplicatedStorage, "Instances", "Tables"),
	[ItemCategory.CoinBundles]: getInstance<Folder>(ReplicatedStorage, "Instances", "CoinBundles"),
};

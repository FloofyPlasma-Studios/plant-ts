import { AnimationTag } from "./AnimationTag";
import { CharacterTag } from "./CharacterTag";
import { DoNotWeldTag } from "./DoNotWeldTag";
import { PlacementTag } from "./PlacementTag";
import { PlantTag } from "./PlantTag";
import { PlayerTag } from "./PlayerTag";
import { PotTag } from "./PotTag";
import { VisibleWhenVendorEnabledTag } from "./VisibleWhenVendorEnabledTag";
import { WagonTag } from "./WagonTag";
import { ZoneIdTag } from "./ZoneIdTag";
import { ZonePartTag } from "./ZonePartTag";

export type EnumType =
	| PlayerTag.Player
	| DoNotWeldTag.DoNotWeld
	| VisibleWhenVendorEnabledTag.VisibleWhenVendorEnabled
	| AnimationTag.AnimatedRoosterNPC
	| AnimationTag.AnimatedShopSymbol
	| PlacementTag.CanPlaceTable
	| PlacementTag.CanPlacePot
	| PlantTag.NeedsWater
	| PlantTag.Growing
	| PlantTag.CanHarvest
	| PotTag.CanPlant
	| PotTag.CanRemove
	| CharacterTag.Character
	| CharacterTag.Holding
	| CharacterTag.PullingWagon
	| WagonTag.CanPlace
	| WagonTag.WagonFull
	| WagonTag.WagonEmpty
	| WagonTag.Wagon
	| ZonePartTag.ZonePart
	| ZoneIdTag.InFarm
	| ZoneIdTag.InMarket
	| ZoneIdTag.InShop
	| ZoneIdTag.InGardenStore;

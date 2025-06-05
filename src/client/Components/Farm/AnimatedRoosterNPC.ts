import { OnStart } from "@flamework/core";
import { Component, BaseComponent } from "@flamework/components";
import { AnimationTag } from "shared/Constants/CollectionServiceTag/AnimationTag";
import { getInstance } from "shared/Utility/getInstance";
import { TweenService } from "@rbxts/services";

interface Attributes {}

const squashFactor = 1.1;
const animationTime = 0.6;
const squashScalar = new Vector3(squashFactor, 1 / squashFactor, squashFactor);

const random = new Random();

/**
 * Handles client-side squash animations for the rooster NPCs around the market
 *
 * Note: Typically, using an actual AnimationTrack would be preferred because it gives more flexibility
 * and is more performant than tweening properties. However, here we do the latter because this is a sample
 * project, and use of animations is restricted to only the uploader. Therefore, if we used the Roblox animation system,
 * the animations would not be available to anyone getting a standalone copy of this place.
 */
@Component({ tag: AnimationTag.AnimatedRoosterNPC })
export class AnimatedRoosterNPC extends BaseComponent<Attributes> implements OnStart {
	private _loopedAnimationTween?: Tween;

	onStart() {
		// Offset animations to add some variation across roosters
		task.delay(math.random() * animationTime, () => {
			this._startAnimation();
		});
	}

	private _startAnimation() {
		const mesh = getInstance<MeshPart>(this.instance, "Mesh");
		const tweenInfo = new TweenInfo(
			animationTime,
			Enum.EasingStyle.Back,
			Enum.EasingDirection.InOut,
			-1,
			true,
			random.NextNumber(1.5, 3),
		);
		const squashedMeshSize = mesh.Size.mul(squashScalar);

		const tween = TweenService.Create(mesh, tweenInfo, {
			Size: squashedMeshSize,
			CFrame: mesh.CFrame.mul(new CFrame(0, -mesh.Size.sub(squashedMeshSize).Y / 2, 0)),
		});
		tween.Play();
		this._loopedAnimationTween = tween;
	}

	destroy(): void {
		if (this._loopedAnimationTween) {
			this._loopedAnimationTween.Cancel();
		}
	}
}

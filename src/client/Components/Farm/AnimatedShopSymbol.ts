import { OnStart } from "@flamework/core";
import { Component, BaseComponent } from "@flamework/components";
import { AnimationTag } from "shared/Constants/CollectionServiceTag/AnimationTag";
import { TweenService } from "@rbxts/services";

interface Attributes {}

const animationTime = 3;
const offset = new CFrame(0, 2, 0);
const tweenInfo = new TweenInfo(animationTime, Enum.EasingStyle.Sine, Enum.EasingDirection.InOut, -1, true);

/**
 * Handles client-side floating animations for floating shop symbols
 */
@Component({ tag: AnimationTag.AnimatedShopSymbol })
export class AnimatedShopSymbol extends BaseComponent<Attributes, BasePart> implements OnStart {
	private _originalCFrame: CFrame;
	private _loopedAnimationTween?: Tween;

	constructor() {
		super();

		this._originalCFrame = this.instance.CFrame;
	}

	onStart() {
		this._startAnimation();
	}

	private _startAnimation() {
		const tween = TweenService.Create(this.instance, tweenInfo, {
			CFrame: this._originalCFrame.mul(offset).mul(CFrame.Angles(0, math.rad(180), 0)),
		});
		tween.Play();
		this._loopedAnimationTween = tween;
	}

	destroy(): void {
		this._loopedAnimationTween?.Cancel();

		this.instance.CFrame = this._originalCFrame;
	}
}

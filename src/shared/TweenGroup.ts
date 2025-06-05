/**
 * Links a group of tweens together, allowing them to be played, paused and canceled as one.
 *
 * Note TweenGroup does not support PlaybackState or Completed events.
 */
export class TweenGroup {
	private _tweens: Array<Tween>;

	constructor(...args: Tween[]) {
		this._tweens = [...args];
	}

	public play() {
		for (const tween of this._tweens) {
			tween.Play();
		}
	}

	public pause() {
		for (const tween of this._tweens) {
			tween.Pause();
		}
	}
	public cancel() {
		for (const tween of this._tweens) {
			tween.Cancel();
		}
	}
}

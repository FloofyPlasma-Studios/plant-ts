import { RunService } from "@rbxts/services";

/**
 * Given two attachments and a beam prefab, this class continuously orients duplicates of the attachments
 * to face each other so that the beam remains straight.
 *
 * Also provides an API to enable/disable the beam and its orientation updates.
 */
export class BeamBetween {
	private _attachment0: Attachment;
	private _attachment1: Attachment;
	private _beam: Beam;
	private _isEnabled: boolean;
	private _heartbeatConnection?: RBXScriptConnection;

	constructor(attachment0: Attachment, attachment1: Attachment, beamPrefab: Beam) {
		// Duplicate the given attachments to avoid modifyin the originals
		this._attachment0 = attachment0.Clone();
		this._attachment1 = attachment1.Clone();
		this._beam = beamPrefab.Clone();
		this._isEnabled = false;
		this._heartbeatConnection = undefined;

		this._setup(attachment0, attachment1);
	}

	private _setup(originalAttachment0: Attachment, originalAttachment1: Attachment) {
		// Set up the new attachments
		this._attachment0.Name = `BeamBetween_${originalAttachment0.Name}`;
		this._attachment0.Parent = originalAttachment0.Parent;

		this._attachment1.Name = `BeamBetween_${originalAttachment1.Name}`;
		this._attachment1.Parent = originalAttachment1.Parent;

		// Set up the new beam
		this._beam.Attachment0 = this._attachment0;
		this._beam.Attachment1 = this._attachment1;
		this._beam.Parent = this._attachment0;
	}

	private _enable() {
		this._beam.Enabled = true;
		this._isEnabled = true;

		this._heartbeatConnection = RunService.Heartbeat.Connect((_) => {
			this._update();
		});
	}

	private _disable() {
		this._beam.Enabled = false;
		this._isEnabled = false;

		if (this._heartbeatConnection) {
			this._heartbeatConnection.Disconnect();
		}
	}

	public setEnabled(isEnabled: boolean) {
		if (isEnabled === this._isEnabled) {
			return;
		}

		if (isEnabled) {
			this._enable();
		} else {
			this._disable();
		}
	}

	private _update() {
		this._attachment0.WorldCFrame = new CFrame(
			this._attachment0.WorldPosition,
			this._attachment1.WorldPosition,
		).mul(CFrame.Angles(0, 0, math.pi / 2));
		this._attachment1.WorldCFrame = new CFrame(
			this._attachment1.WorldPosition,
			this._attachment0.WorldPosition,
		).mul(CFrame.Angles(0, 0, -math.pi / 2));
	}

	public destroy() {
		if (this._heartbeatConnection) {
			this._heartbeatConnection.Disconnect();
		}

		this._beam.Destroy();
		this._attachment0.Destroy();
		this._attachment1.Destroy();
	}
}

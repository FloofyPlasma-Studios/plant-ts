/*
	Uses a RigidConstraint to attach secondaryAttachment to primaryAttachment
*/

export function rigidlyAttach(primaryAttachment: Attachment, secondaryAttachment: Attachment) {
	const rigidConstraint = new Instance("RigidConstraint");
	rigidConstraint.Attachment0 = primaryAttachment;
	rigidConstraint.Attachment1 = secondaryAttachment;
	rigidConstraint.Parent = secondaryAttachment.Parent;
	rigidConstraint.Enabled = true;

	return rigidConstraint;
}

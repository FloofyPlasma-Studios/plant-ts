export function moveModelByAttachment(model: Model, attachment: Attachment, targetCFrame: CFrame) {
	assert(
		model.PrimaryPart !== undefined,
		`moveModelByAttachment requires model to have a PrimaryPart. Model: ${model.GetFullName()}`,
	);
	model.PivotTo(targetCFrame.mul(attachment.CFrame.Inverse()));
}

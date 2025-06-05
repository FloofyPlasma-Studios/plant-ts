import { ReplicatedFirst, ReplicatedStorage } from "@rbxts/services";
import { getInstance } from "shared/Utility/getInstance";

const particlePrefab = getInstance<ParticleEmitter>(ReplicatedStorage, "Instances", "Particles", "SparklingStar");

/**
 * Plays a sparkling star animation over a given parent part's center. Remains
 * until destroyed externally.
 */
export function playSparklingStar(parent: BasePart) {
	const centerAttachment = new Instance("Attachment");
	centerAttachment.Name = "particleAttachment";

	const particles = particlePrefab.Clone();
	particles.Parent = centerAttachment;
	centerAttachment.Parent = parent;

	return particles;
}

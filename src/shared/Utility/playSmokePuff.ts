/*
	Plays a particle animation of a puff of smoke at the location, volume, and size of a given part.
*/

import { ReplicatedStorage, Workspace } from "@rbxts/services";
import { getInstance } from "./getInstance";

const particlePrefab: ParticleEmitter = getInstance(ReplicatedStorage, "Instances", "Particles", "SmokePuff");

const NUM_SMOKE_PARTICLES_PER_RADIUS_STUD = 2;
const BASE_PARTICLE_SIZE_PER_RADIUS_STUD = 0.2;
const END_PARTICLE_SIZE_MULTIPLIER = 2;

export function playSmokePuff(parent: BasePart) {
	// Clone the parent so the particles stay in the same place as when this function is called,
	// even if the parent gets moved (such as the wagon teleporting)
	// Ideally setting "LockToPart" on the particle to false would achieve the same thing, but by
	// the time these particles actually get created, the wagon has already moved unless we add an unwanted delay
	const dummyParent = parent.Clone();
	dummyParent.Anchored = true;
	dummyParent.ClearAllChildren();
	dummyParent.CanCollide = false;
	dummyParent.CanQuery = false;
	dummyParent.Transparency = 1;

	const particles = particlePrefab.Clone();
	particles.Parent = dummyParent;
	dummyParent.Parent = Workspace;

	const radius = parent.Size.Magnitude / 2;
	const numSmokeParticles = math.ceil(radius * NUM_SMOKE_PARTICLES_PER_RADIUS_STUD);
	const baseParticleSize = math.ceil(radius * BASE_PARTICLE_SIZE_PER_RADIUS_STUD);
	const particleSizeSequence = new NumberSequence(baseParticleSize, baseParticleSize * END_PARTICLE_SIZE_MULTIPLIER);
	particles.Size = particleSizeSequence;
	particles.Emit(numSmokeParticles);

	task.delay(particles.Lifetime.Max, () => {
		dummyParent.Destroy();
	});

	return particles;
}

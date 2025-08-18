---
title: Spawn Particle
parent: Snippets
layout: post
---

# Spawn Heart Particle at Coordinates(Pyjinn)

A simple Minescript/Pyjinn snippet that spawns a heart particle at the specified (x, y, z) coordinates in the Minecraft world using the Minecraft client’s particle system.

```python
Minecraft = JavaClass("net.minecraft.client.Minecraft")
ParticleTypes = JavaClass("net.minecraft.core.particles.ParticleTypes")

mc = Minecraft.getInstance()
mc.level.addParticle(ParticleTypes.HEART, x, y, z, 0.0, 0.0, 0.0) 
```
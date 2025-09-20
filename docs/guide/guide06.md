---
title: Guide06 – Damage Event
parent: Beginners Guide
layout: post
nav_order: 6
render_with_liquid: false
---

# Beginners Guide 06: Detecting Player Attacks on Mobs

This guide explains how to detect when **the local player attacks mobs** in Minecraft using Minescript.
We’ll build this step by step: start with a default debug, then filter skeletons, handle melee/projectiles, and finally track remaining health and kills.

---

## 🎥 YouTube

<iframe width="560" height="315" src="https://www.youtube.com/embed/RyYp23zCKKs?si=C80wwbBWD1xahm-r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## ❶ Default Damage Debug (All Events)

This debug version shows **all DAMAGE events** for inspection.
Good for getting a general overview before filtering or processing specific mobs.

```python
import minescript as m
from minescript import EventQueue, EventType

eq = EventQueue()
eq.register_damage_listener()

m.echo("⚡ Default DamageEvent debug mode: waiting for damage...")

while True:
    event = eq.get()
    if not event or event.type != EventType.DAMAGE:
        continue

    # Inspect all DAMAGE events
    m.echo(f"--- DAMAGE EVENT ---")
    m.echo(f"entity_uuid = {event.entity_uuid}")
    m.echo(f"cause_uuid  = {event.cause_uuid}")
    m.echo(f"source      = {event.source}")
    m.echo(f"full event  = {event.__dict__}")
```

---

## ❷ Melee Attacks Only

Detect **melee attacks** from the local player:

```python
import minescript as m
from minescript import EventQueue, EventType, player, entities

local_player = player()
local_uuid = local_player.uuid
m.echo(f"🗡 Melee damage listener active for {local_player.name}")

eq = EventQueue()
eq.register_damage_listener()

while True:
    event = eq.get()
    if not event or event.type != EventType.DAMAGE:
        continue

    # Only melee attacks
    if event.source != "player":
        continue

    if event.cause_uuid != local_uuid:
        continue

    mobs = entities(uuid=event.entity_uuid)
    if not mobs:
        continue

    mob = mobs[0]
    m.echo(f"🗡 You hit {mob.type} with a melee attack")
```

---

## ❸ Add Projectiles

Handle **both melee and ranged attacks**:

```python
import minescript as m
from minescript import EventQueue, EventType, player, entities

local_player = player()
local_uuid = local_player.uuid
m.echo(f"🏹 Damage listener active for {local_player.name} (melee + projectiles)")

eq = EventQueue()
eq.register_damage_listener()

while True:
    event = eq.get()
    if not event or event.type != EventType.DAMAGE:
        continue

    # Handle melee + projectiles
    if event.source not in ["player", "arrow", "trident"]:
        continue

    if event.cause_uuid != local_uuid:
        continue

    mobs = entities(uuid=event.entity_uuid)
    if not mobs:
        continue

    mob = mobs[0]
    m.echo(f"🎯 You damaged {mob.type} with {event.source}")
```

---

## ❹ Remaining HP & Kill Detection

Finally, track **remaining health** and detect **kills**:

```python
import minescript as m
from minescript import EventQueue, EventType, player, entities

local_player = player()
local_uuid = local_player.uuid
m.echo(f"⚔️ Damage listener active for {local_player.name} (HP & kill tracking)")

eq = EventQueue()
eq.register_damage_listener()

while True:
    event = eq.get()
    if not event or event.type != EventType.DAMAGE:
        continue

    if event.source not in ["player", "arrow", "trident"]:
        continue

    if event.cause_uuid != local_uuid:
        continue

    mobs = entities(uuid=event.entity_uuid)
    if not mobs:
        continue

    mob = mobs[0]
    hp = getattr(mob, "health", None)

    if hp is not None:
        if hp > 0:
            m.echo(f"⚔️ You hit {mob.type} (HP left: {hp})")
        else:
            m.echo(f"💀 You killed {mob.type}!")
    else:
        m.echo(f"⚔️ You hit {mob.type}")
```

---

```python
import minescript as m

# Netherite gear
m.execute('/item replace entity @p weapon.mainhand with minecraft:iron_sword')
m.execute('/item replace entity @p weapon.offhand with minecraft:shield')
m.execute('/item replace entity @p armor.head with minecraft:netherite_helmet')
m.execute('/item replace entity @p armor.chest with minecraft:netherite_chestplate')
m.execute('/item replace entity @p armor.legs with minecraft:netherite_leggings')
m.execute('/item replace entity @p armor.feet with minecraft:netherite_boots')

# Weapons & tools
weapons = [
    'minecraft:bow',
    'minecraft:crossbow',
    'minecraft:trident',
    'minecraft:flint_and_steel'
]
for w in weapons:
    m.execute(f'/give @p {w} 1')

# Arrows and tridents (extra supply)
m.execute('/give @p minecraft:arrow 64')
m.execute('/give @p minecraft:trident 3')

# Totem of Undying
m.execute('/give @p minecraft:totem_of_undying 1')

# Time & environment (always daytime)
m.execute('/time set day')
m.execute('/gamerule doDaylightCycle false')

# Buff effects
m.execute('/effect give @p minecraft:health_boost infinite 4 true')     # extra hearts
m.execute('/effect give @p minecraft:regeneration infinite 5 true')     # auto heal
m.execute('/effect give @p minecraft:saturation infinite 5 true')       # no hunger

m.echo("🔥 Netherite gear, infinite regen & no hunger mode granted!")
```

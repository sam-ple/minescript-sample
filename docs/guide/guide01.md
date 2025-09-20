---
title: Guide01 – TNT Underfoot
parent: Beginners Guide
layout: post
nav_order: 1
---

# Beginners Guide 01: TNT Underfoot Script in Minescript

This guide explains how to create a script that automatically places TNT under the player's feet in Minecraft using Minescript.

---

## 🎥 YouTube

<iframe width="560" height="315" src="https://www.youtube.com/embed/LZcl7ct3JTc?si=a57zJNJy0cunpxSk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## ❶ Goal

- Automatically place TNT under the player when standing on certain blocks.
- Needed features:
  1. Get the player's position.
  2. Convert coordinates to integers.
  3. Check the block below the player.
  4. Place TNT if the block matches target types (e.g., dirt or grass).
  5. Run continuously with debug messages.

---

## ❷ Running Scripts via Chat Commands

- Place your `.py` file inside the `/minescript` folder.
  - For example, if you have `trapfeet.py`, you can execute it using the chat command:
- To stop a running job, use:`\killjob {jobid}`
  - Examples:
    - Stop job with ID 1:`\killjob 1`
    - Stop all running jobs:`\killjob -1`

---

## ❸ Import Modules

- `minescript` → Minecraft interaction functions.
- `time` → for delays between checks.
- `math` → to use `math.floor()` for safe integer coordinates.

```python
import minescript as m
import time
import math
```

---

## ❹ Get Player Position (with integer coords)

- Always floor coordinates to integers.
- Ensures block operations are accurate.

```python
x, y, z = m.player_position()
# To accurately specify a block, it is safer to use math.floor().
# Using int() is fine for positive coordinates, but it can produce errors for negative coordinates.
x, y, z = math.floor(x), math.floor(y), math.floor(z)
m.echo(f"X={x}, Y={y}, Z={z}")
```

---

## ❺ Check the Block Below

- Use `getblock()` to check what's under the player.

```python
block_below = m.getblock(x, y-1, z)
m.echo(f"Block below is {block_below}")
```

---

## ❻ Place TNT (Basic)

- Spawns TNT at the block below the player.

```python
m.execute(f"setblock {x} {y-1} {z} minecraft:tnt")
m.echo(f"TNT placed underfoot at {x},{y-1},{z}")
```

---

## ❼ Place TNT with Block Check

- Uses `any()` to check against multiple target block types.
- Handles block states like `[snowy=true]`.

```python
TARGET_BLOCKS = ["minecraft:dirt", "minecraft:grass_block"]
# Since block_below is returned with properties, such as "minecraft:grass_block[snowy=true]",
# we determine the match using partial matching.
if any(target in block_below for target in TARGET_BLOCKS):
    m.execute(f"setblock {x} {y-1} {z} minecraft:tnt")
    m.echo(f"TNT placed underfoot at {x},{y-1},{z}")
```

---

## ❽ Continuous Loop

- Repeats the check every 0.1 seconds.
- Prevents CPU overuse.

```python
while True:
    # steps above
    time.sleep(0.1) # check every 0.1s
```

---

## ❾ Wrap into a Function

- Encapsulates logic for reusability.

```python
def place_tnt_underfoot():
    while True:
        x, y, z = m.player_position()
        x, y, z = math.floor(x), math.floor(y), math.floor(z)

        block_below = m.getblock(x, y-1, z)

        TARGET_BLOCKS = ["minecraft:dirt", "minecraft:grass_block"]
        if any(target in block_below for target in TARGET_BLOCKS):
            m.execute(f"setblock {x} {y-1} {z} minecraft:tnt")
            m.echo(f"TNT placed underfoot at {x},{y-1},{z}")

        time.sleep(0.1) 
```

---

## ❿ Simple Standalone Execution

- Works fine if this script is only run directly.

```python
m.echo("TNT underfoot activated!")
place_tnt_underfoot()
```

---

## ⓫ Safe Version with `if __name__ == "__main__"`

- Runs only when executed directly, not when imported.

```python
if __name__ == "__main__":
    m.echo("TNT underfoot activated!")
    place_tnt_underfoot()
```

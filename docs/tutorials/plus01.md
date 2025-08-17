---
title: Minescript Plus 01 – Extended Add-on Features
parent: Tutorials
layout: post
nav_order: 3
---

# Minescript Plus 01 – Extended Add-on Features

---

## Requirements

- `minescript_plus` must be installed or placed in the same directory as your script.
- This script systematically tests the features of `minescript_plus`, an enhancement module for Minescript.
- [https://github.com/R4z0rX/minescript-scripts/tree/main/Minescript-Plus](https://github.com/R4z0rX/minescript-scripts/tree/main/Minescript-Plus)
- It demonstrates utilities such as `Gui`, `Inventory`, `Player`, and `World`.
- Environment: MC 1.21.8 / MS 5.0b1 / MS+ 0.09a / Python / Fabric

---

## 🎥 YouTube

<iframe width="560" height="315" src="https://www.youtube.com/embed/QgGKprEDn5Q?si=PRlKBACAPom-mM_S&amp;start=31" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 1. Title & Subtitle Display

```python
import minescript as m
from minescript_plus import Gui
import time

Gui.set_title("Main Title")
Gui.set_subtitle("This is the subtitle")
time.sleep(2)
```

---

## 2. Actionbar Test

```python
import minescript as m
from minescript_plus import Gui
import time

Gui.set_actionbar("This is an actionbar test!")
time.sleep(2)
```

---

## 3. Check for Diamond in Player Inventory

```python
import minescript as m
from minescript_plus import Inventory
import time

slot = Inventory.find_item("minecraft:diamond")
if slot is not None:
    m.echo(f"✅ Diamond found in inventory! Slot: {slot}")
else:
    m.echo("❌ No diamond found in inventory.")
time.sleep(2)
```

---

## 4. Search for Diamond in Chest

```python
import minescript as m
from minescript_plus import Inventory
import time

# Try to open the chest in front and search for "minecraft:diamond"
slot = Inventory.find_item("minecraft:diamond", container=True, try_open=True)
if slot is not None:
    m.echo(f"✅ Found diamond in chest! Slot: {slot}")
else:
    m.echo("❌ No diamond found in chest.")
time.sleep(2)
```

---

## 5. Read Text from Targeted Sign

```python
import minescript as m
from minescript_plus import World
import time

sign_text = World.get_targeted_sign_text()
if sign_text:
    m.echo("Sign front lines:")
    for line in sign_text[:4]:
        m.echo(line)
    m.echo("Sign back lines:")
    for line in sign_text[4:]:
        m.echo(line)
else:
    m.echo("No sign targeted.")
time.sleep(2)
```

---

## 6. Player Information

```python
import minescript as m
from minescript_plus import Player
import time

latency = Player.get_latency()
game_mode = Player.get_game_mode()
is_creative = Player.is_creative()
is_survival = Player.is_survival()
skin_url = Player.get_skin_url()
food_level = Player.get_food_level()
saturation_level = Player.get_saturation_level()

m.echo(f"Latency: {latency} ms")
m.echo(f"Game Mode: {game_mode}")
m.echo(f"In Creative Mode? {is_creative}")
m.echo(f"In Survival Mode? {is_survival}")
m.echo(f"Skin URL: {skin_url}")
m.echo(f"Food Level: {food_level}")
m.echo(f"Saturation Level: {saturation_level}")
time.sleep(2)
```

---

## 7. World Information

```python
import minescript as m
from minescript_plus import World
import time

raining = World.is_raining()
thundering = World.is_thundering()
hardcore = World.is_hardcore()
difficulty = World.get_difficulty()
spawn_pos = World.get_spawn_pos()
game_time = World.get_game_time()
day_time = World.get_day_time()

m.echo(f"Raining? {raining}")
m.echo(f"Thundering? {thundering}")
m.echo(f"Hardcore World? {hardcore}")
m.echo(f"Difficulty: {difficulty}")
m.echo(f"Spawn Position: {spawn_pos}")
m.echo(f"Game Time (ticks): {game_time}")
m.echo(f"Day Time (ticks): {day_time}")
time.sleep(2)
```

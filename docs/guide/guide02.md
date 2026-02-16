---
title: Guide02 – Backhome
parent: Beginners Guide
layout: post
nav_order: 2
---

# Beginners Guide 02: Backhome Script in Minescript

This guide shows how to detect mouse clicks, key presses, held items, and their combinations in Minescript.
Each section includes example code and the expected behavior.

---

## 🎥 YouTube

<iframe width="560" height="315" src="https://www.youtube.com/embed/EQtkeupcTdE?si=ofca-s01ELVn2oO9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## ❶ Goal

- Automatically teleport the player to a saved "home" location.
- Needed features:
  1. Get the player's current position as the home coordinates.
  2. Give the player a clock (used as a trigger item).
  3. Detect when the player is holding the clock in the main hand.
  4. Detect when the player releases the Left Shift key while holding the clock.
  5. Teleport the player to the saved home coordinates when the above combination occurs.
  6. Display debug messages to confirm the detection and teleport action.

---

## ❷ Detect Held Items (Main/Off Hand)

- Expected output:
  - `"Holding <item> in main hand"` if an item is in the main hand.
  - `"Holding <item> in off hand"` if an item is in the off hand.

```python
import minescript as m

hands = m.player_hand_items()

# Main hand
if hands.main_hand:
    main_item = hands.main_hand.get('item', 'minecraft:air') if isinstance(hands.main_hand, dict) else str(hands.main_hand)
    if main_item != "minecraft:air":
        m.echo(f"Item in main hand: {main_item}")
    else:
        m.echo("Main hand is empty")
else:
    m.echo("Main hand is empty")

# Off hand
if hands.off_hand:
    off_item = hands.off_hand.get('item', 'minecraft:air') if isinstance(hands.off_hand, dict) else str(hands.off_hand)
    if off_item != "minecraft:air":
        m.echo(f"Item in off hand: {off_item}")
    else:
        m.echo("Off hand is empty")
else:
    m.echo("Off hand is empty")
```

<!--
```python
import minescript as m

# Use legacy dict format
m.options.legacy_dict_return_values = True
hands = m.player_hand_items()

# Main hand
if hands.get("main_hand"):
    m.echo(f"Item in main hand: {hands['main_hand']['item']}")
else:
    m.echo("Main hand is empty")

# Off hand
if hands.get("off_hand"):
    m.echo(f"Item in off hand: {hands['off_hand']['item']}")
else:
    m.echo("Off hand is empty")
```
-->

---

## ❸ Detect Left & Right Clicks

- Mouse events:
  - `EventType.MOUSE`
- Buttons:
  - `0` → Left Click
  - `1` → Right Click
- Actions:
  - `0` → Released
  - `1` → Pressed
  - `2` → Held
- Expected output:
  - `"Left click pressed"` when left-clicking.
  - `"Right click pressed"` when right-clicking.

```python
import minescript as m
from minescript import EventQueue, EventType

with EventQueue() as eq:
    eq.register_mouse_listener()
    
    while True:
        event = eq.get()
        
        if event.type == EventType.MOUSE:
            # Left Click Pressed
            if event.button == 0 and event.action == 1:
                m.echo("Left click pressed")
            # Right Click Pressed
            elif event.button == 1 and event.action == 1:
                m.echo("Right click pressed")
```

---

## ❹ Detect Key

- Key events:
  - `EventType.KEY`
- Key codes:
  - `340` → Left Shift
  - `301` → F12
- Actions:
  - `0` → Released
  - `1` → Pressed
- Expected output:
  - `"Left shift key pressed"` / `"Left shift key released"`
  - `"F12 key pressed"` / `"F12 key released"`

```python
import minescript as m
from minescript import EventQueue, EventType

with EventQueue() as eq:
    eq.register_key_listener()
    
    while True:
        event = eq.get()
        
        # Left Shift Key
        if event.type == EventType.KEY and event.key == 340 and event.action == 1:
            m.echo("Left shift key pressed")
        elif event.type == EventType.KEY and event.key == 340 and event.action == 0:
            m.echo("Left shift key released")
        
        # F12 Key
        elif event.type == EventType.KEY and event.key == 301 and event.action == 1:
            m.echo("F12 key pressed")
        elif event.type == EventType.KEY and event.key == 301 and event.action == 0:
            m.echo("F12 key released")
```

---

## ❺ Detect Combination (Main Hand + Left Shift)

- Expected output:
  - `"Holding clock in main hand + left shift released"` when holding a clock in the main hand and releasing Left Shift.

```python
import minescript as m
from minescript import EventQueue, EventType

with EventQueue() as eq:
    eq.register_key_listener()
    
    while True:
        event = eq.get()
        
        hands = m.player_hand_items()
        main_hand = getattr(hands, "main_hand", None)

        # Safely retrieve the item in the main hand
        if isinstance(main_hand, dict):
            main_item = main_hand.get("item")
        else:
            # main_hand may also be a string, so convert to str() for comparison
            main_item = str(main_hand) if main_hand is not None else None
        
        # Combination: Holding a clock in main hand + Left Shift released
        # if main_hand_item == "minecraft:clock":
        if  "minecraft:clock" in main_hand_item:
            if event.type == EventType.KEY and event.key == 340 and event.action == 0:
                m.echo("Holding minecraft:clock in main hand + left shift released")
```

---

## ❻ Backhome Script Example

```python
import minescript as m
from minescript import EventQueue, EventType
import math

# Give the player a clock for testing
m.execute("give @p minecraft:clock 1")

# Record current player position (block coordinates)
x, y, z = m.player_position()
x, y, z = math.floor(x), math.floor(y), math.floor(z)
m.execute(f"setblock {x} {y-1} {z} gold_block")

def backhome():
    m.echo("Hold a clock and release Left Shift to teleport home!")

    with EventQueue() as eq:
        eq.register_key_listener()

        while True:
            event = eq.get()

            # Get hand items safely
            hands = m.player_hand_items()
            main_hand_item = None
            if hands and hands.main_hand:
                if isinstance(hands.main_hand, dict):
                    main_hand_item = hands.main_hand.get("item", None)
                else:
                    main_hand_item = str(hands.main_hand)

            # Check: main hand holds a clock + Left Shift released (action == 0)
            # if main_hand_item == "minecraft:clock":
            if  "minecraft:clock" in main_hand_item:
                if event.type == EventType.KEY and event.key == 340 and event.action == 0:
                    m.execute(f"tp @p {x} {y} {z}")
                    m.echo("Teleported home because holding a clock + left shift released")

if __name__ == "__main__":
    backhome()
```

<!--
```python
import minescript as m
from minescript import EventQueue, EventType
import math
import time

# Give the player a clock for testing
m.execute("give @p minecraft:clock 1")

# Record current player position (block coordinates)
x, y, z = m.player_position()
x, y, z = math.floor(x), math.floor(y), math.floor(z)
m.execute(f"setblock {x} {y-1} {z} gold_block")

def backhome():
    m.echo("Hold a clock and release Left Shift to teleport home!")

    # Use legacy dict return to reliably read hand items
    m.options.legacy_dict_return_values = True

    with EventQueue() as eq:
        eq.register_key_listener()

        prev_event_hand = None

        while True:
            event = eq.get()

            # Get hand items
            hands = m.player_hand_items()
            main_hand_item = hands.get("main_hand", {}).get("item", "")

            # Check: main hand holds a clock + Left Shift released (key 340)
            if main_hand_item == "minecraft:clock":
                if event.type == EventType.KEY and event.key == 340 and event.action == 0:
                    m.execute(f"tp @p {x} {y} {z}")
                    m.echo("Teleported home because holding a clock + left shift released")

if __name__ == "__main__":
    backhome()
```
-->

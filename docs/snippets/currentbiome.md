---
title: Current Biome
parent: Snippets
layout: post
---

# Display Current Biome in Chat(Pyjinn)

A simple Minescript script that fetches the biome the player is currently in and displays its name in the chat. Can be run once or periodically by uncommenting the interval.

```python
#!python
from minescript import *

# Import necessary Java classes
MCClient = JavaClass("net.minecraft.client.Minecraft")
BlockPos = JavaClass("net.minecraft.core.BlockPos")

# Get the instance of the Minecraft client
client = MCClient.getInstance()

def fetch_current_biome_name():
    """
    Returns the name of the biome the player is currently in as a string
    """
    # Get the player's position (as a BlockPos object)
    player_pos = client.player.blockPosition()

    # Get the biome information at the current position
    biome_holder = client.level.getBiome(player_pos)

    # Get the biome key and convert it to a string
    biome_key = biome_holder.unwrapKey().get()
    biome_name = biome_key.location().toString()

    return biome_name

def show_biome_once():
    """
    Display the current biome name in chat only once
    """
    biome = fetch_current_biome_name()
    echo(f"Biome: {biome}")

# Execute
show_biome_once()

# set_interval(show_biome_once, 1000)
```
---
title: Custom HUD
parent: Crocado
layout: post
---

# Custom HUD

This script provides a customizable **in-game HUD overlay** for Minecraft using Minescript and Pyjinn, displaying player position, biome, facing direction, nearby entities/blocks, and version information. It also includes clickable buttons for toggling and stopping the HUD.

> **@RazrCraft**, **@julianislost**, and **@reeliikcs** for their contributions and inspiration on this HUD script!

---

## 🎬 YouTube Demo

<iframe width="560" height="315" src="https://www.youtube.com/embed/eRIjfMdc_X0?si=lqpz8Ms9i_0ww1DJ&amp;start=31" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 🧩 Code

[https://github.com/sam-ple/minescript-scripts/blob/main/customhud.pyj](https://github.com/sam-ple/minescript-scripts/blob/main/customhud.pyj)

[https://github.com/sam-ple/minescript-scripts/blob/92a04dcd99a4b6ee464b84eec379c663cf367e52/customhud.pyj#L1-L219:embed:lang=python:h400]

---

## ✨ Features

* **Live Version Info**
  Displays Minecraft, Minescript, Fabric loader, and Pyjinn version like:
  `VersionInfo : MC 1.21.8 / MS 5.0b1 / Fabric / Pyjinn 0.5 [Java 21.0.3]`

* **Position & Biome**
  Shows your current coordinates and biome name.

* **Direction & Orientation**
  Displays yaw and pitch for precise navigation.

* **Target Info**

  * Block: name of the block you're looking at
  * Mob: name of the targeted entity
  * Main/Off-hand item names

* **Toggle HUD with F12**
  Instantly show/hide the HUD overlay.

* **Clickable Buttons**

  * `POS`: toggles position display (green when ON, red when OFF)
  * `STOP`: stops the HUD and kills the script

---

## 🖱️ Controls

| Input         | Action                          |
| ------------- | ------------------------------- |
| `F12` key     | Toggle HUD visibility           |
| `POS` button  | Enable/disable position display |
| `STOP` button | Terminate the script safely     |



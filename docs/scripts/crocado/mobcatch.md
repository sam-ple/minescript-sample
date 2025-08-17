---
title: Mob Catcher
parent: Crocado
layout: post
---

# Mob Catcher

This script allows players to "catch" mobs in Minecraft using a specified item (default: stick) and receive the corresponding spawn egg. 

---

## 🎬 YouTube Demo

<iframe width="560" height="315" src="https://www.youtube.com/embed/w60aoGihbX8?si=fh9df3sdqHHSElpq&amp;start=31" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 🧩 Code

[https://github.com/sam-ple/minescript-scripts/blob/main/autoloot.py](https://github.com/sam-ple/minescript-scripts/blob/main/autoloot.py)

[https://github.com/sam-ple/minescript-scripts/blob/78427e1cc31445531ddd88eed54cec76edf02e7a/autoloot.py#L1-L363:embed:lang=python:h400]

---

## 💬 In-Game Commands

Use these commands via chat:

| Command                    | Description                         |
| -------------------------- | ----------------------------------- |
| `--setitem <item>`         | Set the item used to catch mobs     |
| `--sethand onhand/offhand` | Choose main or offhand for the item |
| `--setclick left/right`    | Use left or right click to catch    |
| `--setdist <number>`       | Set the max distance to target mobs |
| `--info`                   | Show current settings               |
| `--reset`                  | Reset to default settings           |
| `--help`                   | Show this command list              |

---

## 🧪 Example

To catch a mob using a carrot in your offhand with right-click and a max distance of 5 blocks:

```
--setitem minecraft:carrot
--sethand offhand
--setclick right
--setdist 5
```



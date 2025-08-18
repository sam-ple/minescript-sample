---
title: Auto Loot & Equip
parent: Crocado
layout: post
---

# Auto Loot & Equip

{: .warning }
**Disclaimer** For programming curiosity and learning only — **not** to promote cheating. Respect server rules.

{: .note }
**Minescript Plus** by RazrCraft — a user‑friendly API that adds extra functionality to Minescript using `lib_java` and other libraries.

---

## 🎬 YouTube Demo

<div class="youtube">
<iframe width="560" height="315" src="https://www.youtube.com/embed/eNoHxQNJuuA?si=HQyMHTzuEGuwNVhx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

## 🧩 Code

[https://github.com/sam-ple/minescript-scripts/blob/main/autoloot.py](https://github.com/sam-ple/minescript-scripts/blob/main/autoloot.py)

[https://github.com/sam-ple/minescript-scripts/blob/78427e1cc31445531ddd88eed54cec76edf02e7a/autoloot.py#L1-L363:embed:lang=python:h400]

---

## ✨ What it does

* **Auto‑Loot Chest** (skips weak gear)
* **Auto‑Equip** best **Armor & Sword**
* **Auto‑Equip Shield** (off‑hand)
* **Auto‑Arrange Hotbar**

---

## ⌨️ Keybinds & Hotbar

### Keybinds

| Key   | Action                                                                     |
| ----- | -------------------------------------------------------------------------- |
| **G** | Spawn a weighted‑loot chest 3 blocks ahead                                 |
| **H** | Pull from chest → Equip best armor & sword → Equip shield → Arrange hotbar |
| **J** | Remove the last spawned chest                                              |

### Hotbar Layout

|  Slot | Item         |
| ----: | ------------ |
| **0** | Sword        |
| **1** | Bow          |
| **2** | Arrows       |
| **4** | Golden Apple |
| **5** | Lava Bucket  |
| **6** | Water Bucket |
| **7** | Snowball     |
| **8** | Stone        |

---

## ✅ Compatibility (tested)

* **Java Edition:** 1.21.8
* **Minescript:** 5.0b1
* **Minescript Plus:** 0.10a
* **Loader:** Fabric

---

## 📦 Requirements

This script exercises features of **minescript\_plus**, an enhancement module for Minescript.

* Minescript Plus: [https://github.com/R4z0rX/minescript-scripts/tree/main/Minescript-Plus](https://github.com/R4z0rX/minescript-scripts/tree/main/Minescript-Plus)

### Folder layout

```
/minescript
  ├ chest.py          # this script
  ├ minescript_plus.py   # required
  ├ lib_java.py          # required (from Minescript Plus)
  ├ lib_nbt.py           # required (from Minescript Plus)
```


---
title: Mapping
layout: post
nav_order: 6
---

# Working with Minecraft Mappings (Minescript 5.0)

- [https://minescript.net/mappings/](https://minescript.net/mappings/)

---

## What are obfuscated symbols and mappings?

* Minecraft’s code is **obfuscated**: class, method, and field names are replaced with gibberish (e.g., `Minecraft.getInstance()` → `fud.R()`).
* NeoForge (1.20.2+) remaps these symbols to **Official Mojang names**, so no extra mapping is needed.
* Fabric uses **intermediary mappings**: consistent names (e.g., `net.minecraft.class_310`) across versions, mapping from obfuscated names.

---

## How Minescript 5.0 handles mappings

* In **Pyjinn scripts**, use **official Mojang names**.
* NeoForge works directly.
* Fabric requires **mapping from official names → obfuscated → intermediary names**.
* Minescript automatically handles this if mappings are installed.

---

## Installing mappings

* Run `\install_mappings` in Minescript 5.0b4+.

  1. Downloads **Official Mojang mappings** for your Minecraft version.
  2. Downloads **Fabric intermediary mappings** (if using Fabric).
  3. Loads mappings into memory for fast runtime access.
* NeoForge does not require mappings.

---

## Download

- install_mappings.pyj
  - [https://discord.com/channels/930220988472389713/1404182828907761744](https://discord.com/channels/930220988472389713/1404182828907761744)
- mappings_downloader.py
  - [https://discord.com/channels/930220988472389713/1392903003966668850](https://discord.com/channels/930220988472389713/1392903003966668850)

---

## Quick Setup

### install_mappings.pyj

1. Place `install_mappings.pyj` in the `/minescript/` folder.

2. Run in Minecraft:

```
\install_mappings
```


### mappings_downloader.py

1. Place `mappings_downloader.py` in the `/minescript/` folder.

2. Run in Minecraft:

```
\mappings_downloader
```

→ Detects your Minecraft version and downloads the mapping files.

3. Reload mappings:

```
\reload_mappings
```

→ Ready to use Java classes in Pyjinn scripts.

Example:

```python
Minecraft = JavaClass("net.minecraft.client.Minecraft")
```

---

## Troubleshooting

If you see:

```
java.lang.ClassNotFoundException: net.minecraft.client.Minecraft
```

It means mappings are missing or not reloaded.
→ Run `\mappings_downloader` and then `\reload_mappings` again.

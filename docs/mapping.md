---
title: Mapping
layout: post
nav_order: 5
---

## 🧠 Why Are Mappings Necessary?

Pyjinn or Minescript scripts often need to access Java classes.  
Since Minecraft class names are obfuscated (e.g., `net/minecraft/class_310`), **mappings convert them into human-readable names**.  
This requires mapping files such as `client.txt` (Mojang) and `*.tiny` (Fabric).

---

## ✅ Download

- install_mappings.pyj
  - [https://discord.com/channels/930220988472389713/1404182828907761744](https://discord.com/channels/930220988472389713/1404182828907761744)
- mappings_downloader.py
  - [https://discord.com/channels/930220988472389713/1392903003966668850](https://discord.com/channels/930220988472389713/1392903003966668850)

---

## ✅ Quick Setup

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

## 📌 Troubleshooting

If you see:

```
java.lang.ClassNotFoundException: net.minecraft.client.Minecraft
```

It means mappings are missing or not reloaded.
→ Run `\mappings_downloader` and then `\reload_mappings` again.

---

## 🔧 What the Script Does

* **Version detection**
  * In Minescript: `minescript.version_info().minecraft`
  * From CLI: `python mappings_downloader.py -v 1.21.7`

* **Download Mojang’s official mappings** (`client.txt`)
  * Saved to `/minescript/mappings/<version>/client.txt`

* **Download Fabric intermediary mappings** (`*.tiny`)
  * Saved to `/minescript/mappings/<version>/<version>.tiny`

* **Automatic folder creation**
  * Adjusts paths depending on Minescript or CLI usage

---

## 💬 How to Run

**In Minecraft (automatic version detection):**

```
\mappings_downloader
\reload_mappings
```

**From CLI (manual version input):**

```bash
python mappings_downloader.py -v 1.21.7
```

---

## 📁 Example Folder Structure

```
minescript/
├─ config.txt
├─ mappings_downloader.py
├─ mappings/
│  └─ 1.21.7/
│     ├─ client.txt    ← Mojang mappings
│     └─ 1.21.7.tiny   ← Fabric intermediary mappings
```

---

## 📌 Summary

| Feature           | Description                           |
| ----------------- | ------------------------------------- |
| Version detection | Auto (Minescript) or manual (CLI)     |
| Mojang mappings   | Downloads `client.txt`                |
| Fabric mappings   | Downloads `<version>.tiny`            |
| Auto path setup   | Creates/save paths automatically      |
| Apply mappings    | Run `\reload_mappings` after download |


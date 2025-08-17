---
title: Mapping
parent: Others
layout: post
---

- Preparation for Pyjinn and Minescript Mappings

## 🧠 Why Are Mappings Necessary?

When using Pyjinn or Minescript, it is necessary to **convert obfuscated Java class names (e.g., `net/minecraft/class_310`) into human-readable names** when calling Java classes from Python.

This is done by using mapping files such as `client.txt` and `*.tiny`.

---

## ✅ Quick Setup Guide (First Time Only)

1. Place `mappings_downloader.py` in the `/minescript/` folder.
2. In Minecraft, run the command:

   ```
   \mappings_downloader
   ```

   → This automatically detects your Minecraft version and downloads the required mapping files.
3. Run the command:

   ```
   \reload_mappings
   ```

   → This loads the new mappings.
4. You are now ready to write Pyjinn scripts freely!

---

## ✅ After Setup, You're Ready to Go

Once the mappings have been downloaded and reloaded, the following code will work as a standalone Pyjinn script:

```python
Minecraft = JavaClass("net.minecraft.client.Minecraft")
...
```

---

## 📌 Troubleshooting: Common Error

If you encounter an error like:

```
java.lang.ClassNotFoundException: net.minecraft.client.Minecraft
```

It means **the mappings are missing or have not been reloaded**.
→ Run `\mappings_downloader` again, followed by `\reload_mappings`.

---

# About Mapping Files

* This script **automatically downloads and installs the necessary mapping files (Mojang & Fabric) for Minescript v5 in Minecraft**.
* Author: RazrCraft
* Source/Discussion: [https://discord.com/channels/930220988472389713/1392903003966668850](https://discord.com/channels/930220988472389713/1392903003966668850)

---

## 🔧 Purpose of the Script

The script manages **mapping files that enable Minescript to use Java class names in a readable way** by performing the following:

### ✅ 1. Automatically Detect (or Accept) Your Minecraft Version

* When launched from Minescript → uses `minescript.version_info().minecraft`
* When launched from command line → accepts version input via `-v 1.21.7` or manual input

---

### ✅ 2. Download Mojang’s Official Mapping (`client.txt`)

* Fetches version metadata from:
  `https://piston-meta.mojang.com/mc/game/version_manifest_v2.json`
* Retrieves `client_mappings` from the version JSON and saves it to:
  `/minescript/mappings/<version>/client.txt`

---

### ✅ 3. Download Fabric’s Intermediary Mapping (`*.tiny`)

* Downloads from:
  `https://raw.githubusercontent.com/FabricMC/intermediary/master/mappings/<version>.tiny`
* Saves to:
  `/minescript/mappings/<version>/<version>.tiny`

---

### ✅ 4. Automatically Creates Destination Directories

* If run from Minescript → saves to `minescript/mappings/<version>/`
* If run from CLI → saves to `mappings/<version>/`

---

## 💬 How to Run

### Run inside Minecraft (via Minescript, automatic version detection):

```
\mappings_downloader
```

→ After download finishes:

```
\reload_mappings
```

to apply the mappings.

---

### Run from Command Line (CLI):

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
│     ├─ client.txt          ← Mojang official mappings
│     └─ 1.21.7.tiny         ← Fabric intermediary mappings
```

---

## ✅ Additional Notes

* `client.txt`: Mojang’s official **named mappings** (human-readable names)
* `*.tiny`: Fabric’s **intermediary mappings** (used for modding compatibility)

---

## 📌 Summary

| Feature                          | Description                                           |
| -------------------------------- | ----------------------------------------------------- |
| Auto Minecraft version detection | Detects Minecraft version used by Minescript          |
| Fetch Mojang mappings            | Downloads `client.txt`                                |
| Fetch Fabric mappings            | Downloads `<version>.tiny`                            |
| Auto-adjust save path            | Chooses save path based on Minescript or CLI          |
| Post-download instruction        | Suggests running `\reload_mappings` to apply mappings |

---


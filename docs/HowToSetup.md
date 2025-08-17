---
title: How to Setup
nav_order: 3
layout: post
---

# How to Set Up

---

## Default Launcher (Official Minecraft Launcher)

1. Download the required mods (Minescript + dependencies).
2. Set your Python path in `config.txt`.
3. Test it with a sample script.

<iframe width="560" height="315" src="https://www.youtube.com/embed/1Monkt8_mgk?si=NVGXIf-0AVcAGEAu&amp;start=31" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## Modrinth App (Recommended for Beginners)

1. Download [Modrinth](https://modrinth.com/) and create a new instance.
2. Install the required mods (Minescript + dependencies).
3. Set your Python path in `config.txt`.
4. Test it with a sample script.

*Modrinth is a free Minecraft launcher available for Windows, macOS, and Linux.*

<iframe width="560" height="315" src="https://www.youtube.com/embed/2TMlJIipzpI?si=7Vs1NCPJTUDaqmOh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## Running a Minescript

You can run your `.py` scripts directly in Minecraft via the chat console:

* Example: A script located at
  `minecraft/minescript/example.py`
  can be run as:

  ```
  \example
  ```

---

## Where to Find Your Minecraft Folder

> *Note: Some of these paths may be unverified on Windows or with CurseForge.*  
> Each instance has its own `mods/`, `saves/`, and other folders.

### Official Minecraft Launcher

| OS      | Folder Location                                      |
| ------- | ---------------------------------------------------- |
| Windows | `%APPDATA%\.minecraft\minescript\`                               |
| macOS   | `~/Library/Application Support/minecraft/minescript/` |
| Linux   | `~/.minecraft/minescript/`                                       |

### Modrinth App

| OS      | Folder Location                                                             |
| ------- | --------------------------------------------------------------------------- |
| Windows | `%APPDATA%\ModrinthApp\profiles\<Instance>\minescript\`     |
| macOS   | `~/Library/Application Support/ModrinthApp/profiles/<Instance>/minescript/` |
| Linux   | `~/.config/ModrinthApp/profiles/<Instance>/minescript/` |

### CurseForge Launcher

| OS      | Folder Location                                       |
| ------- | ----------------------------------------------------- |
| Windows | `%HOMEDRIVE%%HOMEPATH%\curseforge\minecraft\instances\<Instance>\minescript\` |
| macOS   | `~/Library/Application Support/curseforge/minecraft/instances/<Instance>/minescript/` |
| Linux   | `~/.curseforge/minecraft/instances/<Instance>/minescript/` |

---

## Tips

### Windows

* Press ⊞ **Windows** + **R**, type `%APPDATA%\.minecraft`, and press **OK**.
* `%APPDATA%` equals:
  `C:\Users\<Username>\AppData\Roaming\`
* The `AppData` folder is hidden.
  In File Explorer, go to the **View** tab and enable **Hidden items** to see it.

### macOS

* Press ⇧ **Shift** + ⌘ **Command** + **G** in Finder, or open Spotlight from the menu bar.
* Enter:
  `~/Library/Application Support/minecraft`
* `~/Library/` equals:
  `/Users/<Username>/Library/`
* The `Library` folder is hidden.
  Use the **Go to Folder** shortcut or press **Command + Shift + .** to show hidden files.
* The `~` symbol refers to your **home directory** (e.g., `/Users/you/`).

### Linux

* The `~` symbol refers to your **home directory** (e.g., `/home/you/`).
* Folders starting with a dot (`.`), like `.minecraft`, are **hidden by default**.
* Most file managers toggle hidden files with **Ctrl + H**.

---

## How to Find Your Python Installation Path

### Windows

1. Open Command Prompt (`Win + R` → type `cmd` → Enter)
2. Run: `where python`
3. Example path: `C:\Users\yourname\AppData\Local\Programs\Python\Python311\python.exe`

### macOS

1. Open Spotlight (`Control + Space`) → type `Terminal`
2. Run: `which python3`
3. Example output: `/usr/bin/python3`

*Note: `which python` may show Python 2.*

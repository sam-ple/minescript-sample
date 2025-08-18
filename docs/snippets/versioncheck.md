---
title: Version Checker
parent: Snippets
layout: post
---

# Show Minecraft & Minescript Environment Info(Pyjinn)

```
\eval "version_info()"
```

```python
#!python
from system.pyj.minescript import *

v = version_info()

echo("Minecraft: " + str(v.minecraft))
echo("Minescript: " + str(v.minescript))
echo("Mod Loader: " + str(v.mod_loader))
echo("Launcher: " + str(v.launcher))
echo("OS: " + str(v.os_name) + " " + str(v.os_version))
echo("Pyjinn: " + str(v.pyjinn))
```
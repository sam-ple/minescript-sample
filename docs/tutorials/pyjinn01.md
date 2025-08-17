---
title: Pyjinn Tutorial 01 – Introduction to Java Access
parent: Tutorials
layout: post
nav_order: 4
---

# Pyjinn Tutorial 01 – Introduction to Java Access

---

- Save with the `.pyj` extension and run it in the **Minescript 5.0** environment.
- [https://minescript.net/pyjinn/](https://minescript.net/pyjinn/)
- Environment: MC 1.21.8 / MS 5.0b1 / MS+ 0.09a / Pyjinn / Fabric

---

## 🎥 YouTube

<iframe width="560" height="315" src="https://www.youtube.com/embed/EghkRJ5RU1U?si=8IWf_9fpUqL8ww77&amp;start=31" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 0. eval Command

```python
\eval "version_info()"
```
```python
\eval "import sys" "print(sys.version)"
```
```python
\eval "print(player_position())"
```
```python
\eval 'add_event_listener("key", lambda e: print("hello!") if e.key==46 and e.action==1 else None)'
```

---

## 1. Basic “Hello, Pyjinn!” Message

Displays text in the Minecraft chat.

```python
#!python
from minescript import *

echo("Hello, Pyjinn!")
```

---

## 2. Java Class Example — Using `java.lang.String`

Creates a Java `String` object from Pyjinn and prints it in Minecraft chat.

```python
#!python
from minescript import *

String = JavaClass("java.lang.String")
hello = String("Hello from Java String!")
echo(hello)
```

---

## 3. Java Stream API with Pyjinn Lambdas

Uses Java's Stream API to filter even numbers and square them, then displays the result.

```python
#!python
from minescript import *

List = JavaClass("java.util.List")
java_list = [1, 2, 3, 4, 5].getJavaList()

result = java_list.stream() \
    .filter(lambda x: x % 2 == 0) \
    .map(lambda x: x * x) \
    .toList()

echo(f"Even squares: {result}")
```

---

## 4. Timer with `set_interval`

Displays a message every second, stopping after 5 times.

```python
#!python
from minescript import *

count = 0

def tick():
    global count
    count += 1
    echo(f"Tick count: {count}")
    if count >= 5:
        # Stop the timer after 5 ticks
        remove_event_listener(timer_id)

timer_id = set_interval(tick, 1000)  # Call tick() every 1000ms
```



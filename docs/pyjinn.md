---
title: Pyjinn Overview (5.0+)
layout: post
nav_order: 5
---

# Pyjinn Overview (5.0+)

- [https://minescript.net/pyjinn/](https://minescript.net/pyjinn/)

---

## What is Pyjinn?

* Pyjinn is a **Python-syntax scripting language** implemented on Java.
* Looks and feels like Python but runs entirely in a Java environment.
* **No Python standard library**; can access Java standard library and any loaded Java classes.

---

## Pyjinn in Minescript 5.0

* Integrated into Minescript 5.0: Python-syntax scripts can run directly inside Minecraft’s Java process.
* Shares most Minescript APIs with Python scripts, except for event handling.
* Event handling uses **JavaScript-style single-threaded listeners**: `add_event_listener`, `set_interval`, `set_timeout`, `remove_event_listener`.
* Imports: `.pyj` scripts can import libraries from `minecraft/minescript` or `minecraft/minescript/system/pyj`.

---

## Java Integration

* Use `JavaClass("...")` to access Java classes at parse-time.
* Provides constructors, static methods, and Java object methods in Pythonic syntax.
* Supports conversion of Pyjinn lambdas to Java interfaces automatically (e.g., `Runnable`, `Predicate`, `Function`).
* Can convert Pyjinn lists/tuples to Java arrays or lists.

---

## Python Language Features

* Supports most Python expressions, statements, f-strings, tuples, lists, dicts, comprehensions, lambdas, functions, classes, dataclasses, control flow (`if`, `for`, `while`, `try/except`), etc.
* Indexing, slicing, and typical operators are supported.
* Pyjinn functions support global and nonlocal variables.

---

### Not Supported

* Python standard library (except minimal `sys`)
* Some `str` methods; `**kwargs` in function calls
* `dict(k=v)` constructor syntax
* Generators (`yield`) and `async/await`
* Threading, inheritance, `with`, `match`, keyword-only arguments
* Arbitrary-precision integers, user-defined decorators, Python-style metaclasses
* Step increments in slices, f-string assignments, most double-underscore methods except `__init__()`

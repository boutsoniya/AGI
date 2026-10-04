# Day 02 — Symbolic Rules & Inference

This folder contains the runnable Day 02 experiment.

## Run

From the repository root:

~~~bash
python days/day-02/symbolic_inference.py
~~~

No external packages are required.

## What it demonstrates

The engine starts with explicit facts such as:

- `left(A, B)`
- `left(B, C)`
- `left(C, D)`

and applies the rule:

~~~text
left(X, Y) AND left(Y, Z) → left(X, Z)
~~~

It repeatedly derives new facts until the knowledge state reaches a fixed point.

This is a deliberately small implementation of **forward chaining**. The point is not performance; it is to make the inference mechanism inspectable.

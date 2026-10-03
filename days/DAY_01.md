# 🟣 Day 01 — Geometric Knowledge Representation

> **100 Days of AGI · Day 01 / 100**

[← Back to Lab](../README.md) · [Roadmap](../ROADMAP.md) · [Resources](../RESOURCES.md) · [Run the code](./day-01/geometric_knowledge.py)

---

## 🎯 Today's Mission

Start with a tiny world that we can **inspect, compute over, and reason about**.

We are not trying to make the system impressive today.

We are trying to make the representation **explicit**.

### The question

> **Can a machine store a small spatial world and derive relationships from it without asking a language model to guess?**

---

## 🧠 The Idea

A world can be represented as:

~~~text
ENTITY
  ↓
PROPERTY
  ↓
RELATION
  ↓
RULE
  ↓
DERIVED FACT
~~~

For Day 01:

~~~text
A = (0, 0)
B = (3, 4)

distance(A, B) = 5

A ── left of ──→ B
A ── below ────→ B
~~~

The important transition is:

**description → representation → computation**

---

## 🔨 What We Built

A zero-dependency Python prototype:

- stores geometric entities
- computes Euclidean distance
- derives directional relations
- prints the knowledge state
- keeps the logic inspectable

**Run it:**

~~~bash
python days/day-01/geometric_knowledge.py
~~~

**Expected:**

~~~text
=== AGI / DAY 01 ===
Geometric Knowledge Representation

Entities:
- A: point(0.0, 0.0)
- B: point(3.0, 4.0)
- C: point(3.0, 0.0)

Derived facts:
- distance(A, B) = 5.0
- A is left of B
- A is below B
~~~

---

## 🧪 Experiment

### A — Change the world

Move B to another coordinate.

Ask:

1. Does the distance change correctly?
2. Do the directional facts change?
3. What happens if two points share an x or y coordinate?
4. What happens if the points overlap?

### B — Add a rule

Add a new relation such as:

~~~text
same_x(A, B)
same_y(A, B)
~~~

Then make the program derive it from coordinates.

### C — Make the representation richer

Try:

~~~text
circle
rectangle
triangle
contains
touches
overlaps
near
far
~~~

Now the experiment starts looking less like a calculator and more like a tiny **world model**.

---

## 💥 Failure Cases We Want

A useful research log records where the idea breaks.

| Case | Question |
|---|---|
| Same point | Is distance exactly zero? |
| Same x | Is left/right undefined? |
| Same y | Is above/below undefined? |
| Negative coordinates | Does the representation remain consistent? |
| Floating point | How much numerical error is acceptable? |
| New object type | Can the representation extend without rewriting everything? |

---

## 🌐 Why This Matters

Recent spatial-intelligence research is moving beyond simple image recognition toward structured spatial memory, multi-view reasoning, functional reasoning and embodied agents. citeturn1search0turn1search9turn1search11turn1search10

That makes this tiny experiment useful as a **base layer**:

~~~text
           PERCEPTION
               ↓
        WORLD REPRESENTATION
               ↓
       GEOMETRIC KNOWLEDGE
               ↓
          SYMBOLIC RULES
               ↓
           REASONING
               ↓
        PLANNING / ACTION
               ↓
          VERIFICATION
~~~

A 2026 ACL study also reports important limitations in current multimodal spatial reasoning and finds that text-based chain-of-thought can hurt generalized visual spatial tasks. That gives us a concrete reason to treat **representation and grounding** as first-class components rather than assuming language reasoning solves everything. citeturn1search2turn1search3

---

## 📚 Research Shelf

### Start here

- [Nature Communications — Brain-inspired spatial intelligence](https://www.nature.com/articles/s41467-026-74358-5)
- [Apple ML — Spatial-Functional Intelligence Benchmark](https://machinelearning.apple.com/research/spatial)
- [PMLR — Multi-image spatial reasoning](https://proceedings.mlr.press/v306/oi26a.html)
- [Spatial AI Agents & World Models — arXiv](https://arxiv.org/abs/2602.01644)
- [S-Agent — Spatial Tool Use](https://www.alphaxiv.org/abs/2606.20515)
- [100 Days of ML Code — inspiration](https://github.com/Avik-Jain/100-Days-Of-ML-Code)
- [LLMs from Scratch](https://github.com/rasbt/LLMs-from-scratch)

More resources → **[Resource Atlas](../RESOURCES.md)**

---

## 🧠 What I Learned

> A reasoning system needs a representation it can operate on.

Today the representation is tiny.

That is intentional.

Tomorrow we make the system **derive facts from rules**.

---

## 🔓 Next Unlock

### Day 02 → Symbolic Rules & Inference

~~~text
DAY 01
coordinates
    ↓
relations

DAY 02
relations
    ↓
rules
    ↓
new facts
~~~

**[→ Continue through the Roadmap](../ROADMAP.md)**

---

<div align="center">

### DAY 01 / 100

**SMALL WORLD. EXPLICIT KNOWLEDGE. REAL REASONING.**

</div>

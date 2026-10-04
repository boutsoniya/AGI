# 🟣 Day 02 — Symbolic Rules & Inference

> **100 Days of AGI · Day 02 / 100**

[← Back to Lab](../README.md) · [Roadmap](../ROADMAP.md) · [Resources](../RESOURCES.md) · [Run the code](./day-02/symbolic_inference.py)

---

## 🎯 Today's Mission

Day 01 gave us an explicit world.

Today we ask:

> **Can a machine derive something that was never explicitly stored?**

The goal is a tiny inference engine — not a chatbot.

---

## 🧠 The Idea

A symbolic reasoner separates:

~~~text
FACTS
  ↓
RULES
  ↓
INFERENCE
  ↓
NEW FACTS
~~~

Example:

~~~text
Fact:
A is left of B

Fact:
B is left of C

Rule:
if X is left of Y
and Y is left of Z
then X is left of Z

Derived:
A is left of C
~~~

The important part is that **A is left of C was not entered directly**.

The system derived it from existing knowledge.

---

## 🔨 What We Built

A zero-dependency Python prototype that:

- stores facts as tuples
- stores rules separately
- matches variables against known facts
- repeatedly applies rules
- adds new derived facts
- prints the inference trace
- stops when no new facts can be produced

**Run it:**

~~~bash
python days/day-02/symbolic_inference.py
~~~

Expected output:

~~~text
=== AGI / DAY 02 ===
Symbolic Rules & Inference

Initial facts:
- left(A, B)
- left(B, C)
- left(C, D)

Derived facts:
- left(A, C)
- left(B, D)
- left(A, D)
~~~

---

## 🧪 Experiment

### A — Add a rule

Add:

~~~text
left(X, Y) AND left(Y, Z) → left(X, Z)
~~~

Then test longer chains.

### B — Break the assumptions

Try:

~~~text
left(A, B)
left(B, A)
~~~

Ask:

- Is this a contradiction?
- Should the engine reject it?
- Should it keep both facts?
- Who decides?

### C — Add another relation

Try:

~~~text
inside(A, box1)
inside(box1, room1)
~~~

Then write a rule that derives:

~~~text
inside(A, room1)
~~~

You have now moved from geometry toward a reusable knowledge system.

---

## 💥 Failure Cases We Want

| Case | Question |
|---|---|
| Cyclic facts | Does inference loop forever? |
| Duplicate facts | Are duplicates suppressed? |
| Contradictions | Can the system notice incompatible facts? |
| Many rules | Does inference become expensive? |
| Bad rule | Can one incorrect rule generate many wrong facts? |
| Ambiguous relation | What exactly does “left of” mean? |

A research system should record these failures instead of hiding them.

---

## 🔍 Why This Matters

Symbolic inference gives us something valuable: **an inspectable reasoning trace**.

Instead of:

~~~text
INPUT → mysterious answer
~~~

we get:

~~~text
INPUT
  ↓
KNOWN FACTS
  ↓
RULE MATCH
  ↓
DERIVED FACT
  ↓
NEW RULE MATCH
  ↓
FINAL KNOWLEDGE STATE
~~~

That structure becomes useful later when we combine symbolic reasoning with learned representations.

The long-term AGI question is not whether neural or symbolic methods must “win”.

It is whether a system can use the right representation and reasoning mechanism for the problem in front of it.

---

## 📚 Research Shelf

- [Stanford Encyclopedia of Philosophy — Classical Logic](https://plato.stanford.edu/entries/logic-classical/)
- [Forward Chaining — overview](https://en.wikipedia.org/wiki/Forward_chaining)
- [Artificial Intelligence — recent research](https://arxiv.org/list/cs.AI/recent)
- [LLMs from Scratch](https://github.com/rasbt/LLMs-from-scratch)

More resources → **[Resource Atlas](../RESOURCES.md)**

---

## 🧠 What I Learned

> A fact becomes more useful when a system can derive consequences from it.

Day 01 gave us **representation**.

Day 02 adds **inference**.

~~~text
WORLD
  ↓
FACTS
  ↓
RULES
  ↓
DERIVED KNOWLEDGE
~~~

---

## 🔓 Next Unlock

### Day 03 → Knowledge Graphs

~~~text
DAY 01
represent the world
    ↓
DAY 02
derive facts
    ↓
DAY 03
connect facts into a graph
~~~

---

<div align="center">

### DAY 02 / 100

**FACTS → RULES → INFERENCE → NEW KNOWLEDGE**

</div>

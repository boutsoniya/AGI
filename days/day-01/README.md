# Day 01 — Geometric Knowledge Representation

## Goal

Start the AGI project with a small, inspectable reasoning system.

Instead of trying to build "AGI" immediately, Day 1 focuses on one foundational capability:

> Represent entities, geometric properties, and relationships in a form that a reasoning system can query.

This follows the project's larger direction of combining symbolic reasoning with geometric knowledge engineering.

## What we built

A tiny **Geometric Knowledge Graph** with:

- Entities
- 2D points
- Explicit spatial relationships
- Derived geometric facts
- Queryable relationships

### Example

Given:

- A = (0, 0)
- B = (3, 4)

The system can derive:

- distance(A, B) = 5
- A is left of B
- A is below B

The important idea is that the system does not need to "guess" these relationships. They are represented and computed explicitly.

## Why this matters for AGI

A useful reasoning system needs structured representations of the world.

For this project, the long-term stack is:

```
Perception
   ↓
Structured Representation
   ↓
Geometric Knowledge
   ↓
Symbolic Rules
   ↓
Reasoning
   ↓
Planning / Generation
   ↓
Verification
```

Day 1 establishes the structured-representation layer.

## Run

From the repository root:

```bash
python days/day-01/geometric_knowledge.py
```

No external packages are required.

## Example output

```text
Entities:
- A: point(0, 0)
- B: point(3, 4)

Derived facts:
- distance(A, B) = 5.0
- A is left of B
- A is below B
```

## Next step

Day 2 will move from raw geometric facts toward **symbolic rules**: representing rules and using them to derive new facts automatically.

## Daily principle

Every day should leave the repository with something that can be inspected, executed, or tested.

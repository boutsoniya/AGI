"""Day 01: tiny geometric knowledge engine.

Run:
    python days/day-01/geometric_knowledge.py
"""

from math import hypot

POINTS = {
    "A": (0.0, 0.0),
    "B": (3.0, 4.0),
    "C": (3.0, 0.0),
}

def distance(a, b):
    ax, ay = POINTS[a]
    bx, by = POINTS[b]
    return hypot(bx - ax, by - ay)

def relations(a, b):
    ax, ay = POINTS[a]
    bx, by = POINTS[b]
    facts = []
    if ax < bx:
        facts.append(f"{a} is left of {b}")
    if ax > bx:
        facts.append(f"{a} is right of {b}")
    if ay < by:
        facts.append(f"{a} is below {b}")
    if ay > by:
        facts.append(f"{a} is above {b}")
    return facts

print("=== AGI / DAY 01 ===")
print("Geometric Knowledge Representation\n")

print("Entities:")
for name, point in POINTS.items():
    print(f"- {name}: point{point}")

print("\nDerived facts:")
print(f"- distance(A, B) = {distance('A', 'B'):.1f}")
for fact in relations("A", "B"):
    print(f"- {fact}")

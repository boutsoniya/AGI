"""Day 02 — Symbolic Rules & Inference

A tiny forward-chaining inference engine.
No external packages required.
"""

Fact = tuple[str, str, str]
Rule = tuple[tuple[str, str, str], tuple[str, str, str]]

def substitute(pattern: Fact, env: dict[str, str]) -> Fact:
    return tuple(env.get(part, part) for part in pattern)  # type: ignore[return-value]


def match(pattern: Fact, fact: Fact, env=None):
    env = {} if env is None else dict(env)

    for p, f in zip(pattern, fact):
        if p.startswith("?"):
            if p in env and env[p] != f:
                return None
            env[p] = f
        elif p != f:
            return None

    return env


def find_matches(patterns, facts, env=None):
    envs = [env or {}]

    for pattern in patterns:
        next_envs = []
        for current in envs:
            for fact in facts:
                matched = match(pattern, fact, current)
                if matched is not None:
                    next_envs.append(matched)
        envs = next_envs

    return envs


def infer(facts: set[Fact], rules: list[Rule]):
    facts = set(facts)
    trace = []

    changed = True
    while changed:
        changed = False

        for premises, conclusion in rules:
            for env in find_matches(premises, facts):
                derived = substitute(conclusion, env)

                if derived not in facts:
                    facts.add(derived)
                    trace.append((derived, premises, env))
                    changed = True

    return facts, trace


def main():
    facts = {
        ("left", "A", "B"),
        ("left", "B", "C"),
        ("left", "C", "D"),
    }

    rules = [
        (
            (("left", "?x", "?y"), ("left", "?y", "?z")),
            ("left", "?x", "?z"),
        )
    ]

    final_facts, trace = infer(facts, rules)

    print("=== AGI / DAY 02 ===")
    print("Symbolic Rules & Inference")
    print("\nInitial facts:")
    for fact in sorted(facts):
        print("-", f"{fact[0]}({fact[1]}, {fact[2]})")

    print("\nDerived facts:")
    for fact, _, _ in trace:
        print("-", f"{fact[0]}({fact[1]}, {fact[2]})")

    print("\nFinal knowledge state:")
    for fact in sorted(final_facts):
        print("-", f"{fact[0]}({fact[1]}, {fact[2]})")


if __name__ == "__main__":
    main()

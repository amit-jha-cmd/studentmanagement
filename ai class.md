# Representing knowledge using rules
> chapter 6

content:
* Procedural v/s declarative
* logical programming
* forward v/s backward
* reasoning
* matching
* control knowledge
  
:warning: the author has used **PROLOG** to implement the concepts

```
PROLOG: USES RESOLUTION AND BACKWARD MAPPING TO SOLVE THE PROBLEM
```

## KP USING RULES
> use of rules to encode knowledge

* Declarative: knowledge is specified
* Procedural: only the control information that is necessary to use the knowledge us considered

```prolog
 -> becomes :-
 ^ becomes ,
 v becomes none
 constant becomes small letters/numbers 
 variable becomes capital letter
```

## Horn clause
**definition** clause with at most one _ve literal

*4 categories:*
* A rule: 1 +ve literal, at least 1 -ve literal
* a fact or unit: 1 +ve literal, 0 -ve literal
* a negated goal: 0 +ve literal, at least 1 negative literal
* A null clause: 0 +ve, 0 -ve literals. Appears only as the end of a resolution proof

:warning: **Prolog rules are restricted to Horn clauses** :warning:


# **Logic programming**
```
- Are there more possible start state or goral state
- in which direction is the branching factor generated
```
- Forward and backward reasoning
  ## Fowrard
- we start at the init state
- LHS fo the rule is matched and replaced with RHS
- continue till goal state is reached
  ## Backward
- Start at the goal state
- RHS of the rule is matched and replaced with LHS
- continue till init state is reached


# Both forward and backward
```
(forward)
---------- *stop when something common b/w forward and backward is reached*
(backward)
```

# matching

- selection of best rules from the knowledge base is described
- set of algo that helps the machine reach the solution
- proposals on matching:
  - indexing
  - matching with variables
  - complex and apporx matching
  - conflict resolution
    - preferences based on rules
    - preferemnces based on objects
    - preferences based on states
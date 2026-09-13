---
title: DAIM Research Agents
subtitle: Evidence-Grounded Agents for Reproducible Research
question: >-
  Can AI agents contribute to research without losing the link between claims
  and evidence?
summary: >-
  Investigating agentic AI systems that support literature analysis,
  experimental design, coding, reproducibility, scientific critique and research
  synthesis — with conclusions that stay traceable to their sources.
currentFocus: >-
  Research workflows, evidence provenance, reproducibility and human–AI
  collaboration.
status: Active Research
illustration: /images/projects/daim-research-agents.svg
illustrationAlt: >-
  Literature, data, experiments and human decisions feed intermediate agent
  steps that lead to a single claim. A dashed return path indicates that the
  claim can be traced back to its sources.
topics:
  - Agentic AI
  - AI for Research
areas:
  - frontier-ai
featured: true
order: 20
---

## Overview

DAIM Research Agents investigates agentic AI systems that support literature
analysis, experimental design, coding, reproducibility, scientific critique and
research synthesis.

Our focus is not autonomous paper generation. We are developing evidence-grounded
research agents in which conclusions remain traceable to sources, experiments,
code and human decisions.

The distinction matters. A system that produces fluent scientific prose without
a recoverable chain back to evidence is not doing research, whatever the output
looks like. The harder and more useful problem is keeping that chain intact
while an agent does work that is genuinely helpful.

## Research Questions

1. Which parts of the research process can agents support reliably?
2. How can scientific claims remain traceable to literature, data, experiments
   and code?
3. Can research agents improve experimental completeness and reproducibility?
4. How should researchers supervise and collaborate with research agents?
5. How should standards of evidence and agent behaviour adapt across
   disciplines?

## Research Agent Architecture

The working design separates what an agent *does* from what it may *assert*.

**Task agents** carry out scoped work: searching and reading literature, drafting
an experimental protocol, writing or reviewing code, running an analysis,
checking whether a reported result can be reproduced.

**A supervising researcher** sets the question, approves the plan and decides
what counts as done. Agent steps are proposals until a person accepts them, and
the acceptance is recorded rather than assumed.

**A critique path** re-examines intermediate results against the evidence they
claim to rest on, so that an error is more likely to surface before it is built
upon.

The architecture is under active development and has not been evaluated against
alternatives.

## Evidence Store

Every claim an agent makes is written with the material it rests on: the papers
consulted, the dataset version, the code commit, the run that produced a number,
and the point at which a human made a decision.

The intent is that any statement in a final output can be walked backwards to
those artefacts, and that the walk is cheap enough that people actually do it.
This is also what makes disagreement productive — a reviewer can dispute a
specific link rather than the conclusion as a whole.

Whether this can be maintained without making the system too slow to be worth
using is one of the questions the programme has to answer honestly.

## Current Phase

**Early development.**

Work is at the stage of building the agent architecture and evidence store and
testing them on real research tasks. The
[DAIM Foundation Models](/projects/daim-foundation-models) programme will serve
as one of the first real-world research environments for evaluating the Research
Agents: it involves reproduction, benchmarking and code-heavy experimental work,
which is exactly the kind of research where provenance is both testable and easy
to lose.

No claim is made that these agents currently improve research quality or
reproducibility. Establishing whether they do is the point of the work.

## Research Outputs

Outputs will be listed here as they become available. Nothing has been published
from this programme yet.

## Get Involved

We are interested in researchers willing to put a real research task through the
system and tell us where it breaks, and in people who have thought about
evidence standards in their own discipline.

Discipline diversity matters here more than usual: what counts as adequate
evidence differs sharply between fields, and a design tested in only one of them
will quietly encode that field's assumptions.

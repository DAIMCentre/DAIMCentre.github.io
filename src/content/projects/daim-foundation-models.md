---
title: DAIM Foundation Models
subtitle: Cross-Domain Foundation Models for Time-Series Discovery
question: Can a foundation model learn dynamics that transfer across domains?
summary: >-
  Investigating general-purpose models for time-series data across science,
  health, engineering and society, starting from reproduction and systematic
  evaluation of the models that already exist.
currentFocus: >-
  Cross-domain benchmarking, synthetic dynamics and transferable
  representations.
status: Active Research
illustration: /images/projects/daim-foundation-models.svg
illustrationAlt: >-
  Four time-series traces of different character converge into a single model,
  which produces a shared representation. A dashed path indicates transfer to
  domains not seen during training.
topics:
  - Foundation Models
  - Time Series
areas:
  - frontier-ai
featured: true
order: 10
---

## Overview

DAIM Foundation Models investigates general-purpose models for time-series data
across science, health, engineering and society. We begin by reproducing and
systematically evaluating current time-series foundation models, before studying
how cross-domain and synthetic pretraining can improve generalisation to unseen
datasets and domains.

The programme will develop reproducible benchmarks, open research infrastructure
and new foundation-model methods.

Time series are one of the few data types that show up almost everywhere:
instrument readings, patient monitoring, sensor networks, energy demand,
economic indicators. Whether a single model can learn dynamics general enough to
be useful across all of them is an open question, and the published evidence so
far is difficult to compare because evaluations differ in data, splits and
metrics. Establishing what current models actually do is the first task.

## Research Questions

1. How reliably do current time-series foundation models generalise across
   heterogeneous domains?
2. Does pretraining across diverse domains improve transfer to unseen datasets
   and domains?
3. Can synthetic dynamical systems help foundation models learn transferable
   representations?
4. Can these representations eventually support reasoning, simulation and
   decision-making as well as forecasting?

## What We Are Building

**A reproducible benchmark.** A common evaluation covering multiple domains,
with fixed splits, declared preprocessing and published baselines, so that
results from different groups can be compared rather than merely listed.

**Open research infrastructure.** The pretraining, evaluation and analysis code,
released so that a reported number can be re-derived rather than taken on trust.

**Synthetic dynamics.** Families of simulated dynamical systems with known
properties, used to study which structural regularities a model can pick up when
the ground truth is available by construction.

**Foundation-model methods.** New pretraining and adaptation approaches, pursued
where the benchmarking work shows current methods falling short.

## Current Phase

**Phase 1 — Reproduction and benchmarking.**

The immediate work is reproducing published time-series foundation models and
evaluating them under a single protocol. Nothing in this programme has been
externally validated, and no method described here should be taken as an
established result.

## Research Outputs

**DAIM Research Report 001 — Time-Series Foundation Models Across Domains: A
Reproducible Benchmark and Research Agenda.** *In preparation.*

Further outputs, including code and benchmark releases, will be listed here as
they become available.

## Get Involved

We are interested in hearing from researchers with time-series problems in
domains we do not already cover, and from anyone who has tried to reproduce
results in this area and found it harder than it should be.

Contributions to the benchmark are welcome, particularly datasets with
well-documented provenance and evaluation protocols that others can adopt.

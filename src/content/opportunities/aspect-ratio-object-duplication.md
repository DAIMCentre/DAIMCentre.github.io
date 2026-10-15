---
title: 'Same prompt, different frame: object duplication under aspect-ratio shifts in text-to-image generation'
level: MSc by Thesis
supervisor: Professor Kevin Pimbblet
supervisorUrl: https://www.hull.ac.uk/staff-directory/kevin-pimbblet
topics:
  - Text-to-image generation
  - Diffusion models
# Expiry as submitted on the project form. Past dates are not published, so this
# entry is currently hidden. Change the date to bring it back.
expires: 2026-04-30
order: 70
---

## The project

When a prompt specifies a fixed object inventory, for example, "a tablecloth
with exactly one knife, one pear, and one apple", does changing only the aspect
ratio preserve the intended scene, or does it induce object duplication and
compositional drift?

This is worth studying because existing text-to-image evaluation work already
treats count, object relations, and compositional faithfulness as distinct
capabilities rather than by-products of general image quality. GenEval
explicitly includes count and positional properties, while T2I-CompBench and
T2I-CompBench++ frame numeracy and complex composition as core weaknesses of
current systems. We will explore these questions using MidJourney and do so via
iterated diffusion generation, as well as outpainting.

As aspect ratio departs further from the model's "comfortable" regime,
exact-count fidelity decreases and duplication rate may increase. Newly
available canvas area may be filled not by inert background extension, but by
replication of semantically salient prompt objects. Models designed for or
evaluated on arbitrary/native resolutions should degrade less severely under
aspect-ratio sweeps than models whose generation pipeline is more tightly tied
to fixed-resolution conventions. Recent work on arbitrary/native-resolution
synthesis exists precisely because aspect ratio and resolution flexibility
remain technically non-trivial.

In other words, we would be testing not "can the model draw a knife, a pear,
and an apple?" but "does the model preserve a scene specification under
reframing?" If changing only image geometry systematically breaks cardinality
while preserving broad semantic theme, then geometry is exposing a weakness in
the model's scene representation. That is not a trivial rendering issue; it is
a controllability and representation issue.

In effect, the student will introduce a benchmark for scene-cardinality
preservation under aspect-ratio shift, showing that text-to-image models often
satisfy object prompts at square aspect ratios yet increasingly violate
exact-count constraints as the frame expands, and determine the threshold where
this happens.

## What you will need

Python. Prompting for diffusion models (such as MidJourney). Automated analysis
of images, and human analysis of images.

## Background reading

- [Compositional benchmarking for text-to-image models](https://arxiv.org/abs/2310.11513)
- [Arbitrary-resolution synthesis](https://arxiv.org/abs/2506.03131)
- [Native-resolution generation](https://arxiv.org/html/2408.11001v1)
- [Resolution flexibility in diffusion pipelines](https://arxiv.org/pdf/2403.02084)

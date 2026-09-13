---
# Copy this file, rename it (no leading underscore) and fill it in.
# Files starting with "_" are ignored, so this template never ships.
#
# The body is not rendered — the frontmatter is the whole record.
# Only `title` and `year` are required.

title: Full title of the paper, sentence case as published

# Full author list, in publication order.
authors:
  - First Author
  - Second Author
  - Third Author

# Which of the names above are DAIM-affiliated. Matched exactly against
# `authors`, and shown in bold on the page.
daimAuthors:
  - Second Author

# Journal, conference or preprint server.
venue: Journal of Something
# Volume, issue, pages, article number — whatever normally follows the venue.
venueDetail: 'Vol. 12, no. 3, pp. 145–160'   # optional

# Used for grouping on the page, so it is required.
year: 2026

# Journal article | Conference paper | Preprint | Book chapter |
# Thesis | Dataset | Software | Other
type: Journal article

# ── Links. All optional. Include whatever exists. ──
doi: 10.1000/example.2026.001          # bare DOI, no https://doi.org/ prefix
url: https://publisher.example/article  # publisher landing page
arxivUrl: https://arxiv.org/abs/0000.00000
pdfUrl: /publications/example.pdf       # or an external URL
codeUrl: https://github.com/DAIMCentre/example

# Research area ids from src/data/research-areas.ts:
#   frontier-ai | ai-for-health | ai-for-humanities |
#   ai-for-natural-science | ai-for-engineering-science
areas:
  - frontier-ai

draft: false   # true keeps it out of the build
---

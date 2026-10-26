import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Content collections for the DAIM open research portal.
 *
 * Adding content should mean adding a Markdown/MDX file — not editing page code.
 * Every page in `src/pages` reads from these collections and renders an honest
 * empty state when a collection has no entries.
 *
 * Files whose name starts with `_` are ignored (see the `[^_]*` glob), so each
 * folder carries a `_template.md` documenting its own frontmatter.
 */

const pattern = '**/[^_]*.{md,mdx}';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern }),
  schema: z.object({
    title: z.string(),
    /** Sits under the title on the card and the project page. */
    subtitle: z.string().optional(),
    /**
     * The question the project exists to answer. Shown first, before any
     * description, on both the card and the page.
     */
    question: z.string().optional(),
    /** One or two sentences. Shown on cards and on /projects. */
    summary: z.string(),
    /** What the work is concentrating on right now. */
    currentFocus: z.string().optional(),
    /**
     * Editorial illustration, e.g. /images/projects/name.svg. Line artwork in
     * the site's ink and rule colours — no photography, no gradients.
     */
    illustration: z.string().optional(),
    /** Description of the illustration for screen readers. */
    illustrationAlt: z.string().optional(),
    /**
     * Free text, shown verbatim as a badge. Keep it honest about maturity —
     * e.g. "Emerging research programme", "In development", "Experimental".
     * Do not imply deployment or external validation unless that is the case.
     */
    status: z.string(),
    /** Research area ids from src/data/research-areas.ts. */
    areas: z.array(z.string()).default([]),
    topics: z.array(z.string()).default([]),
    /** Surfaces the project in the homepage "Featured Research" section. */
    featured: z.boolean().default(false),
    /** Lower sorts first. */
    order: z.number().default(100),
    startYear: z.number().optional(),
    links: z
      .object({
        github: z.string().url().optional(),
        website: z.string().url().optional(),
        report: z.string().optional(),
      })
      .default({}),
    draft: z.boolean().default(false),
  }),
});

const reports = defineCollection({
  loader: glob({ base: './src/content/reports', pattern }),
  schema: z.object({
    /** Series identifier, e.g. "DAIM-RR-001". */
    number: z.string(),
    title: z.string(),
    /** Leave empty until confirmed — the UI shows "Authors to be confirmed". */
    authors: z.array(z.string()).default([]),
    /** Omit for unpublished drafts. */
    date: z.coerce.date().optional(),
    /** e.g. "Research agenda", "Technical report", "Benchmark", "Perspective". */
    type: z.string(),
    status: z.enum(['Draft', 'Preprint', 'Published']).default('Draft'),
    abstract: z.string(),
    pdfUrl: z.string().optional(),
    arxivUrl: z.string().url().optional(),
    githubUrl: z.string().url().optional(),
    doi: z.string().optional(),
  }),
});

const seminars = defineCollection({
  loader: glob({ base: './src/content/seminars', pattern }),
  schema: z.object({
    title: z.string(),
    speaker: z.string(),
    affiliation: z.string().optional(),
    date: z.coerce.date(),
    time: z.string().optional(),
    location: z.string().optional(),
    abstract: z.string().optional(),
    recordingUrl: z.string().url().optional(),
    registrationUrl: z.string().url().optional(),
  }),
});

const paperClub = defineCollection({
  loader: glob({ base: './src/content/paper-club', pattern }),
  schema: z.object({
    /** Title of the paper under discussion. */
    paperTitle: z.string(),
    paperAuthors: z.string().optional(),
    paperUrl: z.string().url().optional(),
    /** Venue or preprint server, e.g. "arXiv", "NeurIPS 2025". */
    venue: z.string().optional(),
    date: z.coerce.date(),
    presenter: z.string().optional(),
    /** The club's three standing questions. */
    whatIsNew: z.string().optional(),
    whyItMatters: z.string().optional(),
    whatCouldDaimDo: z.string().optional(),
  }),
});

/**
 * People listed on the portal. One file per person; every field except `name`
 * is optional. Setting `listed: false` keeps the file but hides the card.
 *
 * The official University of Hull DAIM page is the authoritative record of
 * membership — this is a portal directory, not the centre roster.
 */
const team = defineCollection({
  loader: glob({ base: "./src/content/team", pattern }),
  schema: ({ image }) =>
    z.object({
    name: z.string(),
    /** Grouping heading, e.g. "Centre lead", "Centre member". */
    group: z.string().default("Centre member"),
    /** Job title or role, exactly as the person wants it written. */
    role: z.string().optional(),
    /** School, department or faculty. */
    unit: z.string().optional(),
    /**
     * Optional headshot, relative to this file, e.g. `./your-name.jpg`.
     * Astro resizes and re-encodes it at build time, so drop in whatever you
     * have — a full-size phone photo is fine and will not be shipped raw.
     * Cards without a photo are a normal listing.
     */
    photo: image().optional(),
    /** Research area ids from src/data/research-areas.ts. */
    areas: z.array(z.string()).default([]),
    topics: z.array(z.string()).default([]),
    // --- contact and profile links: every one optional, include only what
    // --- you are happy to have on a public page.
    profileUrl: z.string().url().optional(),
    email: z.string().email().optional(),
    orcid: z.string().optional(),
    scholar: z.string().url().optional(),
    github: z.string().url().optional(),
    linkedin: z.string().url().optional(),
    researchgate: z.string().url().optional(),
    website: z.string().url().optional(),
    /** Set false to opt out without deleting the file. */
    listed: z.boolean().default(true),
    /** Lower sorts first within a group; ties fall back to name order. */
    order: z.number().default(100),
    }),
});

/**
 * Blog posts. Add a Markdown/MDX file here and it appears on /blogs with its
 * own page at /blogs/<filename>. Nothing else needs editing.
 */
const blogs = defineCollection({
  loader: glob({ base: './src/content/blogs', pattern }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** One or two sentences. Used on the index and for the page description. */
      description: z.string(),
      date: z.coerce.date(),
      /** One or more bylines, in the order they should be printed. */
      authors: z.array(z.string()).default([]),
      tags: z.array(z.string()).default([]),
      /** Draft posts are excluded from the build. */
      draft: z.boolean().default(false),
      /** Optional header image, sitting next to the Markdown file. */
      cover: image().optional(),
    }),
});
/**
 * Publications. Papers, conference contributions and preprints.
 *
 * One Markdown file per publication; the body is unused, so the frontmatter
 * is the whole record. Grouped by `year` on /publications, newest first.
 */
const publications = defineCollection({
  loader: glob({ base: './src/content/publications', pattern }),
  schema: z.object({
    title: z.string(),
    /** Author list, in publication order. May be truncated — see totalAuthors. */
    authors: z.array(z.string()).default([]),
    /**
     * The real number of authors, when `authors` lists only the first few.
     * Large collaborations run to dozens of names; the page prints the ones
     * listed and then "and N others" rather than the whole roll call.
     */
    totalAuthors: z.number().int().optional(),
    /**
     * Which of those names are DAIM-affiliated. Matched exactly against
     * `authors`, and shown in bold — the usual convention for a centre list.
     */
    daimAuthors: z.array(z.string()).default([]),
    /** Journal, conference or preprint server. */
    venue: z.string().optional(),
    /** Volume, pages, article number — whatever follows the venue name. */
    venueDetail: z.string().optional(),
    /** Used for grouping, so it is required even when the date is not. */
    year: z.number().int(),
    type: z
      .enum([
        'Journal article',
        'Conference paper',
        'Preprint',
        'Book chapter',
        'Thesis',
        'Dataset',
        'Software',
        'Other',
      ])
      .default('Journal article'),
    /** Bare DOI, without the https://doi.org/ prefix. */
    doi: z.string().optional(),
    url: z.string().url().optional(),
    arxivUrl: z.string().url().optional(),
    pdfUrl: z.string().optional(),
    codeUrl: z.string().url().optional(),
    /** Research area ids from src/data/research-areas.ts. */
    areas: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});
/**
 * PhD and MSc by Thesis project opportunities.
 *
 * `expires` is the date the project leaves the catalogue. /opportunities drops
 * anything already past, so an entry stops being advertised on its own without
 * anybody having to remember to delete it. Leave it unset for an open-ended
 * project.
 */
const opportunities = defineCollection({
  loader: glob({ base: './src/content/opportunities', pattern }),
  schema: z.object({
    title: z.string(),
    /** Degree the project is offered for. */
    level: z.enum(['PhD', 'MSc by Thesis']),
    /** Name as the supervisor wants it written. */
    supervisor: z.string(),
    /** Their University staff page. Their email lives there; the site does not
        republish colleagues' email addresses. */
    supervisorUrl: z.string().url().optional(),
    /** Short keywords for scanning. Use wording from the project description. */
    topics: z.array(z.string()).default([]),
    /** Research area ids from src/data/research-areas.ts. */
    areas: z.array(z.string()).default([]),
    /** Past this date the entry stops being published. */
    expires: z.coerce.date().optional(),
    /** Lower sorts first; ties fall back to title order. */
    order: z.number().default(100),
  }),
});

/**
 * Guidance notes written by DAIM staff for students and researchers.
 *
 * These are an individual's notes, not University regulation. /guidance says
 * so in the open, so nothing here can be mistaken for the module handbook.
 */
const guidance = defineCollection({
  loader: glob({ base: './src/content/guidance', pattern }),
  schema: z.object({
    title: z.string(),
    /** One or two sentences. Used on the index and for the page description. */
    description: z.string(),
    /** Bylines, in the order they should be printed. */
    authors: z.array(z.string()).default([]),
    /** Staff page for the first author, when there is one. */
    authorUrl: z.string().url().optional(),
    /** Who the note is written for, e.g. "MSc dissertation students". */
    audience: z.string().optional(),
    updated: z.coerce.date(),
    order: z.number().default(100),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  projects,
  opportunities,
  guidance,
  reports,
  seminars,
  paperClub,
  team,
  blogs,
  publications,
};

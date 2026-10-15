/**
 * Site-wide constants, navigation and outbound links.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * PLACEHOLDERS
 * Anything with `href: null` is deliberately unset. The UI renders those as a
 * visible "placeholder" marker rather than a working link, so nothing on the
 * published site can be mistaken for a confirmed institutional detail.
 * Fill in the value and the marker disappears automatically.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const SITE = {
  title: 'DAIM Research',
  shortName: 'DAIM',
  longName:
    'Centre of Excellence for Data Science, Artificial Intelligence and Modelling',
  institution: 'University of Hull',
  tagline: 'Data Science · Artificial Intelligence · Modelling',
  description:
    'The open research portal of DAIM — the Centre of Excellence for Data Science, Artificial Intelligence and Modelling at the University of Hull. Research directions, projects, reports, open-source work and research community.',
  url: 'https://daimcentre.github.io',
  ogImage: '/social/daim-og.png',
  logo: '/logos/daim-uoh-logo.svg',
  logoAlt: 'DAIM Centre, University of Hull',
  motto: 'Stay curious. Build openly. Collaborate widely.',
} as const;

export type NavItem = { label: string; href: string };

/**
 * Sections that are written but not published yet.
 *
 * Parked sections are listed in GATED_ROUTES below. To bring one back, do BOTH:
 *   1. set its flag to `true` below, and
 *   2. drop the leading underscore from its file in `src/pages/`
 *      (Astro ignores files in pages/ whose name starts with an underscore).
 *
 * The flag on its own would publish links to a page that is not built.
 */
export const FEATURES = {
  reports: false,
  blogs: true,
} as const;

/** Full navigation, including parked entries. */
const ALL_NAV: NavItem[] = [
  { label: 'Research', href: '/research' },
  { label: 'Projects', href: '/projects' },
  { label: 'Publications', href: '/publications' },
  { label: 'Reports', href: '/reports' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Opportunities', href: '/opportunities' },
  { label: 'Team', href: '/team' },
];

/**
 * Nav entries that only appear once their flag is on. Adding a route here
 * hides it from the header, the mobile menu and the 404 page in one place.
 */
const GATED_ROUTES: Record<string, keyof typeof FEATURES> = {
  '/reports': 'reports',
  '/blogs': 'blogs',
};

export const NAV: NavItem[] = ALL_NAV.filter((item) => {
  const flag = GATED_ROUTES[item.href];
  return flag ? FEATURES[flag] : true;
});

export type ExternalLink = {
  label: string;
  /** `null` = not yet supplied; the UI will render a placeholder marker. */
  href: string | null;
  note?: string;
};

export const LINKS = {
  github: {
    label: 'github.com/DAIMCentre',
    href: 'https://github.com/DAIMCentre',
  } satisfies ExternalLink,

  university: {
    label: 'University of Hull',
    href: 'https://www.hull.ac.uk',
  } satisfies ExternalLink,

  /** The official University of Hull DAIM page — the authoritative roster. */
  officialPage: {
    label: 'Official DAIM website',
    href: 'https://www.hull.ac.uk/research/centres/centre-of-excellence-for-data-science-artificial-intelligence-and-modelling',
  } satisfies ExternalLink,

  linkedin: {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/daim-data-science-and-artificial-intelligence-university-of-hull/',
  } satisfies ExternalLink,

  contact: {
    label: 'DAIMenquiries@hull.ac.uk',
    href: 'mailto:DAIMenquiries@hull.ac.uk',
  } satisfies ExternalLink,

  /** Official course page for the MSc by Thesis and PhD, including the
      entry requirements, start dates and the application form. */
  researchDegrees: {
    label: 'Data Science research degrees',
    href: 'https://www.hull.ac.uk/study/postgraduate-research/courses/data-science-research-degrees',
  } satisfies ExternalLink,
} as const;


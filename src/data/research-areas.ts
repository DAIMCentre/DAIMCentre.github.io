/**
 * DAIM's research themes. Shared by the homepage grid and /research so the two
 * can never drift apart — edit here only.
 *
 * Structure: one methods theme (Frontier AI) followed by the domains it is put
 * to work in. The homepage renders the first entry full width to reflect that.
 *
 * `detail` is used on /research. It describes what we are interested in and
 * why. It makes no claim about specific results, funding or partnerships.
 *
 * Adding a theme: append an entry. The homepage grid, the /research index and
 * the area labels on /projects and /team all follow automatically. Ids are used
 * in content frontmatter (`areas:`), so renaming one means updating those files.
 */

export type ResearchArea = {
  id: string;
  emoji: string;
  title: string;
  summary: string;
  detail: string[];
  topics: string[];
};

export const RESEARCH_AREAS: ResearchArea[] = [
  {
    id: 'frontier-ai',
    emoji: '🤖',
    title: 'Frontier AI',
    summary:
      'What is changing in AI, and what that changes about the research we can do.',
    detail: [
      'AI moves faster than any one group can keep up with. This theme is how we try: reading the new work, testing it, and forming a view on which parts of it matter for us.',
      'Most of our interest sits in agentic systems that plan and act, in learning from feedback, and in large models used as scientific instruments rather than products.',
      'Trust runs through all of it. If a system is going to be relied on, someone has to be able to show why. That question turns up in every other theme on this page.',
    ],
    topics: [
      'Agentic AI',
      'Reinforcement Learning',
      'Generative AI',
      'Foundation Models',
      'Autonomous Systems',
      'Responsible and Trustworthy AI',
    ],
  },
  {
    id: 'ai-for-health',
    emoji: '🧬',
    title: 'AI for Health',
    summary:
      'Health data, clinical decisions, and the cost of being confidently wrong.',
    detail: [
      'Health is a hard place to do machine learning well. Records are fragmented and unevenly kept. The people the data came from are often not the people a model ends up being used on. The bar for evidence is higher than in most fields, and it should be.',
      'So accuracy is only part of the problem. How does a model behave on patients it never saw in training? What would a clinician need to see before acting on what it says? Those questions interest us as much as the modelling does.',
    ],
    topics: [
      'Clinical Data',
      'Medical Imaging',
      'Population Health',
      'Decision Support',
      'Data Governance',
      'Generalisation',
    ],
  },
  {
    id: 'ai-for-humanities',
    emoji: '🏛️',
    title: 'AI for Humanities',
    summary:
      'Computational methods applied to humanities material, which rarely behaves like a dataset.',
    detail: [
      'Archives are partial. Language shifts under you. Sources contradict each other. Treat all of that as noise to be cleaned away and you usually delete the thing that made the question worth asking.',
      'The traffic runs both ways. Computation can open up collections far larger than anyone could read. Humanities scholarship, in return, is very good at pressing on provenance, interpretation and bias, which machine learning tends to leave unexamined.',
    ],
    topics: [
      'Digital Humanities',
      'Cultural Heritage',
      'Archives and Text',
      'Language',
      'Interpretation',
      'Provenance',
    ],
  },
  {
    id: 'ai-for-natural-science',
    emoji: '🧪',
    title: 'AI for Natural Science',
    summary:
      'AI as an instrument for scientific work: modelling natural systems, and getting to evidence faster.',
    detail: [
      'Natural science already has good theory, and the point is not to replace it. Learning earns its place where the theory is expensive to run, incomplete, or hard to reconcile with the measurements you can actually take.',
      'That makes the constraints part of the research problem. A surrogate model can be fast, fit the data, and still break conservation of energy. It is then useless as a scientific instrument, whatever its error numbers say.',
    ],
    topics: [
      'Scientific AI',
      'Surrogate Modelling',
      'Data-Driven Discovery',
      'Environmental Modelling',
      'Physical Constraints',
      'Uncertainty',
    ],
  },
  {
    id: 'ai-for-engineering-science',
    emoji: '⚙️',
    title: 'AI for Engineering Science',
    summary:
      'Engineered systems: modelling them, reasoning about them, and improving how they are designed and run.',
    detail: [
      'Engineering already runs on models: simulations, digital twins, optimisation problems, control laws. Every one of them depends on a person who knows the domain well enough to choose the right simplifications.',
      'We are interested in what changes when an AI system takes part in that loop instead of watching from outside it. Choosing what to model. Judging which assumptions hold. Working out why something behaves the way it does.',
      'What matters in the end is the decision, not the prediction. A model can be accurate and still push a design in the wrong direction.',
    ],
    topics: [
      'Simulation',
      'Digital Twins',
      'Optimisation',
      'Control',
      'Engineering Decision Intelligence',
      'Energy and Infrastructure',
    ],
  },
];

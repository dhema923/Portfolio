/**
 * Single source of truth for portfolio copy, links, and career details.
 * Edit this file to update the website. Do not invent public URLs or screenshots.
 */

export const site = {
  name: "Hema Duvvuru",
  role: "Frontend Developer",
  location: "Bengaluru, India",
  headline: "Frontend Developer crafting thoughtful digital experiences.",
  description:
    "I build responsive, accessible, and high-performance web applications with React and Next.js. With 4+ years of UI development experience and additional expertise in AI, I bring both design precision and engineering depth to the products I build.",
  lookingFor:
    "UI Developer, Frontend Developer, React Developer, and Next.js Developer roles in Bengaluru.",
  email: "dhema923@gmail.com",
  phone: "+91 9908859518",
  phoneHref: "tel:+919908859518",
  linkedin: "https://www.linkedin.com/in/hema-duvvuru/",
  github: "",
  resumePath: "/resume/Hema_Resume_React.pdf",
  resumeAvailable: true,
  seo: {
    title: "Hema Duvvuru — Frontend Developer in Bengaluru",
    description:
      "Frontend Developer with 4+ years of UI development experience in React, Next.js, TypeScript, and Angular. Based in Bengaluru. Open to UI, Frontend, React, and Next.js roles.",
    url: "https://hema-duvvuru.vercel.app",
  },
};

export const nav = [
  { href: "#home", label: "Home" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
  { href: site.resumePath, label: "Resume", external: true },
] as const;

export const highlights = [
  { value: "4+", label: "Years of UI development" },
  { value: "2", label: "Product companies" },
  { value: "React", label: "Primary UI stack" },
  { value: "BLR", label: "Based in Bengaluru" },
] as const;

export type ProjectKind = "ui" | "ai";

export type Project = {
  title: string;
  company: string;
  period: string;
  role: string;
  kind: ProjectKind;
  stack: string[];
  summary: string;
  details: string[];
  availability: string;
};

export const projects: Project[] = [
  {
    title: "Death Claims platform",
    company: "Aieton Labs",
    period: "Mar 2026 – Sep 2026",
    role: "UI & AI Developer",
    kind: "ui",
    stack: ["React", "Next.js", "Tailwind CSS", "Ant Design", "Web Speech API"],
    summary:
      "Enterprise claims interfaces from voice-enabled death intimation through processing, dashboards, document review, beneficiary management, and multi-stage workflows.",
    details: [
      "Built voice-to-text death intimation with the browser Web Speech API — the first step of a claim, where the intimating person's speech is converted to text and automatically fills the intimation form.",
      "Built responsive React and Next.js screens for claims processing, dashboards, document review, beneficiary management, and workflow management.",
      "Designed complex form flows, data-driven screens, and reusable components with Tailwind CSS and Ant Design.",
      "Integrated the frontend with 28+ REST APIs built with FastAPI and Pydantic.",
      "Collaborated with backend and AI teams to surface document processing, validation, retrieval, and an evidence-based chatbot in production web interfaces.",
    ],
    availability:
      "Confidential enterprise product. No public demo or screenshots.",
  },
  {
    title: "Expert Solver platform",
    company: "Aieton Labs",
    period: "Jul 2025 – Oct 2025",
    role: "UI Developer",
    kind: "ui",
    stack: ["Next.js", "React", "Ant Design", "Tailwind CSS"],
    summary:
      "Enterprise modules for loan, property, and injury claims — complex forms, document workflows, tasking, and reporting.",
    details: [
      "Developed Next.js and React modules for loan, property, and injury claims workflows.",
      "Built complex forms, document upload and preview modals, task management, communication logs, and reporting dashboards.",
      "Created reusable UI components and shared state logic, reducing code redundancy by 95%.",
      "Implemented responsive layouts and shared design patterns across enterprise modules.",
    ],
    availability:
      "Confidential enterprise product. No public demo or screenshots.",
  },
  {
    title: "OPM Dashboard",
    company: "Aieton Labs",
    period: "Jul 2025 – Oct 2025",
    role: "UI Developer",
    kind: "ui",
    stack: ["React", "Vite", "Tailwind CSS"],
    summary:
      "Internal operational dashboard with charts, tables, modals, forms, and reusable UI components.",
    details: [
      "Built an enterprise dashboard in React with interactive charts, tables, modals, and forms.",
      "Improved initial load time by 40% through Vite optimization, lazy loading, and code splitting.",
      "Developed responsive interfaces and cross-browser compatible modules.",
    ],
    availability: "Internal enterprise dashboard. Not publicly available.",
  },
  {
    title: "Gas Dashboard",
    company: "Innova Solutions",
    period: "Sep 2024 – Jul 2025",
    role: "Frontend Developer",
    kind: "ui",
    stack: ["React 18+", "Material UI", "AG Grid", "Jest", "Axios"],
    summary:
      "High-volume enterprise dashboard handling large datasets with advanced grid interactions and tested UI.",
    details: [
      "Built a scalable React 18+ dashboard handling 100k+ records with AG Grid, including advanced sorting and filtering.",
      "Implemented custom Axios interceptors for API error handling and response caching.",
      "Achieved 92% unit test coverage with Jest and React Testing Library.",
    ],
    availability: "Client enterprise platform. Not publicly available.",
  },
  {
    title: "GATT — Gas Trading Analytics Tool",
    company: "Innova Solutions",
    period: "Dec 2023 – Sep 2024",
    role: "Frontend Developer",
    kind: "ui",
    stack: ["Angular", "TypeScript", "Chart.js", "Leaflet"],
    summary:
      "Gas trading analytics interface with live charting and geo-mapped asset views.",
    details: [
      "Built an Angular analytics UI with real-time charting and live data feeds.",
      "Integrated Chart.js and Leaflet for pricing visualization and geo-mapped asset tracking.",
      "Optimized bundle size with lazy-loaded feature modules and shared Angular services.",
    ],
    availability: "Client enterprise platform. Not publicly available.",
  },
  {
    title: "GSD — Gas Supply & Distribution",
    company: "Innova Solutions",
    period: "Oct 2022 – Nov 2023",
    role: "Junior Software Engineer",
    kind: "ui",
    stack: ["Angular", "TypeScript", "NgRx", "RxJS", "HTML/CSS"],
    summary:
      "Responsive Angular components and reactive form state for a gas supply domain application.",
    details: [
      "Built responsive Angular components with TypeScript, HTML, and CSS.",
      "Managed complex form state and reactive data streams with NgRx and RxJS.",
      "Improved UX by persisting user preferences in LocalStorage.",
    ],
    availability: "Client enterprise platform. Not publicly available.",
  },
];

export const aiProjects: Project[] = [
  {
    title: "Death Claims — AI surfaces",
    company: "Aieton Labs",
    period: "Mar 2026 – Sep 2026",
    role: "UI & AI Developer",
    kind: "ai",
    stack: ["Python", "FastAPI", "Pydantic", "LangGraph", "RAG"],
    summary:
      "AI capabilities delivered through the claims UI: document processing, retrieval, and an evidence-based chatbot for claim processors.",
    details: [
      "Worked with backend and AI teams to integrate document processing, validation, retrieval, and AI capabilities into production-ready web interfaces.",
      "Developed AI-powered chatbot interfaces so claim processors can query uploaded documents and receive evidence-based responses.",
    ],
    availability: "Same confidential product as the Death Claims UI work.",
  },
];

export type Role = {
  title: string;
  period: string;
  emphasis: "ui" | "ai" | "foundation";
  bullets: string[];
  stack?: string[];
};

export type Experience = {
  company: string;
  title: string;
  period: string;
  summary: string;
  roles: Role[];
};

export const experience: Experience[] = [
  {
    company: "Aieton Labs Private Limited",
    title: "UI Developer, with additional AI work",
    period: "Jul 2025 – Sep 2026",
    summary:
      "Frontend-first work on insurance and operations products, with separate AI contributions on claims workflows.",
    roles: [
      {
        title: "Death Claims — UI development",
        period: "Mar 2026 – Sep 2026",
        emphasis: "ui",
        stack: ["React", "Next.js", "Tailwind CSS", "Ant Design", "Web Speech API"],
        bullets: [
          "Built voice-to-text death intimation using the Web Speech API, converting the intimating person's speech into text to auto-fill the intimation form.",
          "Developed responsive enterprise interfaces for claims processing, dashboards, document review, beneficiary management, and multi-stage workflows.",
          "Built reusable UI components and workflow-driven interfaces with Tailwind CSS and Ant Design.",
          "Designed complex form flows and data-driven screens for insurance workflows.",
          "Integrated frontend applications with 28+ REST APIs.",
        ],
      },
      {
        title: "Death Claims — AI contributions",
        period: "Mar 2026 – Sep 2026",
        emphasis: "ai",
        stack: ["Python", "FastAPI", "LangGraph", "RAG"],
        bullets: [
          "Collaborated on integrating document processing, validation, retrieval, and AI capabilities into production web interfaces.",
          "Built chatbot interfaces for querying uploaded documents with evidence-based responses.",
        ],
      },
      {
        title: "Expert Solver Platform — Loan, Property & Injury Claims",
        period: "Jul 2025 – Oct 2025",
        emphasis: "ui",
        stack: ["Next.js", "React", "Ant Design", "Tailwind CSS"],
        bullets: [
          "Developed enterprise modules for loan, property, and injury claims workflows.",
          "Built complex forms, document upload and preview modals, task management, communication logs, and reporting dashboards.",
          "Created reusable UI components and shared state logic, reducing code redundancy by 95%.",
        ],
      },
      {
        title: "OPM Dashboard",
        period: "Jul 2025 – Oct 2025",
        emphasis: "ui",
        stack: ["React", "Vite", "Tailwind CSS"],
        bullets: [
          "Built an internal operational dashboard with charts, tables, modals, forms, and reusable components.",
          "Improved initial application load time by 40% with Vite optimization, lazy loading, and code splitting.",
        ],
      },
    ],
  },
  {
    company: "Innova Solutions",
    title: "UI Developer",
    period: "Oct 2022 – Jul 2025",
    summary:
      "Three years of UI development on energy and trading applications — dashboards, analytics, reusable components, and tested React and Angular interfaces.",
    roles: [
      {
        title: "Gas Dashboard",
        period: "Sep 2024 – Jul 2025",
        emphasis: "ui",
        stack: ["React 18+", "Material UI", "AG Grid", "Jest", "Axios"],
        bullets: [
          "Built a scalable React 18+ dashboard handling 100k+ records with AG Grid, including advanced sorting and filtering.",
          "Implemented custom Axios interceptors for API error handling and response caching.",
          "Achieved 92% unit test coverage with Jest and React Testing Library.",
        ],
      },
      {
        title: "GATT — Gas Trading Analytics Tool",
        period: "Dec 2023 – Sep 2024",
        emphasis: "ui",
        stack: ["Angular", "TypeScript", "Chart.js", "Leaflet"],
        bullets: [
          "Built an Angular gas trading analytics UI with real-time charting and live data feeds.",
          "Integrated Chart.js and Leaflet for pricing visualization and geo-mapped asset tracking.",
          "Optimized bundle size with lazy-loaded feature modules and shared services.",
        ],
      },
      {
        title: "GSD — Gas Supply & Distribution",
        period: "Oct 2022 – Nov 2023",
        emphasis: "ui",
        stack: ["Angular", "TypeScript", "NgRx", "RxJS"],
        bullets: [
          "Built responsive Angular components with TypeScript, HTML, and CSS for a gas supply domain application.",
          "Managed complex form state and reactive data streams with NgRx and RxJS.",
          "Improved UX by persisting user preferences via LocalStorage.",
        ],
      },
    ],
  },
  {
    company: "Indian Servers",
    title: "Machine Learning Trainee",
    period: "Sep 2021 – Dec 2021",
    summary:
      "Early foundation in supervised learning — not frontend work, included for an accurate career timeline.",
    roles: [
      {
        title: "Machine Learning Trainee",
        period: "Sep 2021 – Dec 2021",
        emphasis: "foundation",
        bullets: [
          "Explored supervised learning, regression pipelines, cost function analysis, and model evaluation metrics.",
        ],
      },
    ],
  },
];

export const about = {
  paragraphs: [
    "I am a frontend developer with more than four years of professional UI development. I care about interfaces that are precise, accessible, and fast — the kind of work that holds up in real enterprise use, not just in a demo.",
    "At Innova Solutions I spent nearly three years building React and Angular applications: high-volume dashboards, trading analytics, complex forms, and reusable component systems. That is the core of how I work — component design, state, API integration, and responsive layout.",
    "At Aieton Labs I continued as a UI developer on Next.js, React, Tailwind CSS, and Ant Design, and also contributed to AI-powered claims features. I treat AI as additional depth, not as a replacement for frontend craft.",
    "I am based in Bengaluru and looking for UI, frontend, React, and Next.js roles where design quality and engineering rigor both matter.",
  ],
  education: {
    school: "Narayana Engineering College",
    degree: "B.Tech in Computer Science and Engineering",
    period: "Jun 2018 – Jun 2022",
  },
};

export const skillGroups = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Angular",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "UI and styling",
    items: [
      "Tailwind CSS",
      "Ant Design",
      "Material UI",
      "Bootstrap",
      "Responsive design",
    ],
  },
  {
    title: "State and APIs",
    items: [
      "Redux Toolkit",
      "React Query",
      "Context API",
      "REST APIs",
      "Axios",
    ],
  },
  {
    title: "Testing and tools",
    items: ["Jest", "React Testing Library", "Git", "GitHub", "Postman"],
  },
  {
    title: "AI and backend",
    items: ["Python", "FastAPI", "LangGraph", "RAG"],
  },
] as const;

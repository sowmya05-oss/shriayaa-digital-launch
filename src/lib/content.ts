import {
  Compass, Code2, ShieldCheck, Rocket, Server, BarChart3,
  Layers, RefreshCw, Puzzle, Network, LineChart, Beaker,
  Landmark, HeartPulse, ShoppingBag, Factory, Truck, GraduationCap, Building2, Sparkles,
  Gauge, Target, Handshake, Award, Globe2,
} from "lucide-react";

export const STATS = [
  { label: "Years delivering enterprise software", value: "12+" },
  { label: "Engineers, testers & architects on staff", value: "180" },
  { label: "Platforms & products shipped to production", value: "240" },
  { label: "Clients served across four continents", value: "60" },
  { label: "Uptime maintained across managed environments", value: "99.95%" },
  { label: "Release cycles automated end to end", value: "1,400+" },
] as const;

export const SERVICES = [
  {
    id: "consulting",
    icon: Compass,
    title: "Technology Consulting",
    short: "Evaluate options, assess systems, and define a clear, practical roadmap.",
    description:
      "Helping organizations evaluate technology options, assess current systems, and define a clear, practical roadmap that fits business goals and existing constraints.",
    includes: [
      "Technology & systems assessments",
      "Roadmap planning",
      "Architecture reviews",
      "Platform strategy",
    ],
  },
  {
    id: "development",
    icon: Code2,
    title: "Software Development",
    short: "Custom applications, platforms, and tools tailored to the business.",
    description:
      "Designing and building custom applications, platforms, and tools tailored to the client's business needs, regardless of industry.",
    includes: [
      "Web & enterprise applications",
      "Platform engineering",
      "Internal tools",
      "API development",
      "Legacy modernization",
    ],
  },
  {
    id: "qa",
    icon: ShieldCheck,
    title: "Quality Assurance & Testing",
    short: "Structured QA and testing tooling to ensure reliability before release.",
    description:
      "Building and running structured QA processes, along with the testing tools and frameworks needed to ensure reliability before release.",
    includes: [
      "Manual & automated testing",
      "Test framework & tool development",
      "Performance & load testing",
      "Regression & release testing",
    ],
  },
  {
    id: "deployment",
    icon: Rocket,
    title: "Deployment Services",
    short: "Repeatable, low-risk release practices from build to production.",
    description:
      "Managing the movement of software from build to release with repeatable, low-risk deployment practices.",
    includes: [
      "Release management",
      "CI/CD pipeline setup",
      "Environment promotion (dev → test → production)",
      "Rollback & release governance",
    ],
  },
  {
    id: "infrastructure",
    icon: Server,
    title: "Infrastructure Services",
    short: "On-premise, cloud, or hybrid environments — set up and managed.",
    description:
      "Setting up and managing the technical environments — on-premise, cloud, or hybrid — that applications run on.",
    includes: [
      "Infrastructure provisioning",
      "Environment setup (work / test / production)",
      "Cloud & on-prem support",
      "Monitoring & maintenance",
    ],
  },
  {
    id: "data",
    icon: BarChart3,
    title: "Data & Analytics Services",
    short: "Systems, components, and tools to deliver meaningful analytics.",
    description:
      "Building the systems, components, and tools required to collect, process, and deliver meaningful analytics that support real decisions.",
    includes: [
      "Analytics platform & component development",
      "Reporting tools",
      "Data pipeline & testing tool development",
      "Dashboarding",
    ],
  },
] as const;

export const WHY_US = [
  { icon: Layers, title: "End-to-End Delivery", desc: "One partner from consulting through to production support." },
  { icon: Globe2, title: "Domain-Agnostic Capability", desc: "A proven approach adaptable to any industry vertical." },
  { icon: ShieldCheck, title: "Strong Quality Discipline", desc: "Dedicated QA and testing tooling built alongside every delivery." },
  { icon: Rocket, title: "Reliable Infrastructure & Deployment", desc: "Repeatable, low-risk release practices at every stage." },
  { icon: LineChart, title: "Practical Analytics", desc: "Built for real decision-making needs, not generic dashboards." },
] as const;

export const SOLUTIONS = [
  { icon: RefreshCw, title: "Digital Transformation", desc: "Move core operations onto modern, connected platforms." },
  { icon: Layers, title: "Modernization", desc: "Refactor and replatform legacy systems with minimal disruption." },
  { icon: Puzzle, title: "Platform & Component Development", desc: "Reusable platforms and components engineered for scale." },
  { icon: Network, title: "Integration & Environment Setup", desc: "Connect systems and stand up the environments they need." },
  { icon: LineChart, title: "Analytics-Driven Improvement", desc: "Turn operational data into measurable improvement." },
  { icon: Beaker, title: "Quality Engineering", desc: "Automation frameworks and QA practices built into delivery." },
] as const;

export const INDUSTRIES = [
  { icon: Landmark, name: "Banking & Financial Services" },
  { icon: HeartPulse, name: "Healthcare" },
  { icon: ShoppingBag, name: "Retail & E-commerce" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Truck, name: "Logistics" },
  { icon: GraduationCap, name: "Education" },
  { icon: Building2, name: "Government & Public Sector" },
  { icon: Sparkles, name: "Startups & SaaS" },
] as const;

export const OUTCOMES = [
  "Faster, more predictable release cycles",
  "Higher software quality with fewer production incidents",
  "Lower operational cost through automation and modernization",
  "Clearer visibility into performance through analytics",
  "Reduced technology risk with structured deployment practices",
  "Scalable platforms that grow with the business",
] as const;

export const VALUES = [
  { icon: Award, title: "Quality", desc: "Reliability and craftsmanship are non-negotiable." },
  { icon: Globe2, title: "Domain Agnosticism", desc: "Our capabilities adapt to your industry, not the other way around." },
  { icon: ShieldCheck, title: "Reliability", desc: "Repeatable practices that hold up under real production load." },
  { icon: Target, title: "Precision", desc: "Deliberate engineering choices, not reactive shortcuts." },
  { icon: Handshake, title: "Partnership", desc: "We stay accountable from first workshop through long-term support." },
] as const;

export const APPROACH_STEPS = [
  { n: "01", title: "Understand", desc: "Business goals, users, and existing landscape." },
  { n: "02", title: "Assess", desc: "Current systems, risks, and technical fit." },
  { n: "03", title: "Design", desc: "Architecture, roadmap, and delivery plan." },
  { n: "04", title: "Build & Test", desc: "Engineer with QA and automation from day one." },
  { n: "05", title: "Deploy", desc: "Low-risk, repeatable release to production." },
  { n: "06", title: "Support", desc: "Monitor, maintain, and evolve continuously." },
] as const;

export const CAPABILITIES = [
  { icon: Gauge, title: "Faster time-to-market for new products" },
  { icon: ShieldCheck, title: "Higher release quality and fewer regressions" },
  { icon: RefreshCw, title: "Modernized legacy systems and platforms" },
  { icon: Server, title: "Reliable environments across cloud & on-prem" },
  { icon: LineChart, title: "Analytics that inform real decisions" },
  { icon: Rocket, title: "Automated CI/CD and deployment pipelines" },
  { icon: Puzzle, title: "Reusable components engineered for scale" },
  { icon: Beaker, title: "Custom test frameworks & QA tooling" },
] as const;

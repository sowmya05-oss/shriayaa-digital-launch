import {
  Award,
  BarChart3,
  Beaker,
  Code2,
  Compass,
  Gauge,
  Globe2,
  Handshake,
  Layers,
  LineChart,
  Puzzle,
  RefreshCw,
  Rocket,
  Server,
  ShieldCheck,
  Target,
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
    id: "technology-consulting",
    icon: Compass,
    title: "Technology Consulting",
    short: "Evaluate options, assess systems, define roadmap.",
    teaser: "Evaluate options, assess systems, define roadmap.",
    description: [
      "Helping organizations evaluate technology options, assess current systems, and define a clear, practical roadmap for growth and digital transformation. We work with your teams to understand your business goals, technical constraints, and market landscape, then craft a strategy that aligns with your vision.",
      "Our consulting approach is pragmatic, not theoretical. We don't just recommend technology; we help you implement it reliably.",
    ],
    includes: [
      "Technology & systems assessments",
      "Current state analysis and gap identification",
      "Technology roadmap planning",
      "Architecture reviews",
      "Platform strategy",
      "Vendor evaluation",
      "Cost-benefit analysis and business case development",
    ],
  },
  {
    id: "software-development",
    icon: Code2,
    title: "Software Development",
    short: "Custom applications and platforms tailored to your needs.",
    teaser: "Custom applications and platforms tailored to your needs.",
    description: [
      "Designing and building custom applications, platforms, and tools tailored to your business needs, regardless of industry or technical complexity. From web applications to enterprise systems, we deliver solutions that scale, perform, and integrate seamlessly with your existing tech stack.",
      "We focus on code quality, maintainability, and long-term value, not just shipping features fast.",
    ],
    includes: [
      "Web & mobile application development",
      "Enterprise system design and development",
      "Platform engineering",
      "Internal tools and custom applications",
      "API design and development",
      "Legacy system modernization and migration",
      "Technology stack optimization",
    ],
  },
  {
    id: "qa-testing",
    icon: ShieldCheck,
    title: "Quality Assurance & Testing",
    short: "Structured QA processes and testing tools for reliability.",
    teaser: "Structured QA processes and testing tools for reliability.",
    description: [
      "Building and running structured QA processes with the testing tools and frameworks needed to ensure reliability before every release. We don't just find bugs; we build systems and processes that prevent them from reaching production.",
      "From manual testing to automated frameworks, we create testing strategies that scale with your application.",
    ],
    includes: [
      "Manual testing and test case development",
      "Automated testing framework development",
      "Test automation implementation",
      "Performance and load testing",
      "Security and vulnerability testing",
      "Regression and release testing",
      "Test management and reporting tools",
      "Continuous integration testing setup",
    ],
  },
  {
    id: "deployment",
    icon: Rocket,
    title: "Deployment Services",
    short: "Repeatable, low-risk deployment practices.",
    teaser: "Repeatable, low-risk deployment practices.",
    description: [
      "Managing the movement of software from build to release with repeatable, low-risk deployment practices. We set up the processes and infrastructure that let you deploy confidently, whether it's multiple times a day or once a quarter.",
      "Our deployment strategies minimize downtime, enable quick rollbacks, and give you visibility into every release.",
    ],
    includes: [
      "Release management and planning",
      "CI/CD pipeline design and setup",
      "Environment promotion strategies",
      "Automated deployment workflows",
      "Rollback and disaster recovery planning",
      "Release governance and approval processes",
      "Deployment monitoring and logging",
      "Post-deployment validation and testing",
    ],
  },
  {
    id: "infrastructure",
    icon: Server,
    title: "Infrastructure Services",
    short: "Setup and manage technical environments at scale.",
    teaser: "Setup and manage technical environments at scale.",
    description: [
      "Setting up and managing the technical environments, on-premise, cloud, or hybrid, that applications run on reliably at scale. We handle infrastructure design, provisioning, security, and ongoing maintenance so your applications stay up and fast.",
      "From day-one setup to ongoing optimization, we take the operational burden off your team.",
    ],
    includes: [
      "Infrastructure design and architecture",
      "Cloud infrastructure provisioning",
      "On-premise and hybrid environment setup",
      "Network and security configuration",
      "Database infrastructure setup and optimization",
      "Environment management",
      "Monitoring, alerting, and observability",
      "Backup and disaster recovery setup",
      "Infrastructure maintenance and optimization",
    ],
  },
  {
    id: "data-analytics",
    icon: BarChart3,
    title: "Data & Analytics Services",
    short: "Build systems to collect, process, and deliver analytics.",
    teaser: "Build systems to collect, process, and deliver analytics.",
    description: [
      "Building the systems, components, and tools required to collect, process, and deliver meaningful analytics for real decision-making. We don't build generic dashboards; we build analytics solutions aligned with your business questions and metrics.",
      "From data pipelines to reporting tools, we create analytics infrastructure that drives action.",
    ],
    includes: [
      "Analytics platform and architecture design",
      "Data pipeline development and ETL tools",
      "Data warehouse and data lake setup",
      "Analytics component and tool development",
      "Reporting and dashboarding solutions",
      "Business intelligence implementation",
      "Data quality and testing frameworks",
      "Analytics tool optimization and performance tuning",
    ],
  },
] as const;

export const WHY_US = [
  {
    icon: Layers,
    title: "End-to-End Delivery",
    desc: "One partner from consulting through to production support. We own the entire journey.",
  },
  {
    icon: Globe2,
    title: "Domain-Agnostic Capability",
    desc: "A proven approach adaptable to any industry vertical.",
  },
  {
    icon: ShieldCheck,
    title: "Strong Quality Discipline",
    desc: "Dedicated QA and testing tooling built alongside every delivery.",
  },
  {
    icon: Rocket,
    title: "Reliable Infrastructure & Deployment",
    desc: "Repeatable, low-risk release practices.",
  },
  {
    icon: LineChart,
    title: "Practical Analytics",
    desc: "Built for real decision-making needs, not generic dashboards.",
  },
] as const;

export const VALUES = [
  { icon: Award, title: "Quality", desc: "Reliability and craftsmanship are non-negotiable." },
  {
    icon: Globe2,
    title: "Domain Agnosticism",
    desc: "Our capabilities adapt to your industry, not the other way around.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    desc: "Repeatable practices that hold up under real production load.",
  },
  {
    icon: Target,
    title: "Precision",
    desc: "Deliberate engineering choices, not reactive shortcuts.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    desc: "We stay accountable from first workshop through long-term support.",
  },
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
  { icon: Gauge, title: "Faster roadmap clarity" },
  { icon: ShieldCheck, title: "Reliable release quality" },
  { icon: RefreshCw, title: "Modernized legacy systems" },
  { icon: Server, title: "Scalable infrastructure" },
  { icon: LineChart, title: "Actionable analytics" },
  { icon: Rocket, title: "Low-risk deployments" },
  { icon: Puzzle, title: "Reusable components" },
  { icon: Beaker, title: "Custom QA tooling" },
] as const;

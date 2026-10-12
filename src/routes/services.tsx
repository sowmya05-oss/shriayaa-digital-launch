import { createFileRoute, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  ArrowRight,
  Check,
  Layers,
  Building2,
  Compass,
  Code2,
  Ticket,
  ShieldCheck,
  Cpu,
  Server,
  Route as RouteIcon,
  Landmark,
} from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { SERVICES } from "@/lib/content";

const PRACTICES = [
  {
    hash: "enterprise-talent",
    icon: Layers,
    title: "Enterprise Platforms",
    text: "SAP-led specialists across ERP and CRM platforms.",
  },
  {
    hash: "india-setup",
    icon: Building2,
    title: "India Business Set-up",
    text: "Support for establishing and running operations in India.",
  },
  {
    hash: "industry-advisory",
    icon: Compass,
    title: "Industry & Advisory",
    text: "Industry know-how, business building and advisory.",
  },
  {
    hash: "smart-systems",
    icon: Ticket,
    title: "Smart Access & Mobility Systems",
    text: "E-ticketing, access gates, embedded systems and journey platforms.",
  },
  {
    hash: "technology-services",
    icon: Code2,
    title: "Technology Services",
    text: "Consulting, development, QA, deployment, infrastructure and data.",
  },
] as const;

const SAP_SCOPE = [
  "S/4HANA implementation, conversion and support",
  "Finance: FI/CO, Central Finance, Group Reporting, Treasury, India GST",
  "Supply chain & manufacturing: MM, SD, PP, QM, PM, EWM, IBP, variant configuration",
  "Technical: ABAP, BTP, Fiori/UI5, Basis, integration, security & GRC",
  "Application support (AMS), hypercare and upgrades",
] as const;

const PLATFORM_CARDS = [
  {
    title: "Oracle",
    text: "Fusion Cloud ERP & EPM, E-Business Suite, SCM, HCM, integration, database administration",
  },
  {
    title: "Microsoft Dynamics 365",
    text: "Finance, Supply Chain Management, Business Central and Customer Engagement (CRM); Power Platform integration",
  },
  {
    title: "Salesforce",
    text: "Sales, Service and Experience Cloud, Automotive and Manufacturing Cloud, development, integration and administration",
  },
] as const;

const ENGAGEMENT_OPTIONS = [
  "Individual specialists (time & material)",
  "A small dedicated team for a module or workstream",
  "Flexible support capacity for go-lives, hypercare and peaks",
  "A team we build and run for you, with the option to transfer it later",
] as const;

const EXPECTATIONS = [
  "Profiles shared only after technical and process screening",
  "Clear rate cards and terms agreed upfront",
  "Statutory compliance, background checks, NDAs and client security onboarding handled by us",
  "Regular check-ins and a planned approach to continuity and backfill",
] as const;

const SMART_CAPABILITIES = [
  {
    icon: Ticket,
    title: "E-ticketing",
    text: "Automated fare collection with QR and NFC tickets.",
  },
  {
    icon: ShieldCheck,
    title: "Gates & validators",
    text: "Access-control gates for metro and rail, airport boarding and e-gates, parking, campuses and venues.",
  },
  {
    icon: Cpu,
    title: "Embedded systems",
    text: "Firmware, device integration, field deployment and maintenance support.",
  },
  {
    icon: Server,
    title: "Back-end platforms",
    text: "Ticketing, payment integration, reconciliation and dashboards.",
  },
  {
    icon: RouteIcon,
    title: "Journey planning",
    text: "Multimodal journey planners and passenger mobile apps.",
  },
  {
    icon: Landmark,
    title: "Public-sector delivery",
    text: "Programme management, bid support, integration and go-live.",
  },
] as const;

const INDIA_STAGES = [
  {
    title: "Assess",
    text: "Market and opportunity review, choice of entry route (liaison or branch office, subsidiary, LLP, joint venture), location options, an initial India business case.",
  },
  {
    title: "Establish",
    text: "Company incorporation and foreign investment route (with our CA, CS and legal partners), tax and statutory registrations, banking, accounting and payroll set-up, office and IT.",
  },
  {
    title: "Launch",
    text: "Hiring the first team and HR policies, selecting partners, distributors and suppliers, engaging with government and industry bodies, first customers.",
  },
  {
    title: "Run & grow",
    text: "Operating rhythm, KPIs and reporting, cost and cash discipline, expansion planning.",
  },
] as const;

const ADVISORY_PRACTICES = [
  {
    title: "Automotive & manufacturing",
    intro:
      "Our team has worked inside global automotive organisations across product programme finance, supplier cost, manufacturing and supply chain, dealer and fleet operations, and shared services. We bring that context to the technology and talent work we do for manufacturing clients, and offer advisory support on:",
    items: [
      "Programme business cases, investment tracking and product cost",
      "Supplier cost benchmarking and should-cost analysis",
      "Finance and supply-chain processes on SAP",
      "Shared-services and capability-centre design",
    ],
  },
  {
    title: "Mobility & electric vehicles",
    intro:
      "We have hands-on experience building and running mobility businesses in India — people and goods mobility, fleet operations, public transport ticketing and EV programmes. We help OEMs, fleet operators and start-ups with:",
    items: [
      "Business models, unit economics and pilots",
      "Fleet and logistics operating models",
      "Public-sector and B2G partnerships",
      "EV transition planning and total-cost-of-ownership analysis",
    ],
  },
  {
    title: "Strategy, finance & accounting",
    intro: "Chartered Accountant-led support for founders, management teams and boards:",
    items: [
      "Business plans, budgets and financial models",
      "Financial planning & analysis, cash-flow forecasting and cost reviews",
      "Internal controls and audit readiness",
      "Finance shared-services and ERP finance process design",
      "Investor readiness, due diligence support and board reporting",
    ],
  },
] as const;

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Shriyaa Quantum Software" },
      {
        name: "description",
        content:
          "Enterprise platform talent (SAP, Oracle, Microsoft Dynamics 365, Salesforce), India business set-up, industry and finance advisory, e-ticketing and access-gate systems, and end-to-end technology services.",
      },
      { property: "og:title", content: "Services — Shriyaa Quantum Software" },
      {
        property: "og:description",
        content:
          "Enterprise platform talent (SAP, Oracle, Microsoft Dynamics 365, Salesforce), India business set-up, industry and finance advisory, e-ticketing and access-gate systems, and end-to-end technology services.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const hash = useRouterState({ select: (state) => state.location.hash });

  useEffect(() => {
    if (!hash) return;
    window.setTimeout(() => {
      const target = document.getElementById(hash);
      if (!target) return;
      const top = target.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top, behavior: "smooth" });
    }, 50);
  }, [hash]);

  return (
    <PageLayout>
      <div aria-hidden="true" className="h-0" />
      <section className="relative overflow-hidden bg-[#FFFEF5] py-16 text-center sm:py-20 md:py-24">
        <div className="hero-ambient pointer-events-none absolute inset-0" />
        <div className="orbital-lines pointer-events-none absolute inset-0 opacity-[0.16]" />
        <div className="tech-hero-motif pointer-events-none absolute inset-0 opacity-[0.18]" />
        <div className="container-page relative">
          <h1 className="text-[2.2rem] font-semibold leading-tight text-[#A41E1B] md:text-5xl">
            Our services
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#8B2E1F] sm:text-lg">
            <span className="block">Five practices, one accountable team.</span>
            <span className="mt-2 block">
              Engage us for a single need — a specialist for your SAP programme, a plan for entering
              India, or a technology project — or combine them as your requirements grow.
            </span>
          </p>
        </div>
      </section>

      <section className="home-data-grid section-circuit-edge py-14 md:py-18">
        <div className="container-page">
          <div className="reveal mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C84D41]">
              Service Map
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#A41E1B] md:text-4xl">
              Five practices
            </h2>
          </div>
          <div className="reveal-stagger mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {PRACTICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <a
                  key={service.hash}
                  href={`/services#${service.hash}`}
                  className={`card-tech reveal group rounded-xl border border-[#D4A743]/20 bg-[#FFFBF0]/78 p-5 shadow-[0_14px_48px_rgba(139,46,31,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#A41E1B]/35 hover:bg-[#FFFEF5] hover:shadow-[0_22px_60px_rgba(139,46,31,0.09)] lg:col-span-2 ${index === 3 ? "lg:col-start-2" : index === 4 ? "lg:col-start-4" : ""}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#C84D41]/8 text-[#A41E1B]">
                      <Icon size={24} />
                    </div>
                    <span className="text-sm font-semibold text-[#D4A743]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-[#A41E1B]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#8B2E1F]">{service.text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#C84D41] underline-offset-4 group-hover:underline">
                    Explore practice <ArrowRight size={15} />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="enterprise-talent"
        className="service-node-band section-circuit-edge scroll-mt-28 border-y border-[#D4A743]/30 py-12 md:py-16"
      >
        <div className="container-page max-w-[1240px]">
          <article className="rounded-2xl border border-[#D4A743]/25 bg-[#FFFBF0]/88 p-6 shadow-[0_24px_90px_rgba(139,46,31,0.08)] md:p-10">
            <h2 className="text-3xl font-semibold leading-tight text-[#A41E1B] md:text-[2.45rem]">
              Enterprise Platforms — SAP-led
            </h2>
            <p className="mt-4 rounded-lg border-l-4 border-[#D4A743] bg-[#FFF9E6] px-4 py-3 text-base font-semibold leading-7 text-[#8B2E1F]">
              Specialists across leading ERP and CRM platforms, with SAP as our core practice.
            </p>
            <div className="mt-6 grid gap-4">
              <p className="text-base leading-7 text-[#8B2E1F]">
                <strong className="text-[#A41E1B]">Who it is for:</strong> IT service companies and
                enterprise teams running ERP and CRM programmes — particularly for automotive,
                heavy-equipment and industrial clients.
              </p>
              <p className="text-base leading-7 text-[#8B2E1F]">
                <strong className="text-[#A41E1B]">What we offer:</strong> Experienced specialists
                who can join your programme team, screened for technical skill and for understanding
                of the business processes behind the system. Our team has worked inside large
                manufacturing organisations, so we know what enterprise clients look for in a
                consultant.
              </p>
            </div>
            <PracticePhoto
              src="/enterprise-platforms.png"
              alt="Enterprise platform and SAP service concepts"
              className="mt-6 aspect-[16/7] w-full"
            />
            <div className="mt-8 rounded-xl border border-[#D4A743]/25 bg-[#FFFEF5] p-5">
              <h3 className="text-lg font-semibold text-[#A41E1B]">SAP</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {SAP_SCOPE.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm leading-6 text-[#8B2E1F]"
                  >
                    <Check size={17} className="mt-1 shrink-0 text-[#A41E1B]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <h3 className="mt-9 text-xl font-semibold text-[#A41E1B]">Also supported</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {PLATFORM_CARDS.map((platform) => (
                <article
                  key={platform.title}
                  className="rounded-xl border border-[#D4A743]/25 bg-[#FFFEF5] p-5"
                >
                  <h4 className="font-semibold text-[#A41E1B]">{platform.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-[#8B2E1F]">{platform.text}</p>
                </article>
              ))}
            </div>
            <h3 className="mt-9 text-xl font-semibold text-[#A41E1B]">Ways to engage</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {ENGAGEMENT_OPTIONS.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-[#D4A743]/25 bg-[#FFFEF5] p-4 text-sm font-medium leading-6 text-[#8B2E1F]"
                >
                  {item}
                </li>
              ))}
            </ul>
            <h3 className="mt-9 text-xl font-semibold text-[#A41E1B]">What you can expect</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {EXPECTATIONS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm leading-6 text-[#8B2E1F]"
                >
                  <Check size={17} className="mt-1 shrink-0 text-[#A41E1B]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#C84D41_0%,#C84D41_38%,#D4A743_100%)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5"
              >
                Discuss Your Requirement <ArrowRight size={16} />
              </a>
            </div>
          </article>
        </div>
      </section>

      <section
        id="india-setup"
        className="service-node-band-alt section-circuit-edge scroll-mt-28 border-y border-[#D4A743]/30 py-12 md:py-16"
      >
        <div className="container-page max-w-[1240px]">
          <article className="rounded-2xl border border-[#D4A743]/25 bg-[#FFFBF0]/88 p-6 shadow-[0_24px_90px_rgba(139,46,31,0.08)] md:p-10">
            <h2 className="text-3xl font-semibold leading-tight text-[#A41E1B] md:text-[2.45rem]">
              India Business Set-up
            </h2>
            <p className="mt-4 rounded-lg border-l-4 border-[#D4A743] bg-[#FFF9E6] px-4 py-3 text-base font-semibold leading-7 text-[#8B2E1F]">
              Practical, end-to-end support to establish and run your operations in India.
            </p>
            <div className="mt-6 grid gap-4">
              <p className="text-base leading-7 text-[#8B2E1F]">
                <strong className="text-[#A41E1B]">Who it is for:</strong> Overseas companies
                considering India — whether to sell, source, build a team or set up a capability
                centre.
              </p>
              <p className="text-base leading-7 text-[#8B2E1F]">
                <strong className="text-[#A41E1B]">What we offer:</strong> Practical, end-to-end
                support from the first assessment through to a running operation. Our team has set
                up and run business operations in India and worked with central and state government
                bodies, so we understand both the formal steps and the practical realities.
              </p>
            </div>
            <PracticePhoto
              src="https://images.unsplash.com/photo-1763234110845-29547470e9f2?auto=format&fit=crop&w=1100&q=82"
              alt="A modern office building in Bengaluru, India"
              className="mt-6 aspect-[16/7] w-full"
            />
            <div className="relative mt-9 grid gap-5 lg:grid-cols-4 lg:gap-4">
              <div
                aria-hidden="true"
                className="absolute left-[12%] right-[12%] top-5 hidden h-px bg-[#D4A743] lg:block"
              />
              {INDIA_STAGES.map((stage, index) => (
                <article
                  key={stage.title}
                  className="relative flex gap-4 lg:flex-col lg:items-center lg:text-center"
                >
                  <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#A41E1B] text-sm font-semibold text-white shadow-md">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-[#A41E1B]">{stage.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#8B2E1F]">{stage.text}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-9 rounded-xl border border-[#D4A743]/30 bg-[#FFFEF5] p-5 md:p-6">
              <h3 className="text-xl font-semibold text-[#A41E1B]">Capability centres in India</h3>
              <p className="mt-3 text-sm leading-7 text-[#8B2E1F]">
                We can help you design, set up and run a finance, IT/SAP or analytics team in India,
                and transfer it to your own entity when you are ready.
              </p>
            </div>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#C84D41_0%,#C84D41_38%,#D4A743_100%)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5"
              >
                Plan Your India Entry <ArrowRight size={16} />
              </a>
            </div>
          </article>
        </div>
      </section>

      <section
        id="industry-advisory"
        className="service-node-band section-circuit-edge scroll-mt-28 border-y border-[#D4A743]/30 py-12 md:py-16"
      >
        <div className="container-page max-w-[1240px]">
          <article className="rounded-2xl border border-[#D4A743]/25 bg-[#FFFBF0]/88 p-6 shadow-[0_24px_90px_rgba(139,46,31,0.08)] md:p-10">
            <h2 className="text-3xl font-semibold leading-tight text-[#A41E1B] md:text-[2.45rem]">
              Industry &amp; Advisory
            </h2>
            <p className="mt-4 rounded-lg border-l-4 border-[#D4A743] bg-[#FFF9E6] px-4 py-3 text-base font-semibold leading-7 text-[#8B2E1F]">
              Industry experience and advisory support grounded in practical operating context.
            </p>
            <div className="mt-6 grid gap-4">
              <p className="text-base leading-7 text-[#8B2E1F]">
                <strong className="text-[#A41E1B]">Who it is for:</strong> Automotive and
                manufacturing organisations, mobility and EV businesses, founders, management teams
                and boards.
              </p>
              <p className="text-base leading-7 text-[#8B2E1F]">
                <strong className="text-[#A41E1B]">What we offer:</strong> Automotive and
                manufacturing know-how, hands-on mobility business experience, and Chartered
                Accountant-led strategy, finance and accounting support.
              </p>
            </div>
            <PracticePhoto
              src="https://images.unsplash.com/photo-1758271452953-46f4e12ae2fd?auto=format&fit=crop&w=1100&q=82"
              alt="Industrial machinery on a factory floor"
              className="mt-6 aspect-[16/7] w-full"
            />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {ADVISORY_PRACTICES.map((practice) => (
                <article
                  key={practice.title}
                  className="rounded-xl border border-[#D4A743]/25 bg-[#FFFEF5] p-5"
                >
                  <h3 className="text-lg font-semibold text-[#A41E1B]">{practice.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#8B2E1F]">{practice.intro}</p>
                  <ul className="mt-4 space-y-2.5">
                    {practice.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm leading-6 text-[#8B2E1F]"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A41E1B]"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#C84D41_0%,#C84D41_38%,#D4A743_100%)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5"
              >
                Talk to Us <ArrowRight size={16} />
              </a>
            </div>
          </article>
        </div>
      </section>

      <section
        id="smart-systems"
        className="service-node-band-alt section-circuit-edge scroll-mt-28 border-y border-[#D4A743]/30 py-12 md:py-16"
      >
        <div className="container-page max-w-[1240px]">
          <article className="rounded-2xl border border-[#D4A743]/25 bg-[#FFFBF0]/88 p-6 shadow-[0_24px_90px_rgba(139,46,31,0.08)] md:p-10">
            <h2 className="text-3xl font-semibold leading-tight text-[#A41E1B] md:text-[2.45rem]">
              Smart Access &amp; Mobility Systems
            </h2>
            <p className="mt-4 rounded-lg border-l-4 border-[#D4A743] bg-[#FFFEF5] px-4 py-3 text-base font-semibold leading-7 text-[#8B2E1F]">
              Hardware and software working together across ticketing, access and passenger
              journeys.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <p className="text-base leading-7 text-[#8B2E1F]">
                <strong className="text-[#A41E1B]">Who it is for:</strong> Transit operators,
                airports, smart-city and infrastructure agencies, venues — and the system
                integrators and hardware manufacturers who deliver these projects.
              </p>
              <p className="text-base leading-7 text-[#8B2E1F]">
                <strong className="text-[#A41E1B]">What we offer:</strong> Design, integration and
                delivery of hardware-plus-software solutions for ticketing, access and journeys. Our
                team has delivered a QR-based e-ticketing and gate solution in a live, high-volume
                public transport environment, from embedded firmware to the back-end platform.
              </p>
            </div>
            <PracticePhoto
              src="/smart-access-systems.png"
              alt="Connected traffic and smart access system illustration"
              className="mt-6 aspect-[16/7] w-full"
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SMART_CAPABILITIES.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="flex items-start gap-4 rounded-xl border border-[#D4A743]/25 bg-[#FFFEF5] p-5"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#C84D41]/8 text-[#A41E1B]">
                    <Icon size={22} strokeWidth={1.7} />
                  </span>
                  <div>
                    <h3 className="font-semibold leading-snug text-[#A41E1B]">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#8B2E1F]">{text}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-7 font-semibold leading-7 text-[#A41E1B]">
              We work as a solution, software and integration partner — alongside leading hardware
              manufacturers and system integrators.
            </p>
            <p className="mt-3 text-sm text-[#8B2E1F]">
              <a
                href="/services#industry-advisory"
                className="font-medium underline underline-offset-4 hover:text-[#A41E1B]"
              >
                See also Mobility &amp; electric vehicles{" "}
                <ArrowRight size={14} className="ml-1 inline" />
              </a>
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#C84D41_0%,#C84D41_38%,#D4A743_100%)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5"
              >
                Discuss a Project <ArrowRight size={16} />
              </a>
            </div>
          </article>
        </div>
      </section>
      <section
        id="technology-services"
        className="service-node-band section-circuit-edge scroll-mt-28 border-y border-[#D4A743]/30 py-12 md:py-16"
      >
        <div className="container-page max-w-[1240px]">
          <article className="rounded-2xl border border-[#D4A743]/25 bg-[#FFFBF0]/88 p-6 shadow-[0_24px_90px_rgba(139,46,31,0.08)] md:p-10">
            <h2 className="text-3xl font-semibold leading-tight text-[#A41E1B] md:text-[2.45rem]">
              Technology Services
            </h2>
            <p className="mt-4 rounded-lg border-l-4 border-[#D4A743] bg-[#FFF9E6] px-4 py-3 text-base font-semibold leading-7 text-[#8B2E1F]">
              End-to-end technology delivery across the full lifecycle.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <p className="text-base leading-7 text-[#8B2E1F]">
                <strong className="text-[#A41E1B]">Who it is for:</strong> Organisations seeking
                technology consulting, software development, quality assurance, deployment,
                infrastructure, or data and analytics support.
              </p>
              <p className="text-base leading-7 text-[#8B2E1F]">
                <strong className="text-[#A41E1B]">What we offer:</strong> Connected services that
                support technology work from initial assessment through development, release and
                ongoing operations.
              </p>
            </div>
            <PracticePhoto
              src="https://images.unsplash.com/photo-1763568258320-c954a19683e3?auto=format&fit=crop&w=1100&q=82"
              alt="Laptop displaying source code on a desk"
              className="mt-6 aspect-[16/7] w-full"
            />

            <div className="mt-8 divide-y divide-[#D4A743]/35 border-y border-[#D4A743]/35">
              {SERVICES.map((service, index) => {
                const Icon = service.icon;
                return (
                  <section
                    key={service.id}
                    id={service.id}
                    className="scroll-mt-28 py-6 first:pt-6 last:pb-6 md:py-7"
                  >
                    <div className="grid gap-5 md:grid-cols-[minmax(220px,0.65fr)_minmax(0,1.35fr)] md:gap-8">
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="text-2xl font-semibold leading-none text-[#D4A743]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#C84D41]/8 text-[#A41E1B]">
                            <Icon size={21} />
                          </span>
                        </div>
                        <h3 className="mt-4 text-xl font-semibold leading-snug text-[#A41E1B]">
                          {service.title}
                        </h3>
                        <p className="mt-2 text-sm font-medium leading-6 text-[#8B2E1F]">
                          {service.short}
                        </p>
                      </div>
                      <div>
                        <div className="space-y-3 text-sm leading-7 text-[#8B2E1F]">
                          {service.description.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </div>
                        <ul className="mt-4 grid gap-x-5 gap-y-2 sm:grid-cols-2">
                          {service.includes.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-sm leading-6 text-[#8B2E1F]"
                            >
                              <Check size={15} className="mt-1 shrink-0 text-[#A41E1B]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </section>
                );
              })}
            </div>

            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#C84D41_0%,#C84D41_38%,#D4A743_100%)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5"
              >
                Talk to Us <ArrowRight size={16} />
              </a>
            </div>
          </article>
        </div>
      </section>
    </PageLayout>
  );
}

function PracticePhoto({ src, alt, className }: { src: string; alt: string; className: string }) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-[#D4A743]/25 bg-[#FFFEF5] ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, type CSSProperties, type PointerEvent } from "react";
import {
  ArrowRight,
  BarChart3,
  Building2,
  BriefcaseBusiness,
  Compass,
  Gauge,
  Globe2,
  Handshake,
  Layers,
  LineChart,
  Puzzle,
  Rocket,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";
import { PageLayout, SectionHeading } from "@/components/PageLayout";
import { BtnLink } from "@/components/Button";
import { LogoOrbitBackground } from "@/components/LogoOrbitBackground";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shriyaa Quantum Software — Enterprise Talent and Technology Delivery" },
      {
        name: "description",
        content:
          "Shriyaa Quantum — SAP-led enterprise platform specialists, technology services and India business set-up support, from a team with deep automotive and industrial experience.",
      },
      {
        property: "og:title",
        content: "Shriyaa Quantum Software — Enterprise Talent and Technology Delivery",
      },
      {
        property: "og:description",
        content:
          "Shriyaa Quantum — SAP-led enterprise platform specialists, technology services and India business set-up support, from a team with deep automotive and industrial experience.",
      },
    ],
  }),
  component: HomePage,
});

const heroVars = {
  "--hero-x": "0px",
  "--hero-y": "0px",
  "--hero-tilt": "0deg",
  "--hero-line-x": "0px",
  "--hero-line-y": "0px",
  "--hero-sheen-x": "50%",
  "--hero-sheen-y": "18%",
} as CSSProperties;

const CAPABILITIES_HOME = [
  {
    icon: Layers,
    title: "Add SAP, Oracle, Microsoft Dynamics or Salesforce specialists to an ongoing programme",
  },
  { icon: Gauge, title: "Cover a skill gap or a go-live peak without long hiring cycles" },
  { icon: Building2, title: "Plan and set up a business or team in India" },
  { icon: Users, title: "Stand up finance, IT or analytics capability in India that you can own" },
  { icon: LineChart, title: "Bring clarity to costs, budgets and financial reporting" },
  { icon: Compass, title: "Shape and test new business or mobility ideas before scaling" },
  {
    icon: Rocket,
    title: "Deliver ticketing, gate and access systems — hardware and software together",
  },
  {
    icon: BarChart3,
    title: "Modernise systems, deploy with low risk and turn data into decisions",
  },
] as const;

const HOME_SERVICES = [
  {
    id: "enterprise-talent",
    icon: Layers,
    title: "Enterprise Platforms",
    text: "SAP-led specialists across leading ERP and CRM platforms (SAP, Oracle, Microsoft Dynamics 365, Salesforce) for IT service companies and enterprise teams.",
  },
  {
    id: "india-setup",
    icon: Globe2,
    title: "India Business Set-up",
    text: "Support for overseas companies planning, establishing and running operations in India.",
  },
  {
    id: "industry-advisory",
    icon: Compass,
    title: "Industry & Advisory",
    text: "Automotive and manufacturing know-how, mobility and EV business building, and strategy, finance & accounting advisory.",
  },
  {
    id: "smart-systems",
    icon: Building2,
    title: "Smart Access & Mobility Systems",
    text: "E-ticketing, access gates, embedded systems and journey platforms for transit, airports and venues.",
  },
  {
    id: "technology-services",
    icon: Puzzle,
    title: "Technology Services",
    text: "Consulting, development, QA, deployment, infrastructure and data & analytics across the lifecycle.",
  },
] as const;

const WHO_WE_WORK_WITH = [
  {
    icon: Building2,
    title: "IT service companies",
    text: "delivering SAP and other enterprise-platform programmes for global manufacturers",
  },
  { icon: Globe2, title: "Overseas companies", text: "entering or expanding in India" },
  {
    icon: BriefcaseBusiness,
    title: "Growing businesses and enterprise teams",
    text: "that need technology delivery or finance and strategy support",
  },
] as const;

const WHY_US_HOME = [
  {
    icon: Handshake,
    title: "We understand the client side",
    desc: "Our team has worked inside large organisations and knows what they expect from partners.",
  },
  {
    icon: Layers,
    title: "SAP-led platform talent",
    desc: "SAP, Oracle, Microsoft Dynamics and Salesforce profiles screened for technical skill and business-process understanding.",
  },
  {
    icon: Scale,
    title: "Finance and compliance discipline",
    desc: "Clear commercials, statutory compliance and transparent reporting.",
  },
  {
    icon: ShieldCheck,
    title: "One accountable partner",
    desc: "From first conversation to delivery and support.",
  },
] as const;

function HomePage() {
  const heroRef = useRef<HTMLElement>(null);

  const handleHeroPointerMove = (event: PointerEvent<HTMLElement>) => {
    const hero = heroRef.current;
    if (!hero) return;

    const rect = hero.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    hero.style.setProperty("--hero-x", `${x * 18}px`);
    hero.style.setProperty("--hero-y", `${y * 14}px`);
    hero.style.setProperty("--hero-tilt", `${x * 4}deg`);
    hero.style.setProperty("--hero-line-x", `${x * 34}px`);
    hero.style.setProperty("--hero-line-y", `${y * 22}px`);
    hero.style.setProperty("--hero-sheen-x", `${50 + x * 32}%`);
    hero.style.setProperty("--hero-sheen-y", `${18 + y * 22}%`);
  };

  const resetHeroPointer = () => {
    const hero = heroRef.current;
    if (!hero) return;

    hero.style.setProperty("--hero-x", "0px");
    hero.style.setProperty("--hero-y", "0px");
    hero.style.setProperty("--hero-tilt", "0deg");
    hero.style.setProperty("--hero-line-x", "0px");
    hero.style.setProperty("--hero-line-y", "0px");
    hero.style.setProperty("--hero-sheen-x", "50%");
    hero.style.setProperty("--hero-sheen-y", "18%");
  };

  return (
    <PageLayout>
      <section
        ref={heroRef}
        className="relative isolate overflow-hidden bg-[#FFFEF5]"
        style={heroVars}
        onPointerMove={handleHeroPointerMove}
        onPointerLeave={resetHeroPointer}
      >
        <div className="orbital-lines hero-orbital-field pointer-events-none absolute inset-0 opacity-[0.06]" />
        <div className="hero-sheen pointer-events-none absolute inset-0" />
        <div className="hero-circuit-field pointer-events-none absolute inset-0" />
        <LogoOrbitBackground className="opacity-[0.52] mix-blend-multiply" />
        <div className="hero-ray-field pointer-events-none absolute inset-x-0 top-0 h-full overflow-hidden opacity-[0.14]">
          <div className="hero-ray left-[7%] rotate-[18deg]" />
          <div className="hero-ray left-[26%] rotate-[9deg]" />
          <div className="hero-ray right-[22%] -rotate-[10deg]" />
          <div className="hero-ray right-[5%] -rotate-[19deg]" />
        </div>

        <div className="container-page relative z-10 flex min-h-[calc(100svh-84px)] items-center justify-center py-20 text-center md:py-[120px]">
          <div className="mx-auto max-w-5xl">
            <div className="fade-up mx-auto mb-8 h-px w-32 bg-[linear-gradient(90deg,transparent,rgba(212,167,67,0.85),transparent)]" />
            <h1 className="fade-up text-[2.75rem] font-semibold leading-[1.08] text-[#A41E1B] md:text-[4.5rem] lg:text-[5.25rem]">
              Innovate. Integrate. <span className="text-[#D4A743]">Elevate.</span>
            </h1>
            <p className="fade-up mx-auto mt-5 max-w-4xl text-lg leading-relaxed text-[#8B2E1F]">
              Enterprise talent, technology delivery and India business set-up — from a team that
              understands how large manufacturers and their technology partners work.
            </p>
            <div className="fade-up mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <BtnLink to="/contact">
                Talk to Us <ArrowRight size={16} />
              </BtnLink>
              <BtnLink to="/services" variant="secondary">
                Explore Services
              </BtnLink>
            </div>
          </div>
        </div>
        <div className="relative z-10 mx-auto h-px max-w-[1180px] bg-[linear-gradient(90deg,transparent,rgba(212,167,67,0.4),transparent)]" />
      </section>

      <section className="bg-[#FFF9E6] py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="relative overflow-hidden rounded-xl border border-[#C84D41]/15 bg-[#FFFBF0] p-8 shadow-[0_20px_70px_rgba(139,46,31,0.08)] md:p-10">
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-[#D4A743]/25" />
            <div className="pointer-events-none absolute -right-10 top-16 h-36 w-36 rounded-full border border-[#C84D41]/15" />
            <SectionHeading title="Practical help, grounded in industry experience" />
          </div>
          <div className="flex flex-col justify-center space-y-5 rounded-xl border border-[#D4A743]/25 bg-[#FFFEF5]/70 p-8 text-base leading-8 text-[#8B2E1F] shadow-[0_16px_60px_rgba(139,46,31,0.05)] md:p-10 md:text-lg">
            <p>
              Shriyaa Quantum is a Chennai-based company that helps organisations get the right
              people, the right technology and the right footing in India. Our team brings hands-on
              experience from inside global automotive, mobility and industrial businesses — in
              finance, shared services, enterprise systems and new business set-up. We use that
              experience to understand your situation quickly and to recommend only what fits it.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#FFFEF5] py-16 md:py-24">
        <div className="container-page">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading title="How we can help" />
            <div className="hidden h-px flex-1 bg-[linear-gradient(90deg,rgba(212,167,67,0.5),transparent)] md:block" />
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CAPABILITIES_HOME.map((capability) => {
              const Icon = capability.icon;
              return (
                <div
                  key={capability.title}
                  className="card-elevated card-elevated-hover group relative flex min-h-32 items-center gap-4 overflow-hidden p-5"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#C84D41,#D4A743)] opacity-0 transition-opacity group-hover:opacity-100" />
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#C84D41]/8 text-[#A41E1B]">
                    <Icon size={22} />
                  </span>
                  <p className="font-medium leading-snug text-[#8B2E1F]">{capability.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#FFFEF5] py-16 md:py-24">
        <div className="container-page">
          <div className="rounded-xl border border-[#D4A743]/20 bg-[#FFF9E6]/75 p-7 md:p-10">
            <SectionHeading
              title="What we do"
              subtitle="Five practices that can be engaged separately or together."
            />
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {HOME_SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.id}
                  to="/services"
                  hash={service.id}
                  className={`card-elevated card-elevated-hover group relative block overflow-hidden p-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A41E1B] lg:col-span-2 ${index === 3 ? "lg:col-start-2" : index === 4 ? "lg:col-start-4" : ""}`}
                >
                  <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[#D4A743]/10 transition-transform group-hover:scale-125" />
                  <div className="grid h-12 w-12 place-items-center rounded-lg bg-[#C84D41]/8 text-[#A41E1B]">
                    <Icon size={26} />
                  </div>
                  <h3 className="mt-6 text-xl font-medium leading-snug text-[#A41E1B]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#8B2E1F]">{service.text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#A41E1B]">
                    Learn more <ArrowRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#FFF9E6] py-16 md:py-24">
        <div className="container-page">
          <SectionHeading align="center" title="Who we work with" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {WHO_WE_WORK_WITH.map(({ icon: Icon, title, text }) => (
              <article key={title} className="card-elevated flex items-start gap-4 p-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#C84D41]/8 text-[#A41E1B]">
                  <Icon size={22} />
                </span>
                <div>
                  <h3 className="font-semibold leading-snug text-[#A41E1B]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#8B2E1F]">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FFF9E6] py-16 md:py-24">
        <div className="container-page">
          <SectionHeading align="center" title="Why clients work with us" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {WHY_US_HOME.map((reason) => {
              const Icon = reason.icon;
              return (
                <article
                  key={reason.title}
                  className="rounded-xl border border-transparent p-5 text-center transition-all duration-300 hover:border-[#C84D41]/15 hover:bg-[#FFFBF0] hover:shadow-[0_16px_50px_rgba(139,46,31,0.07)]"
                >
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#C84D41]/8 text-[#A41E1B]">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[#A41E1B]">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#8B2E1F]">{reason.desc}</p>
                </article>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <BtnLink to="/why-us" variant="secondary">
              Why Us <ArrowRight size={16} />
            </BtnLink>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(135deg,#21090D_0%,#5B1212_42%,#A41E1B_72%,#D4A743_145%)] py-16 text-white md:py-20">
        <div className="container-page text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
              Tell us what you need
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/85 md:text-lg">
              A short conversation is usually enough to see whether we are the right fit.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <BtnLink to="/contact" className="bg-white text-[#A41E1B] hover:bg-white">
                Contact Us <ArrowRight size={16} />
              </BtnLink>
              <BtnLink to="/contact" variant="outline-light">
                Schedule a Discussion
              </BtnLink>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  Compass,
  Globe2,
  Layers,
  LineChart,
  Puzzle,
  Rocket,
} from "lucide-react";
import { PageLayout, SectionHeading } from "@/components/PageLayout";
import { BtnLink } from "@/components/Button";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      { title: "Why work with Shriyaa Quantum" },
      {
        name: "description",
        content:
          "Why clients work with Shriyaa Quantum: business understanding, SAP-led platform talent, finance discipline and one accountable partner.",
      },
      { property: "og:title", content: "Why work with Shriyaa Quantum" },
      {
        property: "og:description",
        content:
          "Why clients work with Shriyaa Quantum: business understanding, SAP-led platform talent, finance discipline and one accountable partner.",
      },
    ],
  }),
  component: WhyUsPage,
});

const DIFFERENTIATORS = [
  {
    icon: Compass,
    title: "Business understanding",
    desc: "We look at the process and the outcome, not just the system or the role.",
  },
  {
    icon: Layers,
    title: "SAP-led platform talent",
    desc: "Specialists across SAP, Oracle, Microsoft Dynamics and Salesforce, screened for skill and business-process knowledge.",
  },
  {
    icon: Building2,
    title: "Automotive & industrial context",
    desc: "Familiarity with how manufacturers plan, cost, build, sell and service.",
  },
  {
    icon: Globe2,
    title: "India set-up, end to end",
    desc: "Strategy, entity, compliance, hiring and partners through one team.",
  },
  {
    icon: LineChart,
    title: "Finance discipline",
    desc: "Clear commercials, compliance by default and transparent reporting.",
  },
  {
    icon: Puzzle,
    title: "Hardware and software together",
    desc: "Experience delivering integrated gate, device and platform solutions in live public environments.",
  },
  {
    icon: Rocket,
    title: "End-to-end technology delivery",
    desc: "Consulting to production support with one point of accountability.",
  },
] as const;

function WhyUsPage() {
  return (
    <PageLayout>
      <section className="relative overflow-hidden bg-[#FFFEF5] pb-8 pt-20 text-center md:pb-10 md:pt-24">
        <div className="hero-ambient pointer-events-none absolute inset-0" />
        <div className="orbital-lines pointer-events-none absolute inset-0 opacity-[0.16]" />
        <div className="tech-hero-motif pointer-events-none absolute inset-0 opacity-[0.18]" />
        <div className="container-page relative">
          <h1 className="text-[2.5rem] font-semibold leading-tight text-[#A41E1B] md:text-[3.5rem]">
            Why work with Shriyaa Quantum
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-[#8B2E1F]">
            We aim to be the partner that is easy to work with, understands your business and does
            what it commits to.
          </p>
        </div>
      </section>

      <section className="home-differentiator-band section-circuit-edge py-16 md:py-24">
        <div className="container-page">
          <SectionHeading
            align="center"
            title="We understand the client side"
            subtitle="Our team has spent many years inside large organisations — in finance, shared services, enterprise systems and new business units. We know how decisions are made, what good delivery looks like and what a partner needs to get right from the start."
          />
          <div className="reveal-stagger mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {DIFFERENTIATORS.map((reason) => {
              const Icon = reason.icon;
              return (
                <article
                  key={reason.title}
                  className="card-tech reveal rounded-xl border border-[#D4A743]/20 bg-[#FFFEF5]/65 p-4 text-center shadow-[0_16px_48px_rgba(139,46,31,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#A41E1B]/35 hover:bg-[#FFFBF0] hover:shadow-[0_22px_60px_rgba(139,46,31,0.09)]"
                >
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#C84D41]/8 text-[#A41E1B]">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[#A41E1B]">{reason.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[#8B2E1F]">{reason.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="page-grid-band section-circuit-edge py-16 text-center md:py-20">
        <div className="container-page">
          <div className="reveal mx-auto max-w-3xl rounded-xl border border-[#D4A743]/25 bg-[#FFFBF0]/80 p-8 shadow-[0_20px_70px_rgba(139,46,31,0.07)]">
            <h2 className="text-2xl font-semibold leading-tight text-[#A41E1B] md:text-3xl">
              Let's see if we are the right fit
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-[#8B2E1F]">
              Share your requirement — we will tell you honestly whether and how we can help.
            </p>
            <div className="mt-8">
              <BtnLink to="/contact">
                Start a Conversation <ArrowRight size={16} />
              </BtnLink>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

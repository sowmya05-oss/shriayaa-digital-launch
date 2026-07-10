import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageLayout, SectionHeading } from "@/components/PageLayout";
import { BtnLink } from "@/components/Button";
import { WHY_US } from "@/lib/content";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      { title: "Why Us — Shriyaa Quantum Software" },
      {
        name: "description",
        content: "What makes Shriyaa Quantum a dependable, end-to-end technology partner.",
      },
      { property: "og:title", content: "Why Choose Shriyaa Quantum Software" },
      {
        property: "og:description",
        content: "One partner from consulting through to production support.",
      },
    ],
  }),
  component: WhyUsPage,
});

function WhyUsPage() {
  return (
    <PageLayout>
      <section className="relative overflow-hidden bg-[#FFFEF5] pb-8 pt-20 text-center md:pb-10 md:pt-24">
        <div className="hero-ambient pointer-events-none absolute inset-0" />
        <div className="orbital-lines pointer-events-none absolute inset-0 opacity-[0.16]" />
        <div className="tech-hero-motif pointer-events-none absolute inset-0 opacity-[0.18]" />
        <div className="container-page relative">
          <h1 className="text-[2.5rem] font-semibold leading-tight text-[#A41E1B] md:text-[3.5rem]">
            Why Choose Shriyaa Quantum Software
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-[#8B2E1F]">
            Dependable, end-to-end delivery that adapts to your domain, with QA, deployment, and
            analytics discipline built in.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#FFFEF5] pb-16 md:pb-20">
        <div className="hero-ambient pointer-events-none absolute inset-0" />
        <div className="orbital-lines pointer-events-none absolute inset-0 opacity-[0.16]" />
        <div className="tech-hero-motif pointer-events-none absolute inset-0 opacity-[0.18]" />
        <div className="container-page relative">
          <p className="reveal mx-auto max-w-[860px] text-center text-base leading-8 text-[#8B2E1F] md:text-lg">
            Choosing a technology partner is a long-term decision. Our differentiators are built
            around reducing handoff risk, improving reliability, and helping teams move from
            technology questions to production outcomes with clarity.
          </p>
        </div>
      </section>

      <section className="home-differentiator-band section-circuit-edge py-16 md:py-24">
        <div className="container-page">
          <SectionHeading align="center" title="Built for Long-Term Delivery" />
          <div className="reveal-stagger mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {WHY_US.map((reason) => {
              const Icon = reason.icon;
              return (
                <article
                  key={reason.title}
                  className="card-tech reveal rounded-xl border border-[#D4A743]/20 bg-[#FFFEF5]/65 p-4 text-center shadow-[0_16px_48px_rgba(139,46,31,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#A41E1B]/35 hover:bg-[#FFFBF0] hover:shadow-[0_22px_60px_rgba(139,46,31,0.09)]"
                >
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#C84D41]/8 text-[#A41E1B]">
                    <Icon size={24} />
                  </div>
                  <h2 className="mt-4 text-lg font-semibold text-[#A41E1B]">{reason.title}</h2>
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
            <p className="mx-auto max-w-2xl text-lg leading-8 text-[#8B2E1F]">
              The fastest way to understand fit is a focused conversation about your goals, systems,
              and next delivery milestone.
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

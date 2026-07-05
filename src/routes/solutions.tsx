import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHero, SectionHeading } from "@/components/PageLayout";
import { CtaBanner } from "@/components/CtaBanner";
import { SOLUTIONS, INDUSTRIES, OUTCOMES } from "@/lib/content";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions & Industries — Shriyaa Quantum Software" },
      { name: "description", content: "Solution areas and industries we support with a domain-agnostic delivery model." },
      { property: "og:title", content: "Solutions & Industries — Shriyaa Quantum Software" },
      { property: "og:description", content: "Where we add value, and the industries we serve." },
    ],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Solutions"
        title="Solutions we support — across every industry."
        subtitle="Our delivery capability is deliberately domain-independent, so the same discipline applies whether you're in banking, healthcare, retail, or the public sector."
      />

      {/* WHERE WE ADD VALUE */}
      <section className="container-page py-20 md:py-24">
        <SectionHeading eyebrow="Where We Add Value" title="Six solution areas grounded in engineering discipline." />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SOLUTIONS.map((s) => (
            <div key={s.title} className="card-elevated card-elevated-hover p-6">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand/8 text-brand">
                <s.icon size={22} strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-cream/60 border-y border-border">
        <div className="container-page py-20 md:py-24">
          <SectionHeading eyebrow="Industries We Support" title="Domain-agnostic — proven across verticals." align="center" />
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.name}
                className="card-elevated card-elevated-hover p-6 flex flex-col items-center text-center gap-3"
              >
                <div className="grid h-12 w-12 place-items-center rounded-full bg-gold-soft text-brand-dark">
                  <ind.icon size={22} strokeWidth={1.75} />
                </div>
                <div className="text-sm font-semibold text-ink leading-snug">{ind.name}</div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Our approach is intentionally domain-agnostic — the same delivery model adapts to any
            vertical, shaped by your systems, regulations, and business goals.
          </p>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="container-page py-20 md:py-24">
        <SectionHeading eyebrow="Outcomes" title="Typical outcomes we help deliver." />
        <div className="mt-12 grid md:grid-cols-2 gap-4">
          {OUTCOMES.map((o) => (
            <div key={o} className="card-elevated flex items-start gap-3.5 p-5">
              <CheckCircle2 size={22} className="text-brand shrink-0 mt-0.5" strokeWidth={1.75} />
              <div className="text-base font-medium text-ink leading-snug">{o}</div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </PageLayout>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { CtaBanner } from "@/components/CtaBanner";
import { SERVICES } from "@/lib/content";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Shriyaa Quantum Software" },
      { name: "description", content: "Consulting, development, QA, deployment, infrastructure, and data & analytics — delivered end-to-end." },
      { property: "og:title", content: "Services — Shriyaa Quantum Software" },
      { property: "og:description", content: "Six connected practices across the full software lifecycle." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Our Services"
        title="Six connected practices, delivered as one engagement."
        subtitle="Every service is built to work alongside the others — with the tooling, environments, and QA discipline needed for reliable delivery."
      />

      <section className="container-page py-16 md:py-20">
        <p className="max-w-3xl text-base md:text-lg text-muted-foreground leading-relaxed">
          Our services cover the full software lifecycle. Each one stands on its own, and each one
          is stronger when combined with the others — that's how we help clients move from strategy
          all the way through to production without handoff gaps.
        </p>

        <div className="mt-12 space-y-6">
          {SERVICES.map((s, i) => (
            <article
              key={s.id}
              id={s.id}
              className="card-elevated card-elevated-hover scroll-mt-24 p-6 md:p-10 grid lg:grid-cols-12 gap-6 lg:gap-10"
            >
              <div className="lg:col-span-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand text-primary-foreground">
                    <s.icon size={26} strokeWidth={1.75} />
                  </div>
                  <div className="text-xs font-bold tracking-[0.22em] uppercase text-gold">
                    Service 0{i + 1}
                  </div>
                </div>
                <h2 className="mt-5 text-2xl md:text-3xl font-bold text-ink leading-tight">
                  {s.title}
                </h2>
              </div>

              <div className="lg:col-span-4">
                <p className="text-base text-muted-foreground leading-relaxed">{s.description}</p>
              </div>

              <div className="lg:col-span-4">
                <div className="text-xs font-semibold tracking-[0.2em] uppercase text-brand mb-3">Includes</div>
                <ul className="space-y-2.5">
                  {s.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
                      <span className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-gold-soft text-brand-dark">
                        <Check size={11} strokeWidth={3} />
                      </span>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner />
    </PageLayout>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageLayout, SectionHeading } from "@/components/PageLayout";
import { BtnLink } from "@/components/Button";
import { CtaBanner } from "@/components/CtaBanner";
import { SERVICES, WHY_US, CAPABILITIES } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shriyaa Quantum Software — Domain-Agnostic Technology Delivery" },
      { name: "description", content: "End-to-end technology services across the full software lifecycle — consulting, engineering, QA, deployment, infrastructure, and analytics." },
      { property: "og:title", content: "Shriyaa Quantum Software — Domain-Agnostic Technology Delivery" },
      { property: "og:description", content: "End-to-end technology services across the full software lifecycle." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative overflow-hidden orbital-lines orbital-bg">
        <div className="container-page relative pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold-soft/40 px-3.5 py-1.5 text-xs font-semibold tracking-widest text-brand-dark uppercase mb-7 fade-up">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Quantum precision. Enterprise trust.
          </div>
          <h1 className="fade-up max-w-4xl text-4xl md:text-6xl lg:text-7xl font-bold text-ink leading-[1.02]">
            Shriyaa Quantum Software Private Limited
          </h1>
          <p className="fade-up mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            End-to-end technology services across the full software lifecycle — engineered to adapt to
            any industry, and built with the quality, deployment, and analytics discipline serious
            businesses require.
          </p>
          <div className="fade-up mt-9 flex flex-wrap gap-3">
            <BtnLink to="/contact" variant="primary">
              Contact Us <ArrowRight size={16} />
            </BtnLink>
            <BtnLink to="/services" variant="ghost" className="border border-border">
              Explore Services
            </BtnLink>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="container-page py-20 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-brand mb-3">Our Approach</div>
            <h2 className="text-3xl md:text-4xl font-bold text-ink leading-tight">
              A single technology partner, engineered for every domain.
            </h2>
            <div className="mt-6 h-1 w-16 rounded-full bg-gold" />
          </div>
          <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              Shriyaa Quantum Software Private Limited delivers technology consulting, software
              development, quality assurance, deployment, and infrastructure services — supported by
              dedicated data and analytics capabilities and the tooling required to run them reliably.
            </p>
            <p>
              We are deliberately not domain-specific. Our capabilities cut across every industry
              vertical, providing the platform, environments, reusable components, and testing tools
              needed for any domain — finance, healthcare, retail, or the public sector.
            </p>
            <p>
              That domain-agnostic foundation lets us adapt quickly to a client's technical landscape
              rather than forcing a one-size-fits-all template.
            </p>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-cream/60 border-y border-border">
        <div className="container-page py-20 md:py-24">
          <SectionHeading
            eyebrow="Capabilities"
            title="What we help businesses achieve"
            subtitle="Concrete outcomes from a delivery model built for the full software lifecycle."
          />
          <div className="mt-12 grid sm:grid-cols-2 gap-4">
            {CAPABILITIES.map((c) => (
              <div key={c.title} className="card-elevated card-elevated-hover flex items-start gap-4 p-5">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/8 text-brand">
                  <c.icon size={20} strokeWidth={1.75} />
                </div>
                <div className="min-w-0 pt-1">
                  <div className="font-semibold text-ink leading-snug">{c.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-page py-20 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Core Services"
            title="Everything you need across the software lifecycle"
            subtitle="Six connected practices, delivered as one coordinated engagement."
          />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <Link
              key={s.id}
              to="/services"
              hash={s.id}
              className="card-elevated card-elevated-hover group p-7 flex flex-col"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand text-primary-foreground">
                <s.icon size={22} strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{s.short}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand group-hover:gap-2.5 transition-all">
                Learn more <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <BtnLink to="/services" variant="secondary">
            View All Services <ArrowRight size={16} />
          </BtnLink>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-cream/60 border-y border-border">
        <div className="container-page py-20 md:py-24">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Five reasons enterprises trust us with delivery"
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_US.map((w) => (
              <div key={w.title} className="card-elevated card-elevated-hover p-6">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-gold-soft text-brand-dark">
                  <w.icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-ink">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
              </div>
            ))}
            <div className="p-6 rounded-xl border border-dashed border-brand/40 bg-brand/5 flex flex-col justify-center">
              <div className="text-xs font-semibold tracking-widest uppercase text-brand mb-2">More reasons</div>
              <p className="text-sm text-ink">
                Deep engineering discipline, transparent delivery, and long-term partnership.
              </p>
              <Link to="/why-us" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:gap-2.5 transition-all">
                See all differentiators <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </PageLayout>
  );
}

// Keep the unused import from tree-shaking warnings
void Check;

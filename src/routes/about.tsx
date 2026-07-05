import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHero, SectionHeading } from "@/components/PageLayout";
import { CtaBanner } from "@/components/CtaBanner";
import { APPROACH_STEPS, VALUES } from "@/lib/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Shriyaa Quantum Software" },
      { name: "description", content: "Who we are, how we work, and the principles that shape our delivery." },
      { property: "og:title", content: "About — Shriyaa Quantum Software" },
      { property: "og:description", content: "Who we are, how we work, and the principles that shape our delivery." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="About Us"
        title="A technology partner engineered for every domain."
        subtitle="We deliver end-to-end services across the software lifecycle — grounded in engineering discipline, adaptable to any industry."
      />

      {/* WHO WE ARE */}
      <section className="container-page py-20 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-brand mb-3">Who We Are</div>
            <h2 className="text-3xl md:text-4xl font-bold text-ink leading-tight">
              Domain-agnostic by design. Enterprise by discipline.
            </h2>
            <div className="mt-6 h-1 w-16 rounded-full bg-gold" />
          </div>
          <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              Shriyaa Quantum Software Private Limited is a technology company delivering end-to-end
              services across the full software lifecycle. We provide technology consulting, software
              development, quality assurance and testing, deployment, and infrastructure services —
              supported by dedicated data and analytics capabilities, including the systems,
              components, and testing tools required to deliver them reliably.
            </p>
            <p>
              We are deliberately not domain-specific. Our capabilities are built to cut across every
              industry vertical, providing the appropriate platform, working environment, reusable
              components, and both test and production environments needed for any domain — from
              finance to healthcare to retail to the public sector.
            </p>
            <p>
              This domain-agnostic foundation lets us adapt quickly to a client's specific technical
              landscape rather than forcing a one-size-fits-all template.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="container-page pb-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card-elevated p-8 md:p-10">
            <div className="text-xs font-semibold tracking-[0.22em] uppercase text-brand mb-3">Our Mission</div>
            <h3 className="text-2xl md:text-3xl font-bold text-ink leading-tight">
              Deliver technology that works — reliably, across any industry.
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To provide organizations with a single, dependable technology partner capable of taking
              them from strategy through to production, without compromising on quality, precision,
              or long-term maintainability.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-2xl gradient-brand p-8 md:p-10 text-white">
            <div className="absolute inset-0 orbital-lines opacity-40 pointer-events-none" />
            <div className="relative">
              <div className="text-xs font-semibold tracking-[0.22em] uppercase text-gold-soft mb-3">Our Vision</div>
              <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                To be the technology backbone that adapts to every business we serve.
              </h3>
              <p className="mt-4 text-white/85 leading-relaxed">
                A domain-agnostic delivery capability trusted by enterprises to modernize, scale, and
                operate mission-critical software with quantum precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="container-page py-20 md:py-24">
        <SectionHeading
          eyebrow="How We Work"
          title="A predictable delivery rhythm from first workshop to production support."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {APPROACH_STEPS.map((s) => (
            <div key={s.n} className="card-elevated card-elevated-hover p-5">
              <div className="text-xs font-bold tracking-widest text-gold">STEP {s.n}</div>
              <div className="mt-2 text-lg font-bold text-ink">{s.title}</div>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-cream/60 border-y border-border">
        <div className="container-page py-20 md:py-24">
          <SectionHeading eyebrow="What We Value" title="Five principles that guide every engagement." />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map((v) => (
              <div key={v.title} className="card-elevated card-elevated-hover p-6">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-brand/8 text-brand">
                  <v.icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </PageLayout>
  );
}

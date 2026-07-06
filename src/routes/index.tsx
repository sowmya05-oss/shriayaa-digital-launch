import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageLayout, SectionHeading } from "@/components/PageLayout";
import { BtnLink } from "@/components/Button";
import { CtaBanner } from "@/components/CtaBanner";
import { SERVICES, WHY_US, STATS } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shriyaa Quantum Software — Domain Agnostic Technology Delivery" },
      { name: "description", content: "End to end technology services across the full software lifecycle: consulting, engineering, QA, deployment, infrastructure, and analytics." },
      { property: "og:title", content: "Shriyaa Quantum Software" },
      { property: "og:description", content: "End to end technology services across the full software lifecycle." },
    ],
  }),
  component: HomePage,
});

/* -------------------------------------------------------------------------- */
/* Decorative geometric hero visual                                           */
/* -------------------------------------------------------------------------- */
function HeroGeometric() {
  return (
    <div className="relative aspect-square w-full max-w-[520px] mx-auto">
      <svg viewBox="0 0 500 500" className="h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="hg-red" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.55 0.20 27)" />
            <stop offset="100%" stopColor="oklch(0.36 0.15 25)" />
          </linearGradient>
          <linearGradient id="hg-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.90 0.13 88)" />
            <stop offset="100%" stopColor="oklch(0.75 0.15 78)" />
          </linearGradient>
          <radialGradient id="hg-glow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="oklch(0.55 0.20 27 / 0.35)" />
            <stop offset="100%" stopColor="oklch(0.55 0.20 27 / 0)" />
          </radialGradient>
        </defs>

        {/* Ambient glow */}
        <circle cx="250" cy="250" r="240" fill="url(#hg-glow)" />

        {/* Large red hex plate */}
        <polygon
          points="250,40 430,150 430,350 250,460 70,350 70,150"
          fill="url(#hg-red)"
          opacity="0.95"
        />
        {/* Gold outline hex */}
        <polygon
          points="250,80 400,165 400,335 250,420 100,335 100,165"
          fill="none"
          stroke="url(#hg-gold)"
          strokeWidth="3"
        />

        {/* Orbital rings */}
        <ellipse cx="250" cy="250" rx="200" ry="80" fill="none" stroke="url(#hg-gold)" strokeWidth="2" transform="rotate(28 250 250)" opacity="0.85" />
        <ellipse cx="250" cy="250" rx="200" ry="80" fill="none" stroke="url(#hg-gold)" strokeWidth="2" transform="rotate(-28 250 250)" opacity="0.85" />
        <ellipse cx="250" cy="250" rx="200" ry="80" fill="none" stroke="oklch(1 0 0 / 0.35)" strokeWidth="1.5" transform="rotate(90 250 250)" />

        {/* Nucleus */}
        <circle cx="250" cy="250" r="42" fill="url(#hg-gold)" />
        <circle cx="250" cy="250" r="22" fill="url(#hg-red)" />
        <circle cx="250" cy="250" r="6" fill="url(#hg-gold)" />

        {/* Electron dots */}
        {[0, 60, 120, 180, 240, 300].map((a) => {
          const rad = (a * Math.PI) / 180;
          const x = 250 + Math.cos(rad) * 200;
          const y = 250 + Math.sin(rad) * 80;
          return <circle key={a} cx={x} cy={y} r="6" fill="url(#hg-gold)" />;
        })}

        {/* Corner gold triangle accent */}
        <polygon points="430,80 470,80 430,120" fill="url(#hg-gold)" />
        <polygon points="70,420 30,420 70,380" fill="url(#hg-gold)" opacity="0.6" />
      </svg>

      {/* Floating badges */}
      <div className="absolute -left-4 top-10 hidden md:flex items-center gap-2 rounded-full bg-white/95 backdrop-blur border border-gold/40 px-4 py-2 shadow-lg">
        <span className="h-2 w-2 rounded-full bg-brand" />
        <span className="text-xs font-semibold text-ink tracking-wide">Full Lifecycle Delivery</span>
      </div>
      <div className="absolute -right-2 bottom-16 hidden md:flex items-center gap-2 rounded-full bg-ink text-white px-4 py-2 shadow-lg">
        <span className="h-2 w-2 rounded-full bg-gold" />
        <span className="text-xs font-semibold tracking-wide">Quality Engineered</span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */

function HomePage() {
  // Split services: first 2 as wide feature cards, next 4 as bento grid
  const wideServices = SERVICES.slice(0, 2);
  const smallServices = SERVICES.slice(2, 6);

  return (
    <PageLayout>
      {/* HERO — 50/50 split */}
      <section className="relative overflow-hidden orbital-bg border-b border-border">
        <div className="container-page relative py-16 md:py-24 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* LEFT: copy */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold-soft/40 px-3.5 py-1.5 text-xs font-semibold tracking-[0.22em] text-brand-dark uppercase mb-7 fade-up">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                Quantum precision. Enterprise trust.
              </div>
              <h1 className="fade-up text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-[1.02]">
                Shriyaa Quantum Software Private Limited
              </h1>
              <p className="fade-up mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
                End to end technology services across the full software lifecycle, engineered to
                adapt to any industry and built with the quality, deployment, and analytics
                discipline serious businesses require.
              </p>
              <div className="fade-up mt-8 flex flex-wrap gap-3">
                <BtnLink to="/contact" variant="primary">
                  Contact Us <ArrowRight size={16} />
                </BtnLink>
                <BtnLink to="/services" variant="ghost" className="border border-border">
                  Explore Services
                </BtnLink>
              </div>
            </div>
            {/* RIGHT: geometric visual */}
            <div className="fade-up">
              <HeroGeometric />
            </div>
          </div>
        </div>
      </section>

      {/* STAT STRIP — replaces the capabilities card grid (small top gap → large section) */}
      <section className="border-b border-border bg-cream/50">
        <div className="container-page py-10 md:py-14">
          <ul className="divide-y divide-border">
            {STATS.map((s, i) => (
              <li
                key={s.label}
                className="grid grid-cols-[auto_1fr_auto] items-center gap-4 md:gap-8 py-5 md:py-6"
              >
                <span
                  className={`h-10 w-1.5 rounded-full ${
                    i % 2 === 0 ? "bg-brand" : "bg-gold"
                  }`}
                />
                <span className="text-sm md:text-base font-medium text-ink/85 tracking-tight">
                  {s.label}
                </span>
                <span className="font-display text-3xl md:text-5xl font-bold text-brand tabular-nums leading-none">
                  {s.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* APPROACH (medium gap) */}
      <section className="container-page py-24 md:py-28">
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
              development, quality assurance, deployment, and infrastructure services, supported by
              dedicated data and analytics capabilities and the tooling required to run them reliably.
            </p>
            <p>
              We are deliberately not domain specific. Our capabilities cut across every industry
              vertical, providing the platform, environments, reusable components, and testing tools
              needed for any domain: finance, healthcare, retail, or the public sector.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES — bento / staggered (medium gap above, small gap below) */}
      <section className="bg-cream/60 border-y border-border">
        <div className="container-page py-16 md:py-20">
          <div className="mb-10 md:mb-14">
            <SectionHeading
              eyebrow="Core Services"
              title="Everything you need across the software lifecycle"
              subtitle="Six connected practices, delivered as one coordinated engagement."
            />
          </div>

          {/* Top row: 2 wide feature cards, alternating icon position */}
          <div className="grid md:grid-cols-2 gap-5">
            {wideServices.map((s, idx) => {
              const iconRight = idx % 2 === 1;
              return (
                <Link
                  key={s.id}
                  to="/services"
                  hash={s.id}
                  className={`card-elevated card-elevated-hover group relative overflow-hidden p-8 md:p-10 flex ${
                    iconRight ? "flex-row-reverse" : "flex-row"
                  } items-start gap-6`}
                >
                  <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl gradient-brand text-primary-foreground shadow-md">
                    <s.icon size={28} strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gold mb-2">
                      Featured Practice
                    </div>
                    <h3 className="text-2xl font-bold text-ink leading-tight">{s.title}</h3>
                    <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                      {s.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand group-hover:gap-2.5 transition-all">
                      Learn more <ArrowRight size={14} />
                    </span>
                  </div>
                  {/* Corner accent */}
                  <div
                    className={`absolute ${iconRight ? "left-0" : "right-0"} bottom-0 h-1.5 w-24 ${
                      idx === 0 ? "bg-brand" : "bg-gold"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Bottom row: 2x2 smaller cards, alternating icon position */}
          <div className="mt-5 grid sm:grid-cols-2 gap-5">
            {smallServices.map((s, idx) => {
              const iconRight = idx % 2 === 1;
              return (
                <Link
                  key={s.id}
                  to="/services"
                  hash={s.id}
                  className={`card-elevated card-elevated-hover group p-6 flex ${
                    iconRight ? "flex-row-reverse text-right" : "flex-row text-left"
                  } items-start gap-5`}
                >
                  <div
                    className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${
                      idx % 2 === 0
                        ? "bg-brand/10 text-brand"
                        : "bg-gold-soft text-brand-dark"
                    }`}
                  >
                    <s.icon size={22} strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-bold text-ink leading-snug">{s.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                      {s.short}
                    </p>
                    <span
                      className={`mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand group-hover:gap-2.5 transition-all ${
                        iconRight ? "flex-row-reverse" : ""
                      }`}
                    >
                      Learn more <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-10 flex justify-center">
            <BtnLink to="/services" variant="secondary">
              View All Services <ArrowRight size={16} />
            </BtnLink>
          </div>
        </div>
      </section>

      {/* WHY US — small gap above, large gap below (uneven rhythm) */}
      <section className="container-page py-12 md:py-14">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Five reasons enterprises trust us with delivery"
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
              Deep engineering discipline, transparent delivery, and long term partnership.
            </p>
            <Link to="/why-us" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:gap-2.5 transition-all">
              See all differentiators <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Large gap before CTA */}
      <div className="pt-16 md:pt-24" />
      <CtaBanner />
    </PageLayout>
  );
}

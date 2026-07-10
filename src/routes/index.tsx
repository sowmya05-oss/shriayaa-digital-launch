import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, type CSSProperties, type PointerEvent } from "react";
import { ArrowRight } from "lucide-react";
import { PageLayout, SectionHeading } from "@/components/PageLayout";
import { BtnLink } from "@/components/Button";
import { CtaBanner } from "@/components/CtaBanner";
import { LogoOrbitBackground } from "@/components/LogoOrbitBackground";
import { CAPABILITIES, SERVICES, WHY_US } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shriyaa Quantum Software — Domain-Agnostic Technology Delivery" },
      {
        name: "description",
        content: "End-to-end software lifecycle services across every industry.",
      },
      {
        property: "og:title",
        content: "Shriyaa Quantum Software — Domain-Agnostic Technology Delivery",
      },
      {
        property: "og:description",
        content: "End-to-end software lifecycle services across every industry.",
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
        <div className="hero-ambient pointer-events-none absolute inset-0" />
        <div className="orbital-lines hero-orbital-field pointer-events-none absolute inset-0 opacity-[0.16]" />
        <div className="tech-hero-motif pointer-events-none absolute inset-0 opacity-[0.18]" />
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
            <h1 className="fade-up text-[2.75rem] font-semibold leading-[1.08] text-[#A41E1B] md:text-[4.5rem] lg:text-[5.25rem]">
              Innovate. Integrate. <span className="text-[#D4A743]">Elevate.</span>
            </h1>
            <p className="fade-up mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#8B2E1F]">
              End-to-end software lifecycle services across every industry
            </p>
            <div className="fade-up mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <BtnLink to="/contact">
                Contact Us <ArrowRight size={16} />
              </BtnLink>
              <BtnLink to="/services" variant="secondary">
                Explore Services
              </BtnLink>
            </div>
          </div>
        </div>
        <div className="relative z-10 mx-auto h-px max-w-[1180px] bg-[linear-gradient(90deg,transparent,rgba(212,167,67,0.4),transparent)]" />
      </section>

      <section className="home-yellow-band section-circuit-edge py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="reveal relative overflow-hidden rounded-xl border border-[#C84D41]/20 bg-[#FFFBF0] p-8 shadow-[0_22px_80px_rgba(139,46,31,0.09)] md:p-10">
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-[#D4A743]/25" />
            <div className="pointer-events-none absolute -right-10 top-16 h-36 w-36 rounded-full border border-[#C84D41]/15" />
            <div className="absolute bottom-0 left-0 top-0 w-1 bg-[linear-gradient(180deg,#A41E1B,#D4A743)]" />
            <SectionHeading
              title="Built to Adapt Across Industries"
              subtitle="Shriyaa Quantum Software Private Limited delivers end-to-end technology services across the full software lifecycle."
            />
            <BtnLink to="/about" variant="secondary" className="mt-8">
              Learn More About Us
            </BtnLink>
          </div>
          <div className="reveal relative flex flex-col justify-center space-y-5 rounded-xl border border-[#D4A743]/35 bg-[#FFFEF5]/82 p-8 text-base leading-8 text-[#8B2E1F] shadow-[0_16px_60px_rgba(139,46,31,0.05)] md:p-10 md:text-lg">
            <div className="absolute right-6 top-6 h-8 w-8 border-r border-t border-[#D4A743]/45" />
            <p>
              We provide technology consulting, software development, quality assurance and testing,
              deployment services, and infrastructure services supported by dedicated data and
              analytics capabilities.
            </p>
            <p>
              We are deliberately not domain-specific. Our capabilities cut across every industry
              vertical, letting us adapt quickly to each client's technical landscape.
            </p>
          </div>
        </div>
      </section>

      <section className="home-data-grid section-circuit-edge py-16 md:py-24">
        <div className="container-page">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading title="What We Help Businesses Achieve" />
            <div className="hidden h-px flex-1 bg-[linear-gradient(90deg,rgba(212,167,67,0.5),transparent)] md:block" />
          </div>
          <div className="reveal-stagger mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CAPABILITIES.map((capability) => {
              const Icon = capability.icon;
              return (
                <div
                  key={capability.title}
                  className="card-elevated card-elevated-hover card-tech reveal group relative flex min-h-32 items-center gap-4 overflow-hidden bg-[#FFFBF0]/92 p-5"
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

      <section id="services" className="home-service-band section-circuit-edge py-16 md:py-24">
        <div className="container-page">
          <div className="reveal rounded-xl border border-[#D4A743]/30 bg-[#FFFEF5]/78 p-7 shadow-[0_18px_70px_rgba(139,46,31,0.06)] md:p-10">
            <SectionHeading
              title="Services Across the Full Lifecycle"
              subtitle="Six connected practices that can stand alone or work together as one delivery engagement."
            />
          </div>
          <div className="reveal-stagger mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.id}
                  className="card-elevated card-elevated-hover card-tech reveal group relative overflow-hidden bg-[#FFFBF0]/95 p-8"
                >
                  <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[#D4A743]/10 transition-transform group-hover:scale-125" />
                  <div className="grid h-12 w-12 place-items-center rounded-lg bg-[#C84D41]/8 text-[#A41E1B]">
                    <Icon size={26} />
                  </div>
                  <h3 className="mt-6 text-xl font-medium leading-snug text-[#A41E1B]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#8B2E1F]">{service.teaser}</p>
                  <Link
                    to="/services"
                    hash={service.id}
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#A41E1B] px-4 py-2 text-sm font-semibold text-[#A41E1B] transition-colors hover:bg-[#C84D41]/10"
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </article>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <BtnLink to="/services">View All Services</BtnLink>
          </div>
        </div>
      </section>

      <section className="home-differentiator-band section-circuit-edge py-16 md:py-24">
        <div className="container-page">
          <SectionHeading align="center" title="Why Choose Shriyaa Quantum Software" />
          <div className="reveal-stagger mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {WHY_US.map((reason) => {
              const Icon = reason.icon;
              return (
                <article
                  key={reason.title}
                  className="card-tech reveal rounded-xl border border-[#D4A743]/20 bg-[#FFFEF5]/55 p-5 text-center transition-all duration-300 hover:border-[#C84D41]/20 hover:bg-[#FFFBF0] hover:shadow-[0_16px_50px_rgba(139,46,31,0.07)]"
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
              See Why Shriyaa
            </BtnLink>
          </div>
        </div>
      </section>

      <CtaBanner />
    </PageLayout>
  );
}

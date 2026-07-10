import { createFileRoute, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowRight, Check } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { SERVICES } from "@/lib/content";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Shriyaa Quantum Software" },
      {
        name: "description",
        content: "Comprehensive technology solutions across the full software lifecycle.",
      },
      { property: "og:title", content: "Services — Shriyaa Quantum Software" },
      {
        property: "og:description",
        content: "Comprehensive technology solutions across the full software lifecycle.",
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
      <section className="relative overflow-hidden bg-[#FFFEF5] py-20 text-center md:py-24">
        <div className="hero-ambient pointer-events-none absolute inset-0" />
        <div className="orbital-lines pointer-events-none absolute inset-0 opacity-[0.16]" />
        <div className="tech-hero-motif pointer-events-none absolute inset-0 opacity-[0.18]" />
        <div className="container-page relative">
          <h1 className="text-[2.2rem] font-semibold leading-tight text-[#A41E1B] md:text-5xl">
            Our Services
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#8B2E1F]">
            Comprehensive technology solutions across the full software lifecycle
          </p>
          <p className="mx-auto mt-8 max-w-[700px] text-base leading-8 text-[#8B2E1F] md:text-lg">
            Our services are designed to meet organizations wherever they are: clarifying strategy,
            building reliable software, strengthening quality, deploying with confidence, operating
            stable environments, and turning data into practical decisions.
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
              Six connected layers of delivery
            </h2>
          </div>
          <div className="reveal-stagger mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <a
                  key={service.id}
                  href={`/services#${service.id}`}
                  className="card-tech reveal group rounded-xl border border-[#D4A743]/20 bg-[#FFFBF0]/78 p-5 shadow-[0_14px_48px_rgba(139,46,31,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#A41E1B]/35 hover:bg-[#FFFEF5] hover:shadow-[0_22px_60px_rgba(139,46,31,0.09)]"
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
                  <p className="mt-3 text-sm leading-7 text-[#8B2E1F]">{service.short}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#C84D41] underline-offset-4 group-hover:underline">
                    View layer <ArrowRight size={15} />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {SERVICES.map((service, index) => {
        const Icon = service.icon;
        return (
          <section
            key={service.id}
            id={service.id}
            className={`${index % 2 === 0 ? "service-node-band section-circuit-edge" : "service-node-band-alt section-circuit-edge"} scroll-mt-28 border-y border-[#D4A743]/30 py-12 md:py-16`}
          >
            <div className="container-page max-w-[1240px]">
              <article className="reveal grid gap-0 overflow-hidden rounded-2xl border border-[#D4A743]/25 bg-[#FFFBF0]/88 shadow-[0_24px_90px_rgba(139,46,31,0.08)] lg:grid-cols-[0.72fr_1.28fr]">
                <div className="relative overflow-hidden border-b border-[#D4A743]/25 bg-[#FFFEF5]/70 p-6 lg:border-b-0 lg:border-r lg:p-8">
                  <div className="absolute inset-0 tech-hero-motif opacity-[0.16]" />
                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl font-semibold leading-none text-[#D4A743] md:text-5xl">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#C84D41]/8 text-[#A41E1B] shadow-inner">
                        <Icon size={24} />
                      </span>
                    </div>
                    <div className="mt-6 h-px bg-[linear-gradient(90deg,#A41E1B,#D4A743,transparent)]" />
                    <h2 className="mt-6 text-3xl font-semibold leading-tight text-[#A41E1B] md:text-[2.45rem]">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-base leading-7 text-[#8B2E1F]">{service.short}</p>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="grid items-center gap-7 xl:grid-cols-[minmax(0,1fr)_minmax(320px,0.78fr)]">
                    <div className="max-w-[520px] self-center text-[1.03rem] leading-8 text-[#8B2E1F]">
                      <div className="space-y-6">
                        {service.description.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>

                    <div className="card-tech self-center rounded-xl border border-[#D4A743]/30 bg-[#FFFEF5]/78 p-5">
                      <h3 className="text-base font-semibold text-[#A41E1B]">What's Included</h3>
                      <ul className="mt-5 grid gap-3">
                        {service.includes.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 rounded-lg border border-[#C84D41]/10 bg-[#FFFBF0]/70 px-3 py-1.5 text-sm leading-6 text-[#8B2E1F]"
                          >
                            <Check size={16} className="mt-1 shrink-0 text-[#A41E1B]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </section>
        );
      })}
    </PageLayout>
  );
}

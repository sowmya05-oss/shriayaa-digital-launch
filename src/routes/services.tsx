import { createFileRoute, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowRight, Check } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { SERVICES } from "@/lib/content";

type Service = (typeof SERVICES)[number];

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
      <section className="relative overflow-hidden bg-[#FFFEF5] py-16 text-center sm:py-20 md:py-24">
        <div className="hero-ambient pointer-events-none absolute inset-0" />
        <div className="orbital-lines pointer-events-none absolute inset-0 opacity-[0.16]" />
        <div className="tech-hero-motif pointer-events-none absolute inset-0 opacity-[0.18]" />
        <div className="container-page relative">
          <h1 className="text-[2.2rem] font-semibold leading-tight text-[#A41E1B] md:text-5xl">
            Our Services
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#8B2E1F] sm:text-lg">
            Comprehensive technology solutions across the full software lifecycle
          </p>
          <p className="mx-auto mt-6 max-w-[700px] text-base leading-8 text-[#8B2E1F] sm:mt-8 md:text-lg">
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
                  <ServiceImage service={service} index={index} compact />
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
                  <div className="grid gap-7">
                    <div className="grid items-center gap-8 xl:grid-cols-[minmax(320px,0.82fr)_minmax(0,1.18fr)]">
                      <ServiceImage service={service} index={index} />

                      <div className="text-[1.03rem] leading-8 text-[#8B2E1F]">
                        <div className="max-w-[680px] space-y-5">
                          {service.description.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-[#D4A743]/30 bg-[#FFFEF5]/72 p-5">
                      <h3 className="text-base font-semibold text-[#A41E1B]">Key inclusions</h3>
                      <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                        {service.includes.slice(0, 4).map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 rounded-lg border border-[#C84D41]/10 bg-[#FFFBF0]/72 px-3 py-2 text-sm leading-6 text-[#8B2E1F]"
                          >
                            <Check size={15} className="mt-1 shrink-0 text-[#A41E1B]" />
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

function ServiceImage({
  service,
  index,
  compact = false,
}: {
  service: Service;
  index: number;
  compact?: boolean;
}) {
  const Icon = service.icon;
  const image = SERVICE_IMAGES[index % SERVICE_IMAGES.length];
  const heightClass = compact ? "mb-5 h-32" : "h-56 sm:h-72 lg:h-[330px]";

  return (
    <div
      role="img"
      aria-label={`${service.title} visual`}
      className={`${heightClass} relative overflow-hidden rounded-xl border border-[#D4A743]/25 bg-[#FFFEF5] shadow-[0_16px_50px_rgba(139,46,31,0.08)]`}
    >
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        referrerPolicy="no-referrer"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(33,9,13,0.03)_0%,rgba(33,9,13,0.45)_100%)]" />
      <div className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl bg-[#FFFEF5]/92 text-[#A41E1B] shadow-[0_10px_30px_rgba(33,9,13,0.18)]">
        <Icon size={compact ? 20 : 22} />
      </div>
      {!compact && (
        <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-[#FFFEF5]/90 px-4 py-3 text-sm font-semibold text-[#A41E1B] shadow-[0_12px_40px_rgba(33,9,13,0.18)] backdrop-blur">
          {image.caption}
        </div>
      )}
    </div>
  );
}

const SERVICE_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=82",
    alt: "Consulting team reviewing strategy and architecture around a conference table",
    caption: "Roadmap workshops and architecture decisions",
  },
  {
    src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",
    alt: "Developer working with source code on a laptop",
    caption: "Modern application engineering",
  },
  {
    src: "https://cms.testdevlab.com/content/images/wordpress/2021/09/christina-wocintechchat-com-2JDDn7iSGH8-unsplash.jpg",
    alt: "QA engineer testing software on a laptop",
    caption: "Structured QA and release confidence",
  },
  {
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=82",
    alt: "Engineer monitoring deployment activity from a laptop workstation",
    caption: "Repeatable deployment pipelines",
  },
  {
    src: "https://image.jimcdn.com/app/cms/image/transf/none/path/sb78ee63b9ce4c41d/image/i08a3974019dfdc9d/version/1631672492/image.jpg",
    alt: "Business professional managing IT infrastructure icons in a server room",
    caption: "Reliable infrastructure operations",
  },
  {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    alt: "Analytics dashboard with charts and business data",
    caption: "Analytics systems for practical decisions",
  },
] as const;

import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, SectionHeading } from "@/components/PageLayout";
import { APPROACH_STEPS, VALUES } from "@/lib/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Shriyaa Quantum Software" },
      {
        name: "description",
        content: "Who we are, how we work, and the principles that shape our delivery.",
      },
      { property: "og:title", content: "About — Shriyaa Quantum Software" },
      {
        property: "og:description",
        content: "Who we are, how we work, and the principles that shape our delivery.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageLayout>
      <section className="relative overflow-hidden bg-[#FFFEF5] py-20 md:py-24">
        <div className="hero-ambient pointer-events-none absolute inset-0" />
        <div className="orbital-lines pointer-events-none absolute inset-0 opacity-[0.16]" />
        <div className="tech-hero-motif pointer-events-none absolute inset-0 opacity-[0.18]" />
        <div className="container-page relative text-center">
          <h1 className="text-[2.5rem] font-semibold leading-tight text-[#A41E1B] md:text-[3.5rem]">
            About Us
          </h1>
          <p className="mx-auto mt-5 max-w-4xl text-base leading-relaxed text-[#8B2E1F] md:text-lg">
            A domain-agnostic technology company delivering reliable software lifecycle services.
          </p>
          <div className="reveal-stagger mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-3">
            {["6 lifecycle services", "Any industry vertical", "QA to production"].map((item) => (
              <div
                key={item}
                className="reveal rounded-lg border border-[#D4A743]/25 bg-[#FFFBF0]/70 px-4 py-3 text-sm font-semibold text-[#A41E1B] shadow-[0_12px_36px_rgba(139,46,31,0.05)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-grid-band section-circuit-edge py-16 md:py-24">
        <div className="container-page">
          <p className="reveal mb-8 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#C84D41]">
            Who We Are
          </p>
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-stretch">
            <div className="reveal flex h-full flex-col justify-center rounded-xl border border-[#D4A743]/25 bg-[#FFFBF0]/82 p-7 shadow-[0_20px_70px_rgba(139,46,31,0.07)] md:p-9">
              <h2 className="text-3xl font-semibold leading-tight text-[#A41E1B] md:text-4xl">
                Domain-agnostic by design. Delivery focused by practice.
              </h2>
              <div className="mt-6 grid grid-cols-2 gap-2">
                {[
                  "Technology",
                  "Health-care",
                  "Finance",
                  "Retail",
                  "Public Sector",
                  "Education",
                  "Manufacturing",
                  "Operations",
                ].map((domain) => (
                  <span
                    key={domain}
                    className="rounded-full border border-[#D4A743]/25 bg-[#FFFEF5]/72 px-3 py-2 text-center text-xs font-semibold text-[#8B2E1F]"
                  >
                    {domain}
                  </span>
                ))}
              </div>
            </div>

            <div className="reveal h-full space-y-4 rounded-xl border border-[#D4A743]/25 bg-[#FFFEF5]/78 p-7 text-base leading-8 text-[#8B2E1F] shadow-[0_18px_70px_rgba(139,46,31,0.05)] md:p-10 md:text-lg">
              <p>
                Shriyaa Quantum Software Private Limited is a technology company delivering
                end-to-end technology services across the full software lifecycle.
              </p>
              <p>
                We provide technology consulting, software development, quality assurance and
                testing, deployment services, and infrastructure services.
              </p>
              <p>
                These are supported by dedicated data and analytics capabilities, including the
                systems, components, and testing tools required to deliver them reliably.
              </p>
              <p>
                We are deliberately not domain-specific. Our capabilities are built to cut across
                every industry vertical, providing the appropriate platform, working environment,
                reusable components, and both test and production environments needed for any
                domain, from finance to healthcare to retail to the public sector.
              </p>
              <p>
                This domain-agnostic foundation lets us adapt quickly to a client's specific
                technical landscape rather than forcing a one-size-fits-all template.
              </p>
            </div>
          </div>

          <div className="reveal-stagger mt-8 grid gap-5 lg:grid-cols-2">
            <article className="card-elevated card-tech reveal relative overflow-hidden p-7 md:p-9">
              <div className="absolute inset-x-0 top-0 h-1 bg-[#A41E1B]" />
              <h2 className="text-2xl font-semibold text-[#A41E1B] md:text-3xl">Mission</h2>
              <p className="mt-4 text-base leading-8 text-[#8B2E1F] md:text-lg">
                To deliver reliable, domain-agnostic technology services that help organizations
                move from strategy through production with clarity, quality, and long-term
                maintainability.
              </p>
            </article>
            <article className="card-elevated card-tech reveal relative overflow-hidden p-7 md:p-9">
              <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#A41E1B,#D4A743)]" />
              <h2 className="text-2xl font-semibold text-[#A41E1B] md:text-3xl">Vision</h2>
              <p className="mt-4 text-base leading-8 text-[#8B2E1F] md:text-lg">
                To become a trusted long-term technology partner across industries, known for
                practical engineering, dependable delivery, and systems that keep improving after
                launch.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="home-service-band section-circuit-edge py-16 md:py-24">
        <div className="container-page">
          <SectionHeading align="center" title="How We Work" />
          <div className="reveal-stagger mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {APPROACH_STEPS.map((step) => (
              <article key={step.n} className="card-elevated card-tech reveal p-5 text-center">
                <div className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-[#A41E1B] text-sm font-semibold text-white">
                  {step.n}
                </div>
                <h3 className="mt-4 text-lg font-medium text-[#A41E1B]">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#8B2E1F]">{step.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-data-grid section-circuit-edge py-16 md:py-24">
        <div className="container-page">
          <SectionHeading align="center" title="What We Value" />
          <div className="reveal-stagger mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <article
                  key={value.title}
                  className="card-tech reveal rounded-xl border border-[#D4A743]/20 bg-[#FFFEF5]/65 p-4 text-center transition-all hover:bg-[#FFFBF0] hover:shadow-[0_16px_50px_rgba(139,46,31,0.06)]"
                >
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#C84D41]/8 text-[#A41E1B]">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[#A41E1B]">{value.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#8B2E1F]">{value.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

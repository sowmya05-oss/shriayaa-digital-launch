import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, SectionHeading } from "@/components/PageLayout";
import { APPROACH_STEPS, VALUES } from "@/lib/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Shriyaa Quantum" },
      {
        name: "description",
        content:
          "A Chennai-based company offering enterprise talent, technology services and India business set-up, shaped by experience inside global automotive and industrial organisations.",
      },
      { property: "og:title", content: "About Shriyaa Quantum" },
      {
        property: "og:description",
        content:
          "A Chennai-based company offering enterprise talent, technology services and India business set-up, shaped by experience inside global automotive and industrial organisations.",
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
            About Shriyaa Quantum
          </h1>
          <p className="mx-auto mt-5 max-w-4xl text-base leading-relaxed text-[#8B2E1F] md:text-lg">
            We are a Chennai-based company offering enterprise talent, technology services and India
            business set-up support. Our work is shaped by a team that has spent many years inside
            global automotive, mobility and industrial organisations — so we approach every
            engagement from the client's point of view.
          </p>
        </div>
      </section>

      <section className="page-grid-band section-circuit-edge py-16 md:py-24">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-stretch">
            <div className="reveal flex h-full flex-col justify-center rounded-xl border border-[#D4A743]/25 bg-[#FFFBF0]/82 p-7 shadow-[0_20px_70px_rgba(139,46,31,0.07)] md:p-9">
              <h2 className="text-3xl font-semibold leading-tight text-[#A41E1B] md:text-4xl">
                Who we are
              </h2>
              <p className="mt-6 text-base leading-8 text-[#8B2E1F] md:text-lg">
                Our team combines experience in enterprise finance, shared services, enterprise
                systems, new business set-up and technology delivery, across India, Europe and
                Asia-Pacific.
              </p>
            </div>

            <div className="reveal h-full space-y-4 rounded-xl border border-[#D4A743]/25 bg-[#FFFEF5]/78 p-7 text-base leading-8 text-[#8B2E1F] shadow-[0_18px_70px_rgba(139,46,31,0.05)] md:p-10 md:text-lg">
              <p>
                <strong>Built for</strong>
              </p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>IT service companies</strong> needing dependable SAP, Oracle, Dynamics and
                  Salesforce specialists
                </li>
                <li>
                  <strong>Overseas companies</strong> looking for practical help to set up and run
                  in India
                </li>
                <li>
                  <strong>Organisations</strong> seeking well-delivered technology or clear
                  strategy, finance and growth advice
                </li>
              </ul>
            </div>
          </div>

          <div className="reveal-stagger mt-8 grid gap-5 lg:grid-cols-2">
            <article className="card-elevated card-tech reveal relative overflow-hidden p-7 md:p-9">
              <div className="absolute inset-x-0 top-0 h-1 bg-[#A41E1B]" />
              <h2 className="text-2xl font-semibold text-[#A41E1B] md:text-3xl">Mission</h2>
              <p className="mt-4 text-base leading-8 text-[#8B2E1F] md:text-lg">
                To give our clients the right people, the right technology and a sound footing in
                India — with the discipline large organisations expect and the responsiveness of a
                smaller team.
              </p>
            </article>
            <article className="card-elevated card-tech reveal relative overflow-hidden p-7 md:p-9">
              <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#A41E1B,#D4A743)]" />
              <h2 className="text-2xl font-semibold text-[#A41E1B] md:text-3xl">Vision</h2>
              <p className="mt-4 text-base leading-8 text-[#8B2E1F] md:text-lg">
                To be a dependable India partner for global manufacturers and the technology
                companies that serve them.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="home-service-band section-circuit-edge py-16 md:py-24">
        <div className="container-page">
          <SectionHeading align="center" title="How we work" />
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
          <SectionHeading align="center" title="What we value" />
          <div className="reveal-stagger mt-12 grid auto-rows-fr items-stretch gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <article
                  key={value.title}
                  className="card-tech reveal flex h-full min-h-[220px] flex-col items-center rounded-xl border border-[#D4A743]/20 bg-[#FFFEF5]/65 p-5 text-center transition-all hover:bg-[#FFFBF0] hover:shadow-[0_16px_50px_rgba(139,46,31,0.06)]"
                >
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#C84D41]/8 text-[#A41E1B]">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-4 flex min-h-12 items-center justify-center text-lg font-semibold text-[#A41E1B]">
                    {value.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-[#8B2E1F]">
                    {value.title === "Quality" ? (
                      <>
                        Work that holds up
                        <br className="hidden xl:block" /> in real use.
                      </>
                    ) : value.title === "Understanding the business" ? (
                      <>
                        Not just the system
                        <br className="hidden xl:block" /> or the task.
                      </>
                    ) : value.title === "Reliability" ? (
                      <>
                        Doing what we said,
                        <br className="hidden xl:block" /> when we said.
                      </>
                    ) : (
                      value.desc
                    )}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

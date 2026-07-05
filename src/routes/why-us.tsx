import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { BtnLink } from "@/components/Button";
import { WHY_US } from "@/lib/content";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      { title: "Why Us — Shriyaa Quantum Software" },
      { name: "description", content: "What makes Shriyaa Quantum a dependable, end-to-end technology partner." },
      { property: "og:title", content: "Why Choose Shriyaa Quantum Software" },
      { property: "og:description", content: "One partner from consulting through to production support." },
    ],
  }),
  component: WhyUsPage,
});

function WhyUsPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Why Us"
        title="Why choose Shriyaa Quantum Software."
        subtitle="Enterprises choose us for one reason: dependable, end-to-end delivery that adapts to their domain — with the QA, deployment, and analytics discipline built in."
      />

      <section className="container-page py-16 md:py-20">
        <p className="max-w-3xl text-base md:text-lg text-muted-foreground leading-relaxed">
          Choosing a technology partner is a long-term decision. We built our practice to remove the
          usual trade-offs — you don't have to pick between industry expertise, engineering depth,
          and reliable delivery. We bring all three, in one team, across the full software lifecycle.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_US.map((w, i) => (
            <div key={w.title} className="card-elevated card-elevated-hover p-7">
              <div className="text-xs font-bold tracking-[0.22em] text-gold">0{i + 1}</div>
              <div className="mt-3 grid h-11 w-11 place-items-center rounded-lg bg-brand/8 text-brand">
                <w.icon size={20} strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 text-lg font-bold text-ink">{w.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
            </div>
          ))}
          <div className="p-7 rounded-xl border border-dashed border-brand/40 bg-brand/5 flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold tracking-[0.22em] text-brand">06</div>
              <h3 className="mt-4 text-lg font-bold text-ink">Long-Term Partnership</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                We stay accountable well beyond go-live — from first workshop to long-term support.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <BtnLink to="/contact" variant="primary">
            Start a Conversation <ArrowRight size={16} />
          </BtnLink>
        </div>
      </section>
    </PageLayout>
  );
}

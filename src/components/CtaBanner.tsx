import { BtnLink } from "./Button";
import { ArrowRight, MessageSquare } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="container-page py-16 md:py-20">
      <div
        className="relative overflow-hidden gradient-brand text-white"
        style={{
          clipPath:
            "polygon(0 6%, 100% 0, 100% 94%, 0 100%)",
          padding: "5.5rem 0",
        }}
      >
        <div className="absolute inset-0 orbital-lines opacity-40 pointer-events-none" />
        {/* Diagonal gold slash accent */}
        <div
          className="absolute -right-20 top-0 h-full w-[55%] pointer-events-none"
          style={{
            background:
              "linear-gradient(115deg, transparent 40%, oklch(0.80 0.15 82 / 0.18) 55%, transparent 70%)",
          }}
        />
        <div className="absolute right-8 top-10 hidden md:block h-40 w-40 rounded-full border-2 border-gold/40" />
        <div className="absolute right-24 bottom-8 hidden md:block h-24 w-24 rounded-full bg-gold/15" />

        <div className="relative container-page">
          <div className="max-w-2xl md:pl-4 lg:pl-10">
            <div className="text-xs font-semibold tracking-[0.28em] uppercase text-gold-soft mb-4">
              Let's Build
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-[1.05]">
              Ready to move your technology forward, with precision?
            </h2>
            <p className="mt-5 text-white/85 text-base md:text-lg max-w-xl leading-relaxed">
              Whether you're modernizing legacy systems, launching a new platform, or scaling
              operations, we bring delivery capability that adapts to your domain.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BtnLink to="/contact" variant="gold">
                Contact Us <ArrowRight size={16} />
              </BtnLink>
              <BtnLink to="/contact" variant="outline-light">
                <MessageSquare size={16} /> Schedule a Discussion
              </BtnLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

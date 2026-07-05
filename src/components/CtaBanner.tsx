import { BtnLink } from "./Button";
import { ArrowRight, MessageSquare } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="container-page py-20 md:py-24">
      <div className="relative overflow-hidden rounded-3xl gradient-brand px-8 py-14 md:px-16 md:py-20 text-white">
        <div className="absolute inset-0 orbital-lines opacity-40 pointer-events-none" />
        <div className="relative max-w-3xl">
          <div className="text-xs font-semibold tracking-[0.22em] uppercase text-gold-soft mb-4">
            Let's Build
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Ready to move your technology forward — with precision?
          </h2>
          <p className="mt-5 text-white/85 text-base md:text-lg max-w-2xl leading-relaxed">
            Whether you're modernizing legacy systems, launching a new platform, or scaling
            operations, we bring end-to-end delivery capability that adapts to your domain.
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
    </section>
  );
}

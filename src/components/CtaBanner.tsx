import { BtnLink } from "./Button";
import { ArrowRight, MessageSquare } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="bg-[linear-gradient(135deg,#21090D_0%,#5B1212_42%,#A41E1B_72%,#D4A743_145%)] py-16 text-white md:py-20">
      <div className="container-page text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
            Ready to Build Something Great?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/85 md:text-lg">
            Let's discuss your technology roadmap and how we can help.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <BtnLink to="/contact" className="bg-white text-[#A41E1B] hover:bg-white">
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

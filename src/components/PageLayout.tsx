import { useEffect, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageLayout({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    const revealEls = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    if (!("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("reveal-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );

    revealEls.forEach((el) => {
      el.classList.remove("reveal-visible");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-[84px]">{children}</main>
      <Footer />
    </div>
  );
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, subtitle, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#FFFEF5]">
      <div className="container-page relative py-20 md:py-24">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold-soft/30 px-3.5 py-1 text-xs font-semibold tracking-widest text-[#E8A020] uppercase mb-6 fade-up">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C41E1E]" />
            {eyebrow}
          </div>
        )}
        <h1 className="fade-up max-w-3xl text-4xl font-semibold leading-tight text-[#A41E1B] md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="fade-up mt-5 max-w-2xl text-lg leading-relaxed text-[#8B2E1F]">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8 fade-up">{children}</div>}
      </div>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  titleClassName?: string;
  subtitleClassName?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  titleClassName = "",
  subtitleClassName = "",
}: SectionHeadingProps) {
  return (
    <div
      className={align === "center" ? "reveal text-center max-w-2xl mx-auto" : "reveal max-w-2xl"}
    >
      {eyebrow && (
        <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#E8A020] mb-3">
          {eyebrow}
        </div>
      )}
      <h2
        className={`text-3xl font-semibold leading-tight text-[#A41E1B] md:text-4xl ${titleClassName}`.trim()}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed text-[#8B2E1F] md:text-lg ${subtitleClassName}`.trim()}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

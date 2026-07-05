import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
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
    <section className="relative overflow-hidden orbital-lines orbital-bg border-b border-border">
      <div className="container-page relative py-20 md:py-28">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold-soft/30 px-3.5 py-1 text-xs font-semibold tracking-widest text-brand-dark uppercase mb-6 fade-up">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            {eyebrow}
          </div>
        )}
        <h1 className="fade-up max-w-3xl text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-[1.05]">
          {title}
        </h1>
        {subtitle && (
          <p className="fade-up mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
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
}

export function SectionHeading({ eyebrow, title, subtitle, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      {eyebrow && (
        <div className="text-xs font-semibold tracking-[0.2em] uppercase text-brand mb-3">{eyebrow}</div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-ink leading-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
    </div>
  );
}

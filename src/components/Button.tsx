import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost" | "gold" | "outline-light";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-primary-foreground hover:bg-brand-dark shadow-sm hover:shadow",
  secondary: "bg-ink text-white hover:bg-ink/85",
  ghost: "bg-transparent text-ink hover:bg-accent",
  gold: "bg-gold text-ink hover:bg-gold-soft shadow-sm",
  "outline-light": "border border-white/40 text-white hover:bg-white/10",
};

type CommonProps = { variant?: Variant; children: ReactNode; className?: string };

type LinkProps = CommonProps & Omit<ComponentProps<typeof Link>, "children" | "className">;

export function BtnLink({ variant = "primary", children, className = "", ...rest }: LinkProps) {
  return (
    <Link {...rest} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function BtnAnchor({
  variant = "primary",
  children,
  className = "",
  withArrow,
  ...rest
}: CommonProps & { withArrow?: boolean } & Omit<ComponentProps<"a">, "children" | "className">) {
  return (
    <a {...rest} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {withArrow && <ArrowRight size={16} />}
    </a>
  );
}

export function BtnButton({
  variant = "primary",
  children,
  className = "",
  ...rest
}: CommonProps & Omit<ComponentProps<"button">, "children" | "className">) {
  return (
    <button {...rest} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}

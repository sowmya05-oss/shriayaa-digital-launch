import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost" | "gold" | "outline-light";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A41E1B]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFFEF5] active:translate-y-0 active:brightness-95";

const variants: Record<Variant, string> = {
  primary:
    "bg-[linear-gradient(135deg,#C84D41_0%,#C84D41_38%,#D4A743_100%)] text-white shadow-sm hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(196,61,49,0.4)]",
  secondary:
    "border border-[#A41E1B] bg-transparent text-[#A41E1B] hover:-translate-y-0.5 hover:bg-[#C84D41]/10",
  ghost: "bg-transparent text-[#A41E1B] hover:bg-[#C84D41]/10",
  gold: "bg-[#D4A743] text-[#2B160F] hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(212,167,67,0.35)]",
  "outline-light": "border border-white/60 text-white hover:-translate-y-0.5 hover:bg-white/10",
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

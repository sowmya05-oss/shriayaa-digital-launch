import { Link } from "@tanstack/react-router";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
  showWordmark?: boolean;
}

export function Logo({ className = "", variant = "dark", showWordmark = true }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-ink";
  const subColor = variant === "light" ? "text-white/70" : "text-muted-foreground";

  return (
    <Link to="/" className={`group inline-flex items-center gap-3 ${className}`} aria-label="Shriyaa Quantum Software home">
      <LogoMark className="h-11 w-11 shrink-0" />
      {showWordmark && (
        <div className="hidden sm:flex flex-col leading-none">
          <span className={`font-display text-[13px] font-bold tracking-[0.14em] ${textColor}`}>
            SHRIYAA QUANTUM
          </span>
          <span className={`text-[10px] font-semibold tracking-[0.22em] mt-1 ${subColor}`}>
            SOFTWARE PVT. LTD.
          </span>
        </div>
      )}
    </Link>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="lm-red" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.55 0.20 27)" />
          <stop offset="100%" stopColor="oklch(0.40 0.16 25)" />
        </linearGradient>
        <linearGradient id="lm-gold" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.88 0.14 88)" />
          <stop offset="100%" stopColor="oklch(0.72 0.15 78)" />
        </linearGradient>
      </defs>
      {/* Orbital rings */}
      <ellipse cx="32" cy="32" rx="26" ry="10" fill="none" stroke="url(#lm-red)" strokeWidth="2" transform="rotate(30 32 32)" opacity="0.9" />
      <ellipse cx="32" cy="32" rx="26" ry="10" fill="none" stroke="url(#lm-red)" strokeWidth="2" transform="rotate(-30 32 32)" opacity="0.9" />
      <ellipse cx="32" cy="32" rx="26" ry="10" fill="none" stroke="url(#lm-red)" strokeWidth="2" transform="rotate(90 32 32)" opacity="0.5" />
      {/* Nucleus */}
      <circle cx="32" cy="32" r="6" fill="url(#lm-red)" />
      <circle cx="32" cy="32" r="2.2" fill="url(#lm-gold)" />
      {/* Q tail / gold ribbon */}
      <path d="M40 40 Q 50 46 56 56" stroke="url(#lm-gold)" strokeWidth="3.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

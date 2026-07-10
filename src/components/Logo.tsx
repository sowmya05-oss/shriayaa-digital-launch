import { Link } from "@tanstack/react-router";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
  showWordmark?: boolean;
}

export function Logo({ className = "", variant = "dark", showWordmark = true }: LogoProps) {
  return (
    <Link
      to="/"
      className={`group inline-flex items-center gap-3 ${className}`}
      aria-label="Shriyaa Quantum Software home"
    >
      <img
        src="/shriyaa-quantum-logo.svg"
        alt="Shriyaa Quantum Software logo"
        className={`h-16 w-16 shrink-0 object-contain md:h-20 md:w-20 ${variant === "light" ? "brightness-105" : ""}`}
      />
      {showWordmark && (
        <span className="font-display text-lg font-medium leading-tight text-[#A41E1B] sm:whitespace-nowrap">
          Shriyaa Quantum Software
        </span>
      )}
    </Link>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <img
      src="/shriyaa-quantum-logo.svg"
      alt="Shriyaa Quantum Software logo"
      className={`h-16 w-16 object-contain ${className}`}
      aria-hidden="true"
    />
  );
}

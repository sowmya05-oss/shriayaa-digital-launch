import { Link } from "@tanstack/react-router";

interface LogoProps {
  className?: string;
  imageClassName?: string;
  wordmarkClassName?: string;
  variant?: "dark" | "light";
  showWordmark?: boolean;
}

export function Logo({
  className = "",
  imageClassName = "",
  wordmarkClassName = "",
  variant = "dark",
  showWordmark = true,
}: LogoProps) {
  return (
    <Link
      to="/"
      className={`group inline-flex items-center gap-3 ${className}`}
      aria-label="Shriyaa Quantum Software home"
    >
      <img
        src="/shriyaa-quantum-logo.svg"
        alt="Shriyaa Quantum Software logo"
        className={`${imageClassName || "h-16 w-16 md:h-20 md:w-20"} shrink-0 object-contain ${variant === "light" ? "brightness-105" : ""}`}
      />
      {showWordmark && (
        <span
          className={`font-display text-lg font-medium leading-tight text-[#A41E1B] ${wordmarkClassName}`}
        >
          <span className="block whitespace-nowrap">Shriyaa Quantum Software</span>
          <span className="block whitespace-nowrap text-[0.82em]">Private Limited</span>
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

import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/shriyaa-logo.jpeg.asset.json";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      to="/"
      className={`inline-flex items-center ${className}`}
      aria-label="Shriyaa Quantum Software home"
    >
      <img
        src={logoAsset.url}
        alt="Shriyaa Quantum Software Private Limited"
        className="h-12 md:h-14 w-auto object-contain"
      />
    </Link>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="Shriyaa Quantum Software"
      className={`${className} object-contain`}
    />
  );
}

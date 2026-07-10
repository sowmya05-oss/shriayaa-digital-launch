import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/why-us", label: "Why Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (menuRef.current?.contains(target) || buttonRef.current?.contains(target)) return;
      setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed left-0 top-0 z-[1000] w-full border-b border-[#D4A743]/30 bg-[#FFFEF5]">
      <div className="container-page flex min-h-[84px] items-center justify-between gap-5 py-4">
        <Logo />

        <nav className="hidden shrink-0 items-center gap-1 lg:flex" aria-label="Primary navigation">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-[#A41E1B] after:scale-x-100" }}
              inactiveProps={{
                className:
                  "text-[#8B2E1F] after:scale-x-0 hover:text-[#C84D41] hover:after:scale-x-100",
              }}
              className="relative px-3.5 py-2 text-sm font-medium transition-colors after:absolute after:bottom-1 after:left-3.5 after:right-3.5 after:h-0.5 after:origin-left after:bg-[#C84D41] after:transition-transform"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-3 inline-flex items-center rounded-full bg-[linear-gradient(135deg,#C84D41_0%,#C84D41_38%,#D4A743_100%)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(196,61,49,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A41E1B]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFFEF5]"
          >
            Get Started
          </Link>
        </nav>

        <button
          ref={buttonRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#A41E1B]/25 text-[#A41E1B] transition-colors hover:bg-[#C84D41]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A41E1B]/45 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div
          ref={menuRef}
          id="mobile-navigation"
          className="border-t border-[#D4A743]/30 bg-[#FFFEF5] shadow-[0_16px_40px_rgba(139,46,31,0.12)] lg:hidden"
        >
          <nav className="container-page flex flex-col py-4" aria-label="Mobile navigation">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                className={`border-b border-[#D4A743]/20 py-3 text-base font-medium transition-colors last:border-0 ${
                  pathname === item.to
                    ? "text-[#A41E1B] underline decoration-2 underline-offset-4"
                    : "text-[#8B2E1F] hover:text-[#C84D41]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#C84D41_0%,#C84D41_38%,#D4A743_100%)] px-5 py-3 text-sm font-semibold text-white shadow-sm"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

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
    <header className="fixed left-0 top-0 z-[1000] w-full overflow-hidden border-b border-[#D4A743]/30 bg-[#FFFEF5] shadow-[0_8px_28px_rgba(164,30,27,0.06)]">
      <span className="pointer-events-none absolute inset-y-0 left-0 w-[300px] bg-[radial-gradient(circle_at_0%_50%,rgba(251,206,30,0.44)_0%,rgba(255,246,199,0.32)_34%,rgba(255,254,245,0)_78%)] sm:w-[460px] md:w-[600px]" />
      <div className="relative z-10 flex h-20 w-full items-center justify-between gap-3 py-0 pl-3 pr-4 sm:h-24 sm:pl-4 sm:pr-5 md:pl-6 md:pr-10 lg:pl-8 lg:pr-12">
        <Link
          to="/"
          className="relative flex min-w-0 shrink items-center gap-0 overflow-hidden py-2 pr-3 md:pr-6"
          aria-label="Shriyaa Quantum Software Private Limited home"
        >
          <span className="relative flex h-[62px] w-[94px] shrink-0 items-center justify-center sm:h-[76px] sm:w-[112px] md:h-[84px] md:w-[124px]">
            <img
              src="/shriyaa-quantum-logo.svg"
              alt=""
              className="h-full w-full object-contain object-left"
              aria-hidden="true"
            />
          </span>
          <span className="relative -ml-4 hidden max-w-[190px] font-display text-[0.72rem] font-semibold uppercase leading-[1.12] tracking-[0.02em] text-[#A41E1B] min-[380px]:block sm:max-w-[360px] sm:text-[0.98rem] md:-ml-5 md:max-w-[450px] md:text-[1.12rem] lg:-ml-6 lg:max-w-[540px] lg:text-[1.24rem]">
            <span className="block whitespace-nowrap">Shriyaa Quantum Software</span>
            <span className="block whitespace-nowrap text-[0.82em]">Private Limited</span>
          </span>
        </Link>

        <nav className="hidden shrink-0 items-center gap-1 lg:flex" aria-label="Primary navigation">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-[#A41E1B] after:scale-x-100" }}
              inactiveProps={{
                className:
                  "text-[#8B2E1F] after:scale-x-0 hover:text-[#B10608] hover:after:scale-x-100",
              }}
              className="relative px-3.5 py-2 text-sm font-semibold transition-colors after:absolute after:bottom-1 after:left-3.5 after:right-3.5 after:h-0.5 after:origin-left after:bg-[#C70F16] after:transition-transform"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-3 inline-flex items-center rounded-full bg-[linear-gradient(135deg,#B10608_0%,#C70F16_46%,#D4A743_100%)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(196,61,49,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A41E1B]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFFEF5]"
          >
            Get Started
          </Link>
        </nav>

        <button
          ref={buttonRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#A41E1B]/25 bg-[#FFFEF5]/75 text-[#A41E1B] transition-colors hover:bg-[#FBD1B6]/55 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A41E1B]/45 lg:hidden"
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

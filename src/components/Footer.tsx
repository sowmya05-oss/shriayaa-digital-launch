import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/contact";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-[#D4A743] bg-[#FFF9E6] text-[#8B2E1F]">
      <div className="container-page grid gap-10 py-10 md:grid-cols-2 md:gap-14 md:py-[60px] lg:grid-cols-[minmax(0,1.25fr)_minmax(160px,0.65fr)_minmax(240px,0.9fr)_minmax(220px,0.8fr)]">
        <div className="max-w-md">
          <Logo />
          <p className="mt-2 text-xs text-[#666666]">CIN: U62010TN2026PTC194589</p>
          <p className="mt-5 text-sm leading-relaxed">
            Enterprise Platforms · Technology Services · India Business Set-up
          </p>
          <p className="mt-5 text-sm leading-relaxed text-[#4A4A4A]">
            © 2026 Shriyaa Quantum Software Private Limited. All rights reserved.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-display text-lg font-semibold text-[#A41E1B]">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <FooterLink to="/">Home</FooterLink>
            </li>
            <li>
              <FooterLink to="/about">About</FooterLink>
            </li>
            <li>
              <FooterLink to="/services">Services</FooterLink>
            </li>
            <li>
              <FooterLink to="/why-us">Why Us</FooterLink>
            </li>
            <li>
              <FooterLink to="/contact">Contact</FooterLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-lg font-semibold text-[#A41E1B]">Services</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <FooterLink to="/services" hash="enterprise-talent">
                Enterprise Platforms
              </FooterLink>
            </li>
            <li>
              <FooterLink to="/services" hash="india-setup">
                India Business Set-up
              </FooterLink>
            </li>
            <li>
              <FooterLink to="/services" hash="industry-advisory">
                Industry &amp; Advisory
              </FooterLink>
            </li>
            <li>
              <FooterLink to="/services" hash="smart-systems">
                Smart Access &amp; Mobility Systems
              </FooterLink>
            </li>
            <li>
              <FooterLink to="/services" hash="technology-services">
                Technology Services
              </FooterLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-lg font-semibold text-[#A41E1B]">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-1 shrink-0 text-[#A41E1B]" />
              <span>
                96, Ramaniyam Greeta Tower, Perungudi Industrial Road, Perungudi, Chennai – 600096
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="shrink-0 text-[#A41E1B]" />
              <a
                href="tel:+919884608360"
                className="text-[#C84D41] transition-colors hover:underline"
              >
                +91 98846 08360
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="text-[#A41E1B]" />
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-[#C84D41] transition-colors hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ to, hash, children }: { to: string; hash?: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      hash={hash}
      className="font-medium text-[#C84D41] transition-colors hover:underline"
    >
      {children}
    </Link>
  );
}

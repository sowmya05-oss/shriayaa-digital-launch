import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { LogoMark } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-border bg-ink text-white/85">
      <div className="container-page py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2 max-w-md">
          <div className="rounded-xl bg-white p-3 inline-block">
            <LogoMark className="h-14 w-auto" />
          </div>
          <p className="mt-5 text-sm text-white/70 leading-relaxed">
            End to end technology services across the full software lifecycle: consulting, engineering,
            QA, deployment, infrastructure, and analytics, built to adapt to any industry.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            <li className="flex items-center gap-2.5"><Mail size={15} className="text-gold" /><a href="mailto:info@shriyaaquantum.com" className="hover:text-gold transition-colors">info@shriyaaquantum.com</a></li>
            <li className="flex items-center gap-2.5"><Phone size={15} className="text-gold" /><a href="tel:+91XXXXXXXXXX" className="hover:text-gold transition-colors">+91 XXXXXXXXXX</a></li>
            <li className="flex items-center gap-2.5"><MapPin size={15} className="text-gold" />City, State, India</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold tracking-wide text-white mb-4">Company</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">About</Link></li>
            <li><Link to="/why-us" className="hover:text-gold transition-colors">Why Us</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold tracking-wide text-white mb-4">Services</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/services" hash="consulting" className="hover:text-gold transition-colors">Technology Consulting</Link></li>
            <li><Link to="/services" hash="development" className="hover:text-gold transition-colors">Software Development</Link></li>
            <li><Link to="/services" hash="qa" className="hover:text-gold transition-colors">QA & Testing</Link></li>
            <li><Link to="/services" hash="deployment" className="hover:text-gold transition-colors">Deployment</Link></li>
            <li><Link to="/services" hash="infrastructure" className="hover:text-gold transition-colors">Infrastructure</Link></li>
            <li><Link to="/services" hash="data" className="hover:text-gold transition-colors">Data & Analytics</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/55">
          <div>© {year} Shriyaa Quantum Software Private Limited. All rights reserved.</div>
          <div className="tracking-wide"><span className="text-gold">◆</span> Domain Agnostic Technology Delivery</div>
        </div>
      </div>
    </footer>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, CheckCircle2, Send, ArrowRight } from "lucide-react";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { BtnButton } from "@/components/Button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Shriyaa Quantum Software" },
      { name: "description", content: "Tell us about your project. We reply within one business day." },
      { property: "og:title", content: "Contact — Shriyaa Quantum Software" },
      { property: "og:description", content: "Tell us about your project. We reply within one business day." },
    ],
  }),
  component: ContactPage,
});

const CONTACT_EMAIL = "info@shriyaaquantum.com";
const CONTACT_PHONE = "+91-XXXXXXXXXX";

interface FormState {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
}

const INITIAL: FormState = { name: "", email: "", company: "", interest: "", message: "" };

const INTERESTS = [
  "Technology Consulting",
  "Software Development",
  "Quality Assurance & Testing",
  "Deployment Services",
  "Infrastructure Services",
  "Data & Analytics",
  "Not sure yet",
];

function ContactPage() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const set = <K extends keyof FormState>(k: K) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  const validate = (f: FormState) => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!f.name.trim()) e.name = "Please enter your full name.";
    if (!f.email.trim()) e.email = "Please enter your work email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = "Please enter a valid email address.";
    if (!f.interest) e.interest = "Please choose an area of interest.";
    if (!f.message.trim()) e.message = "Please tell us a little about your project.";
    else if (f.message.trim().length < 10) e.message = "Please share a few more details.";
    return e;
  };

  const onSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    const e = validate(form);
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    // Real submission via mailto handoff — opens the user's mail client
    // with a fully-populated draft addressed to the company.
    const subject = `Website enquiry — ${form.interest} — ${form.company || form.name}`;
    const body =
      `Full Name: ${form.name}\n` +
      `Work Email: ${form.email}\n` +
      `Company: ${form.company || "—"}\n` +
      `Interested in: ${form.interest}\n\n` +
      `Message:\n${form.message}\n`;
    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;

    setSubmitted(true);
  };

  const resetForm = () => {
    setForm(INITIAL);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <PageLayout>
      <PageHero
        eyebrow="Contact"
        title="Contact us."
        subtitle="Tell us about your project. Whether you're just exploring options or ready to start, we'll reply within one business day."
      />

      <section className="container-page py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* LEFT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-ink leading-tight">
              Tell us about your project.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Share as much or as little as you like — a short brief is enough for us to point you
              in the right direction. We treat every enquiry with the same care.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="card-elevated card-elevated-hover flex items-center gap-4 p-5 group"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/8 text-brand">
                  <Mail size={20} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">Email</div>
                  <div className="font-semibold text-ink truncate group-hover:text-brand transition-colors">{CONTACT_EMAIL}</div>
                </div>
              </a>
              <a
                href={`tel:${CONTACT_PHONE.replace(/[^+\d]/g, "")}`}
                className="card-elevated card-elevated-hover flex items-center gap-4 p-5 group"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/8 text-brand">
                  <Phone size={20} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">Phone</div>
                  <div className="font-semibold text-ink group-hover:text-brand transition-colors">{CONTACT_PHONE}</div>
                </div>
              </a>
              <div className="card-elevated flex items-center gap-4 p-5">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/8 text-brand">
                  <MapPin size={20} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">Location</div>
                  <div className="font-semibold text-ink">City, State, India</div>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-ink text-white p-7">
              <div className="text-xs font-semibold tracking-[0.22em] uppercase text-gold mb-4">A few things to share with us</div>
              <ul className="space-y-3 text-sm text-white/85">
                {[
                  "A short description of what you're trying to build or improve",
                  "Your industry and any relevant technical constraints",
                  "Current systems, platforms, or tools involved",
                  "Timeline or milestones you're working toward",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div className="card-elevated p-6 md:p-8">
            {submitted ? (
              <div className="flex flex-col items-start py-8">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-brand/10 text-brand">
                  <CheckCircle2 size={30} strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-2xl font-bold text-ink">Message ready to send.</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Your email client should now be open with a pre-filled draft addressed to{" "}
                  <span className="font-semibold text-ink">{CONTACT_EMAIL}</span>. Send it when you're
                  ready, and we'll reply within one business day.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <BtnButton variant="primary" onClick={resetForm}>
                    Send another message <ArrowRight size={16} />
                  </BtnButton>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="inline-flex items-center gap-1.5 self-center text-sm font-semibold text-brand hover:underline"
                  >
                    Email us directly instead
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                <Field label="Full Name" required error={errors.name} htmlFor="name">
                  <input id="name" name="name" type="text" value={form.name} onChange={set("name")} autoComplete="name" className={inputCls(!!errors.name)} placeholder="Jane Doe" />
                </Field>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Work Email" required error={errors.email} htmlFor="email">
                    <input id="email" name="email" type="email" value={form.email} onChange={set("email")} autoComplete="email" className={inputCls(!!errors.email)} placeholder="jane@company.com" />
                  </Field>
                  <Field label="Company" htmlFor="company">
                    <input id="company" name="company" type="text" value={form.company} onChange={set("company")} autoComplete="organization" className={inputCls(false)} placeholder="Company Ltd." />
                  </Field>
                </div>

                <Field label="I'm interested in" required error={errors.interest} htmlFor="interest">
                  <select id="interest" name="interest" value={form.interest} onChange={set("interest")} className={inputCls(!!errors.interest)}>
                    <option value="">Select an area…</option>
                    {INTERESTS.map((i) => <option key={i} value={i}>{i}</option>)}
                  </select>
                </Field>

                <Field label="Message" required error={errors.message} htmlFor="message">
                  <textarea id="message" name="message" rows={5} value={form.message} onChange={set("message")} className={inputCls(!!errors.message) + " resize-y min-h-[130px]"} placeholder="Tell us a little about your project…" />
                </Field>

                <div className="pt-1">
                  <BtnButton type="submit" variant="primary" className="w-full sm:w-auto">
                    <Send size={16} /> Send Message
                  </BtnButton>
                  <p className="mt-3 text-xs text-muted-foreground">
                    By submitting, you'll open your mail client with a pre-filled draft to {CONTACT_EMAIL}.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function Field({
  label, required, error, htmlFor, children,
}: { label: string; required?: boolean; error?: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-semibold text-ink mb-1.5">
        {label} {required && <span className="text-brand">*</span>}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs font-medium text-brand">{error}</p>}
    </div>
  );
}

function inputCls(hasError: boolean) {
  return [
    "w-full rounded-lg border bg-background px-4 py-3 text-sm text-ink placeholder:text-muted-foreground/70 transition-colors",
    "focus:outline-none focus:ring-2 focus:ring-brand/30",
    hasError ? "border-brand/70 focus:border-brand" : "border-border focus:border-brand/60",
  ].join(" ");
}

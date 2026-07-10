import { createFileRoute } from "@tanstack/react-router";
import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { CheckCircle2, Loader2, Mail, MapPin, Send } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { BtnButton } from "@/components/Button";
import { SERVICES } from "@/lib/content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Shriyaa Quantum Software" },
      {
        name: "description",
        content: "Tell us about your project and start a technology roadmap conversation.",
      },
      { property: "og:title", content: "Contact — Shriyaa Quantum Software" },
      {
        property: "og:description",
        content: "Tell us about your project and start a technology roadmap conversation.",
      },
    ],
  }),
  component: ContactPage,
});

const CONTACT_EMAIL = "swarlaya77@gmail.com";
const INTERESTS = [...SERVICES.map((service) => service.title), "Other"];
const INITIAL = { name: "", email: "", company: "", interest: "", message: "" };

type FormState = typeof INITIAL;
type ErrorState = Partial<Record<keyof FormState, string>>;

function ContactPage() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<ErrorState>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const set =
    (key: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((current) => ({ ...current, [key]: event.target.value }));
      if (errors[key]) setErrors((current) => ({ ...current, [key]: undefined }));
    };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    const subject = `Website enquiry - ${form.interest || "Project discussion"} - ${form.company || form.name}`;
    const body = [
      `Full Name: ${form.name}`,
      `Work Email: ${form.email}`,
      `Company: ${form.company || "Not provided"}`,
      `Interested in: ${form.interest || "Not provided"}`,
      "",
      "Message:",
      form.message,
    ].join("\n");

    window.setTimeout(() => {
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setSubmitting(false);
      setSubmitted(true);
    }, 450);
  };

  return (
    <PageLayout>
      <section className="relative overflow-hidden bg-[#FFFEF5] py-20 text-center md:py-24">
        <div className="hero-ambient pointer-events-none absolute inset-0" />
        <div className="orbital-lines pointer-events-none absolute inset-0 opacity-[0.16]" />
        <div className="tech-hero-motif pointer-events-none absolute inset-0 opacity-[0.18]" />
        <div className="container-page relative">
          <h1 className="text-[2.5rem] font-semibold leading-tight text-[#A41E1B] md:text-[3.5rem]">
            Contact Us
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#8B2E1F]">
            Tell us about your project, roadmap, or current technical challenge.
          </p>
        </div>
      </section>

      <section className="page-signal-band section-circuit-edge py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div className="reveal rounded-xl border border-[#D4A743]/25 bg-[#FFFEF5]/68 p-7 shadow-[0_20px_70px_rgba(139,46,31,0.06)] md:p-8">
            <h2 className="text-3xl font-semibold text-[#A41E1B] md:text-4xl">
              Tell us about your project
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#8B2E1F] md:text-lg">
              Share your goals, constraints, and what you are hoping to improve. A short note is
              enough to start a useful conversation.
            </p>

            <div className="mt-8 grid gap-4">
              <InfoCard
                icon={<Mail size={21} />}
                label="Email"
                href={`mailto:${CONTACT_EMAIL}`}
                value={CONTACT_EMAIL}
              />
              <InfoCard
                icon={<MapPin size={21} />}
                label="Location"
                value="Chennai, Tamil Nadu, India"
              />
            </div>

            <div className="card-tech mt-8 rounded-xl bg-[linear-gradient(135deg,#3A1110_0%,#A41E1B_60%,#D4A743_130%)] p-7 text-white">
              <h3 className="text-xl font-semibold text-white">A few things to share with us</h3>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-white/85">
                {["Project goals", "Current systems", "Timeline", "Budget range"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#D4A743]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card-elevated card-tech reveal p-6 md:p-8">
            {submitted ? (
              <div className="py-8">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-[#C84D41]/8 text-[#A41E1B]">
                  <CheckCircle2 size={30} />
                </div>
                <h2 className="mt-5 text-2xl font-semibold text-[#A41E1B]">
                  Message ready to send
                </h2>
                <p className="mt-3 text-base leading-8 text-[#8B2E1F]">
                  Your email client should open with a pre-filled draft to {CONTACT_EMAIL}. Send it
                  from there and we will have the details in the inbox.
                </p>
                <BtnButton
                  className="mt-6"
                  onClick={() => {
                    setForm(INITIAL);
                    setErrors({});
                    setSubmitted(false);
                  }}
                >
                  Send Another Message
                </BtnButton>
              </div>
            ) : (
              <form className="space-y-5" noValidate onSubmit={onSubmit}>
                <Field label="Full Name" required error={errors.name} htmlFor="name">
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={set("name")}
                    className={inputClass(Boolean(errors.name))}
                  />
                </Field>
                <Field label="Work Email" required error={errors.email} htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={set("email")}
                    className={inputClass(Boolean(errors.email))}
                  />
                </Field>
                <Field label="Company" htmlFor="company">
                  <input
                    id="company"
                    name="company"
                    autoComplete="organization"
                    value={form.company}
                    onChange={set("company")}
                    className={inputClass(false)}
                  />
                </Field>
                <Field label="I'm interested in" htmlFor="interest">
                  <select
                    id="interest"
                    name="interest"
                    value={form.interest}
                    onChange={set("interest")}
                    className={inputClass(false)}
                  >
                    <option value="">Select a service</option>
                    {INTERESTS.map((interest) => (
                      <option key={interest} value={interest}>
                        {interest}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Message" required error={errors.message} htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={set("message")}
                    className={`${inputClass(Boolean(errors.message))} min-h-36 resize-y`}
                  />
                </Field>
                <BtnButton
                  type="submit"
                  disabled={submitting}
                  className="w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                >
                  {submitting ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                  {submitting ? "Preparing Message" : "Send Message"}
                </BtnButton>
                <p className="text-xs leading-6 text-[#4A4A4A]">
                  This form uses a mailto handoff to {CONTACT_EMAIL}, so no project details are
                  stored on the website.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function validate(form: FormState) {
  const errors: ErrorState = {};
  if (!form.name.trim()) errors.name = "Please enter your full name.";
  if (!form.email.trim()) errors.email = "Please enter your work email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (!form.message.trim()) errors.message = "Please tell us a little about your project.";
  return errors;
}

function InfoCard({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#C84D41]/8 text-[#A41E1B]">
        {icon}
      </span>
      <span>
        <span className="block text-sm text-[#4A4A4A]">{label}</span>
        <span className="block font-semibold text-[#8B2E1F]">{value}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="card-elevated card-elevated-hover card-tech flex items-center gap-4 p-5"
      >
        {content}
      </a>
    );
  }

  return <div className="card-elevated card-tech flex items-center gap-4 p-5">{content}</div>;
}

function Field({
  label,
  required,
  error,
  htmlFor,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold text-[#A41E1B]">
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      {children}
      {error && <p className="mt-2 text-sm font-medium text-[#A41E1B]">{error}</p>}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return [
    "w-full rounded-lg border bg-white px-4 py-3 text-base text-[#8B2E1F] outline-none transition-colors placeholder:text-[#4A4A4A]/70",
    "focus:border-[#A41E1B] focus:ring-2 focus:ring-[#A41E1B]/20",
    hasError ? "border-[#A41E1B]" : "border-[#C84D41]/20",
  ].join(" ");
}

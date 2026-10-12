import { createFileRoute } from "@tanstack/react-router";
import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { BtnButton } from "@/components/Button";
import { CONTACT_EMAIL } from "@/lib/contact";
import { SERVICES } from "@/lib/content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Shriyaa Quantum Software" },
      {
        name: "description",
        content:
          "Contact Shriyaa Quantum, Perungudi, Chennai — enterprise platform specialists, India set-up and technology services.",
      },
      { property: "og:title", content: "Contact — Shriyaa Quantum Software" },
      {
        property: "og:description",
        content:
          "Contact Shriyaa Quantum, Perungudi, Chennai — enterprise platform specialists, India set-up and technology services.",
      },
    ],
  }),
  component: ContactPage,
});

const INTERESTS = [...SERVICES.map((service) => service.title), "Other"];
const HELP_OPTIONS = [
  "Enterprise platform specialists (SAP, Oracle, Dynamics, Salesforce)",
  "Setting up in India",
  "Industry or finance advisory",
  "Ticketing, gates & access systems",
  "Technology services",
  "Careers",
  "Other",
] as const;
const INITIAL = {
  help: "",
  name: "",
  email: "",
  company: "",
  interest: "",
  message: "",
  website: "",
};

type FormState = typeof INITIAL;
type ErrorState = Partial<Record<keyof FormState, string>>;

function ContactPage() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<ErrorState>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const set =
    (key: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((current) => ({ ...current, [key]: event.target.value }));
      if (errors[key]) setErrors((current) => ({ ...current, [key]: undefined }));
    };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (form.website.trim()) return;
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitError("");

    const subject = `Website Enquiry – ${form.help} – ${form.name}`;
    const body = [
      `How can we help?: ${form.help}`,
      `Full Name: ${form.name}`,
      `Work Email: ${form.email}`,
      `Company: ${form.company || "Not provided"}`,
      `Interested in: ${form.interest || "Not provided"}`,
      "",
      "Message:",
      form.message,
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
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

            <div className="card-elevated card-tech mt-8 p-5 md:p-6">
              <h3 className="text-lg font-semibold text-[#A41E1B]">
                Shriyaa Quantum Software Private Limited
              </h3>
              <address className="mt-3 space-y-2 text-sm not-italic leading-6 text-[#4A4A4A]">
                <p>
                  96, Ramaniyam Greeta Tower, Perungudi Industrial Road, Perungudi, Chennai –
                  600096, Tamil Nadu, India.
                </p>
                <p>
                  Phone:{" "}
                  <a className="font-medium text-[#8B2E1F]" href="tel:+919884608360">
                    +91 98846 08360
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a className="font-medium text-[#8B2E1F]" href={`mailto:${CONTACT_EMAIL}`}>
                    {CONTACT_EMAIL}
                  </a>
                </p>
                <p>CIN: U62010TN2026PTC194589</p>
              </address>
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
                  Redirected to your mailbox
                </h2>
                <p className="mt-3 text-base leading-8 text-[#8B2E1F]">
                  Thank you. Your email app has been opened with our address and your message
                  prefilled.
                </p>
                <BtnButton
                  className="mt-6"
                  onClick={() => {
                    setForm(INITIAL);
                    setErrors({});
                    setSubmitError("");
                    setSubmitted(false);
                  }}
                >
                  Send Another Message
                </BtnButton>
              </div>
            ) : (
              <form className="space-y-5" noValidate onSubmit={onSubmit}>
                <p className="text-sm leading-6 text-[#4A4A4A]">
                  Tell us briefly what you are looking for. We will get back to you to understand
                  your requirement and suggest next steps.
                </p>
                <div
                  aria-hidden="true"
                  className="absolute left-[-10000px] h-px w-px overflow-hidden"
                >
                  <label htmlFor="website">Leave this field empty</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    autoComplete="off"
                    tabIndex={-1}
                    value={form.website}
                    onChange={set("website")}
                  />
                </div>
                <Field label="How can we help?" required error={errors.help} htmlFor="help">
                  <select
                    id="help"
                    name="help"
                    required
                    value={form.help}
                    onChange={set("help")}
                    className={inputClass(Boolean(errors.help))}
                  >
                    <option value="">Please select</option>
                    {HELP_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </Field>
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
                <BtnButton type="submit" className="w-full sm:w-auto">
                  <Send size={16} />
                  Send Message
                </BtnButton>
                {submitError && <p className="text-sm leading-6 text-[#A41E1B]">{submitError}</p>}
                <p className="text-xs leading-6 text-[#4A4A4A]">
                  This opens your mailbox with the message addressed to {CONTACT_EMAIL}.
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
  if (!form.help) errors.help = "Please select how we can help.";
  if (!form.name.trim()) errors.name = "Please enter your full name.";
  if (!form.email.trim()) errors.email = "Please enter your work email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (!form.message.trim()) errors.message = "Please tell us a little about your project.";
  return errors;
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

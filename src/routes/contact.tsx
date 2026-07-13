import { createFileRoute } from "@tanstack/react-router";
import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { CheckCircle2, Loader2, Mail, MapPin, Send } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { BtnButton } from "@/components/Button";
import { CONTACT_EMAIL } from "@/lib/contact";
import { SERVICES } from "@/lib/content";

export const Route = createFileRoute("/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const payload = (await request.json()) as Partial<FormState>;
        const form = normalizeForm(payload);
        const errors = validate(form);

        if (Object.keys(errors).length > 0) {
          return Response.json({ ok: false, errors }, { status: 400 });
        }

        const result = await sendContactEmail(form);
        if (!result.ok) {
          return Response.json({ ok: false, message: result.message }, { status: 500 });
        }

        return Response.json({ ok: true });
      },
    },
  },
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

const INTERESTS = [...SERVICES.map((service) => service.title), "Other"];
const INITIAL = { name: "", email: "", company: "", interest: "", message: "" };

type FormState = typeof INITIAL;
type ErrorState = Partial<Record<keyof FormState, string>>;

function ContactPage() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<ErrorState>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

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
    setSubmitError("");

    fetch("/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then(async (response) => {
        const data = (await response.json().catch(() => ({}))) as {
          ok?: boolean;
          message?: string;
          errors?: ErrorState;
        };

        if (!response.ok || !data.ok) {
          if (data.errors) setErrors(data.errors);
          throw new Error(data.message || "We could not send the message. Please try again.");
        }

        setSubmitted(true);
      })
      .catch((error) => {
        setSubmitError(
          error instanceof Error
            ? error.message
            : "We could not send the message. Please try again.",
        );
      })
      .finally(() => setSubmitting(false));
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
                  Message sent
                </h2>
                <p className="mt-3 text-base leading-8 text-[#8B2E1F]">
                  Thank you. Your enquiry has been sent to {CONTACT_EMAIL}, and we will get back to
                  you soon.
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
                  {submitting ? "Sending Message" : "Send Message"}
                </BtnButton>
                {submitError && <p className="text-sm leading-6 text-[#A41E1B]">{submitError}</p>}
                <p className="text-xs leading-6 text-[#4A4A4A]">
                  Your enquiry is sent securely to {CONTACT_EMAIL}.
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

function normalizeForm(payload: Partial<FormState>): FormState {
  return {
    name: String(payload.name ?? "").trim(),
    email: String(payload.email ?? "").trim(),
    company: String(payload.company ?? "").trim(),
    interest: String(payload.interest ?? "").trim(),
    message: String(payload.message ?? "").trim(),
  };
}

async function sendContactEmail(form: FormState): Promise<{ ok: boolean; message?: string }> {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return {
      ok: false,
      message:
        "Contact form is not configured yet. Please set WEB3FORMS_ACCESS_KEY on the server.",
    };
  }

  const subject = `Website enquiry - ${form.interest || "Project discussion"} - ${form.company || form.name}`;

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject,
        from_name: form.name,
        name: form.name,
        email: form.email,
        company: form.company || "Not provided",
        interest: form.interest || "Not provided",
        message: form.message,
        replyto: form.email,
        to: CONTACT_EMAIL,
      }),
    });

    if (!response.ok) throw new Error("Web3Forms rejected the message.");
  } catch {
    return {
      ok: false,
      message: "The contact form service rejected the message. Please try again later.",
    };
  }

  return { ok: true };
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

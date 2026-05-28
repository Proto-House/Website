"use client";

import { useState } from "react";

const CONTACT_EMAIL = "info@protohouse.org";

const initialValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
};

const inputClasses =
  "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:outline-2 focus:outline-blue-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500";

const labelClasses =
  "block text-sm font-medium text-zinc-800 dark:text-zinc-200";

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.company.trim()) errors.company = "Please enter your company.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.message.trim()) {
    errors.message = "Tell us a little about what you'd like to automate.";
  }
  return errors;
}

/**
 * Contact form with basic client-side validation. On a valid submit it opens
 * the visitor's email client with a prefilled message to info@protohouse.org.
 *
 * No backend is required. To switch to a hosted handler later, replace the
 * mailto step in handleSubmit with a POST to Formspree or a Next.js route
 * handler (e.g. app/api/contact/route.js).
 */
export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const subject = `Assessment request from ${values.company.trim()}`;
    const body = [
      `Name: ${values.name.trim()}`,
      `Company: ${values.company.trim()}`,
      `Email: ${values.email.trim()}`,
      `Phone: ${values.phone.trim() || "Not provided"}`,
      "",
      "What they'd like to automate:",
      values.message.trim(),
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label="Name"
          value={values.name}
          onChange={handleChange}
          error={errors.name}
          autoComplete="name"
        />
        <Field
          id="company"
          label="Company"
          value={values.company}
          onChange={handleChange}
          error={errors.company}
          autoComplete="organization"
        />
        <Field
          id="email"
          label="Email"
          type="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          autoComplete="email"
        />
        <Field
          id="phone"
          label="Phone (optional)"
          type="tel"
          value={values.phone}
          onChange={handleChange}
          autoComplete="tel"
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          What would you like to automate?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          placeholder="Tell us a little about your operation, the manual process you're thinking of automating, and the throughput goals you have in mind."
          className={`mt-1.5 ${inputClasses}`}
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && <ErrorText>{errors.message}</ErrorText>}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-blue-500 dark:hover:bg-blue-400"
        >
          Request a free assessment
        </button>
        {submitted && (
          <p className="text-sm text-zinc-600 dark:text-zinc-300" role="status">
            Thanks! Your email draft should be open now. If it didn&apos;t open,
            just write to us at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}

function Field({ id, label, type = "text", value, onChange, error, ...props }) {
  return (
    <div>
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        className={`mt-1.5 ${inputClasses}`}
        aria-invalid={Boolean(error)}
        {...props}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}

function ErrorText({ children }) {
  return (
    <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">{children}</p>
  );
}

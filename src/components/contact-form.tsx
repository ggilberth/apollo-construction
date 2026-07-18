"use client";

import { useForm, ValidationError } from "@formspree/react";

type ValidationErrors = React.ComponentProps<
  typeof ValidationError
>["errors"];

type FieldName = "name" | "email" | "phone";

type FieldProps = {
  autoComplete: string;
  errors: ValidationErrors;
  label: string;
  name: FieldName;
  required?: boolean;
  type: "email" | "tel" | "text";
};

export function ContactForm() {
  const [state, handleSubmit] = useForm("mzdokpzj");
  const messageHasError = Boolean(
    state.errors?.getFieldErrors("message").length,
  );

  if (state.succeeded) {
    return (
      <div
        className="rounded border border-green-300 bg-green-50 p-6 text-green-900 shadow-sm"
        role="status"
      >
        <h2 className="text-xl font-bold">Thanks for your message!</h2>
        <p className="mt-2">
          Your enquiry has been sent. We’ll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form
      aria-busy={state.submitting}
      className="space-y-5 rounded border border-brand-100 bg-white p-6 shadow-sm"
      onSubmit={handleSubmit}
    >
      <div>
        <h2 className="text-xl font-bold text-slate-900">
          Project inquiry form
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Fields marked <span aria-hidden="true">*</span> are required.
        </p>
      </div>

      <Field
        autoComplete="name"
        errors={state.errors}
        label="Name"
        name="name"
        required
        type="text"
      />
      <Field
        autoComplete="email"
        errors={state.errors}
        label="Email"
        name="email"
        required
        type="email"
      />
      <Field
        autoComplete="tel"
        errors={state.errors}
        label="Phone"
        name="phone"
        type="tel"
      />

      <div>
        <label
          className="mb-2 block text-sm font-semibold uppercase tracking-wide text-slate-600"
          htmlFor="message"
        >
          Project details <span aria-hidden="true">*</span>
        </label>
        <textarea
          aria-describedby={messageHasError ? "message-error" : undefined}
          aria-invalid={messageHasError || undefined}
          className="min-h-36 w-full rounded border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none transition focus-visible:border-brand-700 focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2"
          id="message"
          name="message"
          required
        />
        <ValidationError
          className="mt-2 text-sm font-medium text-red-700"
          errors={state.errors}
          field="message"
          id="message-error"
          prefix="Project details:"
          role="alert"
        />
      </div>

      <ValidationError
        className="rounded border border-red-300 bg-red-50 p-3 text-sm font-medium text-red-800"
        errors={state.errors}
        prefix="We couldn’t send your enquiry:"
        role="alert"
      />

      <button
        className="rounded bg-brand-800 px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-brand-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
        disabled={state.submitting}
        type="submit"
      >
        {state.submitting ? "Sending…" : "Send inquiry"}
      </button>
    </form>
  );
}

function Field({
  autoComplete,
  errors,
  label,
  name,
  required = false,
  type,
}: FieldProps) {
  const errorId = `${name}-error`;
  const hasError = Boolean(errors?.getFieldErrors(name).length);

  return (
    <div>
      <label
        className="mb-2 block text-sm font-semibold uppercase tracking-wide text-slate-600"
        htmlFor={name}
      >
        {label} {required ? <span aria-hidden="true">*</span> : null}
      </label>
      <input
        aria-describedby={hasError ? errorId : undefined}
        aria-invalid={hasError || undefined}
        autoComplete={autoComplete}
        className="w-full rounded border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none transition focus-visible:border-brand-700 focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2"
        id={name}
        name={name}
        required={required}
        type={type}
      />
      <ValidationError
        className="mt-2 text-sm font-medium text-red-700"
        errors={errors}
        field={name}
        id={errorId}
        prefix={`${label}:`}
        role="alert"
      />
    </div>
  );
}

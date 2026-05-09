"use client";

import { FormEvent, useState } from "react";
import { useForm, ValidationError } from '@formspree/react';

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type ValidationErrors = React.ComponentProps<typeof ValidationError>["errors"];

const initialState: FormState = { name: "", email: "", phone: "", message: "" };

export function ContactForm() {
  const [state, handleSubmit] = useForm("mzdokpzj");
  if (state.succeeded) {
      return <p>Thanks for your message!</p>;
  }
  if (state?.errors) {
    return <ValidationError errors={state.errors} />;
  }
  
  const [values, setValues] = useState<FormState>(initialState);

  const update = (key: keyof FormState, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded border border-brand-100 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-bold text-slate-900">Project inquiry form</h3>
      <Field label="Email" value={values.email} error={state.errors} onChange={(value) => update("email", value)} />
        <Field label="Name" value={values.name} error={state.errors} onChange={(value) => update("name", value)} />
        <Field label="Phone" value={values.phone} error={state.errors} onChange={(value) => update("phone", value)} />
      <label className="block">
      <span className="mb-2 block text-sm font-semibold uppercase tracking-wide text-slate-600">Project details</span>
      <textarea
        id="message"
        name="message"
        className="w-full rounded border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-brand-700 focus:outline-none"
      />
      </label>
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}
      className="rounded bg-brand-800 px-5 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-900">
        Send inquiry
      </button>
      {state.succeeded ? <p className="text-sm text-green-700">Form looks good. Connect this to your backend endpoint or email service next.</p> : null}
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  error
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: ValidationErrors
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold uppercase tracking-wide text-slate-600">{label}</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-brand-700 focus:outline-none"
      />
      <span className="mt-1 block text-sm text-red-300">
        <ValidationError
        prefix={label} 
        field={label}
        errors={error ?? null}
      /></span>
    </label>
  );
}

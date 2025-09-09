"use client";

import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { sendMessage } from "../app/actions/sendMessage";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-brand-200 text-brand-700 hover:bg-brand-50 disabled:opacity-60"
    >
      {pending ? "Sending…" : "Send Message"}
    </button>
  );
}

const initialState = { ok: false as boolean, error: undefined as string | undefined };

export default function Contact() {
  const [state, formAction] = useFormState(sendMessage, initialState);

  useEffect(() => {
    if (state?.ok) {
      const form = document.getElementById("contact-form") as HTMLFormElement | null;
      form?.reset();
    }
  }, [state?.ok]);

  const invalid = !!(!state.ok && state.error);

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="text-2xl font-semibold mb-2 text-center md:text-left">Get in touch</h2>
        <p className="text-center md:text-left text-gray-300 mb-6">
          You can reach me using the form below, or directly at{" "}
          <a
            href="mailto:jenny.choubassi@gmail.com"
            className="underline text-brand-700 hover:text-brand-600"
          >
            jenny.choubassi@gmail.com
          </a>.
        </p>

        {/* aria-live region for status updates */}
        <div className="sr-only" aria-live="polite">
          {state.ok ? "Thanks! Your message has been recorded." : state.error || ""}
        </div>

        <form
          id="contact-form"
          action={formAction}
          className="grid grid-cols-1 gap-4 border rounded-lg p-6 bg-black/30"
          autoComplete="on"
        >
          {/* Honeypot */}
          <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Name <span className="text-red-400">*</span>
              </label>
              <input
                id="name"
                name="name"
                required
                autoComplete="name"
                aria-invalid={invalid ? true : undefined}
                className="mt-1 w-full rounded border border-brand-200/50 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-400"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                aria-invalid={invalid ? true : undefined}
                className="mt-1 w-full rounded border border-brand-200/50 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-400"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Message <span className="text-red-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              autoComplete="off"
              aria-invalid={invalid ? true : undefined}
              className="mt-1 w-full rounded border border-brand-200/50 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-400"
              placeholder="How can I help?"
            />
          </div>

          {!state.ok && state.error && (
            <p className="text-sm text-red-300 bg-red-900/20 border border-red-600/40 rounded p-2">
              {state.error}
            </p>
          )}
          {state.ok && (
            <p className="text-sm text-brand-100 bg-brand-900/30 border border-brand-500/40 rounded p-2">
              Thanks! Your message has been recorded.
            </p>
          )}

          <div className="flex justify-center md:justify-start">
            <SubmitButton />
          </div>
        </form>
      </div>
    </section>
  );
}

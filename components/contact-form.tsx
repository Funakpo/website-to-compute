"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "";
const CONTACT_EMAIL = "hello@funakpo.com";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    // Safe fallback: if no Formspree endpoint is configured, open the user's
    // email client with the message pre-filled so the form is never a dead end.
    if (!FORMSPREE_ENDPOINT) {
      const name = String(formData.get("name") || "");
      const email = String(formData.get("email") || "");
      const message = String(formData.get("message") || "");
      const subject = encodeURIComponent(`Funakpo Compute inquiry from ${name}`);
      const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      setStatus("success");
      form.reset();
      return;
    }

    setStatus("submitting");
    setError("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        const data = await response.json().catch(() => null);
        setError(data?.errors?.[0]?.message || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setError("Network error. Please try again or email us directly.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-primary" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-medium text-card-foreground">Thanks for reaching out</h3>
        <p className="mt-2 text-muted-foreground">
          {FORMSPREE_ENDPOINT
            ? "We've received your message and will get back to you shortly."
            : "Your email client should now be open with your message ready to send."}
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-md border border-border bg-muted px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-background"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="rounded-md border border-border bg-background px-3 py-2 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
            placeholder="Jane Doe"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="rounded-md border border-border bg-background px-3 py-2 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
            placeholder="jane@company.com"
          />
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="resize-y rounded-md border border-border bg-background px-3 py-2 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
          placeholder="Tell us what you're building..."
        />
      </div>

      {status === "error" && (
        <p className="mt-4 flex items-center gap-2 text-sm text-red-400" role="alert">
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          "Send message"
        )}
      </button>

      <p className="mt-4 text-sm text-muted-foreground">
        Prefer email? Reach us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    </form>
  );
}

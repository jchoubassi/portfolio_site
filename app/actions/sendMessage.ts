"use server";

import { Resend } from "resend";

type FormState = { ok: boolean; error?: string };

const resend = new Resend(process.env.RESEND_API_KEY);
const TO = process.env.CONTACT_TO_EMAIL || "jenny.choubassi@gmail.com";
const FROM = process.env.CONTACT_FROM_EMAIL || "Jennifer Portfolio <onboarding@resend.dev>";

export async function sendMessage(
  _prev: FormState | undefined,
  formData: FormData
): Promise<FormState> {
  const name = (formData.get("name") || "").toString().trim();
  const email = (formData.get("email") || "").toString().trim();
  const message = (formData.get("message") || "").toString().trim();
  const honeypot = (formData.get("company") || "").toString().trim();

  if (honeypot) return { ok: true };

  if (!name || !email || !message) return { ok: false, error: "Please fill out all required fields." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { ok: false, error: "Please enter a valid email address." };
  if (!process.env.RESEND_API_KEY) return { ok: false, error: "Missing RESEND_API_KEY on server." };

  try {
    const subject = `[Portfolio] New message from ${name}`;
    const html = `
      <div style="font-family:system-ui,Segoe UI,Roboto,Helvetica,Arial">
        <h2 style="margin:0 0 8px">Portfolio Contact</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <pre style="white-space:pre-wrap;padding:12px;border:1px solid #eee;border-radius:8px;background:#fafafa">${escapeHtml(message)}</pre>
      </div>
    `;

    const result = await resend.emails.send({
      from: FROM,
      to: [TO],
      subject,
      html,
      replyTo: email,
    });

    if ((result as any)?.error) {
      console.error("[Resend] send error:", (result as any).error);
      const msg = (result as any).error?.message || "Unknown email service error.";
      return { ok: false, error: msg };
    }

    return { ok: true };
  } catch (err: any) {
    console.error("[Resend] exception:", err);
    const msg = err?.message || "Failed to send. Please try again.";
    return { ok: false, error: msg };
  }
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

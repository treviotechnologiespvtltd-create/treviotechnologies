import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, name, email, service, budget, message } = body;

    const recipient = "treviotechnologies@outlook.com";
    const subject =
      type === "contact"
        ? `New project inquiry from ${name ?? "a visitor"}`
        : "New newsletter subscription";

    const text =
      type === "contact"
        ? [
            `Name: ${name ?? ""}`,
            `Email: ${email ?? ""}`,
            `Service: ${service ?? budget ?? ""}`,
            `Message: ${message ?? ""}`,
          ].join("\n")
        : `Email: ${email ?? ""}`;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: recipient,
      subject,
      text,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact submission failed", error);
    return NextResponse.json(
      { success: false, error: "Unable to send message right now." },
      { status: 500 }
    );
  }
}

import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export const runtime = "nodejs"

const MAX_MESSAGE_LENGTH = 2000

export async function POST(request: Request) {
  let payload: {
    name?: string
    email?: string
    subject?: string
    message?: string
  }

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 })
  }

  const name = payload.name?.trim() ?? ""
  const email = payload.email?.trim() ?? ""
  const subject = payload.subject?.trim() ?? ""
  const message = payload.message?.trim() ?? ""

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 })
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 })
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO, CONTACT_FROM } = process.env

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    return NextResponse.json({ error: "Email service is not configured." }, { status: 500 })
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  })

  const to = CONTACT_TO ?? "singh.chaittanya@gmail.com"
  const from = CONTACT_FROM ?? SMTP_USER

  try {
    await transporter.sendMail({
      from: `Portfolio Contact <${from}>`,
      to,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
    })
  } catch {
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}

import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact | Chaitanya Singh",
  description: "Connect with Chaitanya Singh about markets, risk, quantitative research, and decision tools.",
}

export default function ContactPage() {
  return (
    <main className="pt-28 pb-16">
      <ContactForm />
    </main>
  )
}

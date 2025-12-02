import type { Metadata } from "next"
import { AboutSection } from "@/components/about-section"

export const metadata: Metadata = {
  title: "About | Chaitanya Singh",
  description:
    "About Chaitanya Singh — CS junior at ASU focused on data analytics, backend, cloud, fintech, and security projects.",
}

export default function AboutPage() {
  return (
    <main className="pt-28 pb-16">
      <AboutSection />
    </main>
  )
}

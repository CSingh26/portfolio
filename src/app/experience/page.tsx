import type { Metadata } from "next"
import { ExperienceSection } from "@/components/experience-section"

export const metadata: Metadata = {
  title: "Experience | Chaitanya Singh",
  description:
    "Experience and impact across backend systems, cloud-native deployments, fintech builds, and security-focused projects.",
}

export default function ExperiencePage() {
  return (
    <main className="pt-28 pb-16">
      <ExperienceSection />
    </main>
  )
}

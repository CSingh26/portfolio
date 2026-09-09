import type { Metadata } from "next"
import { ExperienceSection } from "@/components/experience-section"

export const metadata: Metadata = {
  title: "Journey | Chaitanya Singh",
  description:
    "Chaitanya Singh's journey from computer science and data systems into graduate finance and quantitative research.",
}

export default function ExperiencePage() {
  return (
    <main className="pt-28 pb-16">
      <ExperienceSection />
    </main>
  )
}

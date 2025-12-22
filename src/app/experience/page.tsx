import type { Metadata } from "next"
import { ExperienceSection } from "@/components/experience-section"

export const metadata: Metadata = {
  title: "Experience | Chaitanya",
  description:
    "Internship experience across marketing operations, full-stack development, and data analysis.",
}

export default function ExperiencePage() {
  return (
    <main className="pt-28 pb-16">
      <ExperienceSection />
    </main>
  )
}

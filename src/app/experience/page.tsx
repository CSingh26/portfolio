import type { Metadata } from "next"
import { ExperienceSection } from "@/components/experience-section"
import { PageTransition } from "@/components/motion-primitives"

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Timeline of education, certifications, internships, and technical milestones for Chaitanya Singh.",
}

export default function ExperiencePage() {
  return (
    <PageTransition>
      <main className="pt-28 pb-16">
        <ExperienceSection />
      </main>
    </PageTransition>
  )
}

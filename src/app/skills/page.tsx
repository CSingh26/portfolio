import type { Metadata } from "next"
import { SkillsSection } from "@/components/skills-section"

export const metadata: Metadata = {
  title: "Capabilities | Chaitanya Singh",
  description: "Capabilities across finance, quantitative methods, engineering, and product architecture.",
}

export default function SkillsPage() {
  return (
    <main className="pt-28 pb-16">
      <SkillsSection />
    </main>
  )
}

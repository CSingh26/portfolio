import type { Metadata } from "next"
import { SkillsSection } from "@/components/skills-section"

export const metadata: Metadata = {
  title: "Skills | Chaitanya Singh",
  description: "Technical toolkit across web development, databases, and cloud fundamentals.",
}

export default function SkillsPage() {
  return (
    <main className="pt-28 pb-16">
      <SkillsSection />
    </main>
  )
}

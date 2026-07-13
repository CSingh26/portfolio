import type { Metadata } from "next"
import { PageTransition } from "@/components/motion-primitives"
import { SkillsSection } from "@/components/skills-section"

export const metadata: Metadata = {
  title: "Skills",
  description: "Capability clusters across frontend, backend, cloud, Linux, data, AI, finance, and security.",
}

export default function SkillsPage() {
  return (
    <PageTransition>
      <main className="pt-28 pb-16">
        <SkillsSection />
      </main>
    </PageTransition>
  )
}

import type { Metadata } from "next"
import { ProjectGrid } from "@/components/project-grid"

export const metadata: Metadata = {
  title: "Selected Work | Chaitanya Singh",
  description: "Systems for markets and risk, intelligent tooling, and applied products built end to end.",
}

export default function ProjectsPage() {
  return (
    <main className="pt-28 pb-16">
      <ProjectGrid />
    </main>
  )
}

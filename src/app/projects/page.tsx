import type { Metadata } from "next"
import { ProjectGrid } from "@/components/project-grid"

export const metadata: Metadata = {
  title: "Projects | Chaitanya Singh",
  description: "Project gallery spanning fintech, data, cloud, security, and systems engineering builds.",
}

export default function ProjectsPage() {
  return (
    <main className="pt-28 pb-16">
      <ProjectGrid />
    </main>
  )
}

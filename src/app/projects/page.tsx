import type { Metadata } from "next"
import { ProjectGrid } from "@/components/project-grid"

export const metadata: Metadata = {
  title: "Projects | Chaitanya",
  description: "Project gallery spanning web apps, AI tooling, and data-driven experiments.",
}

export default function ProjectsPage() {
  return (
    <main className="pt-28 pb-16">
      <ProjectGrid />
    </main>
  )
}

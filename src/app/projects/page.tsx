import type { Metadata } from "next"
import { ProjectGrid } from "@/components/project-grid"

export const metadata: Metadata = {
  title: "Projects | Chaitanya",
  description: "Project gallery organized across AI, data, web, mobile, finance, cloud, and developer systems.",
}

export default function ProjectsPage() {
  return (
    <main className="pt-28 pb-16">
      <ProjectGrid />
    </main>
  )
}

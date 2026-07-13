import type { Metadata } from "next"
import { PageTransition } from "@/components/motion-primitives"
import { ProjectGrid } from "@/components/project-grid"

export const metadata: Metadata = {
  title: "Projects",
  description: "A project gallery organized across AI, data, web, mobile, cloud, finance, security, and developer systems.",
}

export default function ProjectsPage() {
  return (
    <PageTransition>
      <main className="pt-28 pb-16">
        <ProjectGrid />
      </main>
    </PageTransition>
  )
}

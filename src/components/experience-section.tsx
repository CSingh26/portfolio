"use client"

import { SectionShell } from "./section-shell"
import { Timeline } from "./timeline"
import { experience } from "@/data/experience"

export function ExperienceSection() {
  return (
    <SectionShell
      id="experience"
      eyebrow="Experience"
      title="Education, credentials, internships, and technical growth as one timeline."
      description="A vertical view of the path: computer science, finance, Linux certifications, cloud practice, internships, and the projects that keep tying the threads together."
    >
      <Timeline items={experience} />
    </SectionShell>
  )
}

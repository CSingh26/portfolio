"use client"

import { SectionShell } from "./section-shell"
import { Timeline } from "./timeline"
import { experience } from "@/data/experience"

export function ExperienceSection() {
  return (
    <SectionShell
      id="experience"
      eyebrow="Experience"
      title="Learning through internships and collaboration."
      description="Experience spanning marketing operations, web development, and data analysis."
    >
      <Timeline items={experience} />
    </SectionShell>
  )
}

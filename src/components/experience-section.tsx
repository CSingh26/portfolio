"use client"

import { SectionShell } from "./section-shell"
import { Timeline } from "./timeline"
import { experience } from "@/data/experience"

export function ExperienceSection() {
  return (
    <SectionShell
      id="experience"
      eyebrow="Experience"
      title="Learning by building, debugging, and shipping."
      description="A blend of cloud-native deployments, fintech experiments, and security-heavy systems work."
    >
      <Timeline items={experience} />
    </SectionShell>
  )
}

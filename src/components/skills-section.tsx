"use client"

import { SectionShell } from "./section-shell"
import { SkillRadar } from "./skill-radar"

export function SkillsSection() {
  return (
    <SectionShell
      id="skills"
      title="Skills"
    >
      <SkillRadar />
    </SectionShell>
  )
}

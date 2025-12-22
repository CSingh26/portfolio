import { Hero } from "@/components/hero"
import { HomeProjects } from "@/components/home-projects"
import { SkillsSection } from "@/components/skills-section"

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <HomeProjects />
      <SkillsSection />
    </div>
  )
}

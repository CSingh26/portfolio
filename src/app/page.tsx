import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { HomeProjects } from "@/components/home-projects"
import { SkillsSection } from "@/components/skills-section"

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <AboutSection />
      <HomeProjects />
      <SkillsSection />
    </div>
  )
}

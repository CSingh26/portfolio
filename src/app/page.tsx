import { Hero } from "@/components/hero"
import { HomeProjects } from "@/components/home-projects"

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <HomeProjects />
    </div>
  )
}

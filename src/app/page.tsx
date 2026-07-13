import { Hero } from "@/components/hero"
import { CurrentSignal } from "@/components/current-signal"
import { HomeProjects } from "@/components/home-projects"
import { MindMap } from "@/components/mind-map"
import { PageTransition } from "@/components/motion-primitives"

export default function Home() {
  return (
    <PageTransition>
      <main>
        <Hero />
        <MindMap />
        <HomeProjects />
        <CurrentSignal />
      </main>
    </PageTransition>
  )
}

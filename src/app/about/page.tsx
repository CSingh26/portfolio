import type { Metadata } from "next"
import { AboutSection } from "@/components/about-section"
import { PageTransition } from "@/components/motion-primitives"

export const metadata: Metadata = {
  title: "About",
  description:
    "The origin story behind Chaitanya Singh's path from computer science into backend systems, cloud, data, AI, and finance.",
}

export default function AboutPage() {
  return (
    <PageTransition>
      <main className="pt-28 pb-16">
        <AboutSection />
      </main>
    </PageTransition>
  )
}

import type { Metadata } from "next"
import { PageTransition } from "@/components/motion-primitives"
import { WritingSection } from "@/components/writing-section"

export const metadata: Metadata = {
  title: "Thinking",
  description: "Notebook-style writing on computer science, finance, backend systems, AI agents, and execution.",
}

export default function WritingPage() {
  return (
    <PageTransition>
      <main className="pt-28 pb-16">
        <WritingSection />
      </main>
    </PageTransition>
  )
}

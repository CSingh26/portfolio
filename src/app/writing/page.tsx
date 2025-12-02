import type { Metadata } from "next"
import { WritingSection } from "@/components/writing-section"

export const metadata: Metadata = {
  title: "Writing | Chaitanya Singh",
  description: "Notes and articles on fintech, cloud, systems, and security engineering.",
}

export default function WritingPage() {
  return (
    <main className="pt-28 pb-16">
      <WritingSection />
    </main>
  )
}

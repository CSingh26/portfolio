import type { Metadata } from "next"
import { WritingSection } from "@/components/writing-section"

export const metadata: Metadata = {
  title: "Writing | Chaitanya Singh",
  description: "Notes on financial machine learning, quantitative methods, and building intelligent systems people can trust.",
}

export default function WritingPage() {
  return (
    <main className="pt-28 pb-16">
      <WritingSection />
    </main>
  )
}

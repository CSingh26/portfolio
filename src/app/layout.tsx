import type { ReactNode } from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CursorGlow } from "@/components/cursor-glow"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Chaitanya | Data, Cloud & FinTech Engineer",
  description:
    "Portfolio of Chaitanya, CS junior at Arizona State University building data, backend, cloud, fintech, and security projects.",
  metadataBase: new URL("https://chaitanya-singh.dev"),
  openGraph: {
    title: "Chaitanya | Data, Cloud & FinTech Engineer",
    description:
      "CS senior at Arizona State University shipping data-driven, secure, cloud-native products.",
    url: "https://chaitanya-singh.dev",
    siteName: "Chaitanya",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chaitanya | Data, Cloud & FinTech Engineer",
    description:
      "CS senior at ASU with a focus on data analytics, backend systems, cloud, and fintech security.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground">
        <ThemeProvider>
          <div className="noise" aria-hidden />
          <CursorGlow />
          <div className="pointer-events-none fixed inset-0 -z-10">
            <div className="absolute left-[-10%] top-[-10%] h-64 w-64 rounded-full bg-accent/25 blur-3xl" />
            <div className="absolute right-[-8%] top-[10%] h-72 w-72 rounded-full bg-foreground/10 blur-3xl" />
            <div className="absolute bottom-[-12%] right-[15%] h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
          </div>
          <Navbar />
          <main className="relative z-10 min-h-screen pb-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

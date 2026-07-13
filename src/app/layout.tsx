import type { ReactNode } from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CursorGlow } from "@/components/cursor-glow"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: {
    default: "Chaitanya Singh | Intelligent Systems Portfolio",
    template: "%s | Chaitanya Singh",
  },
  description:
    "Storytelling portfolio for Chaitanya Singh, a computer science builder connecting backend systems, cloud, data, AI, finance, security, and product execution.",
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://chaitanyasingh.org"),
  openGraph: {
    title: "Chaitanya Singh | Intelligent Systems Portfolio",
    description:
      "A premium portfolio about software, finance, cloud infrastructure, data, AI, security, and systems thinking.",
    url: "https://chaitanyasingh.org",
    siteName: "Chaitanya Singh",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chaitanya Singh | Intelligent Systems Portfolio",
    description:
      "A storytelling portfolio for a builder working across backend, cloud, data, AI, finance, and security.",
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
          <Navbar />
          <div className="relative z-10 min-h-screen pb-10">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

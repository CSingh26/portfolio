import type { ReactNode } from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CursorGlow } from "@/components/cursor-glow"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Chaitanya Singh | Technology × Finance × Product",
  description:
    "Chaitanya Singh builds interactive products at the intersection of technology, finance, data, and strategy.",
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://chaitanyasingh.org"),
  openGraph: {
    title: "Chaitanya Singh | Technology × Finance × Product",
    description:
      "Interactive products at the intersection of technology, finance, data, and strategy.",
    url: "https://chaitanyasingh.org",
    siteName: "Chaitanya",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1792,
        height: 921,
        alt: "Chaitanya Singh — Technology, Finance, Product",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chaitanya Singh | Technology × Finance × Product",
    description:
      "Interactive products at the intersection of technology, finance, data, and strategy.",
    images: ["/og.png"],
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

import type { ReactNode } from "react"
import type { Metadata } from "next"
import {
  Bricolage_Grotesque,
  IBM_Plex_Mono,
  Instrument_Sans,
  Instrument_Serif,
} from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CursorField } from "@/components/cursor-field"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Preloader } from "@/components/preloader"

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display-src",
  axes: ["opsz"],
})

const sans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans-src",
})

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-mono-src",
})

const serif = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif-src",
})

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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${sans.variable} ${mono.variable} ${serif.variable}`}
    >
      <body className="antialiased bg-background text-foreground">
        <ThemeProvider>
          <Preloader />
          <CursorField />
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

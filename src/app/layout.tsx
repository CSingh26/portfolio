import type { ReactNode } from "react"
import type { Metadata } from "next"
import { IBM_Plex_Mono, Instrument_Sans, Instrument_Serif } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CursorField } from "@/components/cursor-field"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Preloader } from "@/components/preloader"

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
  style: "normal",
  variable: "--font-serif-src",
})

const title = "Chaitanya Singh | Finance × Data × Technology"
const description =
  "Chaitanya Singh builds intelligent systems at the intersection of finance, data, and technology: quantitative models, market research tools, and software that turns financial complexity into usable intelligence."

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://chaitanyasingh.org"),
  openGraph: {
    title,
    description,
    url: "https://chaitanyasingh.org",
    siteName: "Chaitanya Singh",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1792,
        height: 921,
        alt: "Chaitanya Singh — Finance, Data, and Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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
      className={`${sans.variable} ${mono.variable} ${serif.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(sessionStorage.getItem('portfolio-preloader-seen'))document.documentElement.dataset.preloaderSeen='true'}catch(e){}",
          }}
        />
      </head>
      <body className="antialiased bg-background text-foreground">
        {/* The preloader ships in the server-rendered markup so it covers the
            first paint. Without JS nothing would ever dismiss it, so hide it. */}
        <noscript>
          <style>{`.preloader { display: none !important; }`}</style>
        </noscript>
        <ThemeProvider>
          <Preloader />
          <CursorField />
          <Navbar />
          <div className="relative z-10 min-h-screen pb-10">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

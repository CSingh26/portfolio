import { kv } from "@vercel/kv"
import { NextResponse, type NextRequest } from "next/server"

const COUNT_KEY = "analytics:unique_visitors"
const COOKIE_NAME = "portfolio_visitor"
const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365

export async function GET(request: NextRequest) {
  if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
    return NextResponse.json({ count: null })
  }

  try {
    const existing = request.cookies.get(COOKIE_NAME)
    let count = 0

    if (!existing) {
      count = await kv.incr(COUNT_KEY)
    } else {
      const stored = await kv.get<number>(COUNT_KEY)
      count = typeof stored === "number" ? stored : 0
    }

    const response = NextResponse.json({ count })

    if (!existing) {
      response.cookies.set({
        name: COOKIE_NAME,
        value: crypto.randomUUID(),
        maxAge: ONE_YEAR_SECONDS,
        httpOnly: true,
        sameSite: "lax",
        path: "/",
      })
    }

    return response
  } catch {
    return NextResponse.json({ count: null })
  }
}

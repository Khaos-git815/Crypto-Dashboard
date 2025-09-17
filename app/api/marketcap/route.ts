import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function GET() {
  // Mock market cap that drifts a bit each call
  const base = 250_000
  const drift = Math.round((Math.random() - 0.5) * 5_000)
  return NextResponse.json({ cap: base + drift })
}



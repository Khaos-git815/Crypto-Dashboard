import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

let total = 0

export async function GET() {
  total += Math.random() * 0.05
  return NextResponse.json({ total: Number(total.toFixed(3)) })
}



import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

let burned = 500_000

export async function GET() {
  burned += Math.round(Math.random() * 5000)
  return NextResponse.json({ burn: burned })
}



import { NextResponse } from 'next/server'

export async function GET() {
  return new NextResponse(JSON.stringify({ data: null }), {
    status: 200,
  })
}

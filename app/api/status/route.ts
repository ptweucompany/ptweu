import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export async function GET() {
  return NextResponse.json({
    status: 'online',
    message: 'PT Wira Energi Utama API is connected',
    timestamp: new Date().toISOString(),
  });
}

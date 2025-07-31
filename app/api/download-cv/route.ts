import { NextResponse } from 'next/server'

import fs from 'fs'
import path from 'path'

export async function GET() {
  try {
    const filePath = path.join(
      process.cwd(),
      'public',
      'cv',
      'Emanuel Funes CV 2025.pdf'
    )

    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        {
          error: 'file not found',
        },
        {
          status: 404,
        }
      )
    }

    const fileBuffer = fs.readFileSync(filePath)
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Cv Emanuel Funes.pdf',
      },
    })
  } catch (error) {
    return NextResponse.json(
      { error: `Internal server Error: ${error}` },
      { status: 500 }
    )
  }
}

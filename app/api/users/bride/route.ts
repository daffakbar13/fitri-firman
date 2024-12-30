import { NextResponse } from 'next/server'

export async function GET() {
  return new NextResponse(
    JSON.stringify({
      data: {
        cpp: {
          shortName: 'Firman',
          childOrder: 3,
          father: {
            name: 'Abdul Rojak',
            isAlm: false,
          },
          role: 'cpp',
          fullName: 'Ceceng Firman Nursaleh',
          gender: 'male',
          mother: {
            name: 'Ening',
            isAlm: false,
          },
        },
        cpw: {
          shortName: 'Fitri',
          childOrder: 1,
          father: {
            name: 'Maman',
            isAlm: true,
          },
          role: 'cpw',
          fullName: 'Fitri Damayanti',
          gender: 'female',
          mother: {
            name: 'Cicih',
            isAlm: false,
          },
        },
      },
    }),
    {
      status: 200,
    },
  )
}

// import { NextRequest, NextResponse } from 'next/server';

// export async function POST(req: NextRequest) {
//   try {
//     const data = await req.json();

//     const response = await fetch('http://nextfi.site:5000/api/v1/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     });

//     const result = await response.json();

//     if (!response.ok) {
//       return NextResponse.json({ message: result.message }, { status: response.status });
//     }

//     return NextResponse.json(result);
//   } catch (error: any) {
//     return NextResponse.json(
//       { message: error.message || 'An error occurred during login' },
//       { status: 500 }
//     );
//   }
// }

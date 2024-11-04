import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (email === 'nextfi@mail.com' && password === '123456') {
    return NextResponse.json({ message: 'YE BOY' });
  } else {
    return NextResponse.json({ message: 'NE TE DANNIYE' }, { status: 401 });
  }
}

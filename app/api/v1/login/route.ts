import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('Request Body:', body);

    if (!body.email || !body.password) {
      console.warn('Missing email or password');
      return NextResponse.json(
        { response: 'error', message: 'Missing email or password' },
        { status: 400 }
      );
    }

    const res = await fetch('http://127.0.0.1:5000/api/v1/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    console.log('Response Status:', res.status);
    const data = await res.json();
    console.log('Response from Backend:', data);

    if (!res.ok) {
      console.error('Backend Error:', data);
      return NextResponse.json(data, { status: res.status });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json(
      { response: 'error', message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

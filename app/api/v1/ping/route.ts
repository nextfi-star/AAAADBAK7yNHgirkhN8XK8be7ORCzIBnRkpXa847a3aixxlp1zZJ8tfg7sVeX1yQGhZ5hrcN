import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('http://127.0.0.1:5000/api/v1/ping');
    const data = await res.json();
    console.log('Исходящий запрос:', { url: 'http://127.0.0.1:5000/api/v1/ping' });
    console.log('Ответ сервера:', data);

    return NextResponse.json(data);
  } catch (error) {
    console.error('Ошибка запроса:', error);
    return NextResponse.json(
      { response: 'error', message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

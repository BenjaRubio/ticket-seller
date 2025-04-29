import { NextResponse } from 'next/server';
import { createEvent } from './events.controller';

export async function GET(request: Request) {
  return NextResponse.json({ message: 'Hello, world!' })
}

export async function POST(request: Request) {
  const event = await request.json();
  try {
    const newEvent = await createEvent(event);
    return NextResponse.json(newEvent)
  } catch (error) {
    return NextResponse.json({ error: 'Error al crear el evento' }, { status: 500 })
  }
}

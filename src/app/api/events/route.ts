import { NextResponse } from 'next/server';
import { createEvent, getEvents } from './events.controller';

export async function GET() {
  try {
    const events = await getEvents();
    return NextResponse.json({ ok: true, data: events })
  } catch (error) {
    return NextResponse.json({ ok: false, error: 'Error al obtener los eventos' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const event = await request.json();
  try {
    const newEvent = await createEvent(event);
    return NextResponse.json({ ok: true, data: newEvent })
  } catch (error) {
    return NextResponse.json({ ok: false, error: 'Error al crear el evento' }, { status: 500 })
  }
}

import { NextResponse } from 'next/server';
import { getEventById } from '../events.controller';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const eventId = params.id;
  try {
    const event = await getEventById(eventId);
    return NextResponse.json({ ok: true, data: event });
  } catch (error) {
    console.log("get event id", error);
    return NextResponse.json({ ok: false, error: 'Error al obtener los eventos' }, { status: 500 });
  }
}
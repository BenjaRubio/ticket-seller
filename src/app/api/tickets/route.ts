import { NextResponse } from 'next/server';
import { bulkCreateTickets } from './tickets.controller';
import { checkEventStock } from '../events/events.controller';

export async function POST(request: Request) {
  const purchaseData = await request.json();
  try {
    const availableTickets = await checkEventStock(purchaseData.eventId);
    if (availableTickets && availableTickets < purchaseData.ticketsQty) {
      return NextResponse.json({ ok: false, error: `Falta de stock, solo hay ${availableTickets} entradas disponibles` }, { status: 400 })
    }
    const newTickets = await bulkCreateTickets(purchaseData);
    return NextResponse.json({ ok: true, data: newTickets });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ ok: false, error: 'Error al realizar la compra' }, { status: 500 })
  }
}

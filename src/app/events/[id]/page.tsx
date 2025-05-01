"use server";

import { EventDetailContainer } from "@/components/events/eventDetailContainer";
import { getEventById } from "@/app/api/events/events.controller";
import { notFound } from 'next/navigation';
import { IEvent } from "@/app/api/events/events.interface";

export default async function EventPage({ params }: { params: { id: string } }) {
  const eventId = params.id;
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events/${eventId}`, {
  //   cache: 'no-store'
  // }).then((res) => res.json());
  // const event = response.ok ? response.data : null;
  const event = (await getEventById(eventId)) as IEvent | null;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-foreground">
      {event ?
        <EventDetailContainer event={event} />
        :
        <div className="flex flex-col items-center justify-center h-screen bg-foreground">
          <h1 className="text-4xl font-bold text-primary-foreground">
            No se pudo cargar el evento
          </h1>
        </div>
      }
    </div>
  );
}


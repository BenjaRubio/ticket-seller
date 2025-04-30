"use server";

import { EventDetailContainer } from "@/components/events/eventDetailContainer";

export default async function EventPage({ params }: { params: { id: string } }) {
  const eventId = params.id;
  const event = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events/${eventId}`, {
    cache: 'no-store'
  }).then((res) => res.json());

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-foreground">
      <EventDetailContainer event={event} />
    </div>
  );
}


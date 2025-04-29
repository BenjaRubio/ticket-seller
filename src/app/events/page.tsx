"use server";

import { EventCard } from "@/components/events/eventCard";
import { IEvent } from "../api/events/events.interface";

export default async function EventsPage() {
  const events: IEvent[] = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`, {
    cache: 'no-store'
  }).then((res) => res.json())
  .then((res) => res.ok ? res.data : []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto p-4 bg-foreground min-h-screen content-start">
      {events.map((event: IEvent) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

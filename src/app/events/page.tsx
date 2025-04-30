"use server";

import { IEvent } from "../api/events/events.interface";
import EventListContainer from "@/components/events/eventListContainer";

export default async function EventsPage() {
  const events: IEvent[] = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`, {
    cache: 'no-store'
  }).then((res) => res.json())
  .then((res) => res.ok ? res.data : []);

  return (
    <div>
      <EventListContainer events={events}/>
    </div>
  );
}

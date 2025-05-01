import { EventDetailContainer } from "@/components/events/eventDetailContainer";
import { notFound } from 'next/navigation';
import { IEvent } from "@/app/api/events/events.interface";
import { headers } from 'next/headers';

export default async function EventPage({ params }: { params: { id: string } }) {
  const headersList = headers();
  const host = headersList.get('host') || 'localhost:3000';
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  
  const eventId = params.id;
  const response = await fetch(`${protocol}://${host}/api/events/${eventId}`, {
    cache: 'no-store'
  });
  const data = await response.json();
  const event = data.ok ? data.data as IEvent : null;
  
  if (!event) return notFound();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-foreground">
      <EventDetailContainer event={event} />
    </div>
  );
}


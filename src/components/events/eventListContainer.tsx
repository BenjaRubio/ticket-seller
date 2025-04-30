'use client';

import { IEvent } from "@/app/api/events/events.interface";
import { EventCard } from "@/components/events/eventCard";
import { useState, useMemo } from "react";
import SearchBar from "@/components/searchBar";

interface Props {
  events: IEvent[];
}

export default function EventListContainer(props: Props) {
  const { events } = props;
  const [term, setTerm] = useState('');

  const filteredEvents = useMemo(
    () => events.filter(p =>
      p.title.toLowerCase().includes(term.toLowerCase())
    ),
    [term, events]
  );

  return (
    <div className="flex flex-col gap-4 bg-foreground">
      <SearchBar term={term} setTerm={setTerm}/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-24 p-4 bg-foreground min-h-screen content-start">
        {filteredEvents.map((event: IEvent) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
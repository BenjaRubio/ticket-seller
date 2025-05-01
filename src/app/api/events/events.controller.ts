import prisma from "@/lib/prisma";
import { IEvent } from "./events.interface";

export const getEvents = async () => {
  const events = await prisma.event.findMany()
  return events
}

export const createEvent = async (event: IEvent) => {
  const newEvent = await prisma.event.create({
    data: {
      ...event,
      tickets: {
        create: event.tickets
      }
    },
  });
  return newEvent as IEvent;
}

export const getEventById = async (id: string, includeTickets: boolean = true) => {
  const event = await prisma.event.findUnique({
    where: { id },
    include: {
      tickets: includeTickets,
    },
  });
  return event;
} 

export const checkEventStock = async (eventId: string) => {
  const event = await prisma.event.findUnique({
    where: { id: eventId },
    include: {
      tickets: true
    }
  });
  if (event) {
    return event.initialStock - (event.tickets.length || 0);
  }
  return null;
}
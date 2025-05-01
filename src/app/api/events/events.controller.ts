import prisma from "@/lib/prisma";
import { IEvent } from "./events.interface";

export const getEvents = async () => {
  try {
    const events = await prisma.event.findMany()
    return events
  } catch (error) {
    console.log("error getting events", error);
    throw new Error("Error getting events");
  }
}

export const createEvent = async (event: IEvent) => {
  try {
    const newEvent = await prisma.event.create({
      data: {
        ...event,
        tickets: {
        create: event.tickets
      }
    },
    });
    return newEvent as IEvent;
  } catch (error) {
    console.log("error creating event", error);
    throw new Error("Error creating event");
  }
}

export const getEventById = async (id: string, includeTickets: boolean = true) => {
  if (process.env.NODE_ENV === 'production' && process.env.NEXT_PHASE === 'phase-production-build') {
    return { id, title: 'Build-time placeholder' };
  }
  
  try {
    const event = await prisma.event.findUnique({
      where: { id },
      include: {
      tickets: includeTickets,
    },
    });
    return event;
  } catch (error) {
    console.log("error getting event", error);
    throw new Error("Error getting event");
  }
} 

export const checkEventStock = async (eventId: string) => {
  try {
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
  } catch (error) {
    console.log("error checking event stock", error);
    throw new Error("Error checking event stock");
  }
}
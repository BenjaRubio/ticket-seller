import prisma from "@/lib/prisma";
import { IEvent } from "./events.interface";

export const getEvents = async () => {
  const events = await prisma.event.findMany()
  return events
}

export const createEvent = async (event: IEvent) => {
  const newEvent = await prisma.event.create({
    data: event,
  });
  return newEvent;
}
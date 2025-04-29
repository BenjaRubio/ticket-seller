import prisma from "@/lib/prisma";
import { ITicket, IPurchaseTicket } from "./tickets.interface";

export const createTicket = async (ticket: ITicket) => {
  const newTicket = await prisma.ticket.create({
    data: ticket
  });
  return newTicket;
}

export const bulkCreateTickets = async (purchaseData: IPurchaseTicket & { eventId: string }) => {
  const tickets = Array.from({ length: purchaseData.ticketsQty }, () => ({
    buyerName: purchaseData.buyerName,
    buyerLastName: purchaseData.buyerLastName,
    buyerEmail: purchaseData.buyerEmail,
    eventId: purchaseData.eventId,
  }));
  const newTickets = await prisma.ticket.createMany({
    data: tickets
  })
  return newTickets;
}
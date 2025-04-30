import prisma from "@/lib/prisma";
import { IPurchaseTicket } from "./tickets.interface";

export const getTickets = async (page: number) => {
  const [tickets, total] = await Promise.all([
    prisma.ticket.findMany({
      include: {
        event: true
      },
      skip: (page - 1) * 10,
      take: 10
    }),
    prisma.ticket.count()
  ]);
  
  return { tickets, total };
}

export const bulkCreateTickets = async (purchaseData: IPurchaseTicket) => {
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
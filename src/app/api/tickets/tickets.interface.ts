import type { IEvent } from "../events/events.interface"

export interface ITicket {
  id: string
  eventId: string
  buyerName: string
  buyerLastName: string
  buyerEmail: string
  createdAt: Date
  event: IEvent
}

export interface IPurchaseTicket {
  eventId: string
  buyerName: string
  buyerLastName: string
  buyerEmail: string
  ticketsQty: number
}
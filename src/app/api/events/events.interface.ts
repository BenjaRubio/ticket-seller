import type { ITicket } from "../tickets/tickets.interface";

enum EventStatus {
  DRAFT = 'DRAFT',
  ACTIVE = 'ACTIVE',
}

export interface IEvent {
  id: string
  title: string
  description: string
  date: Date
  price: number
  initialStock: number
  status: EventStatus
  createdAt: Date
  tickets: ITicket[]
}

export interface ITicket {
  id: string
  eventId: string
  buyerName: string
  buyerLastName: string
  buyerEmail: string
  createdAt: Date
}

export interface IPurchaseTicket {
  eventId: string
  buyerName: string
  buyerLastName: string
  buyerEmail: string
  ticketsQty: number
}
'use client';
import { useState } from "react";
import { EventDetailCard } from "./eventDetailCard";
import { BuyTicketForm } from "@/components/form/buyTicketForm";
import { IEvent } from "@/app/api/events/events.interface";
import { IPurchaseTicket } from "@/app/api/tickets/tickets.interface";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";

interface Props {
  event: IEvent;
}

export const EventDetailContainer = (props: Props) => {
  const { event } = props;
  const { toast } = useToast();

  const onClickBuyTicket = async (data: IPurchaseTicket) => {
    let toastTitle = "Compra realizada correctamente";
    let toastDescription = `${data.ticketsQty} ticket${data.ticketsQty > 1 ? "s" : ""} para ${event.title}`;
    let variant = "default";

    await fetch('/api/tickets', {
      method: 'POST',
      body: JSON.stringify({...data, eventId: event.id}),
    })
    .then((res) => res.json())
    .then(response => {
      if (!response.ok) {
        toastTitle = "Error al realizar la compra";
        toastDescription = response.error;
        variant = "destructive";
      }
    });

    toast({
      title: toastTitle,
      description: toastDescription,
      variant: variant as "default" | "destructive",
    });
  }

  return (
    <div className="flex flex-col md:flex-row  bg-foreground rounded-xl p-8 w-full justify-evenly">
      <EventDetailCard event={event} />
      <div className="bg-background rounded-xl p-6">
        <h2 className="text-2xl font-bold text-primary">Datos del comprador</h2>
        <BuyTicketForm eventId={event.id} eventPrice={event.price} onClickBuyTicket={onClickBuyTicket}/>
      </div>
      <Toaster />
    </div>
  );
};
'use client';

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormInputField } from "./formInputField";
import { IPurchaseTicket } from "@/app/api/tickets/tickets.interface";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";
import { CircularProgress } from "../ui/circularProgress";

const formSchema = z.object({
  name: z.string().min(2, "El nombre es requerido"),
  lastName: z.string().min(2, "El apellido es requerido"),
  email: z.string().email("El email es inválido"),
  ticketsQty: z.coerce.number().min(1, "La cantidad de entradas es requerida"),
});

interface Props {
  eventPrice: number;
  eventId: string;
  onClickBuyTicket: (data: IPurchaseTicket) => void;
}

export const BuyTicketForm = (props: Props) => {
  const { eventPrice, eventId, onClickBuyTicket } = props;
  const [ticketsQty, setTicketsQty] = useState(0);
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      ticketsQty: 0,
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setLoading(true);
    await onClickBuyTicket({
      eventId,
      buyerName: data.name,
      buyerLastName: data.lastName,
      buyerEmail: data.email,
      ticketsQty: data.ticketsQty,
    });
    setLoading(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full max-w-md">
        <FormInputField
          formControl={form.control}
          name="name"
          label="Nombre"
        >
          <Input placeholder="Nombre" />
        </FormInputField>

        <FormInputField
          formControl={form.control}
          name="lastName"
          label="Apellido"
        >
          <Input placeholder="Apellido" />
        </FormInputField>

        <FormInputField
          formControl={form.control}
          name="email"
          label="Email"
        >
          <Input placeholder="Email" type="email" />
        </FormInputField>
        <FormInputField
          formControl={form.control}
          name="ticketsQty"
          label="Selecciona la cantidad de entradas"
        >
          <div className="flex flex-row justify-between align-center">
            <Input type="number" className="w-24" onChange={(e) => setTicketsQty(Number(e.target.value))} />
            <span className="text-md text-primary font-bold py-2">= ${ticketsQty * eventPrice}</span>
          </div>
        </FormInputField>
        <Button type="submit" className="w-full">
          {loading ? <CircularProgress className="text-primary-foreground"/> : "Comprar"}
        </Button>
      </form>
    </Form>
  );
};
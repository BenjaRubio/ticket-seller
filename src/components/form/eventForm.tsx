'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { FormInputField } from './formInputField';
import { Input } from '../ui/input';
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/toaster"

import { IEvent } from '@/app/api/events/events.interface';
import { useToast } from "@/hooks/use-toast"

const eventSchema = z.object({
  title: z.string().min(1, { message: 'El título es requerido' }),
  description: z.string().min(1, { message: 'La descripción es requerida' }),
  date: z.coerce.date(),
  price: z.coerce.number(),
  initialStock: z.coerce.number(),
});

interface Props {
  className?: string;
}

export const EventForm = (props: Props) => {
  const { className } = props;
  const { toast } = useToast();

  const form = useForm<z.infer<typeof eventSchema>>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      title: '',
      description: '',
      date: new Date(),
      price: 0,
      initialStock: 0,
    },
  });

  const onSubmit = async (data: z.infer<typeof eventSchema>) => {
    let toastMsg = "Error al crear el evento";
    let variant = "destructive";
    await fetch(
      '/api/events',
      {
        method: 'POST',
        body: JSON.stringify(data),
      }
    ).then(response => {
      if (response.ok) {
        toastMsg = "Evento creado correctamente";
        variant = "default";
      }
    });
    toast({
      title: data.title,
      description: toastMsg,
      variant: variant as "default" | "destructive",
    });
  };

  return (
    <div className={className}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormInputField
            formControl={form.control}
            name="title"
            label="Título"
          >
            <Input placeholder="Título del evento" />
          </FormInputField>
          <FormInputField
            formControl={form.control}
            name="description"
            label="Descripción"
          >
            <Textarea placeholder="Descripción del evento" />
          </FormInputField>
          <FormInputField
            formControl={form.control}
            name="date"
            label="Fecha"
          >
            <Input type="date" />
          </FormInputField>
          <FormInputField
            formControl={form.control}
            name="price"
            label="Precio"
          >
            <Input type="number" />
          </FormInputField>
          <FormInputField
            formControl={form.control}
            name="initialStock"
            label="Stock inicial"
          >
            <Input type="number" />
          </FormInputField>
          <Button type="submit" className="mt-4">Crear</Button>
        </form>
      </Form>
      <Toaster />
    </div>
  );
};

'use client';

import { IEvent } from "@/app/api/events/events.interface";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface Props {
  event: IEvent;
}

export const EventDetailCard = (props: Props) => {
  const { event } = props;

  return (
    <Card className="bg-background flex flex-col w-1/2">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-2xl">{event.title}</CardTitle>
        <CardTitle className="text-xl">${event.price}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-lg text-primary">{event.date.toString().split("T")[0]}</CardDescription>
        <CardDescription className="text-md my-2">{event.description}</CardDescription>
      </CardContent>
      <Separator className="my-4" />
      <CardFooter className="flex gap-2">
        <span className="text-md text-primary">Quedan {event.initialStock - event.tickets.length} entradas disponibles</span>
      </CardFooter>
    </Card>
  );
};

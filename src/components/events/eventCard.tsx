
import { IEvent } from "@/app/api/events/events.interface";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  event: IEvent;
}

export const EventCard = (props: Props) => {
  const { event } = props;

  return (
    <Link href={`/events/${event.id}`}>
      <Card className="bg-background hover:bg-accent-foreground hover:text-primary-foreground max-w-[400px] min-w-[250px]">
        <CardHeader>
          <CardTitle>{event.title}</CardTitle>
          <CardDescription>{event.date.toString().split("T")[0]}</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>precio: ${event.price}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
};

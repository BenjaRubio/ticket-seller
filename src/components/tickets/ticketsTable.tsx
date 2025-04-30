import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ITicket } from "@/app/api/tickets/tickets.interface";

interface Props {
  tickets: ITicket[];
}

export default function TicketsTable(props: Props) {
  const { tickets } = props;

  return (
    <Table className="bg-background rounded-lg w-3/4 mx-auto">
      <TableHeader>
        <TableRow>
          <TableHead>Código del ticket</TableHead>
          <TableHead>Evento</TableHead>
          <TableHead>Usuario</TableHead>
          <TableHead>Fecha de compra</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tickets.map((ticket) => (
          <TableRow key={ticket.id}>
            <TableCell>{ticket.id}</TableCell>
            <TableCell>{ticket.event.title}</TableCell>
            <TableCell>{ticket.buyerName} {ticket.buyerLastName}</TableCell>
            <TableCell>{ticket.createdAt.toString().split('T')[0]}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
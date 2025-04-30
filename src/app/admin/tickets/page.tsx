import TicketsTable from "@/components/tickets/ticketsTable";
import { ITicket } from "@/app/api/tickets/tickets.interface";
import TablePagination from "@/components/tickets/tablePagination";

export default async function TicketsPage({ searchParams }: { searchParams: { page: string } }) {
  const page = searchParams.page && parseInt(searchParams.page) > 1 ? parseInt(searchParams.page) : 1;
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tickets?page=${page}`, {
    cache: 'no-store'
  }).then((res) => res.json());

  const tickets: ITicket[] = response.ok ? response.data.tickets : [];
  const totalPages = response.ok ? Math.ceil(response.data.total / 10) : 1;

  return (
    <div className="flex flex-col gap-4 min-h-screen bg-foreground py-8">
      <h1 className="text-2xl font-bold text-center text-primary-foreground">Entradas vendidas</h1>
      <TicketsTable tickets={tickets} />
      <TablePagination currentPage={page} totalPages={totalPages} />
    </div>  
  );
}
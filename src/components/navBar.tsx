import Link from "next/link";
import { Button } from "./ui/button";

export const NavBar = () => {
  return (
    <div className="flex justify-center gap-4 p-4 bg-foreground">
      <Button asChild className="bg-primary-foreground text-primary hover:text-primary-foreground">
        <Link href="/">Inicio</Link>
      </Button>
      <Button asChild className="bg-primary-foreground text-primary hover:text-primary-foreground">
        <Link href="/admin/events">Crear evento</Link>
      </Button>
      <Button asChild className="bg-primary-foreground text-primary hover:text-primary-foreground">
        <Link href="/events">Eventos</Link>
      </Button>
      <Button asChild className="bg-primary-foreground text-primary hover:text-primary-foreground">
        <Link href="/admin/tickets">Tickets</Link>
      </Button>
    </div>
  )
}
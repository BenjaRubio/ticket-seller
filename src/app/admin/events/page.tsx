import { EventForm } from "@/components/form/eventForm";

export default function EventsAdminPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-foreground">
      <div className="flex flex-col items-center justify-center gap-6 w-1/3 bg-background rounded-xl border-radius border-primary p-8 text-primary">
        <h1 className="text-3xl font-bold">Crear Evento</h1>
        <EventForm className="w-full" />
      </div>
    </div>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-foreground">
      <h1 className="text-4xl font-bold text-primary-foreground">
        Bienvenido a la plataforma de eventos más grande del planeta
      </h1>
    </div>
  );
}

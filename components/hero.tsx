import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import { WhatsappIcon } from "@/components/whatsapp-icon";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 sm:pt-40"
    >
      {/* Fundo */}
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-24 -z-0 h-[420px] w-[420px] -translate-x-1/2 glow-radial opacity-50 blur-2xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        {/* Avatar */}
        <div className="relative mb-8">
          <div className="absolute -inset-3 rounded-full glow-radial opacity-80 blur-xl" />

          <div className="relative size-28 overflow-hidden rounded-full border border-border/80 ring-1 ring-primary/30 sm:size-32">
            <Image
              src="/foto-perfil.png" // 🔥 SUA FOTO AQUI
              alt={`Foto de ${siteConfig.name}`}
              fill
              priority
              sizes="128px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/70 bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground">
          <span className="size-2 rounded-full bg-primary" />
          Disponível para novos projetos
        </div>

        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
          {siteConfig.name} · {siteConfig.role}
        </p>

        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Criando experiências digitais modernas que geram resultados
        </h1>

        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Transformo ideias em sites rápidos, responsivos e com foco total em
          conversão de clientes.
        </p>

        <div className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
          <Button
            size="lg"
            className="w-full gap-2 sm:w-auto"
            nativeButton={false}
            render={
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            <WhatsappIcon className="size-4" />
            Falar comigo no WhatsApp
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="w-full gap-2 border-border/70 bg-secondary/30 sm:w-auto"
            nativeButton={false}
            render={<a href="#projetos" />}
          >
            Ver meus projetos
            <ArrowUpRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

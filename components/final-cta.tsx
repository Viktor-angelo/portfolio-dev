import { Button } from "@/components/ui/button"
import { whatsappLink } from "@/lib/site-config"
import { WhatsappIcon } from "@/components/whatsapp-icon"

export function FinalCta() {
  return (
    <section id="contato" className="px-4 py-24 sm:px-6">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-primary/30 bg-primary/10 px-6 py-16 text-center sm:px-12 sm:py-20">
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/3 glow-radial opacity-70 blur-2xl" />

        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Vamos transformar sua ideia em um site profissional?
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            Entre em contato comigo e receba um site moderno, rápido e pronto
            para gerar resultados reais.
          </p>
          <div className="mt-9 flex justify-center">
            <Button
              size="lg"
              className="gap-2 px-8 text-base"
              nativeButton={false}
              render={
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <WhatsappIcon className="size-5" />
              Falar comigo no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

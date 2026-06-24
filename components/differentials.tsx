import { Sparkles, Code2, TrendingUp, Zap } from "lucide-react"

const items = [
  {
    icon: Sparkles,
    title: "Design moderno e responsivo",
    description: "Interfaces elegantes que se adaptam a qualquer dispositivo.",
  },
  {
    icon: Code2,
    title: "Código limpo e escalável",
    description: "Base sólida, organizada e fácil de manter e evoluir.",
  },
  {
    icon: TrendingUp,
    title: "Foco em conversão e resultados",
    description: "Decisões orientadas a transformar visitantes em clientes.",
  },
  {
    icon: Zap,
    title: "Entrega rápida e comunicação clara",
    description: "Processo transparente, prazos cumpridos e zero enrolação.",
  },
]

export function Differentials() {
  return (
    <section id="diferenciais" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Diferenciais
          </h2>
          <p className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Por que trabalhar comigo
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-border/70 bg-card/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card/70"
            >
              <div className="flex size-11 items-center justify-center rounded-xl border border-border/70 bg-secondary/60 text-primary transition-colors group-hover:border-primary/40">
                <item.icon className="size-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold leading-snug">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

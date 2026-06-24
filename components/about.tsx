import { Layers, Gauge, Target } from "lucide-react"

const skills = [
  {
    icon: Layers,
    title: "Interfaces modernas e responsivas",
    description:
      "Layouts limpos que funcionam perfeitamente em qualquer tela, do celular ao desktop.",
  },
  {
    icon: Gauge,
    title: "Performance e otimização",
    description:
      "Sites rápidos, leves e otimizados para carregar em segundos e ranquear bem.",
  },
  {
    icon: Target,
    title: "Foco em experiência e conversão",
    description:
      "Cada detalhe pensado para guiar o visitante até virar cliente de verdade.",
  },
]

export function About() {
  return (
    <section id="sobre" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Sobre mim
          </h2>
          <p className="mt-4 text-balance text-2xl font-medium leading-relaxed tracking-tight sm:text-3xl">
            Sou desenvolvedor front-end focado em criar interfaces modernas,
            performáticas e responsivas, com foco em experiência do usuário e
            conversão.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="group rounded-2xl border border-border/70 bg-card/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card/70"
            >
              <div className="flex size-11 items-center justify-center rounded-xl border border-border/70 bg-secondary/60 text-primary transition-colors group-hover:border-primary/40">
                <skill.icon className="size-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold">{skill.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

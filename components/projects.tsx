import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Habit Tracker",
    description:
      "Aplicação para acompanhamento de hábitos focada em consistência e produtividade. Projeto em desenvolvimento, com interface moderna e foco em experiência do usuário.",
    image: "/preview-habit-tracker.png",
    tags: ["React", "Next.js", "Tailwind", "UX"],
    link: "#",
    github: "#",
    status: "Em desenvolvimento",
  },
  {
    name: "Finsight",
    description:
      "Sistema de controle financeiro com dashboard interativo, métricas organizadas e foco em clareza de dados para tomada de decisão.",
    image: "/preview-finsight-1.png",
    tags: ["React", "Dashboard", "Charts", "UI/UX"],
    link: "https://finsight-5hpf.vercel.app/",
    github: "https://github.com/Viktor-angelo/Finsight",
  },
  {
    name: "StreamFlix",
    description:
      "Interface inspirada em plataformas de streaming, com navegação fluida e foco em performance e componentização no front-end.",
    image: "/preview-streamflix-2.png",
    tags: ["React", "Next.js", "Frontend", "Performance"],
    link: "https://stream-flix-phi.vercel.app/",
    github: "https://github.com/Viktor-angelo/StreamFlix",
  },
];

export function Projects() {
  return (
    <section id="projetos" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Projetos
          </h2>
          <p className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Trabalhos selecionados
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Projetos reais com foco em performance, experiência do usuário e
            soluções práticas.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/40 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border/70">
                <Image
                  src={project.image}
                  alt={`Prévia do projeto ${project.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                {project.status && (
                  <span className="mb-2 inline-block text-xs text-yellow-500">
                    🚧 {project.status}
                  </span>
                )}

                <h3 className="text-lg font-semibold">{project.name}</h3>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border/70 bg-secondary/50 px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-4">
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-foreground"
                    >
                      Ver projeto
                      <ArrowUpRight className="size-4" />
                    </a>
                  )}

                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Código
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client"

import { Button } from "@/components/ui/button"
import { siteConfig, whatsappLink } from "@/lib/site-config"
import { WhatsappIcon } from "@/components/whatsapp-icon"

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Diferenciais", href: "#diferenciais" },
]

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href="#top"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight"
        >
          <span className="flex size-7 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground">
            VA
          </span>
          <span className="hidden sm:inline">{siteConfig.name}</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <Button
          size="sm"
          className="gap-2"
          nativeButton={false}
          render={
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" />
          }
        >
          <WhatsappIcon className="size-4" />
          <span className="hidden sm:inline">Falar no WhatsApp</span>
          <span className="sm:hidden">WhatsApp</span>
        </Button>
      </nav>
    </header>
  )
}

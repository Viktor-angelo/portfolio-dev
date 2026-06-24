import { siteConfig, whatsappLink } from "@/lib/site-config"
import { WhatsappIcon } from "@/components/whatsapp-icon"

export function Footer() {
  return (
    <footer className="border-t border-border/60 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <span className="flex size-7 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground">
            VA
          </span>
          {siteConfig.name}
        </div>
        <p className="text-sm text-muted-foreground">
          {`© ${new Date().getFullYear()} ${siteConfig.name}. Feito com foco em resultados.`}
        </p>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <WhatsappIcon className="size-4" />
          WhatsApp
        </a>
      </div>
    </footer>
  )
}

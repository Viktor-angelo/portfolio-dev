import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Differentials } from "@/components/differentials"
import { FinalCta } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Differentials />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}

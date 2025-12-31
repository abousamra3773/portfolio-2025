"use client"

import { ArrowDown } from "lucide-react"

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">Amy Littlefield-Bousamra</h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">UI-Focused Front-End Developer</p>
          </div>

          <div className="space-y-4 max-w-2xl">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I build and maintain interactive, accessible web applications for enterprise travel platforms with a
              strong foundation in HTML, CSS, JavaScript, and responsive design.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              With 4+ years of experience, I specialize in translating Figma and design system specifications into
              production-ready interfaces while improving usability and consistency at scale.
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </button>
    </section>
  )
}

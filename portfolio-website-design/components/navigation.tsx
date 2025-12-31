"use client"

import { Linkedin, Mail } from "lucide-react"

export function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-lg font-semibold tracking-tight hover:text-accent transition-colors"
          >
            Portfolio
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/amybousamra/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-accent hover:text-accent hover:stroke-2 transition-all" />
            </a>
            <a href="mailto:amybousamra@live.com" aria-label="Email">
              <Mail className="h-5 w-5 text-accent hover:text-accent hover:stroke-2 transition-all" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

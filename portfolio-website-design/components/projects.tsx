import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { TravelComponentsDemo } from "./travel-components-demo"
import { LuxuryResortsDemo } from "./luxury-resorts-demo"

const projects = [
  {
    title: "Travel Platform Design System",
    description:
      "Enterprise-scale design system for travel booking platforms, featuring accessible components like star ratings, budget sliders, and filtering interfaces. Built with React and TypeScript, focusing on usability and consistency across large-scale applications.",
    tags: ["React", "TypeScript", "Accessibility", "Travel UI", "Design Systems"],
    github: "#",
    demo: "#",
    year: "2024",
    showDemo: true,
    demoComponent: "travel",
  },
  {
    title: "Luxury Resort Booking Interface",
    description:
      "Interactive travel destination showcase converted from legacy HTML to modern React/TypeScript. Features responsive card layouts, video modals with YouTube integration, smooth animations, and mobile-optimized horizontal scrolling. Demonstrates UI modernization skills and component architecture.",
    tags: ["React", "TypeScript", "Responsive Design", "Video Integration", "Travel UI"],
    github: "#",
    demo: "#",
    year: "2024",
    showDemo: true,
    demoComponent: "resorts",
  },
  {
    title: "Medical Benefits Page - Theme Adaptation",
    description:
      "Redesigned a vacation products promotional page into a comprehensive medical benefits interface, demonstrating the ability to adapt designs across different industries. Modernized from jQuery/HTML to React with TypeScript while preserving the original CSS aesthetic. Features interactive card expansions, horizontal scrolling, and responsive tab navigation.",
    tags: ["React", "TypeScript", "jQuery to React", "Theme Adaptation", "Responsive Design"],
    github: "#",
    demo: "https://abousamra3773.github.io/portfolio/medical-info.html",
    year: "2025",
    showDemo: false,
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800",
  },
  {
    title: "Travel Club Website - Example",
    description:
      "Helped customize travel template and co-brands for multiple clients, creating responsive web/mobile applications for travel memberships using HTML5, CSS3, jQuery. Fulfilled marketing team and client requests by adding features, debugging issues, and ensuring cross-browser compatibility.",
    tags: ["HTML5", "CSS3", "jQuery", "Responsive Design", "Client Customization"],
    github: "#",
    demo: "https://www.theclub365.com/v6",
    year: "2024",
    showDemo: false,
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-[200px_1fr] gap-12">
          <div>
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground font-medium sticky top-24">
              Featured Projects
            </h2>
          </div>

          <div className="grid gap-12">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm">
                {project.showDemo ? (
                  <div className="p-6">
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-semibold text-balance">{project.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{project.year}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <a
                            href={project.github}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                            aria-label={`View ${project.title} on GitHub`}
                          >
                            <Github className="h-5 w-5" />
                          </a>
                          <a
                            href={project.demo}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                            aria-label={`View ${project.title} demo`}
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 p-6 bg-muted/30 rounded-lg border border-border/50">
                      <h4 className="text-sm font-semibold mb-4 text-foreground">
                        {project.demoComponent === "resorts" ? "Interactive Resort Showcase" : "Interactive Components"}
                      </h4>
                      {project.demoComponent === "travel" && <TravelComponentsDemo />}
                      {project.demoComponent === "resorts" && <LuxuryResortsDemo />}
                    </div>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-[400px_1fr] gap-6">
                    <div className="relative aspect-[3/2] md:aspect-auto bg-muted">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    <div className="p-6 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-2xl font-semibold text-balance">{project.title}</h3>
                            <p className="text-sm text-muted-foreground mt-1">{project.year}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-foreground transition-colors"
                              aria-label={`View ${project.title} on GitHub`}
                            >
                              <Github className="h-5 w-5" />
                            </a>
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-foreground transition-colors"
                              aria-label={`View ${project.title} demo`}
                            >
                              <ExternalLink className="h-5 w-5" />
                            </a>
                          </div>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-6">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

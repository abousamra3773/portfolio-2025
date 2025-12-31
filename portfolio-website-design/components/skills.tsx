import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Core Expertise (Daily Use - 4+ years)",
    skills: [
      { name: "JavaScript (ES6+)", level: "expert" },
      { name: "jQuery", level: "expert" },
      { name: "HTML5", level: "expert" },
      { name: "CSS3 (Flexbox/Grid)", level: "expert" },
      { name: "Bash", level: "familiar" },
      { name: "Git", level: "expert" },
    ],
  },
  {
    title: "Front-End Frameworks",
    skills: [
      { name: "React", level: "developing" },
      { name: "TypeScript", level: "developing" },
      { name: "Next.js", level: "developing" },
      { name: "Vue.js", level: "developing" },
      { name: "Node.js", level: "developing" },
      { name: "Bootstrap", level: "familiar" },
    ],
  },
  {
    title: "Styling & CSS",
    skills: [
      { name: "Tailwind CSS", level: "developing" },
      { name: "Sass/SCSS", level: "familiar" },
      { name: "Responsive Design", level: "expert" },
    ],
  },
  {
    title: "Design & Creative Tools",
    skills: [
      { name: "Figma", level: "expert" },
      { name: "Adobe Photoshop", level: "expert" },
      { name: "Adobe Illustrator", level: "expert" },
      { name: "Adobe Creative Suite", level: "expert" },
      { name: "Video Editing", level: "familiar" },
    ],
  },
  {
    title: "CMS & E-Commerce",
    skills: [
      { name: "WordPress", level: "expert" },
      { name: "Shopify", level: "developing" },
      { name: "PHP", level: "developing" },
      { name: "Webflow", level: "developing" },
      { name: "Framer", level: "developing" },
    ],
  },
  {
    title: "Databases & Backend",
    skills: [
      { name: "SQL", level: "familiar" },
      { name: "MongoDB", level: "developing" },
      { name: "Supabase", level: "developing" },
      { name: "MySQL", level: "familiar" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Bash", level: "familiar" },
      { name: "Vercel", level: "familiar" },
      { name: "Docker", level: "familiar" },
      { name: "AWS", level: "familiar" },
      { name: "Git/GitHub", level: "expert" },
    ],
  },
  {
    title: "Specialties",
    skills: [
      { name: "UI Debugging", level: "expert" },
      { name: "Design Systems", level: "expert" },
      { name: "Figma to Code", level: "expert" },
      { name: "Accessibility", level: "expert" },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-[200px_1fr] gap-12">
          <div>
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground font-medium sticky top-24">
              Skills & Technologies
            </h2>
          </div>

          <div className="grid gap-8">
            <div className="flex flex-wrap gap-4 text-xs text-muted-foreground pb-2 border-b border-border/50">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span>Daily Use / Expert</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent/60"></div>
                <span>Actively Developing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-muted-foreground/30"></div>
                <span>Familiar / Learning</span>
              </div>
            </div>

            {skillCategories.map((category) => (
              <div key={category.title} className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const isExpert = skill.level === "expert"
                    const isDeveloping = skill.level === "developing"
                    const isFamiliar = skill.level === "familiar"

                    return (
                      <Badge
                        key={skill.name}
                        variant="outline"
                        className={`text-sm py-1.5 px-3 transition-colors relative ${
                          isExpert
                            ? "border-accent/50 text-foreground bg-accent/5 hover:bg-accent/10"
                            : isDeveloping
                              ? "border-accent/30 text-foreground/90 hover:bg-accent/5"
                              : "border-border/50 text-muted-foreground hover:bg-muted/20"
                        }`}
                      >
                        <span
                          className={`inline-block w-1.5 h-1.5 rounded-full mr-2 ${
                            isExpert ? "bg-accent" : isDeveloping ? "bg-accent/60" : "bg-muted-foreground/30"
                          }`}
                        />
                        {skill.name}
                      </Badge>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-[200px_1fr] gap-12">
          <div>
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground font-medium">About</h2>
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-foreground">
              I'm a UI-focused Front-End Developer with 4+ years of experience building and maintaining interactive,
              accessible web applications for enterprise travel platforms. My work centers on creating pixel-perfect,
              user-friendly interfaces that meet the highest standards of usability and accessibility.
            </p>

            <p className="text-base leading-relaxed text-muted-foreground">
              I have a strong foundation in HTML, CSS, JavaScript, responsive design, and UI debugging, with a proven
              track record of rapidly implementing client requests, resolving production issues, and improving usability
              and consistency at scale. I'm experienced in translating Figma and design system specifications into
              production-ready interfaces that align with brand guidelines and technical requirements.
            </p>

            <p className="text-base leading-relaxed text-muted-foreground">
              Currently, I'm deepening my expertise in{" "}
              <span className="text-accent font-medium">
                React, TypeScript, and modern component-driven development
              </span>
              , staying at the forefront of front-end best practices. I thrive in collaborative environments where I can
              bridge the gap between design and engineering to deliver exceptional user experiences.
            </p>

            <p className="text-base leading-relaxed text-muted-foreground">
              When I'm not coding, I enjoy staying current with emerging web technologies, refining my design eye, and
              contributing to projects that make the web more accessible and inclusive for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

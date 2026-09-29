import { Lock } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { aiProjects, projects, type Project } from "@/content/site";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-bg-card p-6 sm:p-7">
      <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.16em] text-gold">
        <span>{project.kind === "ui" ? "UI development" : "AI contribution"}</span>
        <span className="text-border-strong">·</span>
        <span className="text-muted">{project.company}</span>
      </div>
      <h3 className="mt-4 font-serif text-2xl tracking-tight text-text">
        {project.title}
      </h3>
      <p className="mt-1 text-sm text-muted">
        {project.role} · {project.period}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-muted">{project.summary}</p>
      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-text/85">
        {project.details.map((detail) => (
          <li key={detail} className="pl-4 before:absolute before:-ml-4 before:text-gold before:content-['–'] relative">
            {detail}
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-border px-3 py-1 text-xs text-muted"
          >
            {tech}
          </span>
        ))}
      </div>
      <p className="mt-auto flex items-start gap-2 pt-5 text-xs leading-relaxed text-muted">
        <Lock size={14} className="mt-0.5 shrink-0 text-gold" aria-hidden />
        {project.availability}
      </p>
    </article>
  );
}

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8">
      <SectionHeading
        eyebrow="Selected work"
        title="Professional UI I have shipped."
        description="These cards describe confidential enterprise work from my roles. There are no public live URLs or screenshots. I have not listed personal projects I did not build."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <div className="mt-14">
        <h3 className="font-serif text-2xl tracking-tight text-text">
          Additional AI work
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          Frontend remains the focus. The work below is a secondary contribution on the same Death Claims product — not a separate public project.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {aiProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

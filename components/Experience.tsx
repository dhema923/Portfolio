import { SectionHeading } from "@/components/SectionHeading";
import { experience } from "@/content/site";

export function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8"
    >
      <SectionHeading
        eyebrow="Experience"
        title="A UI-first career path."
        description="Dates, titles, and outcomes below come from my resume. Innova Solutions is the core of my UI background. At Aieton Labs, frontend work is listed first; AI work is listed separately."
      />
      <ol className="relative space-y-12 border-l border-border pl-6 sm:pl-8">
        {experience.map((job) => (
          <li key={job.company} className="relative">
            <span
              className="absolute -left-[1.60rem] top-1.5 h-3 w-3 rounded-full border border-gold bg-bg sm:-left-[2.10rem]"
              aria-hidden
            />
            <p className="text-xs uppercase tracking-[0.18em] text-gold">
              {job.period}
            </p>
            <h3 className="mt-2 font-serif text-2xl text-text">{job.company}</h3>
            <p className="mt-1 text-sm text-gold-soft">{job.title}</p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
              {job.summary}
            </p>
            <div className="mt-6 grid gap-4">
              {job.roles.map((role) => (
                <article
                  key={`${role.title}-${role.period}`}
                  className="rounded-2xl border border-border bg-bg-card p-5"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-base font-medium text-text">{role.title}</h4>
                    <span className="rounded-full border border-border px-2.5 py-0.5 text-[11px] uppercase tracking-wider text-muted">
                      {role.emphasis === "ui"
                        ? "UI"
                        : role.emphasis === "ai"
                          ? "AI"
                          : "Foundation"}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted">{role.period}</p>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-text/85">
                    {role.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="relative pl-4 before:absolute before:-ml-4 before:text-gold before:content-['–']"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  {role.stack ? (
                    <p className="mt-3 text-xs text-muted">{role.stack.join(" · ")}</p>
                  ) : null}
                </article>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

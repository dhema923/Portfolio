import { SectionHeading } from "@/components/SectionHeading";
import { about } from "@/content/site";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <SectionHeading eyebrow="About" title="Interfaces first. Depth where it helps." />
          <div className="space-y-4 text-base leading-relaxed text-muted">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <aside className="h-fit rounded-2xl border border-border bg-bg-card p-6">
          <p className="text-xs uppercase tracking-[0.18em] text-gold">Education</p>
          <h3 className="mt-3 font-serif text-2xl text-text">
            {about.education.degree}
          </h3>
          <p className="mt-2 text-sm text-muted">{about.education.school}</p>
          <p className="mt-1 text-sm text-muted">{about.education.period}</p>
        </aside>
      </div>
    </section>
  );
}

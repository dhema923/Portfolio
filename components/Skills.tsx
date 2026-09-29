import { SectionHeading } from "@/components/SectionHeading";
import { skillGroups } from "@/content/site";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8">
      <SectionHeading
        eyebrow="Skills"
        title="The tools I use to ship UI."
        description="Grouped for recruiters. Frontend and styling come first. AI and backend skills are listed last because they are additional, not the main story."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title} className="rounded-2xl border border-border bg-bg-card p-6">
            <h3 className="font-serif text-xl text-text">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border px-3 py-1.5 text-sm text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

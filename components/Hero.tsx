import { ArrowDownRight, Download, Mail } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { highlights, site } from "@/content/site";

export function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid max-w-6xl scroll-mt-24 gap-12 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[1.4fr_0.8fr] lg:pt-24"
    >
      <div>
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-gold">
          {site.role} · {site.location}
        </p>
        <h1 className="font-serif text-[2.35rem] leading-[1.15] tracking-tight text-text sm:text-5xl lg:text-[3.35rem]">
          {site.headline}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {site.description}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="#work">
            View My Work
            <ArrowDownRight size={16} aria-hidden />
          </ButtonLink>
          <ButtonLink
            href={site.resumePath}
            variant="secondary"
            download
          >
            Download Resume
            <Download size={16} aria-hidden />
          </ButtonLink>
          <ButtonLink href="#contact" variant="ghost">
            Contact Me
            <Mail size={16} aria-hidden />
          </ButtonLink>
        </div>
      </div>
      <aside className="grid grid-cols-2 gap-3 self-end sm:gap-4">
        {highlights.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-border bg-bg-card p-5"
          >
            <p className="font-serif text-2xl text-gold-soft">{item.value}</p>
            <p className="mt-2 text-sm leading-snug text-muted">{item.label}</p>
          </div>
        ))}
      </aside>
    </section>
  );
}

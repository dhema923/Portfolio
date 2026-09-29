import { ArrowUpRight, Mail, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/content/site";

type ContactLink = {
  href: string;
  label: string;
  icon: LucideIcon;
  caption: string;
  external?: boolean;
};

export function Contact() {
  const links: ContactLink[] = [
    {
      href: `mailto:${site.email}`,
      label: site.email,
      icon: Mail,
      caption: "Email",
    },
    {
      href: site.phoneHref,
      label: site.phone,
      icon: Phone,
      caption: "Phone",
    },
    {
      href: site.linkedin,
      label: "linkedin.com/in/hema-duvvuru",
      icon: ArrowUpRight,
      caption: "LinkedIn",
      external: true,
    },
  ];

  if (site.github) {
    links.push({
      href: site.github,
      label: site.github.replace(/^https?:\/\//, ""),
      icon: ArrowUpRight,
      caption: "GitHub",
      external: true,
    });
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8"
    >
      <SectionHeading
        eyebrow="Contact"
        title="Let’s talk about frontend roles in Bengaluru."
        description={site.lookingFor}
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.caption}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="rounded-2xl border border-border bg-bg-card p-6 transition-colors hover:border-gold/40"
            >
              <Icon size={18} className="text-gold" aria-hidden />
              <p className="mt-4 text-xs uppercase tracking-[0.16em] text-muted">
                {link.caption}
              </p>
              <p className="mt-2 text-sm text-text">{link.label}</p>
            </a>
          );
        })}
      </div>
    </section>
  );
}

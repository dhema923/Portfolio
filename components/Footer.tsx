import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          {site.name} · {site.role} · {site.location}
        </p>
        <p>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

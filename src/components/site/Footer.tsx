import { Link } from "@tanstack/react-router";
import { Logo } from "./Header";

const columns = [
  {
    title: "Explore",
    links: [
      { label: "All Events", to: "/events" as const },
      { label: "Categories", to: "/categories" as const },
      { label: "Become a Host", to: "/become-a-host" as const },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" as const },
      { label: "Contact", to: "/contact" as const },
      { label: "Home", to: "/" as const },
    ],
  },
];

const socials = ["Instagram", "LinkedIn", "TikTok"];

export function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 sm:pb-14 sm:pt-20 lg:px-8">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            A community of women across the Netherlands gathering over tea, work, books and
            everything worth celebrating.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <div className="mb-3 font-serif text-sm font-semibold text-foreground">{col.title}</div>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="transition-colors hover:text-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <div className="mb-3 font-serif text-sm font-semibold text-foreground">Follow</div>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            {socials.map((s) => (
              <li key={s}>
                <a href="#" className="transition-colors hover:text-foreground">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Events of Women. All rights reserved.</span>
        <span>Amsterdam · Rotterdam · Utrecht · The Hague</span>
      </div>
    </footer>
  );
}

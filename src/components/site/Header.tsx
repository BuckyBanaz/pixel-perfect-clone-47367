import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { navLinks } from "./data";
import { IconFloralMark } from "./icons";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="flex min-w-0 items-center gap-2.5">
      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-cream-deep">
        <IconFloralMark className="size-6 text-rose-accent" />
      </span>
      <span className="min-w-0 leading-tight">
        <span className="block truncate font-serif text-base font-semibold text-foreground sm:text-lg">
          Events of Women
        </span>
        {!compact && (
          <span className="block truncate text-[9px] uppercase tracking-[0.18em] text-muted-foreground sm:text-[10px] sm:tracking-[0.2em]">
            Connect. Celebrate. Empower.
          </span>
        )}
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/85 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3.5 sm:px-6 sm:py-4 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-6 xl:flex xl:col-start-2 xl:row-start-1">
          {navLinks.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{
                className:
                  "text-sm font-semibold text-foreground underline decoration-rose-accent decoration-2 underline-offset-8",
              }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/become-a-host"
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90 sm:inline-flex"
          >
            Get Started
            <svg viewBox="0 0 16 16" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4.5 11.5 11.5 4.5M6 4.5h5.5V10" />
            </svg>
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 shrink-0 place-items-center rounded-full border border-border text-foreground xl:hidden"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 14h16M4 20h10" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background xl:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6">
            {navLinks.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                className="border-b border-border/40 py-3 text-sm text-muted-foreground last:border-0"
                activeProps={{ className: "py-3 text-sm font-semibold text-foreground" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/become-a-host"
              onClick={() => setOpen(false)}
              className="my-3 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground sm:hidden"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

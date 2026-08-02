import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { IconWheelMark } from "./icons";
import { useLanguage } from "@/i18n/LanguageProvider";
import { navItems } from "./nav";

export function Logo({ compact = false }: { compact?: boolean }) {
  const { t } = useLanguage();
  return (
    <Link to="/" className="flex min-w-0 items-center gap-2.5">
      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
        <IconWheelMark className="size-6" />
      </span>
      <span className="min-w-0 leading-tight">
        <span className="block truncate font-serif text-base font-semibold text-foreground sm:text-lg">
          {t.org.short}
        </span>
        {!compact && (
          <span className="block truncate text-[9px] uppercase tracking-[0.16em] text-muted-foreground sm:text-[10px]">
            {t.org.tagline}
          </span>
        )}
      </span>
    </Link>
  );
}

function LangSwitch() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="inline-flex overflow-hidden rounded-full border border-border text-xs font-semibold">
      {(["nl", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`px-2.5 py-1.5 uppercase transition ${lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Logo />

        <nav aria-label="Hoofdmenu" className="hidden items-center gap-4 xl:flex">
          {navItems.filter((n) => n.primary).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-sm font-semibold text-foreground underline decoration-flame decoration-2 underline-offset-8" }}
            >
              {t.nav[n.key]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LangSwitch />
          <Link
            to="/doneren"
            className="hidden rounded-full bg-flame px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 sm:inline-flex"
          >
            {t.common.donate}
          </Link>
          <button
            type="button"
            aria-label={open ? t.common.close : t.common.menu}
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
        <div className="max-h-[70vh] overflow-y-auto border-t border-border/60 bg-background xl:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6">
            {navItems.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                className="border-b border-border/40 py-3 text-sm text-muted-foreground last:border-0"
                activeProps={{ className: "border-b border-border/40 py-3 text-sm font-semibold text-foreground" }}
              >
                {t.nav[n.key]}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

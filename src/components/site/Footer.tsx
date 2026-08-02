import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Logo } from "./Header";
import { navItems } from "./nav";
import { useLanguage } from "@/i18n/LanguageProvider";

const groups = ["organisatie", "werk", "meedoen"] as const;

export function Footer() {
  const { t } = useLanguage();
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 sm:pb-14 sm:pt-20 lg:px-8">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-10">
        <div className="sm:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">{t.footer.about}</p>
          <form
            className="mt-5 max-w-sm"
            onSubmit={(e) => {
              e.preventDefault();
              setSubscribed(true);
            }}
          >
            <div className="text-xs font-semibold text-foreground">{t.footer.newsletterTitle}</div>
            <p className="mt-1 text-xs text-muted-foreground">{t.footer.newsletterText}</p>
            <div className="mt-3 flex gap-2">
              <label htmlFor="nl-email" className="sr-only">{t.footer.newsletterPlaceholder}</label>
              <input
                id="nl-email"
                type="email"
                required
                placeholder={t.footer.newsletterPlaceholder}
                className="min-w-0 flex-1 rounded-full border border-border bg-card px-4 py-2.5 text-sm outline-none focus:border-flame"
              />
              <button className="shrink-0 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">
                {t.footer.newsletterButton}
              </button>
            </div>
            {subscribed && <p className="mt-2 text-xs text-flame">{t.footer.newsletterSuccess}</p>}
          </form>
        </div>

        {groups.map((g) => (
          <div key={g}>
            <div className="mb-3 font-serif text-sm font-semibold text-foreground">{t.navGroups[g]}</div>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {navItems.filter((n) => n.group === g).map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="transition-colors hover:text-foreground">{t.nav[n.key]}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} {t.org.name}. {t.footer.rights}</span>
        <span>{t.footer.privacy} · {t.footer.accessibility} · AVG / GDPR · WCAG 2.1</span>
      </div>
    </footer>
  );
}

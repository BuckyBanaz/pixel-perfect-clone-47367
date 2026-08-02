import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { Header } from "./Header";
import { Footer } from "./Footer";
import {
  IconHandsCircle, IconMegaphone, IconGlobeEurope, IconHeartHand, IconSpark, IconShield,
  IconCalendar, IconMail, IconHandshake, IconFilm, IconGraduation, IconLeaf, IconOpenBook, IconNews, IconPin,
} from "./icons";

export const iconMap: Record<string, (p: { className?: string }) => ReactNode> = {
  hands: IconHandsCircle,
  megaphone: IconMegaphone,
  globe: IconGlobeEurope,
  heart: IconHeartHand,
  spark: IconSpark,
  shield: IconShield,
  calendar: IconCalendar,
  mail: IconMail,
  handshake: IconHandshake,
  film: IconFilm,
  graduation: IconGraduation,
  leaf: IconLeaf,
  book: IconOpenBook,
  news: IconNews,
  pin: IconPin,
};

export function Icon({ name, className = "size-6" }: { name: string; className?: string }) {
  const C = iconMap[name] ?? IconSpark;
  return <C className={className} />;
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground">
        Skip
      </a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-flame sm:text-[11px]">
      {children}
    </div>
  );
}

export function PageHero({
  eyebrow, title, accent, children,
}: { eyebrow: string; title: string; accent?: string; children?: ReactNode }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 sm:pt-12 lg:px-8">
      <Reveal className="relative overflow-hidden rounded-3xl bg-sand-deep px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <div className="relative z-10">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-3 max-w-3xl font-serif text-3xl font-semibold leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
            {title} {accent && <span className="text-flame">{accent}</span>}
          </h1>
          {children && (
            <div className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">{children}</div>
          )}
        </div>
        <svg viewBox="0 0 200 200" aria-hidden className="pointer-events-none absolute -right-10 -top-10 size-56 text-flame/15 sm:size-72">
          <circle cx="100" cy="100" r="88" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="100" cy="100" r="22" fill="none" stroke="currentColor" strokeWidth="2" />
          {Array.from({ length: 16 }).map((_, i) => (
            <line key={i} x1="100" y1="100" x2={100 + 88 * Math.cos((i * Math.PI) / 8)} y2={100 + 88 * Math.sin((i * Math.PI) / 8)} stroke="currentColor" strokeWidth="2" />
          ))}
        </svg>
      </Reveal>
    </section>
  );
}

export function Section({
  eyebrow, title, intro, children, tight = false,
}: { eyebrow?: string; title?: string; intro?: string; children?: ReactNode; tight?: boolean }) {
  return (
    <section className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${tight ? "pt-10 sm:pt-12" : "pt-14 sm:pt-20"}`}>
      {(eyebrow || title) && (
        <Reveal className="max-w-2xl">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          {title && (
            <h2 className="mt-2 font-serif text-2xl font-semibold leading-tight text-foreground sm:text-3xl lg:text-4xl">
              {title}
            </h2>
          )}
          {intro && <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{intro}</p>}
        </Reveal>
      )}
      {children}
    </section>
  );
}

export function Grid({ children, cols = 3 }: { children: ReactNode; cols?: 2 | 3 | 4 }) {
  const map = { 2: "sm:grid-cols-2", 3: "sm:grid-cols-2 lg:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" };
  return <div className={`mt-8 grid grid-cols-1 gap-5 ${map[cols]}`}>{children}</div>;
}

export function FeatureCard({
  icon, title, text, delay = 0,
}: { icon?: string; title: string; text: string; delay?: number }) {
  return (
    <Reveal delay={delay} from="scale" className="h-full">
      <div className="h-full rounded-2xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-28px_rgba(20,40,80,0.5)]">
        {icon && (
          <span className="grid size-11 place-items-center rounded-full bg-flame-soft text-flame">
            <Icon name={icon} className="size-5" />
          </span>
        )}
        <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
      </div>
    </Reveal>
  );
}

export type CtaTo =
  | "/" | "/over-ons" | "/missie-visie" | "/vrouwen-jongeren" | "/projecten"
  | "/internationale-samenwerking" | "/nieuws" | "/evenementen" | "/kennisbank"
  | "/partners" | "/vrijwilligers" | "/doneren" | "/contact";

export function CtaBand({ title, text, to, label }: { title: string; text: string; to: CtaTo; label: string }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
      <Reveal from="scale" className="rounded-3xl bg-primary px-6 py-12 text-center sm:px-12 sm:py-16">
        <h2 className="mx-auto max-w-2xl font-serif text-2xl font-semibold leading-tight text-primary-foreground sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-primary-foreground/75">{text}</p>
        <Link to={to} className="mt-7 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition hover:bg-sand">
          {label}
          <svg viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </Link>
      </Reveal>
    </section>
  );
}

export function Field({
  id, label, type = "text", required = true,
}: { id: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="text-xs font-semibold text-foreground">{label}</label>
      <input id={id} name={id} type={type} required={required}
        className="mt-1.5 w-full rounded-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-flame" />
    </div>
  );
}

export function SelectField({ id, label, options }: { id: string; label: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={id} className="text-xs font-semibold text-foreground">{label}</label>
      <select id={id} name={id}
        className="mt-1.5 w-full rounded-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-flame">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}

export function TextField({ id, label, rows = 5 }: { id: string; label: string; rows?: number }) {
  return (
    <div className="sm:col-span-2">
      <label htmlFor={id} className="text-xs font-semibold text-foreground">{label}</label>
      <textarea id={id} name={id} rows={rows} required
        className="mt-1.5 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-flame" />
    </div>
  );
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((it) => (
        <li key={it} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
          <span className="mt-1.5 size-2 shrink-0 rounded-full bg-flame" />
          {it}
        </li>
      ))}
    </ul>
  );
}

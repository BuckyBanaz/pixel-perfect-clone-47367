import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import type { EventItem } from "./data";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground sm:text-[11px] sm:tracking-[0.25em]">
      {children}
    </div>
  );
}

export function ArrowIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export function PageHero({
  eyebrow,
  title,
  accent,
  children,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  children?: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 sm:pt-14 lg:px-8">
      <Reveal className="rounded-3xl bg-cream-deep px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
          {title} {accent && <span className="italic text-rose-accent">{accent}</span>}
        </h1>
        {children && (
          <div className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {children}
          </div>
        )}
      </Reveal>
    </section>
  );
}

export function EventCard({ e }: { e: EventItem }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(60,40,30,0.45)]">
      <div className="relative">
        <img
          src={e.img}
          alt={e.title}
          loading="lazy"
          width={800}
          height={700}
          className="h-44 w-full object-cover transition duration-500 group-hover:scale-[1.04] sm:h-40 lg:h-44"
        />
        <div className="absolute left-3 top-3 rounded-lg bg-primary px-2.5 py-1.5 text-center leading-tight text-primary-foreground">
          <div className="font-serif text-base font-semibold">{e.date}</div>
          <div className="text-[9px] uppercase tracking-widest">{e.month}</div>
        </div>
        <span className="absolute right-3 top-3 grid size-8 place-items-center rounded-full bg-background/90 text-foreground">
          <svg viewBox="0 0 16 16" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">
            <path d="M4 2.5h8v11l-4-3-4 3v-11Z" />
          </svg>
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="text-[11px] font-medium text-rose-accent">{e.tag}</div>
        <h3 className="mt-1 font-serif text-lg font-semibold leading-snug text-foreground">{e.title}</h3>
        <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
          <svg viewBox="0 0 16 16" className="size-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.3">
            <path d="M8 14s5-4.2 5-8A5 5 0 0 0 3 6c0 3.8 5 8 5 8Z" />
            <circle cx="8" cy="6" r="1.8" />
          </svg>
          {e.city}
        </div>
        <div className="mt-2 flex items-center justify-between gap-2 text-xs text-muted-foreground">
          <span className="truncate">{e.time}</span>
          <span className="shrink-0 font-medium text-foreground">{e.price}</span>
        </div>
      </div>
    </article>
  );
}

export function CtaBand({
  title,
  text,
  to,
  label,
}: {
  title: string;
  text: string;
  to: "/events" | "/contact" | "/become-a-host" | "/categories";
  label: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
      <Reveal from="scale" className="rounded-3xl bg-primary px-6 py-12 text-center sm:px-12 sm:py-16">
        <h2 className="mx-auto max-w-2xl font-serif text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-primary-foreground/70">{text}</p>
        <Link
          to={to}
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition hover:bg-cream"
        >
          {label} <ArrowIcon />
        </Link>
      </Reveal>
    </section>
  );
}

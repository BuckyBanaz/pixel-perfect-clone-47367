import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Layout, PageHero, Section, Grid, FeatureCard, CtaBand, Bullets, Eyebrow, Icon, Field, TextField, SelectField } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { useT } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/evenementen")({
  head: () => ({
    meta: [
      { title: "Evenementen — Stichting Zurali Chej" },
      { name: "description", content: "Vrouwenkringen, filmvertoningen, dialoogbijeenkomsten, trainingen en herdenkingen. Gratis en vrij toegankelijk." },
      { property: "og:title", content: "Evenementen — Stichting Zurali Chej" },
      { property: "og:description", content: "Vrouwenkringen, filmvertoningen, dialoogbijeenkomsten, trainingen en herdenkingen. Gratis en vrij toegankelijk." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pixel-perfect-clone-47367.lovable.app/evenementen" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://pixel-perfect-clone-47367.lovable.app/evenementen" }],
  }),
  component: EvenementenPage,
});

function EvenementenPage() {
  const t = useT();
  const e = t.evenementen;
  const cities = Array.from(new Set(e.items.map((i) => i.city)));
  const [type, setType] = useState<string | null>(null);
  const [city, setCity] = useState("");
  const items = useMemo(
    () => e.items.filter((i) => (!type || i.type === type) && (!city || i.city === city)),
    [e.items, type, city],
  );
  return (
    <Layout>
      <PageHero eyebrow={e.eyebrow} title={e.title} accent={e.accent}>{e.intro}</PageHero>
      <Section tight>
        <Reveal className="flex flex-col gap-4">
          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
            {[null, ...e.types].map((ty) => (
              <button key={ty ?? "all"} onClick={() => setType(ty)}
                className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold transition sm:text-sm ${type === ty ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground hover:text-foreground"}`}>
                {ty ?? e.filterAll}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <label htmlFor="city" className="text-xs text-muted-foreground">{e.cityLabel}</label>
            <select id="city" value={city} onChange={(ev) => setCity(ev.target.value)}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm outline-none focus:border-flame">
              <option value="">{e.allCities}</option>
              {cities.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            <span className="text-xs text-muted-foreground">{items.length} {e.countLabel}</span>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title + it.day} delay={(i % 3) * 80} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                <div className="flex items-start gap-4">
                  <div className="grid size-14 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                    <span className="font-serif text-lg font-semibold leading-none">{it.day}</span>
                    <span className="text-[9px] uppercase tracking-widest">{it.month}</span>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-semibold text-flame">{it.type}</div>
                    <h2 className="font-serif text-lg font-semibold leading-snug text-foreground">{it.title}</h2>
                  </div>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{it.text}</p>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-xs text-muted-foreground">
                  <span>{it.city} · {it.time}</span>
                  <span className="font-semibold text-flame">{e.freeLabel}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        {items.length === 0 && <p className="mt-8 rounded-2xl border border-dashed border-border p-10 text-center text-sm text-muted-foreground">{e.empty}</p>}
      </Section>
      <Section title={e.noteTitle}><Reveal><Bullets items={e.notes} /></Reveal></Section>
      <CtaBand title={t.home.ctaTitle} text={t.home.ctaText} to="/contact" label={t.common.contactUs} />
    </Layout>
  );
}

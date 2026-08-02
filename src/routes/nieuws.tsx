import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Layout, PageHero, Section, Grid, FeatureCard, CtaBand, Bullets, Eyebrow, Icon, Field, TextField, SelectField } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { useT } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/nieuws")({
  head: () => ({
    meta: [
      { title: "Nieuws — Stichting Zurali Chej" },
      { name: "description", content: "Updates over projecten, standpunten, samenwerkingen en de Roma- en Sinti-gemeenschap in Nederland en Europa." },
      { property: "og:title", content: "Nieuws — Stichting Zurali Chej" },
      { property: "og:description", content: "Updates over projecten, standpunten, samenwerkingen en de Roma- en Sinti-gemeenschap in Nederland en Europa." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pixel-perfect-clone-47367.lovable.app/nieuws" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://pixel-perfect-clone-47367.lovable.app/nieuws" }],
  }),
  component: NieuwsPage,
});

function NieuwsPage() {
  const t = useT();
  const n = t.nieuws;
  const cats = Array.from(new Set(n.items.map((i) => i.category)));
  const [cat, setCat] = useState<string | null>(null);
  const items = useMemo(() => n.items.filter((i) => !cat || i.category === cat), [n.items, cat]);
  return (
    <Layout>
      <PageHero eyebrow={n.eyebrow} title={n.title} accent={n.accent}>{n.intro}</PageHero>
      <Section tight>
        <Reveal className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
          {[null, ...cats].map((c) => (
            <button key={c ?? "all"} onClick={() => setCat(c)}
              className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold transition sm:text-sm ${cat === c ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground hover:text-foreground"}`}>
              {c ?? n.filterAll}
            </button>
          ))}
        </Reveal>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 80} className="h-full">
              <article className="h-full rounded-2xl border border-border bg-card p-6">
                <div className="text-xs text-muted-foreground">{it.date}</div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-widest text-flame">{it.category}</div>
                <h2 className="mt-2 font-serif text-lg font-semibold leading-snug text-foreground">{it.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.excerpt}</p>
              </article>
            </Reveal>
          ))}
        </div>
        {items.length === 0 && <p className="mt-8 text-center text-sm text-muted-foreground">{n.empty}</p>}
      </Section>
      <CtaBand title={n.newsletterTitle} text={n.newsletterText} to="/contact" label={t.common.contactUs} />
    </Layout>
  );
}

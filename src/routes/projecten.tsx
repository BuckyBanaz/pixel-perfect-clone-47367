import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Layout, PageHero, Section, Grid, FeatureCard, CtaBand, Bullets, Eyebrow, Icon, Field, TextField, SelectField } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { useT } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/projecten")({
  head: () => ({
    meta: [
      { title: "Projecten — Stichting Zurali Chej" },
      { name: "description", content: "Lopende en afgeronde projecten rond empowerment, educatie, bewustwording, belangenbehartiging en internationale samenwerking." },
      { property: "og:title", content: "Projecten — Stichting Zurali Chej" },
      { property: "og:description", content: "Lopende en afgeronde projecten rond empowerment, educatie, bewustwording, belangenbehartiging en internationale samenwerking." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pixel-perfect-clone-47367.lovable.app/projecten" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://pixel-perfect-clone-47367.lovable.app/projecten" }],
  }),
  component: ProjectenPage,
});

function ProjectenPage() {
  const t = useT();
  const p = t.projecten;
  const [theme, setTheme] = useState<string | null>(null);
  const items = useMemo(() => p.items.filter((i) => !theme || i.theme === theme), [p.items, theme]);
  return (
    <Layout>
      <PageHero eyebrow={p.eyebrow} title={p.title} accent={p.accent}>{p.intro}</PageHero>
      <Section tight>
        <Reveal className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
          {[null, ...p.themes].map((th) => (
            <button key={th ?? "all"} onClick={() => setTheme(th)}
              className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold transition sm:text-sm ${theme === th ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground hover:text-foreground"}`}>
              {th ?? p.filterAll}
            </button>
          ))}
        </Reveal>
        <p className="mt-3 text-xs text-muted-foreground">{items.length} {p.countLabel}</p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 2) * 80} className="h-full">
              <article className="h-full rounded-2xl border border-border bg-card p-6">
                <div className="flex flex-wrap items-center gap-2 text-[11px]">
                  <span className="rounded-full bg-flame-soft px-2.5 py-1 font-semibold text-flame">{it.theme}</span>
                  <span className="rounded-full border border-border px-2.5 py-1 text-muted-foreground">{it.status}</span>
                </div>
                <h2 className="mt-3 font-serif text-xl font-semibold leading-snug text-foreground">{it.title}</h2>
                <div className="mt-1 text-xs text-muted-foreground">{it.place} · {it.year}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.summary}</p>
              </article>
            </Reveal>
          ))}
        </div>
        {items.length === 0 && <p className="mt-8 rounded-2xl border border-dashed border-border p-10 text-center text-sm text-muted-foreground">{p.empty}</p>}
      </Section>
      <CtaBand title={p.ctaTitle} text={p.ctaText} to="/contact" label={p.ctaButton} />
    </Layout>
  );
}

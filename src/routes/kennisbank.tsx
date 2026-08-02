import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Layout, PageHero, Section, Grid, FeatureCard, CtaBand, Bullets, Eyebrow, Icon, Field, TextField, SelectField } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { useT } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/kennisbank")({
  head: () => ({
    meta: [
      { title: "Kennisbank — Stichting Zurali Chej" },
      { name: "description", content: "Publicaties, lesmateriaal, onderzoek en handreikingen over Roma en Sinti voor scholen, gemeenten, journalisten en de gemeenschap." },
      { property: "og:title", content: "Kennisbank — Stichting Zurali Chej" },
      { property: "og:description", content: "Publicaties, lesmateriaal, onderzoek en handreikingen over Roma en Sinti voor scholen, gemeenten, journalisten en de gemeenschap." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pixel-perfect-clone-47367.lovable.app/kennisbank" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://pixel-perfect-clone-47367.lovable.app/kennisbank" }],
  }),
  component: KennisbankPage,
});

function KennisbankPage() {
  const t = useT();
  const k = t.kennisbank;
  const [type, setType] = useState<string | null>(null);
  const items = useMemo(() => k.items.filter((i) => !type || i.type === type), [k.items, type]);
  return (
    <Layout>
      <PageHero eyebrow={k.eyebrow} title={k.title} accent={k.accent}>{k.intro}</PageHero>
      <Section tight>
        <Reveal className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
          {[null, ...k.types].map((ty) => (
            <button key={ty ?? "all"} onClick={() => setType(ty)}
              className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold transition sm:text-sm ${type === ty ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground hover:text-foreground"}`}>
              {ty ?? k.filterAll}
            </button>
          ))}
        </Reveal>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 80} className="h-full">
              <article className="h-full rounded-2xl border border-border bg-card p-6">
                <span className="grid size-11 place-items-center rounded-full bg-flame-soft text-flame"><Icon name="book" className="size-5" /></span>
                <div className="mt-4 text-[11px] font-semibold uppercase tracking-widest text-flame">{it.type}</div>
                <h2 className="mt-1 font-serif text-lg font-semibold leading-snug text-foreground">{it.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.text}</p>
                <div className="mt-3 text-xs text-muted-foreground">{it.meta}</div>
              </article>
            </Reveal>
          ))}
        </div>
        {items.length === 0 && <p className="mt-8 text-center text-sm text-muted-foreground">{k.empty}</p>}
      </Section>
      <Section title={k.themesTitle}>
        <Grid cols={4}>
          {k.themes.map((th, i) => <FeatureCard key={th.title} title={th.title} text={th.text} delay={i * 70} />)}
        </Grid>
      </Section>
      <CtaBand title={k.requestTitle} text={k.requestText} to="/contact" label={t.common.contactUs} />
    </Layout>
  );
}

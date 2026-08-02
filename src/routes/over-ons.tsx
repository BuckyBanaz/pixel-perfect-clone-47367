import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero, Section, Grid, FeatureCard, CtaBand, Bullets, Eyebrow, Icon, Field, TextField, SelectField } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { useT } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/over-ons")({
  head: () => ({
    meta: [
      { title: "Over de organisatie — Stichting Zurali Chej" },
      { name: "description", content: "Een door Roma geleide stichting in Nederland: ons verhaal, onze kernwaarden, mijlpalen, team en governance." },
      { property: "og:title", content: "Over de organisatie — Stichting Zurali Chej" },
      { property: "og:description", content: "Een door Roma geleide stichting in Nederland: ons verhaal, onze kernwaarden, mijlpalen, team en governance." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pixel-perfect-clone-47367.lovable.app/over-ons" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://pixel-perfect-clone-47367.lovable.app/over-ons" }],
  }),
  component: OverOnsPage,
});

function OverOnsPage() {
  const t = useT();
  const o = t.over;
  return (
    <Layout>
      <PageHero eyebrow={o.eyebrow} title={o.title} accent={o.accent}>{o.intro}</PageHero>
      <Section title={o.storyTitle}>
        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {o.story.map((p, i) => (
            <Reveal key={i} delay={i * 90}><p className="text-sm leading-relaxed text-muted-foreground">{p}</p></Reveal>
          ))}
        </div>
      </Section>
      <Section title={o.valuesTitle}>
        <Grid cols={3}>
          {o.values.map((v, i) => <FeatureCard key={v.title} title={v.title} text={v.text} delay={i * 60} />)}
        </Grid>
      </Section>
      <Section title={o.timelineTitle}>
        <ol className="mt-8 space-y-4 border-l border-border pl-6">
          {o.timeline.map((m, i) => (
            <Reveal key={m.year} delay={i * 80} as="li">
              <div className="relative rounded-2xl bg-sand p-5">
                <span className="absolute -left-[31px] top-6 size-3 rounded-full bg-flame" />
                <div className="text-xs font-semibold uppercase tracking-widest text-flame">{m.year}</div>
                <h3 className="mt-1 font-serif text-lg font-semibold text-foreground">{m.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{m.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>
      <Section title={o.teamTitle}>
        <Grid cols={3}>
          {o.team.map((p, i) => (
            <Reveal key={p.name} delay={i * 80} className="h-full">
              <div className="h-full rounded-2xl border border-border bg-card p-6">
                <h3 className="font-serif text-lg font-semibold text-foreground">{p.name}</h3>
                <div className="text-xs font-semibold text-flame">{p.role}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </Grid>
      </Section>
      <Section title={o.governanceTitle}><Reveal><Bullets items={o.governance} /></Reveal></Section>
      <CtaBand title={t.home.ctaTitle} text={t.home.ctaText} to="/contact" label={t.common.contactUs} />
    </Layout>
  );
}

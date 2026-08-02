import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero, Section, Grid, FeatureCard, CtaBand, Bullets, Eyebrow, Icon, Field, TextField, SelectField } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { useT } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/missie-visie")({
  head: () => ({
    meta: [
      { title: "Missie & Visie — Stichting Zurali Chej" },
      { name: "description", content: "Onze missie, visie, doelen en werkwijze voor gelijke kansen voor Roma- en Sinti-vrouwen en jongeren in Nederland en Europa." },
      { property: "og:title", content: "Missie & Visie — Stichting Zurali Chej" },
      { property: "og:description", content: "Onze missie, visie, doelen en werkwijze voor gelijke kansen voor Roma- en Sinti-vrouwen en jongeren in Nederland en Europa." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pixel-perfect-clone-47367.lovable.app/missie-visie" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://pixel-perfect-clone-47367.lovable.app/missie-visie" }],
  }),
  component: MissieVisiePage,
});

function MissieVisiePage() {
  const t = useT();
  const m = t.missie;
  return (
    <Layout>
      <PageHero eyebrow={m.eyebrow} title={m.title} accent={m.accent}>{m.intro}</PageHero>
      <Section>
        <div className="grid gap-5 lg:grid-cols-2">
          <Reveal from="left" className="rounded-3xl bg-primary p-8 text-primary-foreground sm:p-10">
            <h2 className="font-serif text-2xl font-semibold sm:text-3xl">{m.missionTitle}</h2>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80 sm:text-base">{m.missionText}</p>
          </Reveal>
          <Reveal from="right" className="rounded-3xl bg-sand-deep p-8 sm:p-10">
            <h2 className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">{m.visionTitle}</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{m.visionText}</p>
          </Reveal>
        </div>
      </Section>
      <Section title={m.goalsTitle}><Reveal><Bullets items={m.goals} /></Reveal></Section>
      <Section title={m.approachTitle}>
        <Grid cols={4}>
          {m.approach.map((s, i) => (
            <Reveal key={s.step} delay={i * 80} className="h-full">
              <div className="h-full rounded-2xl border border-border bg-card p-6">
                <div className="font-serif text-3xl font-semibold text-flame/40">{s.step}</div>
                <h3 className="mt-2 font-serif text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </Grid>
      </Section>
      <Section title={m.principlesTitle}><Reveal><Bullets items={m.principles} /></Reveal></Section>
      <CtaBand title={t.projecten.ctaTitle} text={t.projecten.ctaText} to="/contact" label={t.projecten.ctaButton} />
    </Layout>
  );
}

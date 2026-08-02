import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout, PageHero, Section, Grid, FeatureCard, CtaBand, Bullets, Eyebrow, Icon, Field, TextField, SelectField } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { useT } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/vrijwilligers")({
  head: () => ({
    meta: [
      { title: "Vrijwilligers — Stichting Zurali Chej" },
      { name: "description", content: "Word vrijwilliger bij Stichting Zurali Chej: begeleiding, huiswerkhulp, tolken, evenementen, communicatie en fondsenwerving." },
      { property: "og:title", content: "Vrijwilligers — Stichting Zurali Chej" },
      { property: "og:description", content: "Word vrijwilliger bij Stichting Zurali Chej: begeleiding, huiswerkhulp, tolken, evenementen, communicatie en fondsenwerving." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pixel-perfect-clone-47367.lovable.app/vrijwilligers" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://pixel-perfect-clone-47367.lovable.app/vrijwilligers" }],
  }),
  component: VrijwilligersPage,
});

function VrijwilligersPage() {
  const t = useT();
  const v = t.vrijwilligers;
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <PageHero eyebrow={v.eyebrow} title={v.title} accent={v.accent}>{v.intro}</PageHero>
      <Section title={v.rolesTitle}>
        <Grid cols={3}>
          {v.roles.map((r, i) => (
            <Reveal key={r.title} delay={i * 70} className="h-full">
              <div className="h-full rounded-2xl border border-border bg-card p-6">
                <h2 className="font-serif text-lg font-semibold text-foreground">{r.title}</h2>
                <div className="mt-1 text-xs font-semibold text-flame">{r.time}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </Grid>
      </Section>
      <Section title={v.offerTitle}><Reveal><Bullets items={v.offer} /></Reveal></Section>
      <Section title={v.stepsTitle}>
        <Grid cols={4}>
          {v.steps.map((s, i) => (
            <Reveal key={s.step} delay={i * 70} className="h-full">
              <div className="h-full rounded-2xl bg-sand p-6">
                <div className="font-serif text-3xl font-semibold text-flame/40">{s.step}</div>
                <h3 className="mt-2 font-serif text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </Grid>
      </Section>
      <Section title={v.formTitle}>
        <Reveal from="scale" className="mt-6 rounded-3xl bg-sand-deep p-6 sm:p-10">
          <form className="grid gap-4 sm:grid-cols-2" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <Field id="v-name" label={v.fields.name} />
            <Field id="v-email" label={v.fields.email} type="email" />
            <Field id="v-phone" label={v.fields.phone} type="tel" required={false} />
            <SelectField id="v-role" label={v.fields.role} options={v.roles.map((r) => r.title)} />
            <TextField id="v-msg" label={v.fields.message} />
            <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
              <button className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90">{t.common.send}</button>
              {sent && <span className="text-sm text-flame">{t.common.sent}</span>}
            </div>
          </form>
        </Reveal>
      </Section>
      <CtaBand title={t.home.ctaTitle} text={t.home.ctaText} to="/doneren" label={t.common.donate} />
    </Layout>
  );
}

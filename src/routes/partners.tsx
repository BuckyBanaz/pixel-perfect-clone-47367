import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout, PageHero, Section, Grid, FeatureCard, CtaBand, Bullets, Eyebrow, Icon, Field, TextField, SelectField } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { useT } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners — Stichting Zurali Chej" },
      { name: "description", content: "Wij werken samen met gemeenten, fondsen, kennisinstellingen, scholen en Europese partnerorganisaties. Word partner." },
      { property: "og:title", content: "Partners — Stichting Zurali Chej" },
      { property: "og:description", content: "Wij werken samen met gemeenten, fondsen, kennisinstellingen, scholen en Europese partnerorganisaties. Word partner." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pixel-perfect-clone-47367.lovable.app/partners" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://pixel-perfect-clone-47367.lovable.app/partners" }],
  }),
  component: PartnersPage,
});

function PartnersPage() {
  const t = useT();
  const p = t.partners;
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <PageHero eyebrow={p.eyebrow} title={p.title} accent={p.accent}>{p.intro}</PageHero>
      <Section>
        <Grid cols={4}>
          {p.groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 70} className="h-full">
              <div className="h-full rounded-2xl bg-sand p-6">
                <h2 className="font-serif text-lg font-semibold text-foreground">{g.title}</h2>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {g.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
              </div>
            </Reveal>
          ))}
        </Grid>
      </Section>
      <Section title={p.whyTitle}>
        <Grid cols={4}>
          {p.why.map((w, i) => <FeatureCard key={w.title} icon={w.icon} title={w.title} text={w.text} delay={i * 70} />)}
        </Grid>
      </Section>
      <Section title={p.formTitle} intro={p.formText}>
        <Reveal from="scale" className="mt-6 rounded-3xl bg-sand-deep p-6 sm:p-10">
          <form className="grid gap-4 sm:grid-cols-2" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <Field id="p-org" label={p.fields.org} />
            <Field id="p-name" label={p.fields.name} />
            <Field id="p-email" label={p.fields.email} type="email" />
            <SelectField id="p-type" label={p.fields.type} options={p.types} />
            <TextField id="p-msg" label={p.fields.message} />
            <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
              <button className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90">{t.common.send}</button>
              {sent && <span className="text-sm text-flame">{t.common.sent}</span>}
            </div>
          </form>
        </Reveal>
      </Section>
      <CtaBand title={t.internationaal.ctaTitle} text={t.internationaal.ctaText} to="/internationale-samenwerking" label={t.common.readMore} />
    </Layout>
  );
}

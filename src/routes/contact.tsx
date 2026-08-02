import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout, PageHero, Section, Grid, FeatureCard, CtaBand, Bullets, Eyebrow, Icon, Field, TextField, SelectField } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { useT } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Stichting Zurali Chej" },
      { name: "description", content: "Vragen over een bijeenkomst, ondersteuning of samenwerking? Neem contact op met Stichting Zurali Chej — reactie binnen twee werkdagen." },
      { property: "og:title", content: "Contact — Stichting Zurali Chej" },
      { property: "og:description", content: "Vragen over een bijeenkomst, ondersteuning of samenwerking? Neem contact op met Stichting Zurali Chej — reactie binnen twee werkdagen." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pixel-perfect-clone-47367.lovable.app/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://pixel-perfect-clone-47367.lovable.app/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const t = useT();
  const c = t.contact;
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <PageHero eyebrow={c.eyebrow} title={c.title} accent={c.accent}>{c.intro}</PageHero>
      <Section>
        <Grid cols={3}>
          {c.channels.map((ch, i) => (
            <Reveal key={ch.title} delay={i * 80} className="h-full">
              <div className="h-full rounded-2xl border border-border bg-card p-6">
                <span className="grid size-11 place-items-center rounded-full bg-flame-soft text-flame"><Icon name={ch.icon} className="size-5" /></span>
                <h2 className="mt-4 font-serif text-lg font-semibold text-foreground">{ch.title}</h2>
                <a href={`mailto:${ch.value}`} className="mt-1 block break-all text-sm font-semibold text-flame">{ch.value}</a>
                <p className="mt-2 text-xs text-muted-foreground">{ch.note}</p>
              </div>
            </Reveal>
          ))}
        </Grid>
      </Section>
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
          <Reveal from="left" className="rounded-3xl bg-sand-deep p-6 sm:p-10">
            <Eyebrow>{c.formTitle}</Eyebrow>
            <form className="mt-6 grid gap-4 sm:grid-cols-2" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <Field id="c-name" label={c.fields.name} />
              <Field id="c-email" label={c.fields.email} type="email" />
              <div className="sm:col-span-2"><SelectField id="c-subject" label={c.fields.subject} options={c.subjects} /></div>
              <TextField id="c-msg" label={c.fields.message} />
              <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
                <button className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90">{t.common.send}</button>
                {sent && <span className="text-sm text-flame">{t.common.sent}</span>}
              </div>
              <p className="text-xs text-muted-foreground sm:col-span-2">{c.privacy}</p>
            </form>
          </Reveal>
          <Reveal from="right">
            <Eyebrow>{c.visitTitle}</Eyebrow>
            <address className="mt-3 space-y-1 text-sm not-italic leading-relaxed text-muted-foreground">
              {c.address.map((l) => <div key={l}>{l}</div>)}
            </address>
            <h2 className="mt-8 font-serif text-lg font-semibold text-foreground">{c.hoursTitle}</h2>
            <dl className="mt-3 space-y-2 text-sm">
              {c.hours.map((h) => (
                <div key={h.label} className="flex justify-between gap-4 border-b border-border pb-2">
                  <dt className="text-muted-foreground">{h.label}</dt><dd className="text-foreground">{h.value}</dd>
                </div>
              ))}
            </dl>
            <h2 className="mt-8 font-serif text-lg font-semibold text-foreground">{c.kvkTitle}</h2>
            <dl className="mt-3 space-y-2 text-sm">
              {c.kvk.map((k) => (
                <div key={k.label} className="flex justify-between gap-4 border-b border-border pb-2">
                  <dt className="text-muted-foreground">{k.label}</dt><dd className="text-foreground">{k.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Section>
      <CtaBand title={t.home.ctaTitle} text={t.home.ctaText} to="/doneren" label={t.common.donate} />
    </Layout>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout, PageHero, Section, Grid, FeatureCard, CtaBand, Bullets, Eyebrow, Icon, Field, TextField, SelectField } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { useT } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/doneren")({
  head: () => ({
    meta: [
      { title: "Doneren — Stichting Zurali Chej" },
      { name: "description", content: "Steun vrouwenkringen, studiebegeleiding, filmavonden en Europese uitwisselingen met een eenmalige of maandelijkse donatie." },
      { property: "og:title", content: "Doneren — Stichting Zurali Chej" },
      { property: "og:description", content: "Steun vrouwenkringen, studiebegeleiding, filmavonden en Europese uitwisselingen met een eenmalige of maandelijkse donatie." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pixel-perfect-clone-47367.lovable.app/doneren" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://pixel-perfect-clone-47367.lovable.app/doneren" }],
  }),
  component: DonerenPage,
});

function DonerenPage() {
  const t = useT();
  const d = t.doneren;
  const [amount, setAmount] = useState(d.amounts[2].value);
  const [monthly, setMonthly] = useState(false);
  return (
    <Layout>
      <PageHero eyebrow={d.eyebrow} title={d.title} accent={d.accent}>{d.intro}</PageHero>
      <Section title={d.amountTitle}>
        <div className="mt-6 grid gap-5 lg:grid-cols-[1.3fr_1fr]">
          <Reveal from="left">
            <div className="grid gap-4 sm:grid-cols-2">
              {d.amounts.map((a) => (
                <button key={a.value} type="button" onClick={() => setAmount(a.value)}
                  className={`rounded-2xl border p-5 text-left transition ${amount === a.value ? "border-flame bg-flame-soft" : "border-border bg-card hover:border-flame/50"}`}>
                  <div className="font-serif text-2xl font-semibold text-foreground">{a.value}</div>
                  <div className="mt-1 text-xs font-semibold text-flame">{a.label}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{a.text}</p>
                </button>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <div className="inline-flex overflow-hidden rounded-full border border-border text-sm font-semibold">
                <button type="button" onClick={() => setMonthly(false)} className={`px-4 py-2 ${!monthly ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>{d.once}</button>
                <button type="button" onClick={() => setMonthly(true)} className={`px-4 py-2 ${monthly ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>{d.monthly}</button>
              </div>
              <button className="rounded-full bg-flame px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90">{d.donateCta} · {amount}</button>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">{d.donateNote}</p>
          </Reveal>
          <Reveal from="right" className="rounded-3xl bg-sand-deep p-6 sm:p-8">
            <h2 className="font-serif text-xl font-semibold text-foreground">{d.bankTitle}</h2>
            <dl className="mt-4 space-y-3 text-sm">
              {d.bank.map((b) => (
                <div key={b.label} className="flex justify-between gap-4 border-b border-border pb-2">
                  <dt className="text-muted-foreground">{b.label}</dt>
                  <dd className="text-right font-semibold text-foreground">{b.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Section>
      <Section title={d.waysTitle}>
        <Grid cols={4}>
          {d.ways.map((w, i) => <FeatureCard key={w.title} icon={w.icon} title={w.title} text={w.text} delay={i * 70} />)}
        </Grid>
      </Section>
      <Section title={d.trustTitle} intro={d.trustNote}>
        <Grid cols={3}>
          {d.trust.map((tr, i) => (
            <Reveal key={tr.label} delay={i * 80} className="h-full">
              <div className="h-full rounded-2xl border border-border bg-card p-6">
                <div className="font-serif text-4xl font-semibold text-flame">{tr.value}</div>
                <p className="mt-2 text-sm text-muted-foreground">{tr.label}</p>
              </div>
            </Reveal>
          ))}
        </Grid>
      </Section>
      <CtaBand title={t.partners.formTitle} text={t.partners.formText} to="/partners" label={t.common.partnerWith} />
    </Layout>
  );
}

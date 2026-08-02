import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero, Section, Grid, FeatureCard, CtaBand, Bullets, Eyebrow, Icon, Field, TextField, SelectField } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { useT } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/vrouwen-jongeren")({
  head: () => ({
    meta: [
      { title: "Vrouwen & Jongeren — Stichting Zurali Chej" },
      { name: "description", content: "Empowermentgroepen, coaching, studiebegeleiding en talentontwikkeling voor Roma- en Sinti-vrouwen en jongeren. Deelname is kosteloos." },
      { property: "og:title", content: "Vrouwen & Jongeren — Stichting Zurali Chej" },
      { property: "og:description", content: "Empowermentgroepen, coaching, studiebegeleiding en talentontwikkeling voor Roma- en Sinti-vrouwen en jongeren. Deelname is kosteloos." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pixel-perfect-clone-47367.lovable.app/vrouwen-jongeren" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://pixel-perfect-clone-47367.lovable.app/vrouwen-jongeren" }],
  }),
  component: VrouwenJongerenPage,
});

function VrouwenJongerenPage() {
  const t = useT();
  const v = t.vrouwen;
  return (
    <Layout>
      <PageHero eyebrow={v.eyebrow} title={v.title} accent={v.accent}>{v.intro}</PageHero>
      <Section>
        <div className="grid gap-5 lg:grid-cols-2">
          <Reveal from="left" className="rounded-3xl bg-sand p-8 sm:p-10">
            <h2 className="font-serif text-2xl font-semibold text-foreground">{v.womenTitle}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.womenText}</p>
            <Bullets items={v.womenItems} />
          </Reveal>
          <Reveal from="right" className="rounded-3xl bg-sand p-8 sm:p-10">
            <h2 className="font-serif text-2xl font-semibold text-foreground">{v.youthTitle}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.youthText}</p>
            <Bullets items={v.youthItems} />
          </Reveal>
        </div>
      </Section>
      <Section title={v.supportTitle}>
        <Grid cols={4}>
          {v.support.map((s, i) => <FeatureCard key={s.title} icon={s.icon} title={s.title} text={s.text} delay={i * 70} />)}
        </Grid>
      </Section>
      <Section title={v.storiesTitle}>
        <Grid cols={3}>
          {v.stories.map((s, i) => (
            <Reveal key={s.quote} delay={i * 80} className="h-full">
              <figure className="h-full rounded-2xl border border-border bg-card p-6">
                <blockquote className="font-serif text-lg leading-snug text-foreground">“{s.quote}”</blockquote>
                <figcaption className="mt-4 text-xs text-muted-foreground">{s.name} · {s.place}</figcaption>
              </figure>
            </Reveal>
          ))}
        </Grid>
      </Section>
      <CtaBand title={v.joinTitle} text={v.joinText} to="/contact" label={v.joinCta} />
    </Layout>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero, Section, Grid, FeatureCard, CtaBand, Bullets, Eyebrow, Icon, Field, TextField, SelectField } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { useT } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/internationale-samenwerking")({
  head: () => ({
    meta: [
      { title: "Internationale Samenwerking — Stichting Zurali Chej" },
      { name: "description", content: "Europese kennisuitwisseling, jongerenuitwisselingen en gezamenlijke projecten met Roma-organisaties in Italië, Roemenië, Servië en meer." },
      { property: "og:title", content: "Internationale Samenwerking — Stichting Zurali Chej" },
      { property: "og:description", content: "Europese kennisuitwisseling, jongerenuitwisselingen en gezamenlijke projecten met Roma-organisaties in Italië, Roemenië, Servië en meer." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pixel-perfect-clone-47367.lovable.app/internationale-samenwerking" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://pixel-perfect-clone-47367.lovable.app/internationale-samenwerking" }],
  }),
  component: InternationaalPage,
});

function InternationaalPage() {
  const t = useT();
  const s = t.internationaal;
  return (
    <Layout>
      <PageHero eyebrow={s.eyebrow} title={s.title} accent={s.accent}>{s.intro}</PageHero>
      <Section title={s.italyTitle} intro={s.italyText}>
        <div className="mt-6 flex flex-wrap gap-2.5">
          {s.italyCities.map((c) => (
            <span key={c} className="inline-flex items-center gap-2 rounded-full bg-sand-deep px-4 py-2 text-sm text-foreground">
              <Icon name="pin" className="size-4 text-flame" />{c}
            </span>
          ))}
        </div>
      </Section>
      <Section title={s.networkTitle}>
        <Grid cols={4}>
          {s.network.map((n, i) => <FeatureCard key={n.title} icon={n.icon} title={n.title} text={n.text} delay={i * 70} />)}
        </Grid>
      </Section>
      <Section title={s.partnersTitle}>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {s.countries.map((c, i) => (
            <Reveal key={c} delay={i * 50}>
              <div className="rounded-2xl border border-border bg-card px-4 py-5 text-center text-sm font-semibold text-foreground">{c}</div>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section title={s.fundingTitle}><Reveal><Bullets items={s.funding} /></Reveal></Section>
      <CtaBand title={s.ctaTitle} text={s.ctaText} to="/contact" label={s.ctaButton} />
    </Layout>
  );
}

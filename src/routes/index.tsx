import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Layout, PageHero, Section, Grid, FeatureCard, CtaBand, Bullets, Eyebrow, Icon, Field, TextField, SelectField } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { useT } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stichting Zurali Chej — Roma- en Sinti-vrouwen en jongeren" },
      { name: "description", content: "Door Roma geleide stichting in Nederland, actief in heel Europa. Empowerment, belangenbehartiging, educatie, bewustwording en internationale samenwerking." },
      { property: "og:title", content: "Stichting Zurali Chej — Roma- en Sinti-vrouwen en jongeren" },
      { property: "og:description", content: "Door Roma geleide stichting in Nederland, actief in heel Europa. Empowerment, belangenbehartiging, educatie, bewustwording en internationale samenwerking." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pixel-perfect-clone-47367.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://pixel-perfect-clone-47367.lovable.app/" }],
  }),
  component: HomePage,
});

function HomePage() {
  const t = useT();
  const h = t.home;
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 sm:pt-12 lg:px-8">
        <Reveal className="relative overflow-hidden rounded-3xl bg-sand-deep px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-24">
          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex rounded-full bg-flame/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-flame">{h.badge}</span>
            <h1 className="mt-4 font-serif text-3xl font-semibold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
              {h.title} <span className="text-flame">{h.accent}</span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">{h.intro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/projecten" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90">{h.ctaPrimary}</Link>
              <Link to="/over-ons" className="rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-sand">{h.ctaSecondary}</Link>
            </div>
          </div>
          <svg viewBox="0 0 200 200" aria-hidden className="animate-spin-slow pointer-events-none absolute -bottom-16 -right-12 size-72 text-flame/15 sm:size-96">
            <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="100" cy="100" r="24" fill="none" stroke="currentColor" strokeWidth="2" />
            {Array.from({ length: 16 }).map((_, i) => (
              <line key={i} x1="100" y1="100" x2={100 + 90 * Math.cos((i * Math.PI) / 8)} y2={100 + 90 * Math.sin((i * Math.PI) / 8)} stroke="currentColor" strokeWidth="2" />
            ))}
          </svg>
        </Reveal>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {h.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="rounded-2xl border border-border bg-card p-5">
              <div className="font-serif text-3xl font-semibold text-flame sm:text-4xl">{s.value}</div>
              <div className="mt-1 text-xs leading-snug text-muted-foreground sm:text-sm">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <Section eyebrow={h.impactEyebrow} title={h.pillarsTitle} intro={h.pillarsIntro}>
        <Grid cols={3}>
          {h.pillars.map((p, i) => <FeatureCard key={p.title} icon={p.icon} title={p.title} text={p.text} delay={i * 70} />)}
        </Grid>
      </Section>

      <Section title={h.focusTitle}>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {h.focus.map((f, i) => (
            <Reveal key={f.title} delay={i * 90} className="h-full">
              <div className="flex h-full flex-col rounded-2xl bg-sand p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                <Link to={i === 0 ? "/vrouwen-jongeren" : i === 1 ? "/projecten" : "/internationale-samenwerking"} className="mt-5 text-sm font-semibold text-flame">{f.cta} →</Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow={h.impactEyebrow} title={h.impactTitle} intro={h.impactText}>
        <Reveal from="left"><Bullets items={h.impactPoints} /></Reveal>
      </Section>

      <Section title={h.newsTitle}>
        <Grid cols={3}>
          {t.nieuws.items.slice(0, 3).map((n, i) => (
            <Reveal key={n.title} delay={i * 80} className="h-full">
              <article className="h-full rounded-2xl border border-border bg-card p-6">
                <div className="text-xs text-muted-foreground">{n.date} · {n.category}</div>
                <h3 className="mt-2 font-serif text-lg font-semibold leading-snug text-foreground">{n.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{n.excerpt}</p>
              </article>
            </Reveal>
          ))}
        </Grid>
        <Link to="/nieuws" className="mt-6 inline-block text-sm font-semibold text-flame">{t.common.viewAll} →</Link>
      </Section>

      <Section title={h.eventsTitle}>
        <Grid cols={3}>
          {t.evenementen.items.slice(0, 3).map((e, i) => (
            <Reveal key={e.title} delay={i * 80} className="h-full">
              <article className="flex h-full gap-4 rounded-2xl border border-border bg-card p-5">
                <div className="grid size-14 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <span className="font-serif text-lg font-semibold leading-none">{e.day}</span>
                  <span className="text-[9px] uppercase tracking-widest">{e.month}</span>
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-semibold text-flame">{e.type}</div>
                  <h3 className="font-serif text-base font-semibold leading-snug text-foreground">{e.title}</h3>
                  <div className="mt-1 text-xs text-muted-foreground">{e.city} · {e.time}</div>
                </div>
              </article>
            </Reveal>
          ))}
        </Grid>
        <Link to="/evenementen" className="mt-6 inline-block text-sm font-semibold text-flame">{t.common.viewAll} →</Link>
      </Section>

      <Section title={h.partnersTitle} intro={h.partnersText}>
        <div className="mt-6 flex flex-wrap gap-2.5">
          {t.partners.groups.flatMap((g) => g.items).slice(0, 12).map((p) => (
            <span key={p} className="rounded-full border border-border bg-card px-4 py-2 text-xs text-muted-foreground">{p}</span>
          ))}
        </div>
      </Section>

      <CtaBand title={h.ctaTitle} text={h.ctaText} to="/doneren" label={h.ctaButton} />
    </Layout>
  );
}

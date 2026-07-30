import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand, Eyebrow, PageHero } from "@/components/site/ui";
import collage from "@/assets/community-collage.jpg";
import heroImg from "@/assets/hero.jpg";
import { IconBloom, IconLinkedHearts, IconShieldHeart, IconSparkleStar } from "@/components/site/icons";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Events of Women" },
      {
        name: "description",
        content:
          "We're a Netherlands-based community creating safe, beautiful gatherings for women. Meet the people, the values and the story behind Events of Women.",
      },
      { property: "og:title", content: "About Us — Events of Women" },
      {
        property: "og:description",
        content: "The story, values and people behind Events of Women.",
      },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { value: "10K+", label: "Women in the community" },
  { value: "480", label: "Events hosted since 2021" },
  { value: "6", label: "Cities across the Netherlands" },
  { value: "94%", label: "Guests who come back" },
];

const values = [
  {
    Icon: IconShieldHeart,
    title: "Safety first, always",
    desc: "Every host is vetted, every venue visited, every guest list moderated by a real person.",
  },
  {
    Icon: IconBloom,
    title: "Beauty is not a luxury",
    desc: "Flowers on the table, good light, proper cups. The details tell you that you were expected.",
  },
  {
    Icon: IconLinkedHearts,
    title: "Small rooms, real talk",
    desc: "We cap most events at 24 guests so nobody spends the night on the edge of a conversation.",
  },
  {
    Icon: IconSparkleStar,
    title: "Locally rooted",
    desc: "We work with Dutch florists, bakers, studios and women-led venues in every city.",
  },
];

const timeline = [
  { year: "2021", text: "A Sunday high tea for eleven women in an Amsterdam living room." },
  { year: "2022", text: "Fifty events, the first Rotterdam host, and a waiting list we didn't expect." },
  { year: "2024", text: "Expanded to six cities and launched the host programme." },
  { year: "2026", text: "10,000 women, 480 gatherings, and the same long table energy." },
];

const team = [
  { name: "Amara de Vries", role: "Founder & Curator", city: "Amsterdam" },
  { name: "Noor El Amrani", role: "Head of Community", city: "Rotterdam" },
  { name: "Sanne Bakker", role: "Host Programme Lead", city: "Utrecht" },
  { name: "Lieke Janssen", role: "Partnerships", city: "The Hague" },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero eyebrow="About Us" title="Built by women, for" accent="women.">
          Events of Women started as one high tea in a living room in 2021. Today it's a network of
          hosts, venues and thousands of women who'd rather spend an evening at a long table than
          scrolling.
        </PageHero>

        <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 sm:pt-16 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
            <Reveal from="left">
              <img
                src={heroImg}
                alt="Guests seated at a floral tea table"
                loading="lazy"
                width={1400}
                height={1100}
                className="h-64 w-full rounded-3xl object-cover sm:h-80 lg:h-[26rem]"
              />
            </Reveal>
            <Reveal from="right">
              <Eyebrow>Our Story</Eyebrow>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                Rooms where nobody has to perform
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                We kept hearing the same thing: it's hard to make new friends after thirty, and
                harder still to find spaces that feel warm rather than transactional. So we started
                building them — small, seasonal, carefully hosted gatherings where the format does
                the introducing for you.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Every event is capped, curated and hosted by a woman who knows her city. No pitches,
                no name badges you'd rather not wear, no leaving early.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 sm:pt-20 lg:px-8">
          <Reveal className="rounded-3xl bg-cream-deep p-6 sm:p-10">
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 80}>
                  <div className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                    {s.value}
                  </div>
                  <div className="mt-1.5 text-xs text-muted-foreground sm:text-sm">{s.label}</div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 sm:pt-20 lg:px-8">
          <Reveal>
            <Eyebrow>What We Stand For</Eyebrow>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              Four things we never compromise
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90} className="h-full">
                <div className="h-full rounded-2xl border border-border/60 bg-card p-6">
                  <span className="grid size-12 place-items-center rounded-full bg-cream-deep">
                    <v.Icon className="size-6 text-rose-accent" />
                  </span>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">{v.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 sm:pt-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <Reveal from="left">
              <Eyebrow>Our Journey</Eyebrow>
              <ol className="mt-5 space-y-6 border-l border-border pl-6">
                {timeline.map((t, i) => (
                  <Reveal as="li" key={t.year} delay={i * 90} className="relative">
                    <span className="absolute -left-[1.9rem] top-1.5 size-2.5 rounded-full bg-rose-accent" />
                    <div className="font-serif text-lg font-semibold text-foreground">{t.year}</div>
                    <p className="mt-1 text-sm text-muted-foreground">{t.text}</p>
                  </Reveal>
                ))}
              </ol>
            </Reveal>
            <Reveal from="right">
              <img
                src={collage}
                alt="Polaroid memories from past gatherings"
                loading="lazy"
                width={900}
                height={800}
                className="mx-auto w-full max-w-md rounded-3xl"
              />
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 sm:pt-20 lg:px-8">
          <Reveal>
            <Eyebrow>The Team</Eyebrow>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              The women setting the table
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 80} from="scale">
                <div className="rounded-2xl border border-border/60 bg-card p-6 text-center">
                  <span className="mx-auto grid size-16 place-items-center rounded-full bg-cream-deep font-serif text-xl font-semibold text-rose-accent">
                    {m.name[0]}
                  </span>
                  <div className="mt-4 font-serif text-lg font-semibold text-foreground">{m.name}</div>
                  <div className="text-xs text-muted-foreground">{m.role}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">
                    {m.city}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <CtaBand
          title="Come to one and see."
          text="Most women say the first event feels like meeting old friends early."
          to="/events"
          label="Browse events"
        />
      </main>
      <Footer />
    </div>
  );
}

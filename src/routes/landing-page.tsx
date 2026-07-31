import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import collage from "@/assets/community-collage.jpg";
import lilies from "@/assets/lilies.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { ArrowIcon, EventCard, Eyebrow, CtaBand } from "@/components/site/ui";
import { categories, events, testimonials } from "@/components/site/data";
import {
  IconCamera,
  IconLinkedHearts,
  IconShieldHeart,
  IconSparkleStar,
} from "@/components/site/icons";

export const Route = createFileRoute("/landing-page")({
  head: () => ({
    meta: [
      { title: "Events of Women — Where Women Gather, Grow & Glow" },
      {
        name: "description",
        content:
          "An animated look at Events of Women: curated tea parties, workshops, wellness mornings and networking dinners for 10,000+ women across the Netherlands.",
      },
      { property: "og:title", content: "Where Women Gather, Grow & Glow" },
      {
        property: "og:description",
        content:
          "Curated gatherings for women — tea parties, workshops, wellness and networking across the Netherlands.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPageRoute,
});

const stats = [
  { value: "10K+", label: "Women in the circle" },
  { value: "480+", label: "Events hosted" },
  { value: "26", label: "Cities & towns" },
  { value: "4.9", label: "Average rating" },
];

const pillars = [
  {
    Icon: IconShieldHeart,
    title: "Safe & Inclusive",
    desc: "Every gathering is hosted with care, comfort and respect at its centre.",
  },
  {
    Icon: IconSparkleStar,
    title: "Curated Experiences",
    desc: "Handpicked hosts and venues — nothing generic makes the calendar.",
  },
  {
    Icon: IconLinkedHearts,
    title: "Meaningful Connections",
    desc: "Small groups and long tables, built for conversations that continue.",
  },
  {
    Icon: IconCamera,
    title: "Beautiful Memories",
    desc: "Thoughtful details and photographs you'll actually want to keep.",
  },
];

const steps = [
  { n: "01", title: "Browse the calendar", desc: "Filter by interest, city and date until something feels like you." },
  { n: "02", title: "Save your seat", desc: "Small guest lists, transparent pricing, instant confirmation." },
  { n: "03", title: "Show up as you are", desc: "Warm hosts, name cards, and zero awkward-first-five-minutes." },
  { n: "04", title: "Keep the circle", desc: "Group chats, follow-up meets and friendships that outlast the evening." },
];

function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 sm:pt-8 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-cream-deep">
        <div className="grid lg:grid-cols-[1.05fr_1fr]">
          <Reveal
            from="left"
            className="order-2 flex flex-col justify-center px-6 py-12 sm:px-10 sm:py-16 lg:order-1 lg:px-14 lg:py-24"
          >
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-background/85 px-4 py-1.5 text-[11px] font-medium text-foreground shadow-sm backdrop-blur sm:text-xs">
              <IconSparkleStar className="size-3.5 text-rose-accent" />
              New season · Autumn gatherings open
            </div>

            <h1 className="mt-5 font-serif text-[2.6rem] font-semibold leading-[1.03] text-foreground sm:mt-6 sm:text-6xl lg:text-[4.5rem]">
              Where Women
              <br />
              Gather, Grow &amp;
              <br />
              <span className="italic text-rose-accent">Glow.</span>
            </h1>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base">
              Beautifully hosted tea parties, workshops, wellness mornings and networking dinners —
              designed for the kind of evenings you talk about for weeks.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
              <Link
                to="/events"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:-translate-y-0.5 hover:opacity-90"
              >
                Explore Events <ArrowIcon />
              </Link>
              <Link
                to="/become-a-host"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition hover:-translate-y-0.5 hover:bg-cream"
              >
                Host an Event
              </Link>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-5 sm:mt-12 sm:grid-cols-4">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 90}>
                  <dt className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-[11px] leading-snug text-muted-foreground sm:text-xs">
                    {s.label}
                  </dd>
                </Reveal>
              ))}
            </dl>
          </Reveal>

          <div className="relative order-1 min-h-[300px] sm:min-h-[400px] lg:order-2 lg:min-h-[660px]">
            <img
              src={heroImg}
              alt="Women gathered around a floral tea table at a curated event"
              width={1400}
              height={1100}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span
              className="absolute bottom-6 left-6 rotate-[-6deg] rounded-full bg-cream px-4 py-2 text-[15px] shadow-sm"
              style={{ fontFamily: "var(--font-hand)" }}
            >
              See you Saturday!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const words = ["Tea Parties", "Workshops", "Wellness", "Networking", "Book Clubs", "Celebrations"];
  return (
    <section className="mt-14 overflow-hidden border-y border-border/60 bg-cream py-4 sm:mt-20">
      <div className="flex w-max animate-[marquee_28s_linear_infinite] items-center gap-10 pr-10">
        {[...words, ...words, ...words].map((w, i) => (
          <span
            key={`${w}-${i}`}
            className="flex items-center gap-10 font-serif text-lg italic text-foreground/70 sm:text-xl"
          >
            {w}
            <IconSparkleStar className="size-4 text-rose-accent" />
          </span>
        ))}
      </div>
    </section>
  );
}

function Interests() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
      <Reveal>
        <Eyebrow>Explore By Interest</Eyebrow>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
          <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            Pick the room that suits your mood
          </h2>
          <Link to="/categories" className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
            All categories <ArrowIcon />
          </Link>
        </div>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.slice(0, 6).map((c, i) => (
          <Reveal key={c.slug} delay={i * 70} from="scale">
            <Link
              to="/categories"
              className="group flex h-full items-start gap-4 rounded-2xl border border-border/60 bg-card p-5 transition hover:-translate-y-1 hover:shadow-md"
            >
              <span className="relative grid size-14 shrink-0 place-items-center">
                <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full text-blush transition-transform duration-500 group-hover:rotate-12">
                  <path fill="currentColor" d="M50 5c20 0 35 12 42 30s-2 40-20 50-40 8-55-6S-2 45 8 27 30 5 50 5z" />
                </svg>
                <c.Icon className="relative size-7 text-foreground" />
              </span>
              <span>
                <span className="block font-serif text-lg font-semibold text-foreground">{c.label}</span>
                <span className="mt-1 block text-xs leading-relaxed text-muted-foreground sm:text-[13px]">
                  {c.blurb}
                </span>
                <span className="mt-2 block text-[11px] font-medium text-rose-accent">
                  {c.count} upcoming
                </span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Highlights() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
      <Reveal>
        <Eyebrow>This Season</Eyebrow>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
          <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            Gatherings filling up fast
          </h2>
          <Link to="/events" className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
            View all events <ArrowIcon />
          </Link>
        </div>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {events.slice(0, 4).map((e, i) => (
          <Reveal key={e.id} delay={i * 80}>
            <EventCard e={e} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
      <Reveal className="rounded-3xl bg-cream-deep p-6 sm:p-10 lg:p-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-14">
          <div>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Why women
              <br />
              keep coming back
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              We create safe, inspiring and impactful spaces for women to connect, learn and grow —
              in rooms that feel like they were made for you.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Our story <ArrowIcon />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map(({ Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 90}>
                <span className="grid size-12 place-items-center rounded-full bg-background">
                  <Icon className="size-6 text-rose-accent" />
                </span>
                <div className="mt-4 font-serif text-lg font-semibold text-foreground">{title}</div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-[13px]">{desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
      <Reveal>
        <Eyebrow>How It Works</Eyebrow>
        <h2 className="mt-2 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
          From curious to seated in four steps
        </h2>
      </Reveal>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 90} from="scale">
            <div className="h-full rounded-2xl border border-border/60 bg-card p-6 transition hover:-translate-y-1 hover:shadow-md">
              <span className="font-serif text-3xl italic text-rose-accent">{s.n}</span>
              <div className="mt-3 font-serif text-lg font-semibold text-foreground">{s.title}</div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-[13px]">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Voices() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal from="left" className="relative">
          <img
            src={collage}
            alt="Polaroid collage of women at past events"
            loading="lazy"
            width={900}
            height={800}
            className="mx-auto w-full max-w-md rounded-2xl"
          />
          <span
            className="absolute left-2 top-4 -rotate-12 rounded-full bg-cream px-4 py-2 text-[15px] shadow-sm sm:left-4"
            style={{ fontFamily: "var(--font-hand)" }}
          >
            Good vibes only!
          </span>
        </Reveal>

        <Reveal from="right">
          <Eyebrow>Community Voices</Eyebrow>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            Loved by our community
          </h2>
          <div className="mt-6 space-y-4">
            {testimonials.slice(0, 3).map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <figure className="rounded-2xl border border-border/60 bg-card p-5">
                  <blockquote className="font-serif text-base italic leading-relaxed text-foreground">
                    <span className="align-top text-2xl leading-none text-rose-accent">&ldquo;</span>
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-4 flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-full bg-cream-deep text-sm font-semibold text-rose-accent">
                      {t.name[0]}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-foreground">{t.name}</span>
                      <span className="block text-xs text-muted-foreground">{t.city}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
      <Reveal from="scale" className="overflow-hidden rounded-3xl bg-cream-deep">
        <div className="grid items-center lg:grid-cols-[1.4fr_1fr]">
          <div className="px-6 py-10 sm:px-10 sm:py-14">
            <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              Never miss an event
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Get updates on new events, exclusive invites and more.
            </p>
            <form className="mt-6 flex max-w-md flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="Enter your email"
                aria-label="Email address"
                className="flex-1 rounded-full border border-border bg-background px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-rose-accent"
              />
              <button className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90">
                Subscribe
              </button>
            </form>
          </div>
          <div className="relative h-48 min-h-[200px] lg:h-full">
            <img
              src={lilies}
              alt=""
              loading="lazy"
              width={900}
              height={600}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function LandingPageRoute() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Interests />
        <Highlights />
        <Pillars />
        <HowItWorks />
        <Voices />
        <Newsletter />
        <CtaBand
          title="Your next favourite evening is already on the calendar"
          text="Join thousands of women meeting over tea, ideas and long tables across the Netherlands."
          to="/events"
          label="Browse events"
        />
      </main>
      <Footer />
    </div>
  );
}

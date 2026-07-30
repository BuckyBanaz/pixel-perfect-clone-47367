import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero.jpg";
import collage from "@/assets/community-collage.jpg";
import lilies from "@/assets/lilies.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { ArrowIcon, EventCard, Eyebrow } from "@/components/site/ui";
import { categories, events, testimonials } from "@/components/site/data";
import {
  IconCamera,
  IconLinkedHearts,
  IconShieldHeart,
  IconSparkleStar,
} from "@/components/site/icons";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Events of Women — Curated Events For Women in the Netherlands" },
      {
        name: "description",
        content:
          "Tea parties, workshops, wellness mornings and networking dinners crafted for women. Join 10,000+ women across the Netherlands.",
      },
      { property: "og:title", content: "Events of Women — Curated Events For Women" },
      {
        property: "og:description",
        content:
          "Discover meaningful events crafted exclusively for women. Connect. Celebrate. Empower.",
      },
    ],
  }),
  component: LandingPage,
});

const features = [
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

function AvatarStack() {
  return (
    <div className="flex -space-x-2">
      {["A", "M", "S", "L"].map((c) => (
        <span
          key={c}
          className="grid size-7 place-items-center rounded-full border-2 border-cream-deep bg-background text-[10px] font-semibold text-rose-accent"
        >
          {c}
        </span>
      ))}
      <span className="grid size-7 place-items-center rounded-full border-2 border-cream-deep bg-primary text-[10px] font-semibold text-primary-foreground">
        +
      </span>
    </div>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 sm:pt-8 lg:px-8">
      <div className="overflow-hidden rounded-3xl bg-cream-deep">
        <div className="grid lg:grid-cols-2">
          <Reveal
            from="left"
            className="order-2 flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-14 lg:order-1 lg:px-14 lg:py-20"
          >
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-background/85 px-4 py-1.5 text-[11px] font-medium text-foreground shadow-sm backdrop-blur sm:text-xs">
              <IconSparkleStar className="size-3.5 text-rose-accent" />
              Curated Events For Women
            </div>

            <h1 className="mt-5 font-serif text-[2.5rem] font-semibold leading-[1.05] text-foreground sm:mt-6 sm:text-6xl lg:text-[4.25rem]">
              Meaningful
              <br />
              Events. Real
              <br />
              <span className="italic text-rose-accent">Connections.</span>
            </h1>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base">
              From tea parties to workshops and networking meets, discover experiences crafted
              exclusively for women.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <Link
                to="/events"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
                Explore Events <ArrowIcon />
              </Link>
              <Link
                to="/become-a-host"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition hover:bg-cream"
              >
                Host an Event
              </Link>
            </div>

            <div className="mt-9 flex items-center gap-4 sm:mt-10">
              <AvatarStack />
              <div className="text-xs leading-tight text-muted-foreground">
                Join 10K+ women
                <br />
                across Netherlands
              </div>
            </div>
          </Reveal>

          <div className="relative order-1 min-h-[280px] sm:min-h-[380px] lg:order-2 lg:min-h-[620px]">
            <img
              src={heroImg}
              alt="Women gathered around a floral tea table at a curated event"
              width={1400}
              height={1100}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CategoriesStrip() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
      <Reveal>
        <Eyebrow>Explore By Interest</Eyebrow>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
          <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            Find the Perfect Event for You
          </h2>
          <Link
            to="/categories"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground"
          >
            All categories <ArrowIcon />
          </Link>
        </div>
      </Reveal>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-7">
        {categories.map((c, i) => (
          <Reveal key={c.slug} delay={i * 60} from="scale">
            <Link
              to="/categories"
              className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-border/60 bg-card p-4 text-center transition hover:-translate-y-1 hover:shadow-md sm:p-5"
            >
              <span className="relative grid size-14 place-items-center sm:size-16">
                <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full text-blush transition-transform duration-500 group-hover:rotate-12">
                  <path
                    fill="currentColor"
                    d="M50 5c20 0 35 12 42 30s-2 40-20 50-40 8-55-6S-2 45 8 27 30 5 50 5z"
                  />
                </svg>
                <c.Icon className="relative size-7 text-foreground" />
              </span>
              <span className="text-xs font-medium text-foreground sm:text-sm">{c.label}</span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Upcoming() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
      <Reveal>
        <Eyebrow>Upcoming Events</Eyebrow>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
          <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            What's Happening Next
          </h2>
          <Link to="/events" className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
            View All Events <ArrowIcon />
          </Link>
        </div>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {events.slice(0, 5).map((e, i) => (
          <Reveal key={e.id} delay={i * 80}>
            <EventCard e={e} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
      <Reveal className="rounded-3xl bg-cream-deep p-6 sm:p-10 lg:p-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-14">
          <div>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Why Women
              <br />
              Choose Us
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              We create safe, inspiring and impactful spaces for women to connect, learn and grow —
              in rooms that feel like they were made for you.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Learn More <ArrowIcon />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 90}>
                <span className="grid size-12 place-items-center rounded-full bg-background">
                  <Icon className="size-6 text-rose-accent" />
                </span>
                <div className="mt-4 font-serif text-lg font-semibold text-foreground">{title}</div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-[13px]">
                  {desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const go = (d: number) => setI((p) => (p + d + testimonials.length) % testimonials.length);

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
          <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            Loved By Our Community
          </h2>
          <blockquote className="mt-6 max-w-lg font-serif text-lg italic leading-relaxed text-foreground sm:text-xl">
            <span className="align-top text-3xl leading-none text-rose-accent">&ldquo;</span>
            {t.quote}
          </blockquote>
          <div className="mt-6 flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-full bg-cream-deep text-sm font-semibold text-rose-accent">
              {t.name[0]}
            </span>
            <div>
              <div className="text-sm font-semibold text-foreground">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.city}</div>
            </div>
          </div>
          <div className="mt-8 flex max-w-lg items-center justify-between">
            <div className="flex gap-1.5">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Testimonial ${idx + 1}`}
                  onClick={() => setI(idx)}
                  className={`size-2 rounded-full transition ${idx === i ? "bg-primary" : "bg-border"}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                aria-label="Previous testimonial"
                onClick={() => go(-1)}
                className="grid size-10 place-items-center rounded-full border border-border transition hover:bg-cream"
              >
                <ArrowIcon className="size-4 rotate-180" />
              </button>
              <button
                aria-label="Next testimonial"
                onClick={() => go(1)}
                className="grid size-10 place-items-center rounded-full border border-border transition hover:bg-cream"
              >
                <ArrowIcon />
              </button>
            </div>
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
              Never Miss An Event
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

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <CategoriesStrip />
        <Upcoming />
        <WhyUs />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand, EventCard, PageHero } from "@/components/site/ui";
import { categories, events } from "@/components/site/data";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Upcoming Events — Events of Women" },
      {
        name: "description",
        content:
          "Browse every upcoming women's event in the Netherlands: high teas, networking dinners, yoga mornings, book clubs, ceramics workshops and supper clubs.",
      },
      { property: "og:title", content: "Upcoming Events — Events of Women" },
      {
        property: "og:description",
        content: "Every upcoming gathering, filterable by interest and city.",
      },
    ],
  }),
  component: EventsPage,
});

const cities = ["All cities", "Amsterdam", "Rotterdam", "Utrecht", "The Hague", "Eindhoven", "Haarlem"];

function EventsPage() {
  const [tag, setTag] = useState("All");
  const [city, setCity] = useState("All cities");

  const filtered = useMemo(
    () =>
      events.filter(
        (e) => (tag === "All" || e.tag === tag) && (city === "All cities" || e.city === city),
      ),
    [tag, city],
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero eyebrow="The Calendar" title="What's" accent="Happening Next">
          Every gathering on the calendar, from quiet Sunday mornings to long celebration nights.
          Filter by interest or city and save your seat.
        </PageHero>

        <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 sm:pt-14 lg:px-8">
          <Reveal className="flex flex-col gap-4">
            <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
              {["All", ...categories.map((c) => c.label)].map((t) => (
                <button
                  key={t}
                  onClick={() => setTag(t)}
                  className={`shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition sm:text-sm ${
                    tag === t
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <label className="text-xs text-muted-foreground" htmlFor="city">
                City
              </label>
              <select
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-rose-accent"
              >
                {cities.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
              <span className="text-xs text-muted-foreground">
                {filtered.length} event{filtered.length === 1 ? "" : "s"}
              </span>
            </div>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((e, i) => (
              <Reveal key={e.id} delay={(i % 4) * 80}>
                <EventCard e={e} />
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-10 rounded-2xl border border-dashed border-border bg-card p-10 text-center text-sm text-muted-foreground">
              No events match that combination yet — try another city or interest.
            </p>
          )}
        </section>

        <CtaBand
          title="Can't find your kind of evening?"
          text="Tell us what you'd love to attend, or host it yourself with our team behind you."
          to="/become-a-host"
          label="Become a host"
        />
      </main>
      <Footer />
    </div>
  );
}

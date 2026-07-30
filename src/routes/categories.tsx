import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { ArrowIcon, CtaBand, PageHero } from "@/components/site/ui";
import { categories, events } from "@/components/site/data";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "Event Categories — Events of Women" },
      {
        name: "description",
        content:
          "Explore by interest: tea parties, networking, wellness, workshops, book clubs, celebrations and lifestyle events for women across the Netherlands.",
      },
      { property: "og:title", content: "Event Categories — Events of Women" },
      {
        property: "og:description",
        content: "Seven ways to spend an evening with women who get it.",
      },
    ],
  }),
  component: CategoriesPage,
});

function CategoriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero eyebrow="Explore By Interest" title="Seven ways to" accent="gather.">
          Whatever pulls you out of the house — a quiet book club or a rooftop supper — there's a
          table set for it.
        </PageHero>

        <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 sm:pt-16 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c, i) => {
              const sample = events.filter((e) => e.tag === c.label).slice(0, 2);
              return (
                <Reveal key={c.slug} delay={(i % 3) * 90} from="scale" className="h-full">
                  <div className="flex h-full flex-col rounded-3xl border border-border/60 bg-card p-6 transition hover:-translate-y-1 hover:shadow-[0_18px_40px_-26px_rgba(60,40,30,0.5)] sm:p-7">
                    <span className="relative grid size-16 place-items-center">
                      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full text-blush">
                        <path
                          fill="currentColor"
                          d="M50 5c20 0 35 12 42 30s-2 40-20 50-40 8-55-6S-2 45 8 27 30 5 50 5z"
                        />
                      </svg>
                      <c.Icon className="relative size-8 text-foreground" />
                    </span>
                    <h2 className="mt-5 font-serif text-xl font-semibold text-foreground sm:text-2xl">
                      {c.label}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.blurb}</p>

                    {sample.length > 0 && (
                      <ul className="mt-5 space-y-2 border-t border-border/60 pt-4 text-xs text-muted-foreground">
                        {sample.map((s) => (
                          <li key={s.id} className="flex items-center justify-between gap-3">
                            <span className="truncate text-foreground">{s.title}</span>
                            <span className="shrink-0">
                              {s.date} {s.month}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="mt-auto flex items-center justify-between pt-6">
                      <span className="text-xs text-muted-foreground">{c.count} events a year</span>
                      <Link
                        to="/events"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-rose-accent"
                      >
                        Browse <ArrowIcon className="size-3.5" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        <CtaBand
          title="Pick an interest and we'll do the rest."
          text="New dates land every week across six cities."
          to="/events"
          label="See the calendar"
        />
      </main>
      <Footer />
    </div>
  );
}

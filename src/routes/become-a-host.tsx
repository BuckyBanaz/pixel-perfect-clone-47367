import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand, Eyebrow, PageHero } from "@/components/site/ui";
import lilies from "@/assets/lilies.jpg";
import {
  IconBrush,
  IconCircleOfWomen,
  IconLinkedHearts,
  IconShieldHeart,
  IconSparkleStar,
  IconTeacup,
} from "@/components/site/icons";

export const Route = createFileRoute("/become-a-host")({
  head: () => ({
    meta: [
      { title: "Become a Host — Events of Women" },
      {
        name: "description",
        content:
          "Host a women's event with a team behind you: venue sourcing, ticketing, guest curation and on-the-day support. Apply to join the host programme.",
      },
      { property: "og:title", content: "Become a Host — Events of Women" },
      {
        property: "og:description",
        content: "Bring your idea, we handle venue, ticketing and guests.",
      },
    ],
  }),
  component: HostPage,
});

const perks = [
  { Icon: IconCircleOfWomen, title: "A ready audience", desc: "10,000 women already on the list, segmented by city and interest." },
  { Icon: IconTeacup, title: "Venue & suppliers", desc: "Our little black book of studios, florists, bakers and photographers." },
  { Icon: IconSparkleStar, title: "Ticketing handled", desc: "Pages, payments, guest lists and reminders — all run by us." },
  { Icon: IconShieldHeart, title: "Safety framework", desc: "Vetted guests, a code of conduct and a moderator on call." },
  { Icon: IconBrush, title: "Brand & photos", desc: "Design templates and a photographer for your first event." },
  { Icon: IconLinkedHearts, title: "Fair split", desc: "You keep 80% of ticket revenue. No monthly fee, ever." },
];

const steps = [
  { n: "01", title: "Send your idea", text: "A paragraph is enough. Tell us the format, the city and who it's for." },
  { n: "02", title: "Planning call", text: "We shape the run of show, budget and ticket price together." },
  { n: "03", title: "We open tickets", text: "Your event goes on the calendar and out to the community." },
  { n: "04", title: "Host the night", text: "A team member is there for set-up, check-in and the awkward first ten minutes." },
];

const faqs = [
  { q: "Do I need experience hosting?", a: "No. Around half our hosts run their very first event with us, and we walk through the run of show together beforehand." },
  { q: "What does it cost?", a: "Nothing upfront. We take 20% of ticket revenue to cover ticketing, marketing and support." },
  { q: "Can I host in my own space?", a: "Yes, as long as it's accessible and comfortable for the group size. Otherwise we'll source a venue." },
  { q: "How big are events?", a: "Most are 12–24 guests. Celebrations and supper clubs can go up to 60 with extra support." },
];

function HostPage() {
  const [open, setOpen] = useState<number | null>(0);
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero eyebrow="Become a Host" title="Your idea, our" accent="long table.">
          You bring the concept and the warmth. We handle the venue, the tickets, the guest list and
          everything that usually makes hosting exhausting.
        </PageHero>

        <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 sm:pt-16 lg:px-8">
          <Reveal>
            <Eyebrow>What You Get</Eyebrow>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              Everything except the idea
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 90} className="h-full">
                <div className="h-full rounded-2xl border border-border/60 bg-card p-6">
                  <span className="grid size-12 place-items-center rounded-full bg-cream-deep">
                    <p.Icon className="size-6 text-rose-accent" />
                  </span>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 sm:pt-20 lg:px-8">
          <Reveal className="rounded-3xl bg-cream-deep p-6 sm:p-10 lg:p-14">
            <Eyebrow>How It Works</Eyebrow>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              Four steps from idea to doors open
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 100}>
                  <div className="font-serif text-2xl font-semibold text-rose-accent">{s.n}</div>
                  <div className="mt-2 font-serif text-lg font-semibold text-foreground">{s.title}</div>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{s.text}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 sm:pt-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
            <Reveal from="left">
              <Eyebrow>Apply</Eyebrow>
              <h2 className="mt-2 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                Tell us what you'd host
              </h2>
              <form
                className="mt-7 grid gap-4 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <Field label="Your name" id="host-name" />
                <Field label="Email" id="host-email" type="email" />
                <Field label="City" id="host-city" />
                <Field label="Event type" id="host-type" placeholder="Tea party, workshop…" />
                <div className="sm:col-span-2">
                  <label htmlFor="host-idea" className="text-xs font-medium text-foreground">
                    Your idea
                  </label>
                  <textarea
                    id="host-idea"
                    rows={5}
                    required
                    placeholder="What would the evening feel like?"
                    className="mt-1.5 w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-rose-accent"
                  />
                </div>
                <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
                  <button className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90">
                    Send application
                  </button>
                  {sent && (
                    <span className="text-sm text-rose-accent">
                      Thank you — we reply to every application within three days.
                    </span>
                  )}
                </div>
              </form>
            </Reveal>

            <Reveal from="right">
              <img
                src={lilies}
                alt=""
                loading="lazy"
                width={900}
                height={600}
                className="h-48 w-full rounded-3xl object-cover sm:h-64 lg:h-72"
              />
              <div className="mt-6">
                <Eyebrow>Questions</Eyebrow>
                <div className="mt-3 divide-y divide-border rounded-2xl border border-border/60 bg-card">
                  {faqs.map((f, i) => (
                    <div key={f.q}>
                      <button
                        onClick={() => setOpen(open === i ? null : i)}
                        aria-expanded={open === i}
                        className="flex w-full items-center justify-between gap-4 p-4 text-left text-sm font-medium text-foreground"
                      >
                        {f.q}
                        <span className={`transition-transform ${open === i ? "rotate-45" : ""}`}>
                          <svg viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                            <path d="M8 3v10M3 8h10" />
                          </svg>
                        </span>
                      </button>
                      {open === i && (
                        <p className="px-4 pb-4 text-[13px] leading-relaxed text-muted-foreground">
                          {f.a}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <CtaBand
          title="Not ready to host? Come as a guest first."
          text="Every host we have started at somebody else's table."
          to="/events"
          label="Browse events"
        />
      </main>
      <Footer />
    </div>
  );
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-xs font-medium text-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-full border border-border bg-card px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-rose-accent"
      />
    </div>
  );
}

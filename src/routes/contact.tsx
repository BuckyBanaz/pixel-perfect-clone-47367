import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Eyebrow, PageHero } from "@/components/site/ui";
import { IconCircleOfWomen, IconTeacup, IconSparkleStar } from "@/components/site/icons";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Events of Women" },
      {
        name: "description",
        content:
          "Questions about an event, a partnership or hosting? Reach the Events of Women team in Amsterdam — we reply within two working days.",
      },
      { property: "og:title", content: "Contact — Events of Women" },
      { property: "og:description", content: "Reach the Events of Women team. We reply within two working days." },
    ],
  }),
  component: ContactPage,
});

const channels = [
  { Icon: IconTeacup, title: "General questions", value: "hello@eventsofwomen.nl", note: "Reply within 2 working days" },
  { Icon: IconCircleOfWomen, title: "Hosting & venues", value: "hosts@eventsofwomen.nl", note: "For hosts and venue partners" },
  { Icon: IconSparkleStar, title: "Press & partnerships", value: "press@eventsofwomen.nl", note: "Brand collaborations" },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero eyebrow="Contact" title="We'd love to" accent="hear from you.">
          Whether it's a question about a ticket, an accessibility need or a partnership idea —
          write to us and a real person will answer.
        </PageHero>

        <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 sm:pt-16 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {channels.map((c, i) => (
              <Reveal key={c.title} delay={i * 90} from="scale" className="h-full">
                <div className="h-full rounded-2xl border border-border/60 bg-card p-6">
                  <span className="grid size-12 place-items-center rounded-full bg-cream-deep">
                    <c.Icon className="size-6 text-rose-accent" />
                  </span>
                  <h2 className="mt-4 font-serif text-lg font-semibold text-foreground">{c.title}</h2>
                  <a href={`mailto:${c.value}`} className="mt-1 block break-all text-sm text-rose-accent">
                    {c.value}
                  </a>
                  <p className="mt-2 text-xs text-muted-foreground">{c.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 sm:pt-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
            <Reveal from="left" className="rounded-3xl bg-cream-deep p-6 sm:p-10">
              <Eyebrow>Send a message</Eyebrow>
              <form
                className="mt-6 grid gap-4 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <Input id="c-name" label="Your name" />
                <Input id="c-email" label="Email" type="email" />
                <div className="sm:col-span-2">
                  <label htmlFor="c-subject" className="text-xs font-medium text-foreground">
                    Subject
                  </label>
                  <select
                    id="c-subject"
                    className="mt-1.5 w-full rounded-full border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-rose-accent"
                  >
                    <option>A ticket or booking</option>
                    <option>Accessibility request</option>
                    <option>Hosting an event</option>
                    <option>Press or partnership</option>
                    <option>Something else</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="c-msg" className="text-xs font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="c-msg"
                    rows={5}
                    required
                    className="mt-1.5 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-rose-accent"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
                  <button className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90">
                    Send message
                  </button>
                  {sent && <span className="text-sm text-rose-accent">Thanks — your message is on its way.</span>}
                </div>
              </form>
            </Reveal>

            <Reveal from="right">
              <Eyebrow>Visit us</Eyebrow>
              <h2 className="mt-2 font-serif text-2xl font-semibold text-foreground sm:text-3xl">
                Studio in Amsterdam
              </h2>
              <address className="mt-4 space-y-1 text-sm not-italic leading-relaxed text-muted-foreground">
                <div>Prinsengracht 214</div>
                <div>1016 HD Amsterdam</div>
                <div>The Netherlands</div>
              </address>
              <dl className="mt-6 space-y-3 border-t border-border pt-6 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Mon – Fri</dt>
                  <dd className="text-foreground">09:00 – 18:00</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Saturday</dt>
                  <dd className="text-foreground">By appointment</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Phone</dt>
                  <dd className="text-foreground">+31 20 123 4567</dd>
                </div>
              </dl>
              <div className="mt-6 rounded-2xl border border-border/60 bg-card p-5 text-[13px] leading-relaxed text-muted-foreground">
                Event-day emergencies? Every booking confirmation includes a direct number for the
                host on duty.
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Input({ id, label, type = "text" }: { id: string; label: string; type?: string }) {
  return (
    <div>
      <label htmlFor={id} className="text-xs font-medium text-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        className="mt-1.5 w-full rounded-full border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-rose-accent"
      />
    </div>
  );
}

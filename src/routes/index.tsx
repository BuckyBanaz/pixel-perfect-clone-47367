import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Bookmark,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Coffee,
  Flower2,
  GraduationCap,
  Leaf,
  MapPin,
  Menu,
  Palette,
  PartyPopper,
  Shield,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import eventTea from "@/assets/event-tea.jpg";
import eventNetworking from "@/assets/event-networking.jpg";
import eventYoga from "@/assets/event-yoga.jpg";
import eventBook from "@/assets/event-book.jpg";
import eventCelebration from "@/assets/event-celebration.jpg";
import collage from "@/assets/community-collage.jpg";
import lilies from "@/assets/lilies.jpg";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

const nav = ["Home", "Events", "Categories", "About Us", "Become a Host", "Contact"];

const categories = [
  { label: "Tea Parties", Icon: Coffee },
  { label: "Networking", Icon: Users },
  { label: "Wellness", Icon: Flower2 },
  { label: "Workshops", Icon: Palette },
  { label: "Book Clubs", Icon: BookOpen },
  { label: "Celebrations", Icon: PartyPopper },
  { label: "Lifestyle", Icon: Leaf },
];

const events = [
  { date: "24", month: "May", tag: "Tea Party", title: "Elegant High Tea Afternoon", city: "Amsterdam", time: "02:00 PM – 05:00 PM", img: eventTea },
  { date: "28", month: "May", tag: "Networking", title: "Women in Business Meetup", city: "Rotterdam", time: "06:00 PM – 09:00 PM", img: eventNetworking },
  { date: "31", month: "May", tag: "Wellness", title: "Morning Yoga & Meditation", city: "Utrecht", time: "07:00 AM – 09:00 AM", img: eventYoga },
  { date: "07", month: "Jun", tag: "Book Club", title: "The Book & Brew Gathering", city: "The Hague", time: "07:00 PM – 09:30 PM", img: eventBook },
  { date: "14", month: "Jun", tag: "Celebration", title: "Women's Celebration Night", city: "Eindhoven", time: "07:00 PM – 11:00 PM", img: eventCelebration },
];

const features = [
  { Icon: Shield, title: "Safe & Inclusive", desc: "Every event is designed with comfort and respect." },
  { Icon: Sparkles, title: "Curated Experiences", desc: "Handpicked events that matter and add value." },
  { Icon: Users, title: "Meaningful Connections", desc: "Meet like-minded women and build real bonds." },
  { Icon: Star, title: "Beautiful Memories", desc: "Moments you'll cherish forever." },
];

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="grid size-9 place-items-center rounded-full bg-cream-deep">
        <Flower2 className="size-5 text-rose-accent" />
      </div>
      <div className="leading-tight">
        <div className="font-serif text-lg font-semibold text-foreground">Events of Women</div>
        <div className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">Connect. Celebrate. Empower.</div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-5 sm:px-8">
      <Logo />
      <nav className="hidden items-center gap-8 lg:flex">
        {nav.map((n, i) => (
          <a key={n} href="#" className={`text-sm ${i === 0 ? "font-semibold text-foreground underline underline-offset-8 decoration-2" : "text-muted-foreground hover:text-foreground"}`}>
            {n}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-3">
        <a href="#" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">
          Get Started <ArrowUpRight className="size-4" />
        </a>
        <button className="lg:hidden rounded-full border border-border p-2"><Menu className="size-5" /></button>
      </div>
    </header>
  );
}

function AvatarStack() {
  return (
    <div className="flex -space-x-2">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="size-7 rounded-full border-2 border-background bg-cream-deep grid place-items-center text-[10px] font-semibold text-rose-accent">
          {["A", "M", "S", "L"][i - 1]}
        </div>
      ))}
      <div className="size-7 rounded-full border-2 border-background bg-primary grid place-items-center text-[10px] font-semibold text-primary-foreground">+</div>
    </div>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-cream-deep">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="relative z-10 flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-background/80 backdrop-blur px-4 py-1.5 text-xs font-medium text-foreground shadow-sm">
              <Sparkles className="size-3.5 text-rose-accent" />
              Curated Events For Women
            </div>
            <h1 className="mt-6 font-serif text-5xl leading-[1.05] font-semibold text-foreground sm:text-6xl lg:text-7xl">
              Meaningful<br />Events. Real<br />
              <span className="italic text-rose-accent">Connections.</span>
            </h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              From tea parties to workshops and networking meets, discover experiences crafted exclusively for women.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">
                Explore Events <ArrowRight className="size-4" />
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground border border-border hover:bg-cream">
                Host an Event
              </a>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <AvatarStack />
              <div className="text-xs text-muted-foreground leading-tight">
                Join 10K+ women<br />across Netherlands
              </div>
            </div>
          </div>
          <div className="relative min-h-[380px] lg:min-h-[600px]">
            <img src={heroImg} alt="Women enjoying a curated tea event" className="absolute inset-0 h-full w-full object-cover" width={1400} height={1100} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-8 pt-20">
      <div className="text-[11px] tracking-[0.25em] text-muted-foreground uppercase">Explore By Interest</div>
      <div className="mt-2 flex items-end justify-between gap-4">
        <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">Find the Perfect Event for You</h2>
      </div>
      <div className="mt-8 flex items-center gap-4">
        <div className="grid flex-1 grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
          {categories.map(({ label, Icon }) => (
            <div key={label} className="group flex flex-col items-center gap-3 rounded-2xl border border-border/60 bg-card p-5 text-center hover:shadow-md transition">
              <div className="relative grid size-16 place-items-center">
                <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full text-blush">
                  <path fill="currentColor" d="M50 5c20 0 35 12 42 30s-2 40-20 50-40 8-55-6S-2 45 8 27 30 5 50 5z" />
                </svg>
                <Icon className="relative size-7 text-foreground" strokeWidth={1.5} />
              </div>
              <div className="text-sm font-medium text-foreground">{label}</div>
            </div>
          ))}
        </div>
        <button className="hidden lg:grid size-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
          <ArrowRight className="size-4" />
        </button>
      </div>
    </section>
  );
}

function Upcoming() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-8 pt-16">
      <div className="text-[11px] tracking-[0.25em] text-muted-foreground uppercase">Upcoming Events</div>
      <div className="mt-2 flex items-end justify-between gap-4">
        <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">What's Happening Next</h2>
        <a href="#" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-foreground">View All Events <ArrowRight className="size-4" /></a>
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {events.map((e) => (
          <article key={e.title} className="group overflow-hidden rounded-2xl bg-card border border-border/60">
            <div className="relative">
              <img src={e.img} alt={e.title} loading="lazy" width={800} height={700} className="h-44 w-full object-cover" />
              <div className="absolute left-3 top-3 rounded-lg bg-primary px-2.5 py-1.5 text-center text-primary-foreground leading-tight">
                <div className="font-serif text-base font-semibold">{e.date}</div>
                <div className="text-[10px] uppercase tracking-widest">{e.month}</div>
              </div>
              <button className="absolute right-3 top-3 grid size-8 place-items-center rounded-full bg-background/90"><Bookmark className="size-3.5" /></button>
            </div>
            <div className="p-4">
              <div className="text-[11px] font-medium text-rose-accent">{e.tag}</div>
              <h3 className="mt-1 font-serif text-lg font-semibold text-foreground leading-snug">{e.title}</h3>
              <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin className="size-3.5" /> {e.city}
              </div>
              <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                <span>{e.time}</span>
                <Bookmark className="size-3.5" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-8 pt-20">
      <div className="rounded-3xl bg-cream-deep p-8 sm:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-12">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">Why Women<br />Choose Us</h2>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              We create safe, inspiring and impactful spaces for women to connect and grow.
            </p>
            <a href="#" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">
              Learn More <ArrowRight className="size-4" />
            </a>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ Icon, title, desc }) => (
              <div key={title}>
                <div className="grid size-11 place-items-center rounded-full bg-background">
                  <Icon className="size-5 text-rose-accent" strokeWidth={1.5} />
                </div>
                <div className="mt-4 font-serif text-lg font-semibold text-foreground">{title}</div>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-8 pt-20">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="relative">
          <img src={collage} alt="Community memories" loading="lazy" width={900} height={800} className="w-full max-w-md mx-auto" />
          <div className="absolute left-2 top-6 rotate-[-12deg] rounded-full bg-cream px-3 py-2 text-[13px]" style={{ fontFamily: "var(--font-hand)" }}>
            Good vibes only! ✨
          </div>
        </div>
        <div>
          <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">Loved By Our Community</h2>
          <blockquote className="mt-6 font-serif italic text-xl leading-relaxed text-foreground max-w-lg">
            <span className="text-rose-accent text-3xl leading-none">“</span>
            Every event feels so thoughtfully organized. I've met amazing women and created lifelong friendships.
          </blockquote>
          <div className="mt-6 flex items-center gap-3">
            <div className="size-11 rounded-full bg-cream-deep grid place-items-center text-sm font-semibold text-rose-accent">S</div>
            <div>
              <div className="text-sm font-semibold text-foreground">Sara L.</div>
              <div className="text-xs text-muted-foreground">Amsterdam</div>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between max-w-lg">
            <div className="flex gap-1.5">
              <span className="size-2 rounded-full bg-primary" />
              <span className="size-2 rounded-full bg-border" />
              <span className="size-2 rounded-full bg-border" />
            </div>
            <div className="flex gap-2">
              <button className="grid size-10 place-items-center rounded-full border border-border"><ChevronLeft className="size-4" /></button>
              <button className="grid size-10 place-items-center rounded-full border border-border"><ChevronRight className="size-4" /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-8 pt-20">
      <div className="relative overflow-hidden rounded-3xl bg-cream-deep">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] items-center">
          <div className="p-8 sm:p-12">
            <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">Never Miss An Event</h2>
            <p className="mt-3 text-sm text-muted-foreground">Get updates on new events, exclusive invites and more.</p>
            <form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md">
              <input type="email" placeholder="Enter your email" className="flex-1 rounded-full bg-background border border-border px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-rose-accent" />
              <button className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">Subscribe</button>
            </form>
          </div>
          <div className="relative h-48 lg:h-full min-h-[220px]">
            <img src={lilies} alt="" loading="lazy" width={900} height={600} className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-4 sm:px-8 py-16">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <Logo />
        <div>
          <div className="font-serif text-sm font-semibold text-foreground mb-3">Explore</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Events</li><li>Categories</li><li>Become a Host</li>
          </ul>
        </div>
        <div>
          <div className="font-serif text-sm font-semibold text-foreground mb-3">Company</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>About Us</li><li>Contact</li><li>Careers</li>
          </ul>
        </div>
        <div>
          <div className="font-serif text-sm font-semibold text-foreground mb-3">Follow</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Instagram</li><li>LinkedIn</li><li>TikTok</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Events of Women. All rights reserved.
      </div>
    </footer>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Categories />
      <Upcoming />
      <WhyUs />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

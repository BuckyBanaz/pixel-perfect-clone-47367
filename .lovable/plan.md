# Events of Women — Landing Page Clone

Build a single-page landing site matching the uploaded reference: warm cream/beige palette, black CTAs, serif display headings, editorial layout for a women's events community.

## Sections (top to bottom)

1. **Header** — Logo (floral mark + "Events of Women / Connect. Celebrate. Empower."), nav (Home, Events, Categories, About Us, Become a Host, Contact), black "Get Started" pill button.
2. **Hero** — Left: "Curated Events For Women" pill, large serif headline "Meaningful Events. Real *Connections.*" (last word in rose-brown italic serif), subtext, two CTAs (black "Explore Events", white "Host an Event"), social proof "Join 10K+ women across Netherlands" with avatar stack. Right: warm photo of women at a floral tea table.
3. **Find the Perfect Event for You** — Small eyebrow "EXPLORE BY INTEREST", serif heading, 7 category cards with soft blob icon backgrounds (Tea Parties, Networking, Wellness, Workshops, Book Clubs, Celebrations, Lifestyle) + circular next arrow.
4. **What's Happening Next** — "UPCOMING EVENTS" eyebrow, "View All Events" link, 5 event cards (image + date badge, category, title, location, time, bookmark icon).
5. **Why Women Choose Us** — Cream rounded panel: heading + description + "Learn More" black button on left, 4 feature columns (Safe & Inclusive, Curated Experiences, Meaningful Connections, Beautiful Memories) with line icons.
6. **Loved By Our Community** — Left: polaroid photo collage with "Good vibes only!" sticker. Right: italic serif testimonial quote, author + location, pagination dots, prev/next circular arrows.
7. **Never Miss An Event** — Newsletter CTA with email input + black "Subscribe" button, decorative lily image on right.
8. **Footer** — (implied) brand, links, socials, copyright.

## Visual system

- Palette (tokens in `src/styles.css`):
  - background cream `#FBF6EE`
  - surface warm `#F5EBDD`
  - foreground near-black `#111111`
  - accent rose-brown `#A05A4A` (italic headline word, small accents)
  - muted text warm gray
  - CTA black `#0E0E0E` with white text; secondary white with black border
- Typography (loaded via `<link>` in `__root.tsx`):
  - Display serif: **Fraunces** (headings, italic variant for accent word + testimonial)
  - Body sans: **Inter**
- Radius: generous (cards ~1rem, pill buttons full)
- Soft shadows, blob shapes behind category icons, subtle image borders on polaroid stack

## Technical notes

- Replace `src/routes/index.tsx` placeholder with full landing page composition; split into small components under `src/components/landing/` (Header, Hero, Categories, UpcomingEvents, WhyUs, Testimonials, Newsletter, Footer).
- Add per-route `head()` with title "Events of Women — Curated Events For Women", matching description, og/twitter tags.
- Redefine light-theme tokens in `src/styles.css` (`--background`, `--foreground`, `--primary`, `--accent`, plus new `--accent-rose`) using oklch. Use only semantic Tailwind classes in components.
- Generate images with `imagegen` (fast tier) into `src/assets/` and import as ES6:
  - hero photo (women at floral tea table)
  - 5 event card photos (high tea, business meetup, yoga, book & coffee, celebration toast)
  - polaroid collage photo(s)
  - lily/floral decorative image for newsletter
  - small avatar photos for social proof stack
- Category icons: lucide-react line icons (Coffee, Users, Flower, Palette, BookOpen, Wine, Leaf) inside blob-shaped soft backgrounds (inline SVG blob).
- Fully static — no backend, no forms wiring beyond visual.
- Responsive: stack hero, wrap category row into scrollable strip on mobile, event cards horizontal scroll on mobile, features grid → 2-col on mobile.

## Out of scope

- Real event data / CMS
- Working newsletter submit, auth, host onboarding
- Additional pages beyond `/`

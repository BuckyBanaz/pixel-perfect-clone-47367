import eventTea from "@/assets/event-tea.jpg";
import eventNetworking from "@/assets/event-networking.jpg";
import eventYoga from "@/assets/event-yoga.jpg";
import eventBook from "@/assets/event-book.jpg";
import eventCelebration from "@/assets/event-celebration.jpg";
import { categoryIcons } from "./icons";

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Events", to: "/events" },
  { label: "Categories", to: "/categories" },
  { label: "About Us", to: "/about" },
  { label: "Become a Host", to: "/become-a-host" },
  { label: "Contact", to: "/contact" },
] as const;

export const categories = [
  {
    slug: "tea-parties",
    label: "Tea Parties",
    Icon: categoryIcons.tea,
    blurb: "Slow afternoons, porcelain cups and conversations that linger.",
    count: 24,
  },
  {
    slug: "networking",
    label: "Networking",
    Icon: categoryIcons.networking,
    blurb: "Founders, freelancers and leaders swapping notes over dinner.",
    count: 18,
  },
  {
    slug: "wellness",
    label: "Wellness",
    Icon: categoryIcons.wellness,
    blurb: "Yoga, breathwork and quiet mornings that put you first.",
    count: 31,
  },
  {
    slug: "workshops",
    label: "Workshops",
    Icon: categoryIcons.workshops,
    blurb: "Ceramics, floristry, writing — learn something with your hands.",
    count: 27,
  },
  {
    slug: "book-clubs",
    label: "Book Clubs",
    Icon: categoryIcons.books,
    blurb: "One book, one long table, and a room full of opinions.",
    count: 12,
  },
  {
    slug: "celebrations",
    label: "Celebrations",
    Icon: categoryIcons.celebrations,
    blurb: "Milestones, launches and every reason to raise a glass.",
    count: 16,
  },
  {
    slug: "lifestyle",
    label: "Lifestyle",
    Icon: categoryIcons.lifestyle,
    blurb: "Styling, home, food and the small rituals in between.",
    count: 21,
  },
];

export type EventItem = {
  id: string;
  date: string;
  month: string;
  tag: string;
  title: string;
  city: string;
  time: string;
  price: string;
  seats: string;
  img: string;
  desc: string;
};

export const events: EventItem[] = [
  {
    id: "high-tea",
    date: "24",
    month: "May",
    tag: "Tea Parties",
    title: "Elegant High Tea Afternoon",
    city: "Amsterdam",
    time: "02:00 PM – 05:00 PM",
    price: "€35",
    seats: "8 seats left",
    img: eventTea,
    desc: "Three tiers of pastries, seasonal teas and a slow table of twenty women.",
  },
  {
    id: "business-meetup",
    date: "28",
    month: "May",
    tag: "Networking",
    title: "Women in Business Meetup",
    city: "Rotterdam",
    time: "06:00 PM – 09:00 PM",
    price: "€25",
    seats: "12 seats left",
    img: eventNetworking,
    desc: "Roundtable introductions, two short talks and unhurried conversation.",
  },
  {
    id: "morning-yoga",
    date: "31",
    month: "May",
    tag: "Wellness",
    title: "Morning Yoga & Meditation",
    city: "Utrecht",
    time: "07:00 AM – 09:00 AM",
    price: "€18",
    seats: "5 seats left",
    img: eventYoga,
    desc: "A gentle flow in a sunlit studio, followed by breakfast in the garden.",
  },
  {
    id: "book-brew",
    date: "07",
    month: "Jun",
    tag: "Book Clubs",
    title: "The Book & Brew Gathering",
    city: "The Hague",
    time: "07:00 PM – 09:30 PM",
    price: "€15",
    seats: "9 seats left",
    img: eventBook,
    desc: "This month's read, filter coffee, and absolutely no small talk.",
  },
  {
    id: "celebration-night",
    date: "14",
    month: "Jun",
    tag: "Celebrations",
    title: "Women's Celebration Night",
    city: "Eindhoven",
    time: "07:00 PM – 11:00 PM",
    price: "€45",
    seats: "20 seats left",
    img: eventCelebration,
    desc: "Live music, a long dinner table and a toast to everything you've built.",
  },
  {
    id: "ceramics-studio",
    date: "21",
    month: "Jun",
    tag: "Workshops",
    title: "Hands in Clay: Ceramics Studio",
    city: "Haarlem",
    time: "10:00 AM – 01:00 PM",
    price: "€55",
    seats: "6 seats left",
    img: eventTea,
    desc: "Throw your first bowl with a ceramicist guiding every step.",
  },
  {
    id: "sunset-supper",
    date: "28",
    month: "Jun",
    tag: "Lifestyle",
    title: "Sunset Rooftop Supper Club",
    city: "Amsterdam",
    time: "06:30 PM – 10:00 PM",
    price: "€60",
    seats: "4 seats left",
    img: eventCelebration,
    desc: "A four-course seasonal menu above the canals as the light drops.",
  },
  {
    id: "founders-breakfast",
    date: "05",
    month: "Jul",
    tag: "Networking",
    title: "Founders' Breakfast Circle",
    city: "Rotterdam",
    time: "08:30 AM – 10:30 AM",
    price: "€20",
    seats: "10 seats left",
    img: eventNetworking,
    desc: "Bring one problem, leave with three introductions.",
  },
];

export const testimonials = [
  {
    quote:
      "Every event feels so thoughtfully organized. I've met amazing women and created lifelong friendships.",
    name: "Sara L.",
    city: "Amsterdam",
  },
  {
    quote:
      "I walked into the founders' breakfast knowing nobody and left with two collaborators and a running club.",
    name: "Noor B.",
    city: "Rotterdam",
  },
  {
    quote:
      "It's rare to find spaces this warm. Nothing performative — just women being genuinely generous.",
    name: "Elise V.",
    city: "Utrecht",
  },
];

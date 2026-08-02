import type { Dict } from "@/content/nl";

export type NavItem = {
  to:
    | "/" | "/over-ons" | "/missie-visie" | "/vrouwen-jongeren" | "/projecten"
    | "/internationale-samenwerking" | "/nieuws" | "/evenementen" | "/kennisbank"
    | "/partners" | "/vrijwilligers" | "/doneren" | "/contact";
  key: keyof Dict["nav"];
  primary?: boolean;
  group: "organisatie" | "werk" | "meedoen";
};

export const navItems: NavItem[] = [
  { to: "/", key: "home", primary: true, group: "organisatie" },
  { to: "/over-ons", key: "over", primary: true, group: "organisatie" },
  { to: "/missie-visie", key: "missie", group: "organisatie" },
  { to: "/vrouwen-jongeren", key: "vrouwen", primary: true, group: "werk" },
  { to: "/projecten", key: "projecten", primary: true, group: "werk" },
  { to: "/internationale-samenwerking", key: "internationaal", group: "werk" },
  { to: "/nieuws", key: "nieuws", primary: true, group: "werk" },
  { to: "/evenementen", key: "evenementen", primary: true, group: "werk" },
  { to: "/kennisbank", key: "kennisbank", group: "werk" },
  { to: "/partners", key: "partners", group: "meedoen" },
  { to: "/vrijwilligers", key: "vrijwilligers", group: "meedoen" },
  { to: "/doneren", key: "doneren", group: "meedoen" },
  { to: "/contact", key: "contact", primary: true, group: "meedoen" },
];

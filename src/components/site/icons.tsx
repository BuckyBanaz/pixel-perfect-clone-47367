import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { className?: string };

function base(props: IconProps) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...props,
  };
}

/** The chakra wheel — the symbol on the Roma flag. Used as brand mark. */
export function IconWheelMark(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="8.2" />
      <circle cx="12" cy="12" r="2" />
      <path d="M12 3.8v3.6M12 16.6v3.6M3.8 12h3.6M16.6 12h3.6" />
      <path d="M6.2 6.2 8.7 8.7M15.3 15.3l2.5 2.5M17.8 6.2 15.3 8.7M8.7 15.3 6.2 17.8" />
    </svg>
  );
}

export function IconHandsCircle(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="8" cy="7.5" r="2.6" />
      <circle cx="16" cy="7.5" r="2.6" />
      <path d="M3.2 19c0-3 2.2-5.2 4.8-5.2s4.8 2.2 4.8 5.2" />
      <path d="M11.2 19c0-3 2.2-5.2 4.8-5.2s4.8 2.2 4.8 5.2" />
    </svg>
  );
}

export function IconMegaphone(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 10.5v3a1.8 1.8 0 0 0 1.8 1.8h1.4L19 20V4L7.2 8.7H5.8A1.8 1.8 0 0 0 4 10.5Z" />
      <path d="M7.4 15.4 8.6 21h2.8l-1-5.6" />
    </svg>
  );
}

export function IconOpenBook(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 6.4C10.3 5 8.3 4.4 5 4.4v13c3.3 0 5.3.6 7 2 1.7-1.4 3.7-2 7-2v-13c-3.3 0-5.3.6-7 2Z" />
      <path d="M12 6.4v13" />
    </svg>
  );
}

export function IconGlobeEurope(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="8.4" />
      <path d="M3.6 12h16.8" />
      <path d="M12 3.6c2.3 2.4 3.5 5.3 3.5 8.4S14.3 18 12 20.4C9.7 18 8.5 15.1 8.5 12S9.7 6 12 3.6Z" />
    </svg>
  );
}

export function IconHeartHand(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 9.6 10.8 8.4a2.4 2.4 0 0 0-3.4 3.4l4.6 4.5 4.6-4.5a2.4 2.4 0 0 0-3.4-3.4Z" />
      <path d="M4 19.6c2 1 4.6 1.4 8 1.4s6-.4 8-1.4" />
    </svg>
  );
}

export function IconSpark(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3.4c.9 4.3 2.3 5.7 6.6 6.6-4.3.9-5.7 2.3-6.6 6.6-.9-4.3-2.3-5.7-6.6-6.6 4.3-.9 5.7-2.3 6.6-6.6Z" />
      <path d="M17.6 16.4c.4 1.7 1 2.3 2.8 2.8-1.8.4-2.4 1-2.8 2.8-.4-1.8-1-2.4-2.8-2.8 1.8-.5 2.4-1.1 2.8-2.8Z" />
    </svg>
  );
}

export function IconShield(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3.2 5 5.8v5.4c0 4.2 2.9 7.6 7 9.6 4.1-2 7-5.4 7-9.6V5.8Z" />
      <path d="m9 12 2.2 2.2L15.2 10" />
    </svg>
  );
}

export function IconCalendar(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3.4" y="5.2" width="17.2" height="15.4" rx="2.4" />
      <path d="M3.4 10h17.2M8.4 3.4v3.4M15.6 3.4v3.4" />
    </svg>
  );
}

export function IconNews(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 5.4h12.6v13.2a2 2 0 0 0 2 2H6a2 2 0 0 1-2-2Z" />
      <path d="M16.6 8.4H20v10.2a2 2 0 0 1-3.4 1.4" />
      <path d="M6.8 8.8h7M6.8 12h7M6.8 15.2h4.4" />
    </svg>
  );
}

export function IconMail(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="5.6" width="18" height="12.8" rx="2.4" />
      <path d="m3.8 7 7.1 5.4a1.8 1.8 0 0 0 2.2 0L20.2 7" />
    </svg>
  );
}

export function IconPin(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 21s6.6-5.8 6.6-11A6.6 6.6 0 0 0 5.4 10c0 5.2 6.6 11 6.6 11Z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}

export function IconHandshake(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m2.8 12.6 3.6-3.6 3 .8 2.6-1.6 2.6 1.6 3-.8 3.6 3.6" />
      <path d="m8.4 13.4 2.4 2.4 1.6-1.4 2 1.8 1.6-1.4 2.6 2.2" />
      <path d="M2.8 12.6 6 16M21.2 12.6 18 16" />
    </svg>
  );
}

export function IconFilm(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="5.4" width="18" height="13.2" rx="2.2" />
      <path d="M7.4 5.4v13.2M16.6 5.4v13.2M3 12h18M3 8.7h4.4M3 15.3h4.4M16.6 8.7H21M16.6 15.3H21" />
    </svg>
  );
}

export function IconGraduation(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 4 2.8 8.4 12 12.8l9.2-4.4Z" />
      <path d="M6.6 10.8v4.6c0 1.6 2.4 3 5.4 3s5.4-1.4 5.4-3v-4.6M21.2 8.4v5.6" />
    </svg>
  );
}

export function IconLeaf(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M20 4.4c-9 0-14.4 3.6-14.4 9.4 0 2 .7 3.7 1.8 4.9C9.6 15.2 13 12.4 17.6 11c-3.6 1.8-6.6 4.6-8.4 8.4 1 .5 2.2.8 3.4.8 5 0 7.4-5.6 7.4-15.8Z" />
    </svg>
  );
}

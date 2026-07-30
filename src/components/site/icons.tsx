import type { SVGProps } from "react";

/**
 * Hand-drawn editorial line icons, custom-made for Events of Women.
 * Single stroke weight, rounded caps, slightly organic geometry so they read
 * as illustration rather than a generic icon set.
 */

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export function IconTeacup(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6.5 12h15v5.5c0 3.9-3.2 7-7.2 7h-.6c-4 0-7.2-3.1-7.2-7V12Z" />
      <path d="M21.5 13.5h2.2a3 3 0 0 1 0 6h-2.2" />
      <path d="M5 27h19" />
      <path d="M12 8.5c1.6-1 1.6-2.4 0-3.5M16.5 8.5c1.6-1 1.6-2.4 0-3.5" />
    </svg>
  );
}

export function IconCircleOfWomen(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="10" cy="11" r="3.2" />
      <circle cx="22" cy="11" r="3.2" />
      <path d="M4 24c0-3.6 2.7-6.2 6-6.2s6 2.6 6 6.2" />
      <path d="M16 24c0-3.6 2.7-6.2 6-6.2s6 2.6 6 6.2" />
    </svg>
  );
}

export function IconBloom(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M16 15c-3.6-2-5.4-4.4-4.6-6.6.8-2.1 3.6-2.2 4.6.6 1-2.8 3.8-2.7 4.6-.6.8 2.2-1 4.6-4.6 6.6Z" />
      <path d="M16 15c-2 3.4-5 4.8-6.9 3.6-1.9-1.2-1-3.8 1.9-4.2" />
      <path d="M16 15c2 3.4 5 4.8 6.9 3.6 1.9-1.2 1-3.8-1.9-4.2" />
      <path d="M16 15v12" />
    </svg>
  );
}

export function IconBrush(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M23.5 5.5c1.6 1.6 1.6 3.6 0 5.2l-8.4 8.4-5.2-5.2 8.4-8.4c1.6-1.6 3.6-1.6 5.2 0Z" />
      <path d="M9.9 13.9 6 17.8c-1.4 1.4-1.2 3.5.2 4.8" />
      <path d="M6.2 22.6c2.4 2.3 6.2 2 8-.8" />
    </svg>
  );
}

export function IconOpenBook(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M16 9.5C13.6 7.9 10.9 7.2 7 7.4v15c3.9-.3 6.6.4 9 2 2.4-1.6 5.1-2.3 9-2v-15c-3.9-.2-6.6.5-9 2.1Z" />
      <path d="M16 9.5v15" />
    </svg>
  );
}

export function IconToast(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 6h7l-1.6 6.2A2.9 2.9 0 0 1 8.6 14 2.9 2.9 0 0 1 5.8 12L4.5 6" />
      <path d="M9.4 14v9M6.4 23h6" />
      <path d="M19 6h7l-1.3 6a2.9 2.9 0 0 1-2.8 2.1 2.9 2.9 0 0 1-2.8-2.1L17.5 6" />
      <path d="M21.9 14.1V23M19 23h6" />
    </svg>
  );
}

export function IconLeafLine(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M25 6c0 9.4-4.8 15.2-12 15.2-3 0-5-1.4-5-4.2C8 10.6 15.2 6.6 25 6Z" />
      <path d="M22 9C15.5 12 10.5 18 7.5 26" />
    </svg>
  );
}

export function IconShieldHeart(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M16 4.5 26 8v7.4c0 5.5-4 10.3-10 12.1-6-1.8-10-6.6-10-12.1V8l10-3.5Z" />
      <path d="M16 20.5c-2.6-1.7-4.2-3.2-4.2-5a2.1 2.1 0 0 1 4.2-1 2.1 2.1 0 0 1 4.2 1c0 1.8-1.6 3.3-4.2 5Z" />
    </svg>
  );
}

export function IconSparkleStar(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M16 4c.9 6 2.6 8.3 9 9-6.4.7-8.1 3-9 9-.9-6-2.6-8.3-9-9 6.4-.7 8.1-3 9-9Z" />
      <path d="M25.5 20.5c.4 2.4 1 3.3 3.5 3.6-2.5.3-3.1 1.2-3.5 3.6-.4-2.4-1-3.3-3.5-3.6 2.5-.3 3.1-1.2 3.5-3.6Z" />
    </svg>
  );
}

export function IconLinkedHearts(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12.5 22c-4-2.6-6.4-5-6.4-7.8A3.2 3.2 0 0 1 12.5 12a3.2 3.2 0 0 1 6.4 2.2c0 2.8-2.4 5.2-6.4 7.8Z" />
      <path d="M19.5 20c3.8-2.6 6.2-5 6.2-7.7A3.1 3.1 0 0 0 19.5 10" />
    </svg>
  );
}

export function IconCamera(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 11.5h4.4l1.8-3h9.6l1.8 3H27a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1Z" />
      <circle cx="16" cy="18" r="4.3" />
    </svg>
  );
}

export function IconFloralMark(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M16 6c2.6 1.5 3.6 3.6 2.6 5.6-1 2-3.4 2.4-5.2 1.1" />
      <path d="M16 6c-2.6 1.5-3.6 3.6-2.6 5.6 1 2 3.4 2.4 5.2 1.1" />
      <path d="M9.5 14.5c2.7-.6 4.7.3 5.2 2.3.5 2-1 3.7-3.2 3.9" />
      <path d="M22.5 14.5c-2.7-.6-4.7.3-5.2 2.3-.5 2 1 3.7 3.2 3.9" />
      <path d="M16 17.5V27" />
    </svg>
  );
}

export const categoryIcons = {
  tea: IconTeacup,
  networking: IconCircleOfWomen,
  wellness: IconBloom,
  workshops: IconBrush,
  books: IconOpenBook,
  celebrations: IconToast,
  lifestyle: IconLeafLine,
} as const;

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** how the element enters */
  from?: "up" | "left" | "right" | "scale";
  as?: "div" | "section" | "article" | "li";
};

const hiddenMap: Record<NonNullable<RevealProps["from"]>, string> = {
  up: "translate-y-8",
  left: "-translate-x-8",
  right: "translate-x-8",
  scale: "scale-[0.96]",
};

export function Reveal({
  children,
  delay = 0,
  className = "",
  from = "up",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        shown ? "opacity-100 translate-y-0 translate-x-0 scale-100" : `opacity-0 ${hiddenMap[from]}`
      } ${className}`}
    >
      {children}
    </Tag>
  );
}

import { useEffect, useRef, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import * as LottieModule from "lottie-react";
import loaderAnimation from "./loader-lottie.json";

const Lottie = ((LottieModule as unknown as { default?: unknown }).default ??
  LottieModule) as React.ComponentType<{
  animationData: unknown;
  loop?: boolean;
  className?: string;
}>;

const MIN_VISIBLE_MS = 650;

export function RouteTransition() {
  const isNavigating = useRouterState({
    select: (s) => s.isLoading || s.isTransitioning || s.status === "pending",
  });
  const [visible, setVisible] = useState(false);
  const shownAt = useRef(0);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;

    if (isNavigating) {
      shownAt.current = Date.now();
      setVisible(true);
    } else if (visible) {
      const elapsed = Date.now() - shownAt.current;
      timer = setTimeout(() => setVisible(false), Math.max(0, MIN_VISIBLE_MS - elapsed));
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isNavigating, visible]);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading page"
      className="fixed inset-0 z-[100] grid place-items-center bg-background/80 backdrop-blur-sm animate-fade-in"
    >
      <div className="flex flex-col items-center gap-4">
        <Lottie animationData={loaderAnimation} loop className="size-28 sm:size-32" />
        <span className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
          Loading
        </span>
      </div>
    </div>
  );
}

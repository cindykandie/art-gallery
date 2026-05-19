"use client";

import { useEffect, useRef } from "react";

type TrackFn = (event: string, props: Record<string, unknown>) => void;

export function useScrollDepth(track: TrackFn, story: string) {
  const fired = useRef(new Set<number>());

  useEffect(() => {
    const checkpoints = [25, 50, 75, 100];

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const pct = Math.min(100, Math.round((scrollTop / docHeight) * 100));

      for (const cp of checkpoints) {
        if (pct >= cp && !fired.current.has(cp)) {
          fired.current.add(cp);
          track("scroll_depth", { percent: cp, story });
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [track, story]);
}

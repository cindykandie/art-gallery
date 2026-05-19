"use client";

import { useEffect, useMemo, useState } from "react";

export const heartPalette = ["❤️", "🧡", "💛", "💚", "💙", "💜", "🤎"];

export const instagramUrl = "https://www.instagram.com/paintedbycindyk";
export const emailHref = "mailto:paintedbycindyk@gmail.com";

export function useCindyIdentity() {
  const [heart, setHeart] = useState(heartPalette[0]);

  useEffect(() => {
    setHeart(heartPalette[Math.floor(Math.random() * heartPalette.length)]);
  }, []);

  const cindyName = useMemo(() => `Cindy${heart}`, [heart]);

  return { cindyName };
}

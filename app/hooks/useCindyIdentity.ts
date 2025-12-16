"use client";

import { useEffect, useMemo, useState } from "react";

export const heartPalette = ["❤️", "🧡", "💛", "💚", "💙", "💜", "🤎"];

export function useCindyIdentity() {
  const [heart, setHeart] = useState(heartPalette[0]);

  useEffect(() => {
    setHeart(heartPalette[Math.floor(Math.random() * heartPalette.length)]);
  }, []);

  const cindyName = useMemo(() => `Cindy${heart}`, [heart]);
  const whatsappLink = useMemo(
    () => (message: string) =>
      `https://wa.me/254700000000?text=${encodeURIComponent(message)}`,
    [],
  );

  return { cindyName, whatsappLink };
}

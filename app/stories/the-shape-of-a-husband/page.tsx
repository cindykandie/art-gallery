"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import SiteHeader from "../../components/SiteHeader";
import { useCindyIdentity } from "../../hooks/useCindyIdentity";
import { AboutSection } from "./components/AboutSection";
import { AmbientControls } from "./components/AmbientControls";
import { AtmosphericSection } from "./components/AtmosphericSection";
import { ExcerptSection } from "./components/ExcerptSection";
import { FullStorySection } from "./components/FullStorySection";
import { GrainOverlay } from "./components/GrainOverlay";
import { HeroSection } from "./components/HeroSection";
import { ReactionCards } from "./components/ReactionCards";
import { ReadingProgress } from "./components/ReadingProgress";
import { StoryFooter } from "./components/StoryFooter";
import { useAmbientAudio } from "./hooks/useAmbientAudio";
import { useScrollDepth } from "./hooks/useScrollDepth";

export default function ShapeOfAHusbandPage() {
  const { cindyName } = useCindyIdentity();
  const excerptRef = useRef<HTMLDivElement>(null);
  const fullStoryRef = useRef<HTMLDivElement>(null);
  const [grainVisible, setGrainVisible] = useState(false);
  const { playing: rainPlaying, toggle: toggleRain } = useAmbientAudio();

  // --- PostHog analytics (optional — set NEXT_PUBLIC_POSTHOG_KEY in .env) ---
  const posthogRef = useRef<{ capture: (e: string, p?: Record<string, unknown>) => void } | null>(null);

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!key) return;
    import("posthog-js").then(({ default: ph }) => {
      if (!ph.__loaded) {
        ph.init(key, {
          api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com",
          person_profiles: "identified_only",
        });
      }
      posthogRef.current = ph;
      ph.capture("story_page_view", { story: "the-shape-of-a-husband" });
    });
  }, []);

  const track = useCallback((event: string, props: Record<string, unknown> = {}) => {
    posthogRef.current?.capture(event, props);
  }, []);

  useScrollDepth(track, "the-shape-of-a-husband");

  // --- Scroll helpers ---
  const scrollToExcerpt = useCallback(() => {
    excerptRef.current?.scrollIntoView({ behavior: "smooth" });
    track("click_read_excerpt");
  }, [track]);

  const scrollToFullStory = useCallback(() => {
    fullStoryRef.current?.scrollIntoView({ behavior: "smooth" });
    track("click_read_full_story");
  }, [track]);

  return (
    <div className="relative min-h-screen">
      <ReadingProgress />
      <GrainOverlay visible={grainVisible} />

      {/* Site header — floats over the hero with light colour overrides */}
      <div
        className="absolute top-0 left-0 right-0 z-20"
        style={{
          ["--color-cocoa" as string]: "#F6F1EB",
          ["--color-ink" as string]: "#F6F1EB",
          ["--color-border-soft" as string]: "rgba(246,241,235,0.25)",
          ["--color-shadow-soft" as string]: "rgba(0,0,0,0.25)",
          ["--color-canvas" as string]: "rgba(246,241,235,0.08)",
          ["--color-blush" as string]: "rgba(230,166,176,0.5)",
        }}
      >
        <div className="mx-auto max-w-6xl px-6 pt-12 sm:px-10 sm:pt-16">
          <SiteHeader cindyName={cindyName} />
        </div>
      </div>

      {/* Hero */}
      <HeroSection
        onReadExcerpt={scrollToExcerpt}
        onReadFullStory={scrollToFullStory}
      />

      {/* Atmospheric quote */}
      <AtmosphericSection />

      {/* About */}
      <AboutSection />

      {/* Thin divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#2a2420] to-transparent" />
      </div>

      {/* Excerpt */}
      <div ref={excerptRef}>
        <ExcerptSection
          onReadFullStory={scrollToFullStory}
          onComplete={() => track("excerpt_read_complete")}
        />
      </div>

      {/* Thin divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#2a2420] to-transparent" />
      </div>

      {/* Full story */}
      <div ref={fullStoryRef}>
        <FullStorySection
          onComplete={() => track("full_story_read_complete")}
        />
      </div>

      {/* Reader reactions */}
      <ReactionCards />

      {/* Footer */}
      <StoryFooter />

      {/* Ambient controls */}
      <AmbientControls
        rainPlaying={rainPlaying}
        onToggleRain={toggleRain}
        grainVisible={grainVisible}
        onToggleGrain={() => setGrainVisible((v) => !v)}
      />
    </div>
  );
}

"use client";

import { useCallback, useRef, useState } from "react";

export function useAmbientAudio() {
  const [playing, setPlaying] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<AudioBufferSourceNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  const buildBrownNoise = (ctx: AudioContext): AudioBufferSourceNode => {
    const bufferSize = 2 * ctx.sampleRate;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      data[i] = (last + 0.02 * white) / 1.02;
      last = data[i];
      data[i] *= 3.5;
    }
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.loop = true;
    return source;
  };

  const toggle = useCallback(() => {
    if (playing) {
      gainRef.current?.gain.setTargetAtTime(0, ctxRef.current!.currentTime, 0.5);
      setTimeout(() => {
        sourceRef.current?.stop();
        ctxRef.current?.close();
        ctxRef.current = null;
        sourceRef.current = null;
      }, 800);
      setPlaying(false);
    } else {
      const ctx = new AudioContext();
      const gain = ctx.createGain();
      gain.gain.value = 0;
      gain.connect(ctx.destination);

      const source = buildBrownNoise(ctx);
      source.connect(gain);
      source.start();

      gain.gain.setTargetAtTime(0.07, ctx.currentTime, 1.5);

      ctxRef.current = ctx;
      sourceRef.current = source;
      gainRef.current = gain;
      setPlaying(true);
    }
  }, [playing]);

  return { playing, toggle };
}

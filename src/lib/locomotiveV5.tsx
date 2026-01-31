"use client";

import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export function useLocomotiveV5(containerRef: React.RefObject<HTMLElement>) {
  const locoRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    locoRef.current = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      lerp: 0.08,
    });

    // ✅ v5 uses resize(), not update()
    const t = setTimeout(() => {
      locoRef.current?.resize();
    }, 600);

    return () => {
      clearTimeout(t);
      locoRef.current?.destroy();
      locoRef.current = null;
    };
  }, []);

  return locoRef;
}

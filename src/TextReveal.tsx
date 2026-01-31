"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface TextAniProps {
  children: React.ReactNode;
  animateOnScroll?: boolean;
  blockColor?: string;
  stagger?: number;
  duration?: number;
  delay?: number;
}

export default function TextAni({
  children,
  animateOnScroll = true,
  blockColor = "#fff",
  stagger = 0.15,
  duration = 0.75,
  delay = 0,
  className,
}: TextAniProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current || typeof window === "undefined") return;

      // ✅ Inject styles (unchanged)
      if (!document.getElementById("text-ani-styles")) {
        const style = document.createElement("style");
        style.id = "text-ani-styles";
        style.innerHTML = `
          .block-line-wrapper {
            margin: 0 auto;
            position: relative;
            width: max-content;
            display: block;
          }

          .block-line {
            position: relative;
            display: block;
          }

          .block-revealer {
            position: absolute;
            top: 0;
            left: 0;
            width: 101%;
            height: 101%;
            pointer-events: none;
            will-change: transform;
            z-index: 2;
          }
        `;
        document.head.appendChild(style);
      }

      const split = SplitText.create(containerRef.current, {
        type: "lines",
        linesClass: "block-line",
      });

      const parentAlign = window.getComputedStyle(
        containerRef.current
      ).textAlign;

      const lines: HTMLElement[] = [];
      const blocks: HTMLElement[] = [];

      split.lines.forEach((line) => {
        const wrapper = document.createElement("div");
        wrapper.className = "block-line-wrapper";

        // 🎯 Preserve original text alignment
        if (parentAlign === "left" || parentAlign === "start") {
          wrapper.style.marginLeft = "0";
          wrapper.style.marginRight = "auto";
        } else if (parentAlign === "right" || parentAlign === "end") {
          wrapper.style.marginLeft = "auto";
          wrapper.style.marginRight = "0";
        } else {
          // center / justify
          wrapper.style.marginLeft = "auto";
          wrapper.style.marginRight = "auto";
        }

        line.parentNode?.insertBefore(wrapper, line);
        wrapper.appendChild(line);

        const block = document.createElement("div");
        block.className = "block-revealer";
        block.style.backgroundColor = blockColor;
        block.style.transform = "scaleX(0)";
        block.style.transformOrigin = "left center";

        wrapper.appendChild(block);

        lines.push(line);
        blocks.push(block);
      });

      gsap.set(lines, { opacity: 0 });

      const tl = gsap.timeline({
        delay,
        scrollTrigger: animateOnScroll
          ? {
              trigger: containerRef.current,
              start: "top 85%",
              once: true,
            }
          : undefined,
      });

      blocks.forEach((block, i) => {
        tl.to(
          block,
          {
            scaleX: 1,
            duration,
            ease: "power4.inOut",
          },
          i * stagger
        )
          .set(lines[i], { opacity: 1 })
          .set(block, { transformOrigin: "right center" })
          .to(block, {
            scaleX: 0,
            duration,
            ease: "power4.inOut",
          });
      });

      return () => {
        split.revert();
        tl.kill();
      };
    },
    {
      scope: containerRef,
      dependencies: [blockColor, stagger, duration, delay, animateOnScroll],
    }
  );

  return (
    <div className={className} ref={containerRef}>
      {children}
    </div>
  );
}

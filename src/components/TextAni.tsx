"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

type TextAniProps = {
  children: React.ReactNode;
  animateOnScroll?: boolean;
  delay?: number;
  blockColor?: string;
  stagger?: number;
  duration?: number;
};

const TextAni = ({
  children,
  animateOnScroll = true,
  delay = 0,
  blockColor = "#7c3aed",
  stagger = 0.15,
  duration = 0.75,
}: TextAniProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const splitRef = useRef<any[]>([]);
  const lines = useRef<HTMLElement[]>([]);
  const blocks = useRef<HTMLElement[]>([]);

  useGSAP(
    () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!containerRef.current) return;

          splitRef.current = [];
          lines.current = [];
          blocks.current = [];

          const containerStyles = window.getComputedStyle(containerRef.current);
          const textAlign = containerStyles.textAlign;

          const elements = Array.from(containerRef.current.children);

          elements.forEach((el) => {
            const split = SplitText.create(el, {
              type: "lines",
              linesClass: "block-line",
              lineThreshold: 0.1,
            });

            splitRef.current.push(split);

            split.lines.forEach((line) => {
              /* ───────── Wrapper (shrink-wrap text, crop-safe) ───────── */
              const wrapper = document.createElement("div");
              wrapper.style.position = "relative";
              wrapper.style.display = "inline-block";
              wrapper.style.overflow = "hidden";
              wrapper.style.verticalAlign = "top";
              wrapper.style.textAlign = textAlign;

              /* 🔥 Prevent glyph cropping */
              wrapper.style.padding = "0.18em 0";

              line.parentNode?.insertBefore(wrapper, line);
              wrapper.appendChild(line);

              /* ───────── Line must not stretch ───────── */
              line.style.display = "inline-block";
              line.style.width = "auto";

              /* ───────── Reveal block ───────── */
              const block = document.createElement("div");
              block.style.position = "absolute";
              block.style.left = "0";

              /* 🔥 Match padding so reveal stays perfect */
              block.style.top = "-0.18em";
              block.style.height = "calc(100% + 0.36em)";

              block.style.width = "100%";
              block.style.backgroundColor = blockColor;
              block.style.pointerEvents = "none";
              block.style.transformOrigin = "left center";
              block.style.zIndex = "2";

              wrapper.appendChild(block);

              lines.current.push(line);
              blocks.current.push(block);
            });
          });

          /* ───────── Initial state ───────── */
          gsap.set(lines.current, { opacity: 0 });
          gsap.set(blocks.current, { scaleX: 0 });

          const animateLine = (
            block: HTMLElement,
            line: HTMLElement,
            index: number
          ) => {
            return gsap
              .timeline({ delay: delay + index * stagger })
              .to(block, {
                scaleX: 1,
                duration,
                ease: "power4.inOut",
              })
              .set(line, { opacity: 1 })
              .set(block, { transformOrigin: "right center" })
              .to(block, {
                scaleX: 0,
                duration,
                ease: "power4.inOut",
              });
          };

          /* ───────── Scroll or immediate animation ───────── */
          if (animateOnScroll) {
            blocks.current.forEach((block, i) => {
              const tl = animateLine(block, lines.current[i], i);
              tl.pause();

              ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top 90%",
                once: true,
                onEnter: () => tl.play(),
              });
            });
          } else {
            blocks.current.forEach((block, i) =>
              animateLine(block, lines.current[i], i)
            );
          }

          /* ───────── Cleanup ───────── */
          return () => {
            splitRef.current.forEach((split) => split?.revert());

            const wrappers = containerRef.current?.querySelectorAll(
              "div[style*='overflow']"
            );

            wrappers?.forEach((wrapper: any) => {
              if (wrapper.firstChild && wrapper.parentNode) {
                wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
                wrapper.remove();
              }
            });
          };
        });
      });
    },
    {
      scope: containerRef,
      dependencies: [animateOnScroll, delay, blockColor, stagger, duration],
    }
  );
  return <div ref={containerRef}>{children}</div>;
};

export default TextAni;

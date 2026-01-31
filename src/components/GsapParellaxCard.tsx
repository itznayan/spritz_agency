"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ServiceCard } from "./ServiceCard";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  icon: any;
  title: string;
  description: string;
  speed?: number; // 0.2 → 0.5 recommended
};

export function GsapParallaxCard({
  icon,
  title,
  description,
  speed = 1,
}: Props) {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      cardRef.current,
      { y: 0 },
      {
        y: () => -window.innerHeight * speed,
        ease: "none",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div ref={cardRef}>
      <ServiceCard
        icon={icon}
        title={title}
        description={description}
        delay={0}
      />
    </div>
  );
}

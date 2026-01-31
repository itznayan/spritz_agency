"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Globe, Instagram, TrendingUp } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 🚫 Disable pin/parallax on mobile
      if (window.innerWidth < 768) return;

      /* -------------------------
         CARD 2 → PIN + HOLD
      -------------------------- */
      gsap
        .timeline({
          scrollTrigger: {
            trigger: card2Ref.current,
            start: "top center",
            end: "+=500", // 👈 how long card 2 stays
            scrub: true,
            pin: true,
            pinSpacing: true,
          },
        })
        .fromTo(
          card2Ref.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, ease: "none" }
        );

      /* -------------------------
         CARD 3 → ENTER WHILE 2 IS PINNED
      -------------------------- */
      gsap.fromTo(
        card3Ref.current,
        { y: 140, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: card3Ref.current,
            start: "top 85%",
            end: "top 60%",
            scrub: true,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative mt-32 space-y-40 overflow-hidden"
    >
      {/* ---------------- CARD 1 ---------------- */}
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6">
          <ServiceCard
            icon={Globe}
            title="Web Development"
            description="A stunning, mobile-optimized website that showcases your menu, location, and atmosphere perfectly."
            delay={0}
          />
        </div>
      </div>

      {/* ---------------- CARD 2 (PINNED) ---------------- */}
      <div ref={card2Ref} className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6 md:col-start-7">
          <ServiceCard
            icon={Instagram}
            title="4 Reels Per Month"
            description="High-quality, engaging video content filmed on-site to keep your social media buzzing and growing."
            delay={0.1}
          />
        </div>
      </div>

      {/* ---------------- CARD 3 ---------------- */}
      <div ref={card3Ref} className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6">
          <ServiceCard
            icon={TrendingUp}
            title="Growth Strategy"
            description="Monthly analytics reports and strategy sessions to ensure we're reaching your target customers."
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
}

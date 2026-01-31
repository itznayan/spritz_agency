"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TextAni from "@/components/TextAni";

gsap.registerPlugin(ScrollTrigger);

const BLOCK_COLORS = {
  card1: "#fbbf24",
  card2: "#0f766e",
  card3: "#166534",
  card4: "#5b21b6",
};

const ServiceAni = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      /* ─────────────────────────────────────────────
         🔥 SLOW SCROLL ONLY WHILE SECTION IS ACTIVE
      ───────────────────────────────────────────── */
      ScrollTrigger.create({
        trigger: container.current,
        start: "top top",
        end: "bottom bottom",
        onEnter: () =>
          ScrollTrigger.normalizeScroll({
            momentum: 0.15, // 🔥 slow
            allowNestedScroll: true,
          }),
        onEnterBack: () =>
          ScrollTrigger.normalizeScroll({
            momentum: 0.15,
            allowNestedScroll: true,
          }),
        onLeave: () => ScrollTrigger.normalizeScroll(true), // reset
        onLeaveBack: () => ScrollTrigger.normalizeScroll(true),
      });

      /* ─────────────────────────────────────────────
         CARD STACK ANIMATIONS (UNCHANGED)
      ───────────────────────────────────────────── */
      const cards = gsap.utils.toArray<HTMLElement>(".card");

      cards.forEach((card, index) => {
        if (index === cards.length - 1) return;

        const cardInner = card.querySelector<HTMLElement>(".card-inner");
        if (!cardInner) return;

        gsap.fromTo(
          cardInner,
          {
            y: "0%",
            z: 0,
            opacity: 1,
            rotateX: 0,
          },
          {
            y: "-50%",
            z: -250,
            rotateX: 45,
            scale: 0.95,
            scrollTrigger: {
              trigger: cards[index + 1],
              start: "top 95%",
              end: "+=150%", // holds longer = feels slower
              scrub: 2, // smooth response
              pin: card,
              pinSpacing: false,
            },
          }
        );

        gsap.to(cardInner, {
          "--after-opacity": 0.4,
          scrollTrigger: {
            trigger: cards[index + 1],
            start: "top 75%",
            end: "top -25%",
            scrub: 2,
          },
        });

        gsap.to(cardInner, {
          opacity: 0,
          scrollTrigger: {
            trigger: cards[index + 1],
            start: "top -25%",
            end: "top -25%",
            scrub: 2,
          },
        });
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="sticky-card">
      {/* CARD 1 */}
      <div className="card" id="card-1">
        <div className="card-inner">
          <div className="card-info text-zinc-200">
            <TextAni delay={0.75} blockColor={BLOCK_COLORS.card1}>
              <p>High-performance, scalable websites</p>
            </TextAni>
          </div>

          <div className="card-title text-zinc-200">
            <TextAni delay={0.75} blockColor={BLOCK_COLORS.card1}>
              <h1>Web Development</h1>
            </TextAni>
          </div>

          <div className="card-desc text-zinc-100">
            <TextAni blockColor={BLOCK_COLORS.card1}>
              <p>
                We build fast, SEO-friendly, and fully responsive websites using
                modern frameworks like React and Next.js, focused on performance
                and scalability.
              </p>
            </TextAni>
          </div>

          <div className="card-img">
            <img src="/images/web.jpg" alt="Web Development" />
          </div>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="card" id="card-2">
        <div className="card-inner">
          <div className="card-info">
            <TextAni blockColor={BLOCK_COLORS.card2}>
              <p>Professional photo & video shoots</p>
            </TextAni>
          </div>

          <div className="card-title">
            <TextAni blockColor={BLOCK_COLORS.card2}>
              <h1>Content Creation</h1>
            </TextAni>
          </div>

          <div className="card-desc">
            <TextAni blockColor={BLOCK_COLORS.card2}>
              <p>
                We visit your location monthly to capture high-quality photo and
                video content, helping your brand stand out across social
                platforms.
              </p>
            </TextAni>
          </div>

          <div className="card-img">
            <img src="/images/content.jpg" alt="Content Creation" />
          </div>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="card" id="card-3">
        <div className="card-inner">
          <div className="card-info">
            <TextAni blockColor={BLOCK_COLORS.card3}>
              <p>Data-driven growth strategies</p>
            </TextAni>
          </div>

          <div className="card-title">
            <TextAni blockColor={BLOCK_COLORS.card3}>
              <h1>Analytics & Growth</h1>
            </TextAni>
          </div>

          <div className="card-desc">
            <TextAni blockColor={BLOCK_COLORS.card3}>
              <p>
                Data-driven insights and analytics to improve your reach,
                performance, and customer retention through informed
                decision-making.
              </p>
            </TextAni>
          </div>

          <div className="card-img">
            <img src="/images/growth.jpg" alt="Analytics & Growth" />
          </div>
        </div>
      </div>

      {/* CARD 4 */}
      <div className="card" id="card-4">
        <div className="card-inner">
          <div className="card-info text-zinc-200">
            <TextAni blockColor={BLOCK_COLORS.card4}>
              <p>Complete Instagram & Facebook handling</p>
            </TextAni>
          </div>

          <div className="card-title text-zinc-100">
            <TextAni blockColor={BLOCK_COLORS.card4}>
              <h1>Management</h1>
            </TextAni>
          </div>

          <div className="card-desc text-zinc-100">
            <TextAni blockColor={BLOCK_COLORS.card4}>
              <p>
                Complete handling of your Instagram and Facebook presence,
                including content posting, engagement, and growth-focused
                strategies.
              </p>
            </TextAni>
          </div>

          <div className="card-img">
            <img src="/images/analy.jpg" alt="Social Media Management" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAni;

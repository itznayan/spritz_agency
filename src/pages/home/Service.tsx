"use client";

import React, { useRef } from "react";
import { Globe, Instagram, TrendingUp } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ServiceCard } from "../../components/ServiceCard";
import TextAni from "../../components/TextAni";

interface ServiceCardData {
  icon: typeof Globe;
  title: string;
  description: string;
  alignment: "left" | "right";
}

const Service = () => {
  const serviceCards: ServiceCardData[] = [
    {
      icon: Globe,
      title: "Custom Website",
      description:
        "A modern, mobile-optimized website designed to showcase your brand, services, and value clearly and effectively.",
      alignment: "left",
    },
    {
      icon: Instagram,
      title: "4 Reels Per Month",
      description:
        "High-quality, engaging video content filmed on-site to keep your social media buzzing and growing.",
      alignment: "right",
    },
    {
      icon: TrendingUp,
      title: "Growth Strategy",
      description:
        "Monthly analytics reports and strategy sessions to ensure we're reaching your target customers.",
      alignment: "left",
    },
  ];

  return (
    <section
      data-scroll
      data-scroll-speed="0.05"
      data-scroll-section
      className="py-32 bg-[#CC1E1A] overflow-hidden"
    >
      {/* ================= WRAPPER ================= */}
      <div className="max-w-7xl px-8 py-20 rounded-2xl mx-auto">
        {/* ================= HEADER ================= */}
        <div className="grid grid-cols-12 gap-6 mb-40 items-center">
          {/* LEFT */}
          <div className="col-span-12 lg:col-span-6 px-6 overflow-hidden">
            <div data-scroll data-scroll-speed="-0.2" data-scroll-opacity>
              <TextAni blockColor="#ddd">
                <h2 className="text-6xl font-inter text-zinc-210 font-bold mb-10">
                  What you’re missing by not being online?
                </h2>
              </TextAni>
              <TextAni blockColor="#ddd">
                <p className="text-3xl text-zinc-400">
                  Today, customers search online before they buy. Without a
                  professional website and active content, your business becomes
                  invisible even if your service is great. We help you stand
                  out, build trust, and turn online attention into real growth.
                </p>
              </TextAni>
            </div>
          </div>

          {/* RIGHT – IMAGE */}
          <div
            data-scroll
            data-scroll-speed="0.3"
            className="hidden lg:block lg:col-span-6"
          >
            <div className="sticky top-32">
              <div
                data-scroll
                data-scroll-speed="-0.25"
                data-scroll-opacity
                className="relative w-full "
              >
                <img
                  src="/images/serviceImg.png"
                  alt="Agency workspace"
                  className="w-full h-full object-cover scale-110"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 mb-40 items-center">
          {/* LEFT – IMAGE */}
          <div
            data-scroll
            data-scroll-speed="0.3"
            className="hidden lg:block lg:col-span-6 lg:col-start-1"
          >
            <div className="sticky top-32">
              <div
                data-scroll
                data-scroll-speed="-0.25"
                data-scroll-opacity
                className="relative w-full h-[70vh] rounded-2xl overflow-hidden"
              >
                <img
                  src="/images/serviceImgL.GIF"
                  alt="Agency workspace"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 px-6 overflow-hidden">
            <div data-scroll data-scroll-speed="-0.2" data-scroll-opacity>
              <TextAni blockColor="#ddd">
                <h2 className="text-6xl font-inter text-zinc-210 font-bold mb-10">
                  What we offer?
                </h2>
              </TextAni>
              <TextAni blockColor="#ddd">
                <p className="text-3xl text-zinc-400">
                  We design and develop modern websites that clearly represent
                  your brand and convert visitors into customers. But we don’t
                  stop there. We create engaging content that brings the right
                  audience to your brand driving people to your website where
                  your business builds trust and turns visits into real
                  opportunities.
                </p>
              </TextAni>
            </div>
          </div>
        </div>

        {/* ================= SERVICE CARDS ================= */}
        {serviceCards.map((card, index) => {
          const cardRef = useRef<HTMLDivElement>(null);

          // 🔥 Scroll progress for each card
          const { scrollYProgress } = useScroll({
            target: cardRef,
            offset: ["start 100%", "start 5%"],
          });

          // 🔥 Scroll-based transforms (WORK BOTH DIRECTIONS)
          const opacity = useTransform(scrollYProgress, [0.75, 1], [0.85, 1]);
          const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
          const x = useTransform(
            scrollYProgress,
            [0, 1],
            card.alignment === "left" ? [-200, 0] : [200, 0],
          );
          const scale = useTransform(scrollYProgress, [0, 1], [0.65, 1]);

          return (
            <div key={index} ref={cardRef} className="grid grid-cols-12 py-24">
              <motion.div
                style={{ opacity, x, y, scale }}
                className={`col-span-12 md:col-span-6 ${
                  card.alignment === "right" ? "md:col-start-7" : ""
                }`}
              >
                <ServiceCard
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                  alignment={card.alignment}
                />
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Service;

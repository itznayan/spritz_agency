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

const AnimatedServiceCard = ({ card }: { card: ServiceCardData }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 100%", "start 5%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.75, 1], [0.7, 0.9, 1]);

  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    card.alignment === "left" ? [-100, 0] : [100, 0],
  );

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <div
      ref={cardRef}
      className="grid grid-cols-12 py-10 sm:py-14 md:py-20 lg:py-24"
    >
      <motion.div
        style={{
          opacity,
          x,
          y,
          scale,
        }}
        className={`
          col-span-12
          md:col-span-7
          lg:col-span-6
          ${card.alignment === "right" ? "md:col-start-6 lg:col-start-7" : ""}
        `}
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
};

const Service = () => {
  return (
    <section
      data-scroll
      data-scroll-speed="0.05"
      data-scroll-section
      className="
        py-16
        sm:py-20
        md:py-24
        lg:py-32
        bg-[#CC1E1A]
        overflow-hidden
      "
    >
      <div
        className="
          w-full
          max-w-7xl
          mx-auto
          px-5
          sm:px-8
          lg:px-10
          xl:px-12
        "
      >
        {/* ================= HEADER ================= */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-12
            lg:gap-6
            mb-24
            md:mb-32
            lg:mb-40
            items-center
          "
        >
          {/* LEFT TEXT */}
          <div
            className="
              col-span-1
              lg:col-span-6
              lg:px-4
              overflow-hidden
            "
          >
            <div data-scroll data-scroll-speed="-0.2" data-scroll-opacity>
              <TextAni blockColor="#ddd">
                <h2
                  className="
                    text-4xl
                    sm:text-5xl
                    md:text-6xl
                    lg:text-6xl
                    xl:text-7xl
                    font-inter
                    font-bold
                    leading-[1.05]
                    tracking-tight
                    text-white
                    mb-6
                    md:mb-8
                    lg:mb-10
                  "
                >
                  What you’re missing by not being online?
                </h2>
              </TextAni>

              <TextAni blockColor="#ddd">
                <p
                  className="
                    text-lg
                    sm:text-xl
                    md:text-2xl
                    lg:text-3xl
                    leading-relaxed
                    text-zinc-200
                    max-w-2xl
                  "
                >
                  Today, customers search online before they buy. Without a
                  professional website and active content, your business becomes
                  invisible even if your service is great. We help you stand
                  out, build trust, and turn online attention into real growth.
                </p>
              </TextAni>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            data-scroll
            data-scroll-speed="0.3"
            className="
              col-span-1
              lg:col-span-6
              w-full
            "
          >
            <div className="relative w-full overflow-hidden rounded-xl md:rounded-2xl">
              <img
                src="/images/serviceImg.png"
                alt="Agency workspace"
                className="
                  w-full
                  h-auto
                  min-h-[280px]
                  sm:min-h-[350px]
                  md:min-h-[400px]
                  lg:min-h-[500px]
                  object-cover
                  object-center
                  lg:scale-110
                "
              />
            </div>
          </div>
        </div>

        {/* ================= SECOND SECTION ================= */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-12
            lg:gap-6
            mb-24
            md:mb-32
            lg:mb-40
            items-center
          "
        >
          {/* LEFT IMAGE */}
          <div
            data-scroll
            data-scroll-speed="0.3"
            className="
              col-span-1
              lg:col-span-6
              w-full
              order-2
              lg:order-1
            "
          >
            <div className="relative w-full overflow-hidden rounded-xl md:rounded-2xl">
              <img
                src="/images/serviceImgL.GIF"
                alt="Agency workspace"
                className="
                  w-full
                  h-[300px]
                  sm:h-[400px]
                  md:h-[500px]
                  lg:h-[65vh]
                  max-h-[700px]
                  object-cover
                  object-top
                "
              />
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div
            className="
              col-span-1
              lg:col-span-6
              lg:col-start-7
              lg:px-4
              overflow-hidden
              order-1
              lg:order-2
            "
          >
            <div data-scroll data-scroll-speed="-0.2" data-scroll-opacity>
              <TextAni blockColor="#ddd">
                <h2
                  className="
                    text-4xl
                    sm:text-5xl
                    md:text-6xl
                    lg:text-6xl
                    xl:text-7xl
                    font-inter
                    font-bold
                    leading-[1.05]
                    tracking-tight
                    text-white
                    mb-6
                    md:mb-8
                    lg:mb-10
                  "
                >
                  What we offer?
                </h2>
              </TextAni>

              <TextAni blockColor="#ddd">
                <p
                  className="
                    text-lg
                    sm:text-xl
                    md:text-2xl
                    lg:text-3xl
                    leading-relaxed
                    text-zinc-200
                    max-w-2xl
                  "
                >
                  We design and develop modern websites that clearly represent
                  your brand and convert visitors into customers. But we don’t
                  stop there. We create engaging content that brings the right
                  audience to your brand, driving people to your website where
                  your business builds trust and turns visits into real
                  opportunities.
                </p>
              </TextAni>
            </div>
          </div>
        </div>

        {/* ================= SERVICE CARDS ================= */}
        <div className="w-full">
          {serviceCards.map((card, index) => (
            <AnimatedServiceCard key={`${card.title}-${index}`} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;

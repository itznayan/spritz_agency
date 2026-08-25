import { motion } from "framer-motion";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

import ServiceAni from "./page/ServiceAni";
import TextAni from "./../components/TextAni";

export default function Services() {
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());

      gsap.set(".card-inner", {
        clearProps: "all",
      });
    };
  }, []);

  return (
    <main className="w-full min-h-screen overflow-x-hidden font-body bg-zinc-900">
      {/* ================= HERO / HEADING ================= */}

      <section
        className="
          heading
          w-full
          bg-zinc-900
          pt-24
          sm:pt-28
          md:pt-32
          lg:pt-36
          pb-16
          sm:pb-20
          md:pb-24
        "
      >
        <div
          className="
            w-full
            max-w-7xl
            mx-auto
            px-5
            sm:px-6
            md:px-8
            lg:px-10
            text-center
          "
        >
          {/* HEADING */}

          <TextAni delay={0.75} blockColor="#94A3B8">
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                xl:text-8xl
                text-center
                w-full
                font-display
                font-extrabold
                font-mono
                leading-[0.95]
                tracking-tight
                text-zinc-200
                mb-5
                sm:mb-6
              "
            >
              Our Services
            </motion.h1>
          </TextAni>

          {/* DESCRIPTION */}

          <TextAni delay={0.75} blockColor="#94A3B8">
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                w-full
                max-w-2xl
                mx-auto
                text-base
                sm:text-lg
                md:text-xl
                leading-relaxed
                text-zinc-300
                px-2
                sm:px-0
              "
            >
              A comprehensive digital partner for modern hospitality brands.
            </motion.p>
          </TextAni>
        </div>
      </section>

      {/* ================= SERVICES ================= */}

      <section className="w-full overflow-x-hidden">
        <ServiceAni />
      </section>
    </main>
  );
}

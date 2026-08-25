"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

import Eyes from "../components/Eyes";
import TextAni from "../components/TextAni";

export default function Contact() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-zinc-950 font-body">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="px-4 pt-28 pb-14 sm:px-6 sm:pt-32 sm:pb-16 md:pb-20 lg:px-8">
        <div className="mx-auto w-full max-w-7xl text-center">
          <TextAni delay={0.75} blockColor="#94A3B8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mx-auto
                max-w-5xl
                font-mono
                text-3xl
                font-bold
                leading-[1.05]
                tracking-tight
                text-zinc-200
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                xl:text-7xl
              "
            >
              Let’s build the vision you believe in.
            </motion.h1>
          </TextAni>

          <TextAni delay={0.75} blockColor="#94A3B8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-base
                leading-relaxed
                text-zinc-300
                sm:text-lg
                md:text-xl
              "
            >
              Ready to elevate your online presence? Fill out the form below or
              book a call directly.
            </motion.p>
          </TextAni>
        </div>
      </section>

      {/* =====================================================
          EYES
      ===================================================== */}

      <div className="w-full overflow-hidden">
        <Eyes />
      </div>

      {/* =====================================================
          CONTACT SECTION
      ===================================================== */}

      <section className="px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div
            className="
              grid
              grid-cols-1
              gap-12
              lg:grid-cols-2
              lg:gap-16
              xl:gap-24
            "
          >
            {/* =================================================
                CONTACT INFORMATION
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full"
            >
              <TextAni blockColor="#94A3B8">
                <h2
                  className="
                    mb-5
                    font-display
                    text-2xl
                    font-bold
                    text-zinc-100
                    sm:text-3xl
                    md:mb-8
                  "
                >
                  Get in Touch
                </h2>
              </TextAni>

              <TextAni blockColor="#94A3B8">
                <p
                  className="
                    max-w-xl
                    text-base
                    leading-relaxed
                    text-zinc-200
                    sm:text-lg
                  "
                >
                  From the city to clients around the world, we help brands turn
                  ideas into meaningful experiences. Reach out for inquiries or
                  custom project quotes.
                </p>
              </TextAni>

              {/* CONTACT DETAILS */}

              <div className="mt-10 space-y-7 sm:mt-12 sm:space-y-8">
                {/* EMAIL */}

                <div className="flex items-start gap-4">
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-zinc-800
                      sm:h-12
                      sm:w-12
                    "
                  >
                    <Mail className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                  </div>

                  <div className="min-w-0">
                    <TextAni blockColor="#94A3B8">
                      <h3
                        className="
                          mb-1
                          font-mono
                          text-base
                          font-bold
                          text-zinc-200
                          sm:text-lg
                        "
                      >
                        Email Us
                      </h3>
                    </TextAni>

                    <TextAni blockColor="#94A3B8">
                      <p
                        className="
                          break-all
                          font-mono
                          text-sm
                          text-zinc-300
                          sm:text-base
                        "
                      >
                        admin@spritzstudio.in
                      </p>
                    </TextAni>
                  </div>
                </div>

                {/* PHONE */}

                <div className="flex items-start gap-4">
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-zinc-800
                      sm:h-12
                      sm:w-12
                    "
                  >
                    <Phone className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                  </div>

                  <div className="min-w-0">
                    <TextAni blockColor="#94A3B8">
                      <h3
                        className="
                          mb-1
                          font-mono
                          text-base
                          font-bold
                          text-zinc-100
                          sm:text-lg
                        "
                      >
                        Call Us
                      </h3>
                    </TextAni>

                    <TextAni blockColor="#94A3B8">
                      <p className="text-sm text-zinc-300 sm:text-base">
                        +91 XXXXXXXXXX
                      </p>
                    </TextAni>

                    <TextAni blockColor="#94A3B8">
                      <p className="text-sm text-zinc-300 sm:text-base">
                        +91 XXXXXXXXXX
                      </p>
                    </TextAni>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                CONTACT FORM
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                w-full
                rounded-2xl
                bg-stone-300
                p-5
                shadow-xl
                shadow-black/10
                sm:rounded-3xl
                sm:p-7
                md:p-10
              "
            >
              <h3
                className="
                  mb-6
                  text-xl
                  font-bold
                  text-zinc-900
                  sm:text-2xl
                "
              >
                Send a Message
              </h3>

              <form
                action="https://formspree.io/f/mwvvkrop"
                method="POST"
                className="space-y-5 sm:space-y-6"
              >
                {/* NAME + BUSINESS */}

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
                  {/* NAME */}

                  <div className="min-w-0">
                    <label
                      htmlFor="name"
                      className="
                        mb-2
                        block
                        text-sm
                        font-medium
                        text-zinc-900
                      "
                    >
                      Name
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="
                        h-12
                        w-full
                        rounded-lg
                        border
                        border-transparent
                        bg-zinc-200
                        px-4
                        text-sm
                        text-zinc-900
                        outline-none
                        transition-all
                        placeholder:text-zinc-500
                        focus:border-zinc-400
                        focus:bg-white
                        focus:ring-2
                        focus:ring-zinc-900/20
                        sm:text-base
                      "
                    />
                  </div>

                  {/* BUSINESS */}

                  <div className="min-w-0">
                    <label
                      htmlFor="businessName"
                      className="
                        mb-2
                        block
                        text-sm
                        font-medium
                        text-zinc-900
                      "
                    >
                      Business Name
                    </label>

                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      placeholder="Cool Beans Café"
                      className="
                        h-12
                        w-full
                        rounded-lg
                        border
                        border-transparent
                        bg-zinc-200
                        px-4
                        text-sm
                        text-zinc-900
                        outline-none
                        transition-all
                        placeholder:text-zinc-500
                        focus:border-zinc-400
                        focus:bg-white
                        focus:ring-2
                        focus:ring-zinc-900/20
                        sm:text-base
                      "
                    />
                  </div>
                </div>

                {/* EMAIL + PHONE */}

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
                  {/* EMAIL */}

                  <div className="min-w-0">
                    <label
                      htmlFor="email"
                      className="
                        mb-2
                        block
                        text-sm
                        font-medium
                        text-zinc-900
                      "
                    >
                      Email
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      className="
                        h-12
                        w-full
                        rounded-lg
                        border
                        border-transparent
                        bg-zinc-200
                        px-4
                        text-sm
                        text-zinc-900
                        outline-none
                        transition-all
                        placeholder:text-zinc-500
                        focus:border-zinc-400
                        focus:bg-white
                        focus:ring-2
                        focus:ring-zinc-900/20
                        sm:text-base
                      "
                    />
                  </div>

                  {/* PHONE */}

                  <div className="min-w-0">
                    <label
                      htmlFor="phone"
                      className="
                        mb-2
                        block
                        text-sm
                        font-medium
                        text-zinc-900
                      "
                    >
                      Phone (Optional)
                    </label>

                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+91 XXXXX XXXXX"
                      className="
                        h-12
                        w-full
                        rounded-lg
                        border
                        border-transparent
                        bg-zinc-200
                        px-4
                        text-sm
                        text-zinc-900
                        outline-none
                        transition-all
                        placeholder:text-zinc-500
                        focus:border-zinc-400
                        focus:bg-white
                        focus:ring-2
                        focus:ring-zinc-900/20
                        sm:text-base
                      "
                    />
                  </div>
                </div>

                {/* MESSAGE */}

                <div>
                  <label
                    htmlFor="message"
                    className="
                      mb-2
                      block
                      text-sm
                      font-medium
                      text-zinc-900
                    "
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Tell us about your business and what you're looking for..."
                    rows={6}
                    className="
                      min-h-[150px]
                      w-full
                      resize-none
                      rounded-lg
                      border
                      border-transparent
                      bg-zinc-200
                      px-4
                      py-3
                      text-sm
                      leading-relaxed
                      text-zinc-900
                      outline-none
                      transition-all
                      placeholder:text-zinc-500
                      focus:border-zinc-400
                      focus:bg-white
                      focus:ring-2
                      focus:ring-zinc-900/20
                      sm:text-base
                    "
                  />
                </div>

                {/* SUBMIT */}

                <button
                  type="submit"
                  className="
                    w-full
                    rounded-xl
                    bg-zinc-950
                    px-6
                    py-3.5
                    text-base
                    font-bold
                    text-white
                    shadow-lg
                    shadow-black/20
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-zinc-800
                    hover:shadow-xl
                    active:translate-y-0
                    sm:py-4
                    sm:text-lg
                  "
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

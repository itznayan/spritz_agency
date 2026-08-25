"use client";

import React, { useState } from "react";

import AboutInfo from "./About/AboutInfo";
import Modal from "./About/model";

const About = () => {
  const projects = [
    {
      title: "Jatin Singh",
      role: "Tech Lead",
      src: "img2",
      color: "#8C8C8C",
    },
    {
      title: "Om Pingle",
      role: "Account Executive & Content Creator",
      src: "bg.png",
      color: "#EFE8D3",
    },
    {
      title: "Jay Baria",
      role: "Tech Lead",
      src: "img3",
      color: "#706D63",
    },
    {
      title: "Oreki Coder",
      role: "Frontend Developer & SDE",
      src: "/nayan1.png",
      color: "#000000",
    },
  ];

  const [modal, setModal] = useState({
    active: false,
    index: 0,
  });

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-zinc-900 text-white">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          bg-zinc-900
          px-5
          pt-28
          pb-14
          sm:px-8
          sm:pt-32
          sm:pb-18
          md:px-10
          md:pt-36
          md:pb-20
          lg:px-20
          lg:pt-40
          lg:pb-28
        "
      >
        <div className="mx-auto w-full max-w-6xl">
          {/* HEADLINE */}

          <h1
            className="
              mb-7
              max-w-5xl
              font-mono
              text-3xl
              font-extrabold
              leading-[1.05]
              tracking-tight

              sm:text-4xl

              md:mb-9
              md:text-5xl
              md:leading-[1.08]

              lg:mb-10
              lg:text-6xl

              xl:text-7xl
            "
          >
            We build your presence.
            <span className="block text-zinc-300">We drive the attention.</span>
          </h1>

          {/* DESCRIPTION */}

          <div
            className="
              max-w-3xl
              space-y-4
              text-sm
              leading-6
              text-zinc-300

              sm:space-y-5
              sm:text-base
              sm:leading-7

              md:space-y-6
              md:text-lg
              md:leading-relaxed
            "
          >
            <p>
              We design and develop modern websites that clearly represent your
              brand and convert visitors into customers.
            </p>

            <p>
              But we don’t stop there. We create engaging content that brings
              the right audience to your brand — driving people to your website
              where your business builds trust and turns visits into real
              opportunities.
            </p>

            <p className="font-medium text-white">
              The result? More visibility. More engagement. Better performance.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          TEAM
      ===================================================== */}

      <section
        className="
          w-full
          px-5
          pb-20

          sm:px-8
          sm:pb-24

          md:px-10
          md:pb-28

          lg:px-20
          lg:pb-32
        "
      >
        <div className="mx-auto w-full max-w-7xl">
          {/* TEAM TITLE */}

          <div
            className="
              mb-7

              sm:mb-9

              md:mb-11

              lg:mb-12
            "
          >
            <h2
              className="
                font-mono
                text-4xl
                font-bold
                leading-none
                tracking-tight
                text-zinc-100

                sm:text-5xl

                md:text-6xl

                lg:text-7xl
              "
            >
              Our Team
            </h2>
          </div>

          {/* TEAM LIST */}

          <div
            className="
              w-full
              px-0

              sm:px-1

              md:px-2

              lg:px-12
          "
          >
            {projects.map((project, index) => (
              <AboutInfo
                key={index}
                index={index}
                title={project.title}
                role={project.role}
                active={modal.active && modal.index === index}
                setModal={setModal}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          DESKTOP MODAL ONLY
      ===================================================== */}

      <div className="hidden lg:block">
        <Modal modal={modal} projects={projects} />
      </div>
    </div>
  );
};

export default About;

"use client";

import React, { useState } from "react";
import AboutInfo from "./About/AboutInfo";
import Modal from "./About/model";
import ProjectAni from "./About/ProjectAni";

const About = () => {
  const projects = [
    {
      title: "Nayan Mahera",
      role: "Creative Developer",
      src: "img1",
      color: "#000000",
    },
    {
      title: "Jatin Singh",
      role: "Tech Lead",
      src: "img2",
      color: "#8C8C8C",
    },
    { title: "Om Pingle", 
      role: "Account Executive & Content Creator", 
      src: "bg.png", 
      color: "#EFE8D3" 
    },
    {
      title: "Jay Baria",
      role: "Tech Lead",
      src: "img3",
      color: "#706D63",
    },
  ];

  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <div className="relative w-full min-h-screen bg-zinc-900 pt-24">
      {/* HERO COPY */}
      {/* HERO COPY */}
      {/* HERO SECTION */}
      <section className="bg-zinc-900 text-white px-6 lg:px-20 pt-32 pb-28">
        <div className="max-w-6xl mx-auto">

          {/* Headline */}
          <h1 className="max-w-4xl text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-mono font-extrabold leading-tight mb-10">
            We build your presence.  
            <span className="block text-zinc-300">
              We drive the attention.
            </span>
          </h1>

          {/* Description */}
          <div className="max-w-3xl space-y-6 text-zinc-300 text-base md:text-lg leading-relaxed">
            <p>
              We design and develop modern websites that clearly represent your brand
              and convert visitors into customers.
            </p>

            <p>
              But we don’t stop there. We create engaging content that brings the right
              audience to your brand — driving people to your website where your
              business builds trust and turns visits into real opportunities.
            </p>

            <p className="text-white font-medium">
              The result? More visibility. More engagement. Better performance.
            </p>
          </div>

        </div>
      </section>


      <div className=" w-full px-20">
        <h1 className="text-zinc-100 text-7xl font-mono ">Our Team</h1>
        <div className="px-12 py-6">
          {projects.map((project, index) => (
            <AboutInfo
              key={index}
              index={index}
              title={project.title}
              active={modal.active && modal.index === index}
              setModal={setModal}
              role={project.role}
            />
          ))}
        </div>
      </div>
      <Modal modal={modal} projects={projects} />
    </div>
  );
};

export default About;

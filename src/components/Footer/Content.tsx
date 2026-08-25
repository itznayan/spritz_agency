import React from "react";
import { Link, useLocation } from "wouter";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { scrollToId } from "./../../functions/scrollToId";

export default function Content() {
  return (
    <div
      className="
        w-full
        h-full
        px-5
        sm:px-8
        md:px-10
        lg:px-12
        py-8
        sm:py-10
        md:py-12
        lg:py-16
        flex
        flex-col
        justify-between
        gap-8
      "
    >
      {/* ================= NAVIGATION ================= */}

      <Section1 />

      {/* ================= BOTTOM CONTENT ================= */}

      <Section2 />
    </div>
  );
}

/* =====================================================
   SECTION 1
===================================================== */

const Section1 = () => {
  return (
    <div className="w-full">
      <Nav />
    </div>
  );
};

/* =====================================================
   SECTION 2
===================================================== */

const Section2 = () => {
  return (
    <div
      className="
        w-full
        flex
        flex-col
        lg:flex-row
        justify-end
        lg:justify-between
        items-start
        lg:items-end
        gap-8
        sm:gap-10
        lg:gap-8
        text-white
      "
    >
      {/* ================= HEADING ================= */}

      <h1
        className="
          w-full
          lg:w-auto
          max-w-5xl
          text-[13vw]
          sm:text-[11vw]
          md:text-[9vw]
          lg:text-[7vw]
          xl:text-[6.5vw]
          leading-[0.82]
          tracking-tight
          font-medium
        "
      >
        Design & Build
        <br />
        with passion.
      </h1>

      {/* ================= SOCIAL + COPYRIGHT ================= */}

      <div
        className="
          w-full
          lg:w-auto
          flex
          flex-col
          items-start
          lg:items-end
          gap-4
          shrink-0
        "
      >
        {/* SOCIAL ICONS */}

        <div className="flex items-center gap-4 text-gray-400">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="hover:text-white transition-colors duration-300"
          >
            <Facebook className="w-5 h-5" />
          </a>

          <a
            href="https://www.instagram.com/spritzstudio.in"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="hover:text-white transition-colors duration-300"
          >
            <Instagram className="w-5 h-5" />
          </a>

          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            aria-label="X"
            className="hover:text-white transition-colors duration-300"
          >
            <Twitter className="w-5 h-5" />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white transition-colors duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* COPYRIGHT */}

        <p
          className="
            text-gray-400
            text-xs
            sm:text-sm
            whitespace-nowrap
          "
        >
          © 2026 itznayan. All rights reserved.
        </p>
      </div>
    </div>
  );
};

/* =====================================================
   NAVIGATION
===================================================== */

const Nav = () => {
  const [location, setLocation] = useLocation();

  const handleClick = (id: string) => {
    if (location === "/services") {
      scrollToId(id, 80);
    } else {
      setLocation(`/services#${id}`);
    }
  };

  return (
    <div
      className="
        w-full
        grid
        grid-cols-2
        lg:grid-cols-3
        gap-x-6
        sm:gap-x-10
        md:gap-x-12
        lg:gap-x-20
        gap-y-8
      "
    >
      {/* =================================================
          GO TO
          Hidden ONLY on mobile
      ================================================= */}

      <div className="hidden lg:flex flex-col gap-2 text-gray-400">
        <h3
          className="
            mb-3
            text-sm
            uppercase
            tracking-wider
            text-white
          "
        >
          Go To
        </h3>

        <Link
          href="/"
          className="w-fit hover:text-white transition-colors duration-300"
        >
          Home
        </Link>

        <Link
          href="/contact"
          className="w-fit hover:text-white transition-colors duration-300"
        >
          Contact
        </Link>

        <Link
          href="/about"
          className="w-fit hover:text-white transition-colors duration-300"
        >
          About
        </Link>
      </div>

      {/* =================================================
          SERVICES
          Visible on ALL devices
      ================================================= */}

      <div className="flex flex-col gap-2 text-gray-400">
        <h3
          className="
            mb-3
            text-sm
            uppercase
            tracking-wider
            text-white
          "
        >
          Services
        </h3>

        <button
          type="button"
          onClick={() => handleClick("card-1")}
          className="
            w-fit
            text-left
            hover:text-white
            transition-colors
            duration-300
          "
        >
          Web Development
        </button>

        <button
          type="button"
          onClick={() => handleClick("card-2")}
          className="
            w-fit
            text-left
            hover:text-white
            transition-colors
            duration-300
          "
        >
          Content Creation
        </button>

        <button
          type="button"
          onClick={() => handleClick("card-3")}
          className="
            w-fit
            text-left
            hover:text-white
            transition-colors
            duration-300
          "
        >
          Growth Strategy
        </button>

        <button
          type="button"
          onClick={() => handleClick("card-4")}
          className="
            w-fit
            text-left
            hover:text-white
            transition-colors
            duration-300
          "
        >
          Social Media Management
        </button>
      </div>

      {/* =================================================
          GET IN TOUCH
          Visible on ALL devices
      ================================================= */}

      <div
        className="
          flex
          flex-col
          gap-2
          text-gray-400
          col-span-1
        "
      >
        <h3
          className="
            mb-3
            text-sm
            uppercase
            tracking-wider
            text-white
          "
        >
          Get in Touch
        </h3>

        <a
          href="mailto:admin@spritzstudio.in"
          className="
            w-fit
            max-w-full
            break-all
            hover:text-white
            transition-colors
            duration-300
          "
        >
          admin@spritzstudio.in
        </a>

        <a
          href="tel:+91XXXXXXXXXX"
          className="w-fit hover:text-white transition-colors duration-300"
        >
          +91 XXXXXXXXXX
        </a>

        <a
          href="tel:+91XXXXXXXXXX"
          className="w-fit hover:text-white transition-colors duration-300"
        >
          +91 XXXXXXXXXX
        </a>
      </div>
    </div>
  );
};

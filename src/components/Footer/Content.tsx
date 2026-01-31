import React from "react";
import { Link, useLocation } from "wouter";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { scrollToId } from "./../../functions/scrollToId";

export default function Content() {
  return (
    <div className=" py-8 px-12 h-full w-full flex flex-col justify-between">
      <Section1 />
      <Section2 />
    </div>
  );
}

const Section1 = () => {
  return (
    <div>
      <Nav />
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="flex justify-between items-end text-white">
      <h1 className="text-[10vw] leading-[0.8] mt-10">
        Design & Build with passion.
      </h1>

      <div className="flex flex-col items-end gap-4">
        <div className="flex gap-3 text-gray-400">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="hover:text-white transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/spritzstudio.in?igsh=MWR1am9sdzgwYXRkZg=="
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="hover:text-white transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            aria-label="X"
            className="hover:text-white transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
        <p className="text-gray-400 text-sm">©copyright.itznayan</p>
      </div>
    </div>
  );
};

const Nav = () => {
  const [location, setLocation] = useLocation();

  const handleClick = (id: string) => {
    if (location === "/services") {
      // SAME PAGE → manual scroll with navbar gap
      scrollToId(id, 80);
    } else {
      // DIFFERENT PAGE → navigate first
      setLocation(`/services#${id}`);
    }
  };
  return (
    <div className="flex shrink-0 gap-20">
      <div className="flex flex-col gap-2 text-gray-400">
        <h3 className="mb-2 uppercase text-white">Go To </h3>
        <Link href="/">Home</Link>
        {/* <Link href="services">Projects</Link> */}
        <Link href="contact">Contact</Link>
        <Link href="about ">About </Link>
      </div>
      <div className="flex flex-col gap-2 text-gray-400">
        <h3 className="mb-2 uppercase text-white">Services</h3>
        <Link href="/services#card-1">
          <p onClick={() => handleClick("card-1")}>Web Development</p>
        </Link>
        <Link href="/services#card-2">
          <p onClick={() => handleClick("card-2")}>Content Creation</p>
        </Link>
        <Link href="/services#card-3">
          <p onClick={() => handleClick("card-3")}>Growth Strategy</p>
        </Link>
        <Link href="/services#card-4">
          <p onClick={() => handleClick("card-4")}>Social Media Management</p>
        </Link>
      </div>
      <div className="flex flex-col gap-2 text-gray-400">
        <h3 className="mb-2 uppercase text-white">Get in Touch</h3>
        <p>admin@spritzstudio.in</p>
        <p>+91 9909220121</p>
        <p>+91 9978672740</p>
        {/* <p>Gujrat,India</p> */}
      </div>
    </div>
  );
};

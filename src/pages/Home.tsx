// pages/index.tsx
import { useRef } from "react";
import Hero from "./home/Hero";
import Service from "./home/Service";
import Demo from "./home/Demo";
import { useLocomotiveV5 } from "../lib/locomotiveV5";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  useLocomotiveV5(scrollRef);
  return (
    <div
      ref={scrollRef}
      className="w-full min-h-screen bg-[#CC1E1A]  text-white "
    >
      <Hero />
      <Service />
      <Demo />
    </div>
  );
}

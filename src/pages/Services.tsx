import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Video,
  Globe,
  Smartphone,
  BarChart3,
} from "lucide-react";
import { Link } from "wouter";
import StickyFooter from "../components/Footer/StickyFooter";
import ServiceAni from "./page/ServiceAni";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Curve from "../Animation/Curve";
import TextAni from "./../components/TextAni";
export default function Services() {
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.set(".card-inner", { clearProps: "all" }); // 🔥 RESET STYLES
    };
  }, []);

  return (
    <>
      <div className="h-full  font-body">
        <section className="heading pt-32 pb-20 w-full bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <TextAni delay={0.75} blockColor="#94A3B8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-7xl font-display font-extrabold font-mono text-zinc-200 mb-6"
              >
                Our Services
              </motion.h1>
            </TextAni>

            <TextAni delay={0.75} blockColor="#94A3B8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-zinc-200 max-w-2xl mx-auto"
              >
                A comprehensive digital partner for modern hospitality brands.
              </motion.p>
            </TextAni>
          </div>
        </section>

        <div className="w-full h-full">
          <ServiceAni />
        </div>
      </div>
    </>
  );
}

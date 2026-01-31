import React from "react";
import { useEffect, useRef } from "react";
import { ServiceCard } from "@/components/ServiceCard";
import {
  ArrowRight,
  Instagram,
  Globe,
  Calendar,
  TrendingUp,
} from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="0.05"
      className="py-24 bg-primary text-primary-foreground relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
          Ready to transform your brand?
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
          Book a free 15-minute discovery call. We'll discuss your goals and how
          we can help you fill more tables.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact">
            <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-accent text-white font-bold text-lg shadow-lg hover:bg-accent/90 transition-all duration-300 flex items-center justify-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Book a Free Call</span>
            </button>
          </Link>
          <Link href="/services">
            <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 text-white font-bold text-lg hover:bg-white/20 backdrop-blur-sm transition-all duration-300">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;

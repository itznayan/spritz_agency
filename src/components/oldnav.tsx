"use client";

import React, { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const OldNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <img
              src="/images/logo.png"
              className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
              alt="Logo"
            />
            <span className="font-display text-3xl font-bold tracking-tight">
              Spritz
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent }`}
              >
                {link.label}
              </Link>
            ))}

            <Link href="/contact">
              <button className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                Book a Call
              </button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-secondary transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background"
          >
            <div className="px-4 py-6 space-y-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-lg font-medium ${
                    pathname === link.href ? "text-accent" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <button className="w-full mt-4 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold shadow-md">
                  Book a Call
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OldNav;

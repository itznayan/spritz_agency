"use client";
import StickyFooter from "./Footer/StickyFooter";
import { Navigation } from "./Navigation";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      smooth: true,
    });

    return () => scroll.destroy();
  }, []);

  return (
    <div className="flex flex-col z-10">
      <Navigation />
      <main className="flex-1">{children}</main>
      <StickyFooter />
    </div>
  );
}

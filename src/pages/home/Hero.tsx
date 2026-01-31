// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "wouter";
// import TextAni from "../../components/TextAni";
// import TextReveal from "../../TextReveal";

// const Hero = () => {
//   return (
//     <section
//       data-scroll-section
//       data-scroll
//       data-scroll-speed="-0.35"
//       className="w-full h-screen bg-zinc-900 flex flex-col justify-center"
//     >
//       {/* TEXT STRUCTURE */}
//       <div className="px-20 mt-24">
//         {" "}
//         <div className="grid grid-cols-12">
//           {" "}
//           {/* LEFT SIDE */}{" "}
//           <div className="col-span-12 lg:col-span-6">
//             {" "}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//             >
//               {" "}
//               <TextAni delay={0.75} blockColor="#DADAD7">
//                 <p className="text-sm uppercase tracking-widest text-zinc-300 mb-2">
//                   {" "}
//                   Software & Web Design Agency{" "}
//                 </p>{" "}
//               </TextAni>
//               <TextAni delay={0.75} blockColor="#DADAD7">
//                 <h1 className="font-display text-5xl text-white md:text-6xl leading-tight mb-6">
//                   {" "}
//                   We design digital experiences that help brands grow.{" "}
//                 </h1>
//               </TextAni>
//               <TextAni delay={0.75} blockColor="#DADAD7">
//                 <p className="text-lg md:text-xl mb-12 text-zinc-200 max-w-xl leading-relaxed text-start">
//                   A modern software agency focused on building high-performing
//                   websites, platforms and digital products for ambitious
//                   businesses.
//                 </p>
//               </TextAni>
//               <div className="flex items-center gap-6">
//                 {" "}
//                 <Link href="/contact">
//                   {" "}
//                   <button className="px-8 py-4 rounded-xl bg-slate-400 text-black font-medium text-lg hover:opacity-90 hover:bg-slate-500 transition-all">
//                     {" "}
//                     Start a Project{" "}
//                   </button>{" "}
//                 </Link>{" "}
//                 <span className="text-sm text-zinc-300">
//                   {" "}
//                   ★ 4.9 rating from 100+ clients{" "}
//                 </span>{" "}
//               </div>{" "}
//             </motion.div>{" "}
//           </div>{" "}
//           {/* RIGHT SIDE EMPTY */}{" "}
//           <div className="hidden lg:block lg:col-span-6" />{" "}
//         </div>{" "}
//       </div>
//     </section>
//   );
// };

// export default Hero;
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import TextAni from "../../components/TextAni";
import TextReveal from "../../TextReveal";

const Hero = () => {
  return (
    <section
      data-scroll-section
      data-scroll
      data-scroll-speed="-0.35"
      className="w-full min-h-screen flex items-center relative overflow-hidden"
      style={{ backgroundColor: "#E5E5E5" }}
    >
      <div className="w-full px-8 lg:px-20 relative z-10">
        <div className="relative">
          {/* Main Headline - Uppercase, Bold, Black */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-20"
          >
            <h1
              className="text-5xl md:text-7xl lg:text-9xl xl:text-[12rem] font-black leading-[0.85] text-black uppercase tracking-tight"
              style={{
                fontFamily: "'Satoshi', sans-serif",
                letterSpacing: "-0.03em",
                lineHeight: "0.85",
              }}
            >
              <span className="block">IT'Z A</span>
              <span className="block">CREATIVE</span>
              <span className="block">STUDIO.</span>
            </h1>
          </motion.div>

          {/* Overlapping Image - Square, Rotated, Red/Orange Filter */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="absolute z-10 hidden lg:block"
            style={{
              top: "2.5%",
              right: "0%",
              width: "500px",
              height: "500px",
              // transform: 'rotate(5deg)',
            }}
          >
            <img
              src="/images/heroBG.PNG"
              alt="Creative portrait"
              className="w-full h-full object-cover"
              draggable={false}
              // style={{
              //   filter: 'sepia(100%) saturate(250%) hue-rotate(340deg) brightness(0.85) contrast(1.3)',
              // }}
            />
            {/* Red/Orange overlay for stronger monochromatic effect */}
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: "rgba(255, 11, 85, 0.4)",
                mixBlendMode: "multiply",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

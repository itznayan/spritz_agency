import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

const TextAni = ({
  children,
  animateOnScroll = true,
  delay = 0,
  blockColor = "#0f0",
  stagger = 0.15,
  duration = 0.75,
}) => {
  const containerRef = useRef(null);
  const splitRef = useRef([]);
  const lines = useRef([]);
  const blocks = useRef([]);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      splitRef.current = [];
      lines.current = [];
      blocks.current = [];

      let elems = [];

      if (containerRef.current.hasAttribute("data-copy-wrapper")) {
        elems = Array.from(containerRef.current.children);
      } else {
        elems = [containerRef.current];
      }

      elems.forEach((elem) => {
        const split = SplitText.create(elem, {
          type: "lines",
          linesClass: "block-lines",
          lineThreshold: 0.1,
        });

        splitRef.current.push(split);

        split.lines.forEach((line) => {
          const wrapper = document.createElement("div");
          wrapper.className = "black-line-wrapper";
          line.parentNode.insertBefore(wrapper, line);
          wrapper.appendChild(line);

          const block = document.createElement("div");
          block.className = "block-revealer";
          block.style.backgroundColor = blockColor;
          wrapper.appendChild(block);

          lines.current.push(line);
          blocks.current.push(block);
        });
      });
      gsap.set(lines.current, { opacity: 0 });
      gsap.set(blocks.current, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      const createBlockRevealAnimation = (block, line, index) => {
        const tl = gsap.timeline({
          delay: delay + index * stagger,
        });

        tl.to(block, {
          scaleX: 1,
          duration,
          ease: "power4.inOut",
        })
          .set(line, { opacity: 1 })
          .set(block, { transformOrigin: "right center" })
          .to(block, {
            scaleX: 0,
            duration,
            ease: "power4.inOut",
          });

        return tl;
      };
      if (animateOnScroll) {
        blocks.current.forEach((block, index) => {
          const tl = createBlockRevealAnimation(
            block,
            lines.current[index],
            index
          );
          tl.pause();

          ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top 90%",
            once: true,
            onEnter: () => tl.play(),
          });
        });
      } else {
        blocks.current.forEach((block, index) => {
          createBlockRevealAnimation(block, lines.current[index], index);
        });
      }

      return () => {
        splitRef.current.forEach((split) => split?.revert());
        const wrappers = containerRef.current.querySelectorAll(
          ".block-line-wrapper"
        );
        wrappers?.forEach((wrapper) => {
          if (wrapper.parentNode && wrapper.firstChild) {
            wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
            wrapper.remove();
          }
        });
      };
    },

    {
      scope: containerRef,
      dependencies: [animateOnScroll, delay, blockColor, stagger, duration],
    }
  );

  return (
    <div ref={containerRef} data-copy-wrapper="true">
      {children}
    </div>
  );
};

export default TextAni;

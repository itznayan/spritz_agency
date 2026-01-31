import { useEffect } from "react";
import { useLocation } from "wouter";
import { scrollToId } from "./scrollToId";

export function ScrollToHash() {
  const [location] = useLocation();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const id = hash.substring(1); // Remove the # symbol
    if (!id) return;

    // Wait for page transition animation to complete
    // Animation duration: 0.75s + delay 0.35s = ~1.1s, add buffer for rendering
    const scrollDelay = 1200;

    const timeoutId = setTimeout(() => {
      // Check if element exists before scrolling
      const element = document.getElementById(id);
      if (element) {
        // Use scrollToId for consistent scrolling behavior
        scrollToId(id);
      }
    }, scrollDelay);

    return () => clearTimeout(timeoutId);
  }, [location]);

  return null;
}

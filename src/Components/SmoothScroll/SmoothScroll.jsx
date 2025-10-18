// SmoothScroll.jsx
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.7,        // speed of scroll (lower = faster)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // default ease-out
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Optional: Debug scroll position
    // lenis.on('scroll', (e) => console.log(e));

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}

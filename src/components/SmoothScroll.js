"use client";
import { useEffect } from "react";
import { frame, cancelFrame } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { setLenis } from "@/lib/lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis();
    setLenis(lenis);

    // Run Lenis inside framer-motion's frame loop so scroll-linked animations
    // (the stacked project cards) read the same scroll position in the same frame.
    // A separate requestAnimationFrame loop makes them lag a frame and shake.
    function update({ timestamp }) {
      lenis.raf(timestamp);
    }
    frame.update(update, true);

    // Smooth-scroll in-page links like "/#contact" or "#about"
    function onClick(e) {
      const link = e.target.closest("a[href*='#']");
      if (!link) return;
      const url = new URL(link.href);
      if (url.pathname !== window.location.pathname) return;
      const target = url.hash ? document.querySelector(url.hash) : null;
      e.preventDefault();
      lenis.scrollTo(target || 0);
      history.replaceState(null, "", url.hash || url.pathname);
    }
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelFrame(update);
      setLenis(null);
      lenis.destroy();
    };
  }, []);

  return null;
}

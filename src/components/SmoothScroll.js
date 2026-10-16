"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis();
    let frame;

    function raf(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }
    frame = requestAnimationFrame(raf);

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
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}

// Shares the site's single Lenis instance so scroll-linked animations can
// update in the same frame Lenis moves the page (no one-frame lag / shake).
let lenis = null;
const listeners = new Set();

export function setLenis(instance) {
  lenis = instance;
  if (instance) instance.on("scroll", () => listeners.forEach((fn) => fn()));
}

export function onLenisScroll(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function hasLenis() {
  return lenis !== null;
}

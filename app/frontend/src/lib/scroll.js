export const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (window.__lenis) {
    window.__lenis.scrollTo(el, { offset: -64, duration: 1.3 });
  } else {
    const y = el.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

export const lockScroll = (lock) => {
  if (window.__lenis) lock ? window.__lenis.stop() : window.__lenis.start();
  document.documentElement.style.overflow = lock ? "hidden" : "";
};

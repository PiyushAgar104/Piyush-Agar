import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Central GSAP + ScrollTrigger motion system.
// Every effect uses gsap.from / fromTo, so if JS or an animation fails
// the underlying content simply stays visible (never hidden permanently).
export function setupAnimations(reduced) {
  if (reduced) return null;

  const ctx = gsap.context(() => {
    // Word-by-word masked heading reveals
    gsap.utils.toArray("[data-anim='words']").forEach((el) => {
      const text = el.textContent.trim();
      el.setAttribute("aria-label", text);
      el.innerHTML = text
        .split(/\s+/)
        .map(
          (w) =>
            `<span class="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]"><span class="inline-block will-change-transform" data-word aria-hidden="true">${w}&nbsp;</span></span>`
        )
        .join("");
      gsap.from(el.querySelectorAll("[data-word]"), {
        yPercent: 110,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.06,
        scrollTrigger: { trigger: el, start: "top 85%" },
      });
    });

    // Line-by-line masked reveals (markup provides the overflow-hidden lines)
    gsap.utils.toArray("[data-anim='lines']").forEach((el) => {
      gsap.from(el.querySelectorAll("[data-line-inner]"), {
        yPercent: 112,
        duration: 1,
        ease: "power4.out",
        stagger: 0.12,
        scrollTrigger: { trigger: el, start: "top 85%" },
      });
    });

    // Generic block reveals
    gsap.utils.toArray("[data-anim='reveal']").forEach((el) => {
      gsap.from(el, {
        y: 36,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%" },
      });
    });

    // Staggered groups
    gsap.utils.toArray("[data-anim='stagger']").forEach((container) => {
      gsap.from(container.querySelectorAll("[data-anim-child]"), {
        y: 26,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.07,
        scrollTrigger: { trigger: container, start: "top 85%" },
      });
    });

    // Image mask + scale reveals
    gsap.utils.toArray("[data-anim='image']").forEach((wrap) => {
      const img = wrap.querySelector("img");
      gsap.fromTo(
        wrap,
        { clipPath: "inset(0 0 100% 0)" },
        {
          clipPath: "inset(0 0 0% 0)",
          duration: 1.2,
          ease: "power4.inOut",
          scrollTrigger: { trigger: wrap, start: "top 82%" },
        }
      );
      if (img)
        gsap.fromTo(
          img,
          { scale: 1.22 },
          {
            scale: 1,
            duration: 1.6,
            ease: "power3.out",
            scrollTrigger: { trigger: wrap, start: "top 82%" },
          }
        );
    });

    // Subtle scroll parallax (percent of own height, scrubbed)
    gsap.utils.toArray("[data-parallax]").forEach((el) => {
      const speed = parseFloat(el.getAttribute("data-parallax")) || 8;
      gsap.to(el, {
        yPercent: speed,
        ease: "none",
        scrollTrigger: {
          trigger: el.closest("section") || el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    // Pinned project moments — desktop only, content settles while pinned
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      gsap.utils.toArray("[data-pin-project]").forEach((row) => {
        const img = row.querySelector("[data-project-image]");
        const text = row.querySelector("[data-project-text]");
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "center center",
            end: "+=35%",
            pin: true,
            scrub: 1,
          },
        });
        if (img) tl.fromTo(img, { scale: 1.05 }, { scale: 1, ease: "sine.inOut" }, 0);
        if (text) tl.fromTo(text, { y: 24 }, { y: -18, ease: "sine.inOut" }, 0);
      });
    });

    ScrollTrigger.refresh();
    window.addEventListener("load", () => ScrollTrigger.refresh());
    setTimeout(() => ScrollTrigger.refresh(), 1500);
  });

  return ctx;
}

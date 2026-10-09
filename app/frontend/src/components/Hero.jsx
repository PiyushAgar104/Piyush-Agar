import { useEffect, useRef } from "react";
import gsap from "gsap";
import { scrollToSection } from "@/lib/scroll";

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 1.3, defaults: { ease: "power4.out" } });
      tl.from(".hero-eyebrow", { opacity: 0, x: -24, duration: 0.7 })
        .from("[data-hero-line]", { yPercent: 112, duration: 1.1, stagger: 0.12 }, 0.1)
        .from(".hero-role", { opacity: 0, y: 18, duration: 0.7 }, 0.55)
        .from(".hero-desc", { opacity: 0, y: 18, duration: 0.7 }, 0.65)
        .from(".hero-cta", { opacity: 0, y: 18, duration: 0.6, stagger: 0.08 }, 0.75)
        // photo reveals behind the name as the page loads
        .fromTo(
          ".hero-photo-wrap",
          { clipPath: "inset(100% 0 0 0)" },
          { clipPath: "inset(0% 0 0 0)", duration: 1.3, ease: "power4.inOut" },
          0.3
        )
        .fromTo(".hero-photo", { scale: 1.16 }, { scale: 1, duration: 1.7, ease: "power3.out" }, 0.3);

      // slow continuous zoom (starts after the load tween has settled)
      gsap.to(".hero-photo", {
        scale: 1.07,
        duration: 10,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 2.4,
      });
      // gentle floating movement
      gsap.to(".hero-photo-float", {
        y: -12,
        duration: 5.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
      // slight parallax: photo drifts slower than the foreground text on scroll
      gsap.to(".hero-photo-wrap", {
        yPercent: 14,
        ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(".hero-content", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(".hero-bottom", {
        opacity: 0,
        ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top top", end: "25% top", scrub: true },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={ref} className="relative min-h-screen bg-ink text-bone overflow-hidden scheme-dark">
      <div className="absolute inset-0 bg-grid z-0" aria-hidden="true" />
      <div
        className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,rgba(224,90,71,0.14),transparent_55%)]"
        aria-hidden="true"
      />

      {/* Personal photo layered directly BEHIND the name */}
      <div className="hero-photo-wrap absolute left-0 right-0 mx-auto top-[4%] h-[88%] w-full sm:w-[82%] lg:w-[56%] lg:left-[14%] lg:right-auto lg:mx-0 lg:top-[6%] lg:h-[78%] z-[1]">
        <div className="hero-photo-float w-full h-full">
          <img
            data-testid="hero-portrait-image"
            src="/assets/piyush-hero.webp"
            alt="Piyush Agar"
            className="hero-photo w-full h-full object-cover object-[50%_18%]"
          />
          {/* subtle dark overlay + vignette — photo stays full colour, name stays readable */}
          <div className="absolute inset-0 bg-ink/45 lg:bg-ink/30" aria-hidden="true" />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(12,10,9,0.62)_100%)]"
            aria-hidden="true"
          />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/80 to-transparent" aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" aria-hidden="true" />
        </div>
      </div>

      {/* Foreground composition — the name sits in front of the photo */}
      <div className="hero-content relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pt-36 md:pt-44 pb-40">
        <p
          data-testid="hero-eyebrow"
          className="hero-eyebrow font-mono text-[11px] md:text-xs uppercase tracking-[0.3em] text-flame flex items-center gap-3"
        >
          <span className="inline-block w-10 h-px bg-flame" />
          Welcome to my portfolio
        </p>

        <h1
          data-testid="hero-headline"
          className="font-display font-semibold uppercase tracking-[-0.02em] leading-[0.84] mt-8 text-[clamp(4rem,14vw,13rem)]"
        >
          <span className="block overflow-hidden pb-[0.06em] -mb-[0.06em]">
            <span className="block will-change-transform" data-hero-line>
              Piyush
            </span>
          </span>
          <span className="block overflow-hidden pb-[0.06em] -mb-[0.06em]">
            <span className="block will-change-transform text-outline-flame" data-hero-line>
              Agar
            </span>
          </span>
        </h1>

        <p
          data-testid="hero-subheadline"
          className="hero-role font-mono text-[11px] md:text-sm uppercase tracking-[0.25em] text-bone/90 mt-10"
        >
          AI/ML Developer · Data Analyst · Full-Stack Builder
        </p>

        <p className="hero-desc max-w-md text-bone/75 leading-relaxed mt-5 text-base md:text-lg">
          Building intelligent applications, data-driven experiences and digital products that solve
          real-world problems.
        </p>

        <div className="flex flex-wrap items-center gap-4 mt-10">
          <button
            data-testid="hero-cta-explore"
            onClick={() => scrollToSection("projects")}
            className="hero-cta bg-flame text-ink font-mono text-xs uppercase tracking-[0.2em] px-8 py-4 hover:bg-flamedeep transition-colors duration-300"
          >
            Explore My Work
          </button>
          <button
            data-testid="hero-cta-contact"
            onClick={() => scrollToSection("contact")}
            className="hero-cta font-mono text-xs uppercase tracking-[0.2em] px-8 py-4 border border-bone/40 hover:border-flame hover:text-flame transition-colors duration-300"
          >
            Let&apos;s Work Together
          </button>
        </div>
      </div>

      <div className="hero-bottom absolute bottom-0 inset-x-0 border-t border-white/10 z-10 bg-ink/50 backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-bone/60">
          <span className="flex items-center gap-3">
            <span className="relative inline-block w-10 h-px bg-white/15 overflow-hidden">
              <span className="absolute inset-0 bg-flame animate-scrollline" />
            </span>
            Scroll to explore
          </span>
          <span className="hidden sm:block">Open for freelance projects</span>
          <span className="hidden sm:block">Piyush Agar — Jaipur, IN</span>
        </div>
      </div>
    </section>
  );
}

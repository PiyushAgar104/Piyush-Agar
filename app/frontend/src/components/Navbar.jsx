import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "@/components/motion";
import Logo from "@/components/Logo";
import { scrollToSection, lockScroll } from "@/lib/scroll";
import { PROFILE } from "@/lib/data";

const LINKS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
const LIGHT_SECTIONS = new Set(["about", "services", "experience"]);

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      let current = "hero";
      for (const { id } of LINKS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 160) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    lockScroll(open);
    return () => lockScroll(false);
  }, [open]);

  const go = (id) => {
    setOpen(false);
    setTimeout(() => scrollToSection(id), open ? 300 : 0);
  };

  const light = LIGHT_SECTIONS.has(active);
  const tone = light ? "text-ink" : "text-bone";

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-[80] transition-all duration-500 ${
          scrolled
            ? light
              ? "bg-ivory/85 backdrop-blur-md border-b border-ink/10"
              : "bg-ink/80 backdrop-blur-md border-b border-white/10"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="flex items-center justify-between h-16 md:h-20 px-6 md:px-12 max-w-[1400px] mx-auto">
          <button
            data-testid="nav-brand-logo"
            onClick={() => go("hero")}
            className={`flex items-center gap-3 ${tone} transition-colors duration-500`}
          >
            <Logo className="w-9 h-9" />
            <span className="font-display font-semibold tracking-wide text-sm uppercase hidden sm:block">
              Piyush Agar
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {LINKS.map((l) => (
              <button
                key={l.id}
                data-testid={`nav-link-${l.id}`}
                onClick={() => go(l.id)}
                className={`font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 ${tone} ${
                  active === l.id ? "text-flame" : light ? "hover:text-flamedeep" : "hover:text-flame"
                }`}
              >
                {l.label}
              </button>
            ))}
            <button
              data-testid="nav-cta-hire-me"
              onClick={() => go("services")}
              className="font-mono text-[11px] uppercase tracking-[0.2em] px-5 py-2.5 border border-flame text-flame hover:bg-flame hover:text-ink transition-all duration-300"
            >
              Hire Me
            </button>
          </div>

          <button
            data-testid="nav-mobile-toggle"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className={`lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 ${tone}`}
          >
            <span
              className={`block w-6 h-px bg-current transition-transform duration-300 ${
                open ? "rotate-45 translate-y-[3.5px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-current transition-transform duration-300 ${
                open ? "-rotate-45 -translate-y-[3px]" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[75] bg-ink text-bone flex flex-col justify-center px-8 scheme-dark"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="space-y-2">
              {LINKS.map((l, i) => (
                <span key={l.id} className="block overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.6, ease: EASE, delay: 0.06 * i }}
                  >
                    <button
                      data-testid={`nav-mobile-link-${l.id}`}
                      onClick={() => go(l.id)}
                      className={`font-display font-semibold uppercase text-5xl leading-tight ${
                        active === l.id ? "text-flame" : "text-bone"
                      }`}
                    >
                      {l.label}
                    </button>
                  </motion.span>
                </span>
              ))}
            </div>
            <div className="mt-12 flex items-center gap-6">
              <button
                data-testid="nav-mobile-hire-me"
                onClick={() => go("services")}
                className="font-mono text-xs uppercase tracking-[0.2em] px-7 py-3.5 bg-flame text-ink"
              >
                Hire Me
              </button>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-[0.2em] text-bone/60"
              >
                GitHub
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-[0.2em] text-bone/60"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

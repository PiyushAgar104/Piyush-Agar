import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/components/motion";

export default function Preloader() {
  const reduce = useReducedMotion();
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (reduce) {
      setGone(true);
      return undefined;
    }
    const t = setTimeout(() => setGone(true), 1450);
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <AnimatePresence>
      {!gone && (
        <motion.div
          data-testid="preloader"
          className="fixed inset-0 z-[100] bg-ink text-bone flex items-center justify-center"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <div className="text-center">
            <span className="block overflow-hidden pb-2">
              <motion.span
                className="block font-display font-semibold uppercase tracking-tight text-4xl md:text-6xl"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
              >
                Piyush Agar
              </motion.span>
            </span>
            <motion.p
              className="font-mono text-[10px] uppercase tracking-[0.35em] text-flame mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Portfolio — loading
            </motion.p>
            <motion.span
              className="block h-px bg-flame/60 mt-6 origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.1, ease: "easeInOut", delay: 0.2 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { motion, useReducedMotion } from "framer-motion";

export const EASE = [0.16, 1, 0.3, 1];

export function Reveal({ children, delay = 0, y = 28, className = "", amount = 0.2 }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

export function MaskLine({ children, delay = 0, className = "", amount = 0.4 }) {
  const reduce = useReducedMotion();
  if (reduce) return <span className={`block ${className || ""}`}>{children}</span>;
  return (
    <motion.span
      className={`block overflow-hidden pb-[0.08em] -mb-[0.08em] ${className || ""}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
    >
      <motion.span
        className="block will-change-transform"
        variants={{ hidden: { y: "112%" }, visible: { y: "0%" } }}
        transition={{ duration: 0.9, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}

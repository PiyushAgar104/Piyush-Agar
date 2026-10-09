import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "@/components/motion";
import { lockScroll } from "@/lib/scroll";
import { PROJECTS } from "@/lib/data";
import InquiryForm from "@/components/InquiryForm";

export default function ServiceDrawer({ service, onClose }) {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setShowForm(false);
    if (service) lockScroll(true);
    const esc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", esc);
    return () => {
      window.removeEventListener("keydown", esc);
      lockScroll(false);
    };
  }, [service, onClose]);

  const linked = service ? PROJECTS.filter((p) => service.projects.includes(p.title)) : [];

  return (
    <AnimatePresence>
      {service && (
        <>
          <motion.div
            data-testid="service-drawer-overlay"
            className="fixed inset-0 z-[92] bg-ink/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            data-testid="service-detail-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`${service.title} details`}
            className="fixed right-0 top-0 h-full w-full max-w-xl bg-ink text-bone z-[95] overflow-y-auto scheme-dark border-l border-white/10"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <div className="p-8 md:p-12">
              <div className="flex items-start justify-between gap-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-flame pt-3">
                  Service ({service.code}) — {service.price}
                </p>
                <button
                  data-testid="service-drawer-close"
                  onClick={onClose}
                  aria-label="Close"
                  className="w-11 h-11 border border-white/25 hover:border-flame hover:text-flame transition-colors duration-300 flex items-center justify-center shrink-0"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>

              {!showForm ? (
                <div className="mt-8">
                  <h3 className="font-display font-semibold uppercase tracking-tight text-3xl md:text-4xl leading-[0.95]">
                    {service.title}
                  </h3>
                  <p className="text-bone/70 leading-relaxed mt-6">{service.overview}</p>

                  <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-flame mt-10 mb-4">
                    Deliverables
                  </p>
                  <ul className="space-y-3">
                    {service.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-bone/85">
                        <span className="inline-block w-4 h-px bg-flame mt-3 shrink-0" aria-hidden="true" />
                        {d}
                      </li>
                    ))}
                  </ul>

                  <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-flame mt-10 mb-4">
                    Relevant projects
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {linked.map((p) => (
                      <a
                        key={p.id}
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[11px] uppercase tracking-[0.15em] border border-white/20 px-4 py-2.5 text-bone/80 hover:border-flame hover:text-flame transition-colors duration-300"
                      >
                        {p.title} ↗
                      </a>
                    ))}
                  </div>

                  <div className="border-t border-white/10 mt-10 pt-6 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="font-display font-semibold text-3xl text-flame">{service.price}</p>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/50 mt-2">
                        {service.estimate}
                      </p>
                    </div>
                    <button
                      data-testid="service-apply-btn"
                      onClick={() => setShowForm(true)}
                      className="bg-flame text-ink font-mono text-xs uppercase tracking-[0.2em] px-8 py-4 hover:bg-flamedeep transition-colors duration-300"
                    >
                      Apply for This Service
                    </button>
                  </div>
                </div>
              ) : (
                <div className="mt-8">
                  <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-flame">Inquiry Form</p>
                  <h3 className="font-display font-semibold uppercase tracking-tight text-2xl md:text-3xl mt-3">
                    {service.title}
                  </h3>
                  <div className="mt-8">
                    <InquiryForm defaultService={service.title} idPrefix="service-inquiry" />
                  </div>
                </div>
              )}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import ServiceDrawer from "@/components/ServiceDrawer";
import { SERVICES } from "@/lib/data";

export default function Services() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="services" className="relative bg-ivory text-ink py-24 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <SectionHeading
          eyebrow="Freelance Services"
          lines={["Hire me"]}
          meta="Starting estimates in INR — final quote depends on scope, complexity and requirements"
        />

        <div className="border-b border-ink/10">
          {SERVICES.map((s) => (
            <button
              key={s.id}
              data-testid={`service-card-${s.id}`}
              data-anim="reveal"
              onClick={() => setSelected(s)}
              className="group w-full grid grid-cols-12 items-center gap-4 border-t border-ink/10 py-8 md:py-10 text-left hover:bg-white transition-colors duration-300 px-2 md:px-4"
            >
              <span className="col-span-2 md:col-span-1 font-mono text-flamedeep text-sm">({s.code})</span>
              <span className="col-span-10 md:col-span-5">
                <span className="block font-display font-semibold uppercase tracking-tight text-2xl md:text-4xl leading-none">
                  {s.title}
                </span>
                <span className="block text-ink/60 text-sm md:text-base mt-3 max-w-md">{s.short}</span>
              </span>
              <span className="col-span-6 col-start-3 md:col-span-3 md:col-start-auto font-mono text-sm md:text-base text-flamedeep tracking-wide">
                {s.price}
              </span>
              <span className="col-span-4 md:col-span-3 flex justify-end">
                <span className="inline-flex items-center justify-center w-12 h-12 border border-ink/25 group-hover:bg-ink group-hover:text-bone group-hover:border-ink transition-all duration-300">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                    aria-hidden="true"
                  >
                    <path d="M7 17L17 7M17 7H8M17 7v9" />
                  </svg>
                </span>
              </span>
            </button>
          ))}
        </div>

        <p
          data-anim="reveal"
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/45 mt-8"
        >
          Click a category to see deliverables, relevant projects and apply
        </p>
      </div>

      <ServiceDrawer service={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

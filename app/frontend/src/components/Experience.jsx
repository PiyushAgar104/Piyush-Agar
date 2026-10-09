import SectionHeading from "@/components/SectionHeading";
import { EXPERIENCE } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative bg-ivory text-ink py-24 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <SectionHeading eyebrow="Experience & Activities" light lines={["Achievements &", "involvement"]} />

        <div className="border-b border-ink/10">
          {EXPERIENCE.map((item) => (
            <div
              key={item.id}
              data-anim="reveal"
              className="grid md:grid-cols-12 gap-4 md:gap-8 border-t border-ink/10 py-8 md:py-10"
            >
              <p className="md:col-span-2 font-mono text-xs uppercase tracking-[0.25em] text-flamedeep pt-2">
                {item.label}
              </p>
              <h3 className="md:col-span-4 font-display font-semibold uppercase tracking-tight text-xl md:text-2xl leading-tight">
                {item.title}
              </h3>
              <p className="md:col-span-6 text-ink/70 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

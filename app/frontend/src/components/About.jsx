import SectionHeading from "@/components/SectionHeading";
import { PROFILE } from "@/lib/data";
import { scrollToSection } from "@/lib/scroll";

export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section-container"
      className="relative bg-ivory text-ink py-24 md:py-36"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-14 lg:gap-10">
        <div className="lg:col-span-7">
          <SectionHeading eyebrow="About Me" light lines={["Turning complex problems", "into useful applications"]} />

          <p data-anim="reveal" className="text-lg md:text-2xl leading-relaxed text-ink/85 max-w-2xl -mt-6 md:-mt-10">
            {PROFILE.intro}
          </p>

          <div data-anim="reveal" className="border-l-2 border-flamedeep pl-5 mt-10">
            <p className="font-display font-semibold text-xl md:text-2xl">{PROFILE.education}</p>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/60 mt-2">{PROFILE.university}</p>
          </div>

          <p data-anim="reveal" className="text-ink/70 leading-relaxed mt-10 max-w-xl">
            My approach is simple: understand the problem first, then let data and design shape the
            solution — shipping working software over impressive slides. From machine learning
            pipelines to polished interfaces, I care about the parts that make a product genuinely
            useful.
          </p>

          <div data-anim="reveal" className="mt-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-flamedeep mb-4">Interests</p>
            <div data-anim="stagger" className="flex flex-wrap gap-3">
              {PROFILE.interests.map((item) => (
                <span
                  key={item}
                  data-anim-child
                  className="font-mono text-[11px] uppercase tracking-[0.15em] border border-ink/25 px-4 py-2 hover:border-flamedeep hover:text-flamedeep transition-colors duration-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div data-anim="reveal" className="flex flex-wrap gap-4 mt-12">
            <button
              data-testid="about-cta-projects"
              onClick={() => scrollToSection("projects")}
              className="bg-ink text-bone font-mono text-xs uppercase tracking-[0.2em] px-8 py-4 hover:bg-flamedeep transition-colors duration-300"
            >
              Explore Projects
            </button>
            <button
              data-testid="about-cta-hire"
              onClick={() => scrollToSection("services")}
              className="font-mono text-xs uppercase tracking-[0.2em] px-8 py-4 border border-ink/30 hover:border-flamedeep hover:text-flamedeep transition-colors duration-300"
            >
              Hire Me
            </button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div data-anim="reveal" className="relative">
            <div className="absolute -top-3 -left-3 w-full h-full border border-flamedeep/50" aria-hidden="true" />
            <div data-anim="image" className="relative overflow-hidden" data-testid="about-portrait-frame">
              <img
                data-testid="about-portrait-image"
                src="/assets/piyush-about.jpg"
                alt="Piyush Agar"
                loading="lazy"
                className="w-full aspect-[3/4] object-cover hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
            </div>
            <div className="flex justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50 mt-4">
              <span>Piyush Agar</span>
              <span>Jaipur, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

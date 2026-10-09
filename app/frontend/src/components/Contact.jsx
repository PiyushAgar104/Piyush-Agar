import { PROFILE } from "@/lib/data";
import InquiryForm from "@/components/InquiryForm";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-ink text-bone py-24 md:py-36 overflow-hidden scheme-dark">
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(224,90,71,0.12),transparent_55%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        <p
          data-anim="reveal"
          className="font-mono text-[11px] uppercase tracking-[0.3em] text-flame flex items-center gap-3"
        >
          <span className="inline-block w-10 h-px bg-flame" />
          Get in touch
        </p>

        <h2
          data-anim="lines"
          className="font-display font-semibold uppercase tracking-tight leading-[0.92] mt-8 text-[clamp(2.6rem,7.5vw,7rem)]"
        >
          <span className="block overflow-hidden pb-[0.06em] -mb-[0.06em]">
            <span className="block will-change-transform" data-line-inner>
              Let&apos;s build
            </span>
          </span>
          <span className="block overflow-hidden pb-[0.06em] -mb-[0.06em]">
            <span className="block will-change-transform" data-line-inner>
              something
            </span>
          </span>
          <span className="block overflow-hidden pb-[0.06em] -mb-[0.06em]">
            <span className="block will-change-transform font-serifit italic normal-case text-flame" data-line-inner>
              meaningful.
            </span>
          </span>
        </h2>

        <div className="grid lg:grid-cols-12 gap-14 mt-16 md:mt-24">
          <div className="lg:col-span-6">
            <p data-anim="reveal" className="text-bone/70 leading-relaxed text-lg max-w-md">
              I&apos;m open for freelance projects, collaborations and relevant opportunities. If you
              have an idea, a dataset or a product that needs building — let&apos;s talk.
            </p>

            <div data-anim="reveal" className="flex flex-wrap gap-4 mt-10">
              <a
                data-testid="contact-linkedin-link"
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] border border-white/25 px-6 py-4 hover:border-flame hover:text-flame transition-colors duration-300"
              >
                LinkedIn
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                  aria-hidden="true"
                >
                  <path d="M7 17L17 7M17 7H8M17 7v9" />
                </svg>
              </a>
              <a
                data-testid="contact-github-link"
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] border border-white/25 px-6 py-4 hover:border-flame hover:text-flame transition-colors duration-300"
              >
                GitHub
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                  aria-hidden="true"
                >
                  <path d="M7 17L17 7M17 7H8M17 7v9" />
                </svg>
              </a>
            </div>

            <p data-anim="reveal" className="font-mono text-[10px] uppercase tracking-[0.25em] text-bone/40 mt-10">
              Jaipur, India — replies within 24–48 hours
            </p>
          </div>

          <div className="lg:col-span-6">
            <div data-anim="reveal" className="border border-white/10 bg-coal/80 p-8 md:p-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-flame mb-8">
                Start a conversation
              </p>
              <InquiryForm defaultService="General Enquiry" variant="compact" idPrefix="contact" />
              <p className="font-mono text-[10px] text-bone/40 mt-6 leading-relaxed">
                Your message is saved directly to my inquiry log — no third-party email service is
                involved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const RESUME_URL = "/assets/piyush-agar-resume.pdf";

export default function ResumeBand() {
  return (
    <section className="relative bg-coal text-bone border-y border-white/10 py-16 md:py-20 scheme-dark">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-10">
        <div data-anim="reveal">
          <h2 className="font-display font-semibold uppercase tracking-tight text-4xl md:text-6xl leading-none">
            Resume
          </h2>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-bone/50 mt-4">
            Placeholder document — final resume PDF will be uploaded soon
          </p>
        </div>
        <div data-anim="reveal" className="flex flex-wrap gap-4">
          <a
            data-testid="resume-view-btn"
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-[0.2em] px-8 py-4 border border-bone/30 hover:border-flame hover:text-flame transition-colors duration-300"
          >
            View Resume
          </a>
          <a
            data-testid="resume-download-btn"
            href={RESUME_URL}
            download="Piyush-Agar-Resume.pdf"
            className="bg-flame text-ink font-mono text-xs uppercase tracking-[0.2em] px-8 py-4 hover:bg-flamedeep transition-colors duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

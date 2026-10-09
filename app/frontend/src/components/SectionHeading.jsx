export default function SectionHeading({ eyebrow, lines, meta, light = false }) {
  const ink = light ? "text-ink" : "text-bone";
  const flame = light ? "text-flamedeep" : "text-flame";
  const bar = light ? "bg-flamedeep" : "bg-flame";
  return (
    <div className="mb-14 md:mb-20">
      <p
        data-anim="reveal"
        className={`font-mono text-[11px] uppercase tracking-[0.3em] ${flame} flex items-center gap-3`}
      >
        <span className={`inline-block w-10 h-px ${bar}`} />
        {eyebrow}
      </p>
      <h2
        data-anim="lines"
        className={`font-display font-semibold uppercase tracking-tight leading-[0.95] mt-6 text-4xl sm:text-5xl lg:text-7xl ${ink}`}
      >
        {lines.map((l) => (
          <span key={l} className="block overflow-hidden pb-[0.06em] -mb-[0.06em]">
            <span className="block will-change-transform" data-line-inner>
              {l}
            </span>
          </span>
        ))}
      </h2>
      {meta && (
        <p
          data-anim="reveal"
          className={`font-mono text-[11px] uppercase tracking-[0.25em] mt-6 ${light ? "text-ink/50" : "text-bone/50"}`}
        >
          {meta}
        </p>
      )}
    </div>
  );
}

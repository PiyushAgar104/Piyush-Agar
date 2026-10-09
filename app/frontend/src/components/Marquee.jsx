const ITEMS = [
  "AI Engineering",
  "Machine Learning",
  "Data Analytics",
  "Computer Vision",
  "Full-Stack Development",
  "Open to Collaborate",
];

const Star = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" className="text-flame shrink-0" fill="currentColor" aria-hidden="true">
    <path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
  </svg>
);

export default function Marquee() {
  return (
    <div className="relative border-y border-white/10 bg-ink py-5 overflow-hidden" data-testid="marquee-banner">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <div key={copy} aria-hidden={copy === 1} className="flex items-center shrink-0">
            {ITEMS.map((item) => (
              <span key={item} className="flex items-center">
                <span className="font-display font-medium uppercase text-lg md:text-2xl tracking-wide text-bone/85 px-8 whitespace-nowrap">
                  {item}
                </span>
                <Star />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

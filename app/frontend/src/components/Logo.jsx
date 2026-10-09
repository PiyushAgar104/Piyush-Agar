export default function Logo({ className = "w-9 h-9" }) {
  return (
    <svg viewBox="0 0 44 44" fill="none" className={className} aria-hidden="true">
      <rect x="1.5" y="1.5" width="41" height="41" stroke="currentColor" strokeWidth="2" />
      <text
        x="21"
        y="28.5"
        textAnchor="middle"
        fontSize="15"
        fontWeight="700"
        letterSpacing="1"
        fill="currentColor"
        fontFamily="'Clash Display', sans-serif"
      >
        PA
      </text>
      <circle cx="35.5" cy="8.5" r="3.2" fill="#E05A47" />
    </svg>
  );
}

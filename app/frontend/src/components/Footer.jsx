import Logo from "@/components/Logo";
import { scrollToSection } from "@/lib/scroll";

export default function Footer() {
  return (
    <footer className="bg-ink text-bone border-t border-white/10 py-8 scheme-dark">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Logo className="w-7 h-7" />
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-bone/50">
            © {new Date().getFullYear()} Piyush Agar
          </p>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-bone/40">
          AI/ML · Data · Full-Stack
        </p>
        <button
          data-testid="footer-back-to-top"
          onClick={() => scrollToSection("hero")}
          className="font-mono text-[10px] uppercase tracking-[0.25em] text-bone/60 hover:text-flame transition-colors duration-300"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}

import { Component, useEffect } from "react";
import "@/App.css";
import { setupAnimations } from "@/lib/anim";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import ResumeBand from "@/components/ResumeBand";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-ink text-bone flex items-center justify-center p-8">
          <p className="font-mono text-sm text-bone/70">Something went wrong — please refresh the page.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = setupAnimations(reduced);
    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <div className="App bg-ink text-bone">
      <ErrorBoundary>
        <SmoothScroll />
        <Preloader />
        <ScrollProgress />
        <Navbar />
        <div className="noise-overlay" aria-hidden="true" />
        <main>
          <Hero />
          <Marquee />
          <About />
          <Projects />
          <Services />
          <Skills />
          <Experience />
          <ResumeBand />
          <Contact />
        </main>
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;

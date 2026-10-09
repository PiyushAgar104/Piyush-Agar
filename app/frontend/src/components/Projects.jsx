import SectionHeading from "@/components/SectionHeading";
import { PROJECTS } from "@/lib/data";

function ProjectRow({ project, flip }) {
  return (
    <article
      data-testid={`project-card-${project.id}`}
      data-pin-project
      className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end border-t border-white/10 pt-10 pb-16 last:pb-0"
    >
      <div className={`lg:col-span-8 ${flip ? "lg:order-2" : ""}`}>
        <div
          data-anim="image"
          data-project-image
          className="group relative overflow-hidden cursor-pointer"
          onClick={() => window.open(project.live, "_blank", "noopener")}
        >
          <img
            src={project.image}
            alt={`${project.title} — product screenshot`}
            loading="lazy"
            className="w-full aspect-[16/10] object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-flame/0 group-hover:bg-flame/10 transition-colors duration-500" aria-hidden="true" />
          <span className="absolute top-4 right-4 font-mono text-[10px] uppercase tracking-[0.25em] bg-ink/80 text-bone px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            Visit Live ↗
          </span>
        </div>
      </div>

      <div data-project-text className={`lg:col-span-4 ${flip ? "lg:order-1" : ""}`}>
        <p data-anim="reveal" className="font-mono text-flame text-sm tracking-[0.3em]">
          {project.index}.
        </p>
        <h3
          data-anim="reveal"
          className="font-display font-semibold uppercase tracking-tight text-3xl md:text-4xl mt-3 leading-[0.95]"
        >
          {project.title}
        </h3>
        <p data-anim="reveal" className="font-mono text-[11px] uppercase tracking-[0.2em] text-bone/50 mt-3">
          {project.subtitle}
        </p>
        <p data-anim="reveal" className="text-bone/70 leading-relaxed mt-5">
          {project.description}
        </p>
        <div data-anim="stagger" className="flex flex-wrap gap-2 mt-6">
          {project.tags.map((t) => (
            <span
              key={t}
              data-anim-child
              className="font-mono text-[10px] uppercase tracking-[0.15em] border border-white/20 px-3 py-1.5 text-bone/70"
            >
              {t}
            </span>
          ))}
        </div>
        <div data-anim="reveal" className="flex flex-wrap items-center gap-6 mt-8">
          <a
            data-testid={`project-${project.id}-live-link`}
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-[0.2em] text-flame border-b border-flame/40 pb-1 hover:border-flame transition-colors duration-300"
          >
            Live Demo ↗
          </a>
          {project.github && (
            <a
              data-testid={`project-${project.id}-github-link`}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-[0.2em] text-bone/70 border-b border-bone/30 pb-1 hover:text-bone hover:border-bone transition-colors duration-300"
            >
              Source Code ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative bg-ink text-bone py-24 md:py-36 scheme-dark">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <SectionHeading
          eyebrow="Selected Work"
          lines={["Projects that ship"]}
          meta="03 — Live products, real code"
        />
        <div>
          {PROJECTS.map((p, i) => (
            <ProjectRow key={p.id} project={p} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

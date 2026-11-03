import { projects } from "../content.js";
import { Chip, Field, Section, SmartLink, isPlaceholder } from "./ui.jsx";
import { ArrowUpRight } from "./Icons.jsx";

function ProjectLink({ href, label }) {
  if (!href) return null;
  if (isPlaceholder(href)) return <Field value={href} />;
  return (
    <SmartLink
      href={href}
      className="inline-flex items-center gap-1.5 font-semibold underline-offset-4 hover:text-accent hover:underline"
    >
      {label} <ArrowUpRight className="h-4 w-4" />
    </SmartLink>
  );
}

function ProjectCard({ project, index }) {
  const { title, description, tech, image, liveUrl, repoUrl } = project;
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="flex flex-col overflow-hidden rounded-card border border-line bg-surface shadow-soft transition-transform duration-300 hover:-translate-y-1">
      <div className="relative grid aspect-video place-items-center overflow-hidden bg-line/40 p-4">
        {image && !isPlaceholder(image) ? (
          <img
            src={image}
            alt={`Screenshot of ${title}`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : isPlaceholder(image) ? (
          <Field value={image} />
        ) : (
          <span aria-hidden className="font-mono text-6xl font-bold text-muted/40">
            {number}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <p className="font-mono text-sm text-accent">Project {number}</p>
        <h3 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
          <Field value={title} />
        </h3>
        <p className="mt-3 leading-relaxed text-muted">
          <Field value={description} />
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {tech.map((item) => (
            <Chip key={item}>
              <Field value={item} />
            </Chip>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-6">
          <ProjectLink href={liveUrl} label="Live demo" />
          <ProjectLink href={repoUrl} label="Source code" />
        </div>
      </div>
    </article>
  );
}

export default function Portfolio() {
  return (
    <Section id="portfolio" label="Portfolio" title="Things I've built">
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}

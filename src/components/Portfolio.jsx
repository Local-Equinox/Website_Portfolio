import { useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { certificates, education, projects } from "../content.js";
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
    <article className="flex w-full flex-col overflow-hidden rounded-card border border-line bg-surface shadow-soft transition-transform duration-300 hover:-translate-y-1 md:w-[calc(50%-1rem)]">
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

        <ul className="mt-5 flex flex-wrap justify-center gap-2">
          {tech.map((item) => (
            <Chip key={item}>
              <Field value={item} />
            </Chip>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap justify-center gap-x-6 gap-y-2 pt-6">
          <ProjectLink href={liveUrl} label="Live demo" />
          <ProjectLink href={repoUrl} label="Source code" />
        </div>
      </div>
    </article>
  );
}

function CertificateCard({ certificate }) {
  const { title, issuer, date, image, url } = certificate;

  return (
    <article className="flex w-full flex-col overflow-hidden rounded-card border border-line bg-surface shadow-soft transition-transform duration-300 hover:-translate-y-1 sm:w-[calc(50%-1rem)] lg:w-[calc((100%-4rem)/3)]">
      {image && (
        <div className="grid aspect-[4/3] place-items-center overflow-hidden bg-line/40 p-3">
          {isPlaceholder(image) ? (
            <Field value={image} />
          ) : (
            <img
              src={image}
              alt={`Certificate: ${title}`}
              loading="lazy"
              className="h-full w-full rounded-md object-contain"
            />
          )}
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold tracking-tight">
          <Field value={title} />
        </h3>
        <p className="mt-2 text-muted">
          <Field value={issuer} />
        </p>
        {date && (
          <p className="mt-2 font-mono text-sm text-muted">
            <Field value={date} />
          </p>
        )}
        <div className="mt-auto pt-5">
          <ProjectLink href={url} label="View certificate" />
        </div>
      </div>
    </article>
  );
}

function EducationList() {
  return (
    <ol className="mx-auto max-w-2xl">
      {education.map(({ level, school, program, years }, index) => (
        <li key={level}>
          {/* Connector linking each school to the next. */}
          {index > 0 && <div aria-hidden className="mx-auto h-8 w-px bg-line" />}
          <article className="rounded-card border border-line bg-surface p-6 shadow-soft sm:p-8">
            <p className="font-mono text-sm text-accent">{level}</p>
            <h3 className="mt-2 text-xl font-bold tracking-tight sm:text-2xl">
              <Field value={school} />
            </h3>
            {program && (
              <p className="mt-2 text-muted">
                <Field value={program} />
              </p>
            )}
            <p className="mt-2 font-mono text-sm text-muted">
              <Field value={years} />
            </p>
          </article>
        </li>
      ))}
    </ol>
  );
}

const TABS = [
  {
    id: "projects",
    label: "Projects",
    content: (
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    ),
  },
  {
    id: "certificates",
    label: "Certificates",
    content: (
      <div className="flex flex-wrap justify-center gap-8">
        {certificates.map((certificate, index) => (
          <CertificateCard key={index} certificate={certificate} />
        ))}
      </div>
    ),
  },
  {
    id: "education",
    label: "Education",
    content: <EducationList />,
  },
];

function TabBar({ active, onSelect }) {
  const buttons = useRef({});

  // Standard tab keyboard controls: arrow keys, Home and End.
  const onKeyDown = (event) => {
    const last = TABS.length - 1;
    const current = TABS.findIndex((tab) => tab.id === active);
    const next = {
      ArrowRight: current === last ? 0 : current + 1,
      ArrowLeft: current === 0 ? last : current - 1,
      Home: 0,
      End: last,
    }[event.key];
    if (next === undefined) return;
    event.preventDefault();
    onSelect(TABS[next].id);
    buttons.current[TABS[next].id].focus();
  };

  return (
    <div
      role="tablist"
      aria-label="Portfolio categories"
      onKeyDown={onKeyDown}
      className="mx-auto grid max-w-3xl grid-cols-3 gap-1 rounded-card border border-line bg-surface p-1.5 shadow-soft"
    >
      {TABS.map(({ id, label }) => {
        const selected = id === active;
        return (
          <button
            key={id}
            ref={(element) => {
              buttons.current[id] = element;
            }}
            type="button"
            role="tab"
            id={`tab-${id}`}
            aria-selected={selected}
            aria-controls={`panel-${id}`}
            tabIndex={selected ? 0 : -1}
            onClick={() => onSelect(id)}
            className={`relative cursor-pointer rounded-control px-1 py-2.5 text-[13px] font-semibold transition-colors sm:py-3 sm:text-base ${
              selected ? "text-page" : "text-muted hover:text-ink"
            }`}
          >
            {selected && (
              <motion.span
                layoutId="portfolio-tab"
                transition={{ type: "spring", stiffness: 400, damping: 34 }}
                className="absolute inset-0 rounded-control bg-ink"
              />
            )}
            <span className="relative">{label}</span>
          </button>
        );
      })}
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState(TABS[0].id);
  const { content } = TABS.find((tab) => tab.id === active);

  return (
    <Section id="portfolio" label="Portfolio" title="Portfolio Showcase" centered>
      {/* reducedMotion="user" turns these animations off for visitors who ask for less motion. */}
      <MotionConfig reducedMotion="user">
        <p className="mx-auto -mt-6 mb-8 max-w-2xl text-lg text-muted">
          A look at my projects, certifications and education.
        </p>

        <TabBar active={active} onSelect={setActive} />

        <div className="mt-10">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              role="tabpanel"
              id={`panel-${active}`}
              aria-labelledby={`tab-${active}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              {content}
            </motion.div>
          </AnimatePresence>
        </div>
      </MotionConfig>
    </Section>
  );
}

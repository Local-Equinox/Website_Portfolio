import { downloads, profile, techStack } from "../content.js";
import { Chip, DownloadLink, Field, Section } from "./ui.jsx";
import { Download } from "./Icons.jsx";

export default function About() {
  return (
    <Section id="about" label="About" title="A bit about me">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-xl leading-relaxed whitespace-pre-line sm:text-2xl">
            <Field value={profile.bio} />
          </p>
          <div className="mt-8">
            <DownloadLink
              href={downloads.cv}
              className="inline-flex items-center gap-2 rounded-control bg-accent px-5 py-3 font-semibold text-on-accent transition-transform hover:-translate-y-0.5"
            >
              Download CV <Download className="h-4 w-4" />
            </DownloadLink>
          </div>
        </div>

        <dl className="space-y-8">
          <div>
            <dt className="font-mono text-sm text-muted">Currently</dt>
            <dd className="mt-2 text-lg font-semibold">
              <Field value={profile.education} />
            </dd>
          </div>
          <div>
            <dt className="font-mono text-sm text-muted">Tech stack</dt>
            <dd>
              <ul className="mt-3 flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <Chip key={tech}>
                    <Field value={tech} />
                  </Chip>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}

import { downloads, personalDetails, profile, socials, techStack } from "../content.js";
import { Chip, DownloadLink, Field, Section, isPlaceholder } from "./ui.jsx";
import { Download } from "./Icons.jsx";

function Detail({ label, className = "", children }) {
  return (
    <div className={`min-w-0 ${className}`}>
      <dt className="font-mono text-xs tracking-wider text-muted uppercase">{label}</dt>
      <dd className="mt-1 font-semibold">{children}</dd>
    </div>
  );
}

function PersonalDetails() {
  const email = socials.find((social) => social.icon === "mail")?.url;

  return (
    <section>
      <h3 className="border-l-4 border-accent pl-3 text-xl font-bold tracking-tight">
        Personal Details
      </h3>
      <dl className="mt-5 grid gap-x-6 gap-y-5 min-[420px]:grid-cols-2">
        <Detail label="Name">
          <Field value={profile.name} />
        </Detail>
        {email && (
          <Detail label="Email">
            {isPlaceholder(email) ? (
              <Field value={email} />
            ) : (
              <a
                href={email}
                className="text-[15px] [overflow-wrap:anywhere] underline-offset-4 hover:text-accent hover:underline"
              >
                {email.replace(/^mailto:/, "")}
              </a>
            )}
          </Detail>
        )}
        <Detail label="CGPA">
          <Field value={personalDetails.cgpa} />
        </Detail>
        <Detail label="Education" className="min-[420px]:col-span-2">
          <Field value={personalDetails.education} />
        </Detail>
      </dl>
    </section>
  );
}

export default function About() {
  return (
    <Section id="about" label="About" title="A bit about me">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
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

        <div className="min-w-0 space-y-10">
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

          <PersonalDetails />
        </div>
      </div>
    </Section>
  );
}

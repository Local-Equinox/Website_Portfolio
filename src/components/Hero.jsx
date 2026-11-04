import { profile, socials, techStack } from "../content.js";
import { Field, Photo, SmartLink, isPlaceholder } from "./ui.jsx";
import { ArrowUpRight, GraduationCap, Layers, socialIcons } from "./Icons.jsx";
import HangingIdCard from "./HangingIdCard.jsx";

function FloatingCard({ icon: Icon, label, className, children }) {
  return (
    <div
      className={`absolute w-52 rounded-2xl bg-surface/95 p-3.5 shadow-soft backdrop-blur motion-safe:animate-float ${className}`}
    >
      <p className="flex items-center gap-2 text-xs font-medium text-muted">
        <span className="grid h-6 w-6 place-items-center rounded-full bg-accent/10 text-accent">
          <Icon className="h-3.5 w-3.5" />
        </span>
        {label}
      </p>
      <div className="mt-2 text-sm font-semibold">{children}</div>
    </div>
  );
}

/** Light-mode visual: a soft-shadowed portrait with floating info cards. */
function FramedPortrait() {
  return (
    <div className="relative mx-6 my-10 self-center sm:mx-16 lg:my-16 dark:hidden">
      <div className="aspect-[4/5] w-56 overflow-hidden rounded-[2rem] border-8 border-surface bg-surface shadow-soft min-[360px]:w-64 sm:w-80">
        <Photo src={profile.photo} alt={`Portrait of ${profile.name}`} />
      </div>

      <FloatingCard icon={GraduationCap} label="Education" className="-top-6 -left-6 sm:-left-16">
        <Field value={profile.education} />
      </FloatingCard>

      <FloatingCard
        icon={Layers}
        label="Tech stack"
        className="-right-6 -bottom-6 [animation-delay:-3s] sm:-right-16"
      >
        <ul className="flex flex-wrap gap-1.5">
          {techStack.slice(0, 4).map((tech) => (
            <li key={tech} className="max-w-full">
              {isPlaceholder(tech) ? (
                <Field value={tech} />
              ) : (
                <span className="rounded-full bg-page px-2.5 py-1 text-xs">{tech}</span>
              )}
            </li>
          ))}
        </ul>
      </FloatingCard>
    </div>
  );
}

export default function Hero() {
  const filledSocials = socials.filter((social) => !isPlaceholder(social.url));

  return (
    <section id="home" className="overflow-x-clip">
      <div className="mx-auto grid max-w-6xl gap-x-10 px-5 pb-16 sm:px-8 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[1.25fr_1fr] lg:pb-0">
        <div className="min-w-0 self-center pt-10 lg:py-16">
          <p className="font-mono text-sm text-accent">
            <Field value={profile.education} />
          </p>

          <h1 className="mt-5 text-5xl leading-[0.95] font-bold tracking-tight [--slot-size:1.5rem] sm:text-7xl xl:text-8xl dark:uppercase">
            <Field value={profile.name} />
          </h1>

          <p className="mt-6 max-w-xl text-xl text-muted sm:text-2xl">
            <Field value={profile.role} />
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-control bg-accent px-5 py-3 font-semibold text-on-accent transition-transform hover:-translate-y-0.5"
            >
              View my work <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="rounded-control border border-line bg-surface px-5 py-3 font-semibold transition-transform hover:-translate-y-0.5"
            >
              Get in touch
            </a>

            {filledSocials.map(({ label, icon, url }) => {
              const Icon = socialIcons[icon] ?? socialIcons.link;
              return (
                <SmartLink
                  key={label}
                  href={url}
                  aria-label={label}
                  className="grid h-12 w-12 place-items-center rounded-control text-muted transition-colors hover:text-ink"
                >
                  <Icon className="h-5 w-5" />
                </SmartLink>
              );
            })}
          </div>
        </div>

        {/* First on mobile, so the lanyard still hangs directly from the nav. */}
        <div className="order-first flex justify-center lg:order-last">
          <div className="hidden dark:block">
            <HangingIdCard photo={profile.photo} name={profile.name} role={profile.role} />
          </div>
          <FramedPortrait />
        </div>
      </div>
    </section>
  );
}

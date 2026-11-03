import { socials } from "../content.js";
import { Field, Section, SmartLink, isPlaceholder } from "./ui.jsx";
import { ArrowUpRight, socialIcons } from "./Icons.jsx";

const displayUrl = (url) => url.replace(/^(https?:\/\/(www\.)?|mailto:)/, "").replace(/\/$/, "");

export default function Contact() {
  return (
    <Section id="contact" label="Contact" title="Let's talk">
      <div className="min-h-[40svh]">
        <p className="max-w-xl text-xl text-muted">
          Have a project, an opportunity or a question? The best way to reach me is below.
        </p>

        <ul className="mt-10 divide-y divide-line border-y border-line">
          {socials.map(({ label, icon, url }) => {
            const Icon = socialIcons[icon] ?? socialIcons.link;
            const body = (
              <>
                <Icon className="h-6 w-6 shrink-0" />
                <span className="w-24 shrink-0 font-semibold">{label}</span>
              </>
            );

            return (
              <li key={label}>
                {isPlaceholder(url) ? (
                  <div className="flex flex-wrap items-center gap-4 py-5">
                    {body}
                    <Field value={url} />
                  </div>
                ) : (
                  <SmartLink
                    href={url}
                    className="group flex items-center gap-4 py-5 transition-colors hover:text-accent"
                  >
                    {body}
                    <span className="min-w-0 truncate text-muted group-hover:text-accent">
                      {displayUrl(url)}
                    </span>
                    <ArrowUpRight className="ml-auto h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </SmartLink>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}

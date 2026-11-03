import { downloads, profile, socials } from "../content.js";
import { DownloadLink, Field, SmartLink, isPlaceholder } from "./ui.jsx";

const linkStyle = "transition-colors hover:text-accent";

export default function Footer() {
  const email = socials.find((social) => social.icon === "mail")?.url;
  const linkedIn = socials.find((social) => social.icon === "linkedin")?.url;

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="min-w-0">
          <p className="text-lg font-bold uppercase">
            <Field value={profile.name} />
          </p>
          <p className="mt-1 text-sm text-muted">
            <Field value={profile.role} /> · © {new Date().getFullYear()}
          </p>
        </div>

        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium">
          {email && !isPlaceholder(email) && (
            <li>
              <SmartLink href={email} className={linkStyle}>
                Email me
              </SmartLink>
            </li>
          )}
          {linkedIn && !isPlaceholder(linkedIn) && (
            <li>
              <SmartLink href={linkedIn} className={linkStyle}>
                LinkedIn
              </SmartLink>
            </li>
          )}
          <li className="max-w-full">
            <DownloadLink href={downloads.resume} className={linkStyle}>
              Resume
            </DownloadLink>
          </li>
          <li>
            <a href="#privacy" className={linkStyle}>
              Privacy
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

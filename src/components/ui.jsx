import { useState } from "react";

export const isPlaceholder = (value) => typeof value === "string" && value.startsWith("[INSERT:");

/** Renders a value from content.js, or the pink marker if it is still unfilled. */
export function Field({ value }) {
  return isPlaceholder(value) ? <span className="slot">{value}</span> : value;
}

/** A link that opens external sites in a new tab. */
export function SmartLink({ href, children, ...props }) {
  const external = /^https?:/.test(href);
  return (
    <a href={href} {...(external && { target: "_blank", rel: "noreferrer" })} {...props}>
      {children}
    </a>
  );
}

/** Turns a Google Drive share link into its direct-download form. */
const directDownloadUrl = (url) => {
  const driveFile = url.match(/drive\.google\.com\/file\/d\/([^/?#]+)/);
  return driveFile ? `https://drive.google.com/uc?export=download&id=${driveFile[1]}` : url;
};

/** A link that downloads a file, or the pink marker if its URL is still unfilled. */
export function DownloadLink({ href, children, ...props }) {
  if (isPlaceholder(href)) return <Field value={href} />;
  return (
    <SmartLink href={directDownloadUrl(href)} download {...props}>
      {children}
    </SmartLink>
  );
}

/**
 * Shared section frame: anchor target, small label and large heading.
 * `centered` centers the heading and content; the label always stays on the left.
 */
export function Section({ id, label, title, centered = false, children }) {
  const align = centered ? "text-center" : "";
  return (
    <section id={id} className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <p className="font-mono text-sm text-accent">{label}</p>
        <h2
          className={`mt-3 text-4xl font-bold tracking-tight text-balance sm:text-6xl dark:uppercase ${align}`}
        >
          {title}
        </h2>
        <div className={`mt-12 ${align}`}>{children}</div>
      </div>
    </section>
  );
}

export function Chip({ children }) {
  return (
    <li className="max-w-full rounded-control border border-line bg-surface px-3 py-1.5 font-mono text-sm">
      {children}
    </li>
  );
}

/** Profile photo that falls back to a silhouette while unset, or if the file can't load. */
export function Photo({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);

  if (src && !isPlaceholder(src) && !failed) {
    return (
      <img
        src={src}
        alt={alt}
        onError={() => setFailed(true)}
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }

  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-3 bg-line/50 p-4 ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-16 w-16 fill-muted/50" aria-hidden>
        <circle cx="12" cy="8" r="4.5" />
        <path d="M3 22c0-5 4-8.5 9-8.5s9 3.5 9 8.5z" />
      </svg>
      <span className="slot">
        {failed ? `Photo not found: ${src}` : "[INSERT: PROFILE PHOTO URL]"}
      </span>
    </div>
  );
}

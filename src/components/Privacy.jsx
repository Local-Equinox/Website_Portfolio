import { privacy, socials } from "../content.js";
import { Field, isPlaceholder } from "./ui.jsx";

function Block({ title, children }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold tracking-tight">{title}</h2>
      <div className="mt-3 space-y-4 leading-relaxed">{children}</div>
    </section>
  );
}

export default function Privacy() {
  const email = socials.find((social) => social.icon === "mail")?.url;
  const hasEmail = email && !isPlaceholder(email);

  return (
    <main className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-20">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl dark:uppercase">Privacy</h1>
      <p className="mt-5 text-lg leading-relaxed text-muted">
        This is my personal portfolio. It has no accounts and no forms, and the only analytics are
        anonymous visitor statistics, so I collect very little. Here is what happens when you visit.
      </p>
      <p className="mt-3 font-mono text-sm text-muted">Last updated {privacy.lastUpdated}</p>

      <Block title="What happens when you visit">
        <p>
          <strong>Analytics.</strong> I use Vercel Web Analytics to see how many people visit this
          site and roughly where they come from. For each visit it may record the time, the page
          address, the site you came from, your approximate location (such as country and city), and
          your device type, operating system and browser. It does not use third-party cookies.
          Vercel tells visitors apart with a hash created from the incoming request and discards it
          after 24 hours. I only see the combined statistics and can't use them to identify you.
          Vercel's{" "}
          <a
            href="https://vercel.com/docs/analytics/privacy-policy"
            target="_blank"
            rel="noreferrer"
            className="text-accent underline underline-offset-4"
          >
            analytics privacy documentation
          </a>{" "}
          has the details.
        </p>
        <p>
          <strong>Hosting.</strong> This site is hosted on{" "}
          <Field value={privacy.hostingProvider} />. Like most web hosts, it may keep standard
          request logs, such as your IP address, browser and the page you requested, to operate and
          secure the service. That processing is handled by the host, so its privacy notice has the
          details.
        </p>
        <p>
          <strong>Your theme choice.</strong> If you switch between light and dark mode, your choice
          is saved in your browser's local storage. It stays on your device and is never sent to me.
        </p>
        <p>
          <strong>Fonts and images.</strong> The fonts and my photo are served from this site, so no
          outside font service sees your visit.
        </p>
      </Block>

      <Block title="What I don't do">
        <ul className="list-disc space-y-2 pl-5">
          <li>I don't use analytics to identify or build profiles of individual visitors.</li>
          <li>I don't run ads or advertising trackers.</li>
          <li>I don't sell visitor data, and Vercel is the only analytics service I use.</li>
          <li>There is no newsletter or mailing list, so there is nothing to unsubscribe from.</li>
        </ul>
      </Block>

      <Block title="Links and downloads">
        <p>
          Links to sites like GitHub and LinkedIn take you away from this site, and those sites have
          their own privacy policies. My resume and CV may also be stored with an outside file
          service, which may log the download under its own policy.
        </p>
      </Block>

      <Block title="If you email me">
        <p>
          The email link opens your own mail app, so nothing is submitted through this site. If you
          write to me, I keep your message so I can reply, and I don't use your address for anything
          else.
        </p>
      </Block>

      <Block title="Your choices">
        <p>
          You can block analytics with your browser's tracking protection or an ad blocker, and the
          site will work the same. Clearing your browser's site data removes your saved theme. If you
          have emailed me and want your message deleted, just ask and I will delete it.
        </p>
      </Block>

      <Block title="Changes">
        <p>If I change how this site handles data, I'll update this page and the date above.</p>
      </Block>

      <Block title="Contact">
        <p>
          Questions about any of this?{" "}
          {hasEmail ? (
            <>
              Write to{" "}
              <a href={email} className="text-accent underline underline-offset-4">
                {email.replace(/^mailto:/, "")}
              </a>
              .
            </>
          ) : (
            <Field value={email ?? "[INSERT: SOCIAL/GITHUB LINKS: mailto:YOUR EMAIL]"} />
          )}
        </p>
      </Block>
    </main>
  );
}

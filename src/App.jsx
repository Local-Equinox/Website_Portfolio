import { useEffect, useLayoutEffect, useState } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Contact from "./components/Contact.jsx";
import Privacy from "./components/Privacy.jsx";
import Footer from "./components/Footer.jsx";

/** True while the URL is #privacy. Every other hash is a section of the main page. */
function useIsPrivacyPage() {
  const [isPrivacy, setIsPrivacy] = useState(() => location.hash === "#privacy");

  useEffect(() => {
    const onHashChange = () => setIsPrivacy(location.hash === "#privacy");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // The browser can't scroll to a section that wasn't on screen when the link
  // was clicked, so jump there ourselves whenever the page switches.
  useLayoutEffect(() => {
    const target = isPrivacy ? null : document.getElementById(location.hash.slice(1));
    if (target) target.scrollIntoView({ behavior: "instant" });
    else window.scrollTo({ top: 0, behavior: "instant" });
  }, [isPrivacy]);

  return isPrivacy;
}

export default function App() {
  const isPrivacy = useIsPrivacyPage();

  return (
    <>
      <div aria-hidden className="grid-backdrop fixed inset-0 -z-10 hidden dark:block" />
      <Nav isPrivacy={isPrivacy} />
      {isPrivacy ? (
        <Privacy />
      ) : (
        <main>
          <Hero />
          <About />
          <Portfolio />
          <Contact />
        </main>
      )}
      <Footer />
    </>
  );
}

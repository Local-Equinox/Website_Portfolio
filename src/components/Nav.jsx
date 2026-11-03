import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { profile } from "../content.js";
import { isPlaceholder } from "./ui.jsx";
import { Moon, Sun } from "./Icons.jsx";

const TABS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

function useTheme() {
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains("dark"));

  const toggle = () => {
    const next = !isDark;
    const apply = () => {
      document.documentElement.classList.toggle("dark", next);
      flushSync(() => setIsDark(next));
    };
    // Cross-fades the whole page where supported; otherwise switches instantly.
    if (document.startViewTransition) document.startViewTransition(apply);
    else apply();
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // Storage can be blocked (e.g., private browsing); the toggle still works.
    }
  };

  return [isDark, toggle];
}

/** Tracks which section currently crosses the middle of the viewport. */
function useActiveSection() {
  const [active, setActive] = useState(TABS[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    for (const { id } of TABS) observer.observe(document.getElementById(id));
    return () => observer.disconnect();
  }, []);

  return active;
}

function initials(name) {
  if (isPlaceholder(name)) return "[ ]";
  const words = name.trim().split(/\s+/);
  return (words[0][0] + (words.length > 1 ? words.at(-1)[0] : "")).toUpperCase();
}

function ThemeSwitch() {
  const [isDark, toggle] = useTheme();
  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Dark mode"
      onClick={toggle}
      className="relative h-8 w-14 shrink-0 cursor-pointer rounded-full border border-line bg-surface"
    >
      <span
        className={`absolute top-0.5 left-0.5 grid h-6.5 w-6.5 place-items-center rounded-full bg-ink text-page transition-transform duration-300 ${
          isDark ? "translate-x-6" : ""
        }`}
      >
        {isDark ? <Moon className="h-3.5 w-3.5" /> : <Sun className="h-3.5 w-3.5" />}
      </span>
    </button>
  );
}

export default function Nav() {
  const active = useActiveSection();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-page/80 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-3 sm:px-8"
      >
        <a
          href="#home"
          aria-label="Back to top"
          className="hidden font-mono text-lg font-bold sm:block"
        >
          {initials(profile.name)}
        </a>

        <ul className="flex items-center sm:gap-1">
          {TABS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? "true" : undefined}
                className={`block rounded-control px-1.5 py-1.5 text-[13px] font-medium transition-colors min-[360px]:px-2 sm:px-4 sm:text-sm ${
                  active === id ? "bg-ink text-page" : "text-muted hover:text-ink"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <ThemeSwitch />
      </nav>
    </header>
  );
}

import { profile } from "../content.js";
import { Field } from "./ui.jsx";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-8 font-mono text-sm text-muted sm:px-8">
        © {new Date().getFullYear()} <Field value={profile.name} />
      </div>
    </footer>
  );
}

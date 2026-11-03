import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Relative asset paths, so the build also works from a sub-path such as
  // GitHub Pages (https://<user>.github.io/Website_Portfolio/).
  base: "./",
});

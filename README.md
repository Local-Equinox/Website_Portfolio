# Website_Portfolio
Personal and customizable website suited, tailored, and curated for displaying my competency in the tech field

Built with React, Vite and Tailwind CSS.

## Run it

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev       # local dev server at http://localhost:5173
npm run build     # production build, output in dist/
npm run preview   # serve the production build locally
```

## Add your details

- **Text and links:** replace every `[INSERT: ...]` value in `src/content.js`.
- **Browser tab title and search description:** replace the two placeholders in `index.html`.

Unfilled values appear on the page as pink dashed markers. To list what's left:

```bash
grep -rn "INSERT:" src index.html
```

## Add your images

Put image files in `public/images/`, then reference them in `src/content.js` without a leading slash:

```js
photo: "images/profile.jpg",     // portrait (4:5) crop looks best
image: "images/project-1.jpg",   // project screenshot (16:9) crop looks best
```

Full `https://` image URLs also work.

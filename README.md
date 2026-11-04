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

## Add your resume and CV

Set `downloads.resume` and `downloads.cv` in `src/content.js`. The most reliable option is to put the PDFs in `public/files/`:

```js
resume: "files/resume.pdf",
cv: "files/cv.pdf",
```

Google Drive share links also work once the file is shared with "Anyone with the link". Links from other sites may open the file in a new tab instead of downloading it.

## Privacy page

The page is in `src/components/Privacy.jsx` and opens at `#privacy`. Set your host in `privacy.hostingProvider` in `src/content.js`. The page describes Vercel Web Analytics, so update it if you add or change any tracking.

## Analytics

Visitor counts use [Vercel Web Analytics](https://vercel.com/docs/analytics). Enable it for the project in the Vercel dashboard, then deploy. Data is only collected on the Vercel deployment, and the numbers appear under **Analytics** in the dashboard.

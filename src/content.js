/* ==========================================================================
   YOUR DETAILS GO HERE. This is the only file you need to edit, apart from
   the <title> and description in index.html.

   Replace every "[INSERT: ...]" string with your own text. Anything you have
   not replaced yet shows up on the page as a pink dashed marker, so you can't
   miss it. To list what's left, run:   grep -rn "INSERT:" src index.html
   ========================================================================== */

export const profile = {
  // [INSERT: FULL NAME (e.g., John Erwin F. Cadiz)]
  name: "John Erwin F. Cadiz",

  // [INSERT: HEADLINE/ROLE (e.g., BSIT Student & Full-Stack Developer)]
  role: "BS in Information Technology Student",

  // [INSERT: YEAR LEVEL & UNIVERSITY (e.g., 2nd-Year BSIT at MSU-IIT)]
  education: "2nd-Year BSIT at Mindanao State University - Iligan Institute of Technology (MSU-IIT)",

  // [INSERT: PROFILE PHOTO URL]
  // Put your photo in public/images/ and write its path WITHOUT a leading
  // slash, e.g. "images/profile.jpg". A full https:// URL also works.
  // A portrait (4:5) crop looks best.
  photo: "images/profile.JPG",

  // [INSERT: SHORT BIO/ABOUT ME]
  bio: "An aspiring and diligent Software Engineer, interested in the field of Machine Learning and Artificial Intelligence and also Robotics.",
};

// [INSERT: TECH STACK ARRAY (e.g., Java, Python, React)]
// Write one string per technology: ["Java", "Python", "React"]
// The first 4 also appear on the floating card in the light-mode hero.
export const techStack = ["Java", "Python", "React", "CSS", "HTML"];

// Add or remove objects here to change how many projects are shown.
// `image`, `liveUrl` and `repoUrl` are optional: use "" to leave one out.
export const projects = [
  {
    // [INSERT: PORTFOLIO PROJECT 1 DETAILS]
    title: "[INSERT: PORTFOLIO PROJECT 1 DETAILS: TITLE]",
    description: "[INSERT: PORTFOLIO PROJECT 1 DETAILS: 1-2 SENTENCE DESCRIPTION]",
    tech: ["[INSERT: PROJECT 1 TECH USED]"],
    image: "[INSERT: PROJECT 1 IMAGE (e.g., images/project-1.jpg)]",
    liveUrl: "[INSERT: PROJECT 1 LIVE DEMO URL]",
    repoUrl: "[INSERT: PROJECT 1 GITHUB REPO URL]",
  },
  {
    // [INSERT: PORTFOLIO PROJECT 2 DETAILS]
    title: "[INSERT: PORTFOLIO PROJECT 2 DETAILS: TITLE]",
    description: "[INSERT: PORTFOLIO PROJECT 2 DETAILS: 1-2 SENTENCE DESCRIPTION]",
    tech: ["[INSERT: PROJECT 2 TECH USED]"],
    image: "[INSERT: PROJECT 2 IMAGE (e.g., images/project-2.jpg)]",
    liveUrl: "[INSERT: PROJECT 2 LIVE DEMO URL]",
    repoUrl: "[INSERT: PROJECT 2 GITHUB REPO URL]",
  },
];

// [INSERT: SOCIAL/GITHUB LINKS]
// `icon` can be "github", "linkedin", "mail" or "link" (any other website).
// Email format: "mailto:you@example.com"
export const socials = [
  { label: "GitHub", icon: "github", url: "https://github.com/Local-Equinox" },
  { label: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/johnerwincadiz/" },
  { label: "Email", icon: "mail", url: "mailto:johnerwincadiz20@gmail.com" },
];

// Download links for the footer's "Resume" link and the About section's
// "Download CV" button. Either way of adding a file works:
//   1. Most reliable: put the PDF in public/files/ and write its path WITHOUT
//      a leading slash, e.g. "files/resume.pdf".
//   2. Paste a Google Drive share link. Set its sharing to "Anyone with the
//      link" first; the site converts it to a direct download automatically.
// Links from other sites may open the file in a new tab instead of downloading
// it, because the site hosting the file decides that.
export const downloads = {
  // [INSERT: RESUME DOWNLOAD LINK]
  resume: "files/resume:cv.pdf",

  // [INSERT: CV DOWNLOAD LINK]
  cv: "files/resume:cv.pdf",
};

// Used on the Privacy page.
export const privacy = {
  // [INSERT: HOSTING PROVIDER (e.g., GitHub Pages, Vercel, Netlify)]
  hostingProvider: "GitHub Pages, Vercel",

  // Change this date whenever you change the Privacy page.
  lastUpdated: "November 4, 2026",
};

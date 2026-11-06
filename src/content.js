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
export const techStack = ["Java", "Python", "React", "JavaScript", "CSS", "HTML"];

// Add or remove objects here to change how many projects are shown.
// `image`, `liveUrl` and `repoUrl` are optional: use "" to leave one out.
export const projects = [
  {
    // [INSERT: PORTFOLIO PROJECT 1 DETAILS]
    title: "VoiceED",
    description: "Co-developed, VoiceED, a student-driven platform engineered to ensure learners are heard, supported, and inspired. By bridging modern technology with empathy, VoiceED unifies incident reporting, mental wellness, peer motivation, and collaborative study resources into a single accessible hub.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: "images/project-1.png",
    liveUrl: "https://hannbella011.github.io/VoiceED/",
    repoUrl: "https://github.com/HannBella011/VoiceED",
  },
  {
    // [INSERT: PORTFOLIO PROJECT 2 DETAILS]
    title: "3D Solar System Explorer",
    description: "A browser-based, interactive 3D solar system simulation and exploration game. What began as a visual mapping of our solar system evolved into a fully playable web experience. Users can pilot a spaceship, warp between celestial bodies, and seamlessly land on solid planets to explore the surface on foot.",
    tech: ["React", "Three.js", "React Three Fiber (R3F)", "Rapier", "ecctrl", "HTML", "CSS", "NASA 3D Resources"],
    image: "images/Solar_System_Game.png",
    liveUrl: "https://local-equinox.github.io/Solar_System_3D/",
    repoUrl: "https://github.com/Local-Equinox/Solar_System_3D",
  },

  /* template
  {
    // [INSERT: PORTFOLIO PROJECT 2 DETAILS]
    title: "[INSERT: PORTFOLIO PROJECT 2 DETAILS: TITLE]",
    description: "[INSERT: PORTFOLIO PROJECT 2 DETAILS: 1-2 SENTENCE DESCRIPTION]",
    tech: ["[INSERT: PROJECT 2 TECH USED]"],
    image: "[INSERT: PROJECT 2 IMAGE (e.g., images/project-2.jpg)]",
    liveUrl: "[INSERT: PROJECT 2 LIVE DEMO URL]",
    repoUrl: "[INSERT: PROJECT 2 GITHUB REPO URL]",
  },
  */
];

// The Portfolio section's "Certificates" tab. Add or remove objects to change
// how many are shown. Put certificate images in public/images/ and write the path
// WITHOUT a leading slash. `date`, `image` and `url` are optional: use "" to leave
// one out.
export const certificates = [
  {
    // [INSERT: CERTIFICATE 1 DETAILS]
    title: "Quantum Computing and Cybersecurity Lecture Series 2026",
    issuer: "Quantum Computing Society of the Philippines",
    date: "June 2026",
    image: "images/QCSP_Cert.png",
    url: "https://verified.sertifier.com/en/verify/88341954830960/?ref=email",
  },
  {
    title: "KadaKareer Packetworx Workshop 1",
    issuer: "KadaKareer",
    date: "April 2026",
    image: "images/Packetworx_1.jpg",
    url: "",
  },
  {
    title: "KadaKareer Packetworx Workshop 2",
    issuer: "KadaKareer",
    date: "April 2026",
    image: "images/Packetworx_2.jpg",
    url: "",
  },
  {
    title: "KadaKareer Packetworx Workshop 3",
    issuer: "KadaKareer",
    date: "April 2026",
    image: "images/Packetworx_3.jpg",
    url: "",
  },
  {
    title: "AI for Oceans",
    issuer: "code.org",
    date: "August 2025",
    image: "images/AI_for_Oceans.png",
    url: "",
  },
  /* template for certs
  {
    // [INSERT: CERTIFICATE 2 DETAILS]
    title: "[INSERT: CERTIFICATE 2 TITLE]",
    issuer: "[INSERT: CERTIFICATE 2 ISSUING ORGANIZATION]",
    date: "[INSERT: CERTIFICATE 2 DATE (e.g., June 2026)]",
    image: "[INSERT: CERTIFICATE 2 IMAGE (e.g., images/certificate-2.jpg)]",
    url: "[INSERT: CERTIFICATE 2 VERIFICATION LINK]",
  },
  */
];

// The Portfolio section's "Education" tab, shown in this order. `program` is
// optional: use "" to leave it out.
export const education = [
  {
    // [INSERT: ELEMENTARY SCHOOL DETAILS]
    level: "Elementary",
    school: "Linamon Central School",
    program: "",
    years: "2013 - 2019",
  },
  {
    // [INSERT: JUNIOR HIGH SCHOOL DETAILS]
    level: "Junior High School",
    school: "Our Lady of Perpetual Help Academy",
    program: "",
    years: "2019 - 2023",
  },
  {
    // [INSERT: SENIOR HIGH SCHOOL DETAILS]
    level: "Senior High School",
    school: "Our Lady of Perpetual Help Academy",
    program: "STEM",
    years: "2022 - 2025",
  },
  {
    level: "College",
    school: "Mindanao State University - Iligan Institute of Technology (MSU-IIT)",
    program: "BS in Information Technology, 2nd Year",
    years: "2025 - Present",
  },
];

// [INSERT: SOCIAL/GITHUB LINKS]
// `icon` can be "github", "linkedin", "mail" or "link" (any other website).
// Email format: "mailto:you@example.com"
export const socials = [
  { label: "GitHub", icon: "github", url: "https://github.com/Local-Equinox" },
  { label: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/johnerwincadiz/" },
  { label: "Instagram", icon: "instagram", url: "https://www.instagram.com/gah.gah7/"},
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

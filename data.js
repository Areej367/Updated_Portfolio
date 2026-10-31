/* =========================================================
   data.js — Portfolio Content

   ✏️  THIS IS THE ONLY FILE YOU NEED TO EDIT.
   Open it in Notepad / VS Code, change text, save, refresh the page.

   ▸ Update your info?   → edit PROFILE
   ▸ Add a skill?        → add one line in SKILLS
   ▸ Add a project?      → copy a block in PROJECTS
   ▸ Add a certificate?  → put the image in the  certs/  folder, then
                           add one line in CERTIFICATES
   ▸ Remove anything?    → delete its line/block (or put // in front)
   ▸ Change your photo?  → replace photo.png (or change "photo" below)
   ▸ Change page text?   → see SITE TEXT below

   Tip: every item ends with a comma, except the last one in a list.
   ========================================================= */


/* ─────────────────────────────────────────────────────────
   YOUR PERSONAL INFO
   ───────────────────────────────────────────────────────── */
const profile = {
  name:      "Areej Maryam",
  title:     "Full Stack Developer",
  subtitle:  "IT Student at University of Sindh  ·  ALP Graduate 2026",
  about:     "I build clean, responsive web apps using HTML, CSS, Bootstrap, JavaScript, jQuery, PHP and MySQL. Always learning, always building.",
  linkedin:  "https://www.linkedin.com/in/areej-maryam",
  email:     "",           // ← put your email here (leave "" to hide the button)
  github:    "",           // ← paste your GitHub URL here
  cv:        "Areej_Maryam_Resume_for_Portfolio.pdf",
  photo:     "photo.png",  // ← your picture file (same folder as index.html)
  available: true,         // set false to hide the "Open to work" badge
  stats: [
    { num: "30+", label: "Certificates"      },
    { num: "5+",  label: "Projects Built"    },
    { num: "ALP", label: "Graduate 2026" }
  ]
};


/* ─────────────────────────────────────────────────────────
   SITE TEXT  (headings, badge, contact message, footer)
   ───────────────────────────────────────────────────────── */
const siteText = {
  badge:           "Open to Internships & Collaboration",
  skillsSubtitle:  "Built through hands-on projects, online courses, hackathons, and real-world problem solving.",
  projectsSubtitle:"Real projects I designed and coded from scratch — each one solving a real problem.",
  certsSubtitle:   "Certifications across web development, AI, data science, career skills, and professional events.",
  contactMessage:  "I'm actively looking for internship opportunities, collaborative projects, and chances to grow as a developer. Let's talk!",
  footerRight:     "Built by Areej Maryam from Hyderabad, Pakistan"
};


/* ─────────────────────────────────────────────────────────
   SKILLS
   icon  → any emoji
   level → "Beginner" | "Learning" | "Intermediate" | "Advanced"
   ───────────────────────────────────────────────────────── */
const skills = [
  { icon: "🌐",  name: "HTML5",           level: "Advanced"      },
  { icon: "🎨",  name: "CSS3",            level: "Advanced"      },
  { icon: "⚡",  name: "JavaScript",      level: "Intermediate"  },
  { icon: "💠",  name: "jQuery",          level: "Intermediate"  },
  { icon: "🅱️", name: "Bootstrap",       level: "Advanced"      },
  { icon: "🐘",  name: "PHP",             level: "Intermediate"  },
  { icon: "🗄️", name: "MySQL",           level: "Intermediate"  },
  { icon: "🐙",  name: "Git",             level: "Learning"      },
  { icon: "🤖",  name: "AI & Prompting",  level: "Learning"      },
  { icon: "📊",  name: "SQL / Data",      level: "Learning"      },
  { icon: "🌀",  name: "WordPress",       level: "Learning"      }
  // ── add a skill ──────────────────────────────────────────
  // , { icon: "⚛️", name: "React", level: "Learning" }
];


/* ─────────────────────────────────────────────────────────
   PROJECTS
   
   accent  → "purple" | "blue" | "green" | "pink" | "navy"
   tags    → array of tech strings shown as pills
   github  → URL string, or "" to hide button
   live    → URL string, or "" to hide button
   ───────────────────────────────────────────────────────── */
const projects = [
  {
    emoji:   "🛍️",
    accent:  "purple",
    name:    "Zay E-Commerce Store",
    tags:    ["HTML", "CSS"],
    desc:    "A full online clothing & accessories store — Zay. Includes navbar, hero banner, product grid with categories (Men/Women), product cards, and a shopping cart icon. Built with pure HTML & CSS.",
    github:  "",
    //live:    "file:///D:/My%20Web%20Projects/Ecommerce/zay.html"
  },
  {
    emoji:   "📄",
    accent:  "blue",
    name:    "CV / Resume",
    tags:    ["HTML", "CSS"],
    desc:    "A multi-page digital CV built in HTML & CSS. Covers personal info, education, skills, certificates and a professional summary — clean and print-friendly layout.",
    github:  "",
    //live:    "file:///D:/My%20Web%20Projects/CV/CV.html"
  },
  {
    emoji:   "🎓",
    accent:  "green",
    name:    "University of Sindh Dashboard",
    tags:    ["HTML", "CSS"],
    desc:    "A multi-page university portal for UOS. Has a main dashboard, faculty pages (FET, IMCS, Art & Design), a computer science page, dropdown navigation, and a registration form.",
    github:  "",
    //live:    "file:///D:/My%20Web%20Projects/Dashboard%20UOS.html/Dashboard.html"
  },
  {
    emoji:   "🌴",
    accent:  "pink",
    name:    "Tourist Destination Website",
    tags:    ["HTML", "CSS"],
    desc:    "A multi-page website showcasing a tourist destination. Includes a homepage with hero image, attractions page with cards, booking form, and contact page. Built with HTML & CSS.",
    github:  "",
    //live:    "file:///D:/My%20Web%20Projects/explorers%20website/templets/index.html"
  },
  {
    emoji:   "📝",
    accent:  "pink",
    name:    "Registration System",
    tags:    ["HTML", "CSS", "PHP", "MySQL"],
    desc:    "A complete CRUD system — add students, view records in a table, edit entries, and delete with a confirmation popup. Built with PHP & MySQL with a clean CSS form interface.",
    github:  "",
    //live:    ""
  },
  {
    emoji:   "🔐",
    accent:  "navy",
    name:    "Login & Cart System",
    tags:    ["PHP", "MySQL", "Sessions"],
    desc:    "A session-based login/logout system with a registration form and a shopping cart feature. Uses PHP sessions, password handling, and MySQL for user and cart data storage.",
    github:  "",
    //live:    "http://localhost/php/Actual_php/RegistrationForm/Register.php"
  },
  {
    emoji:   "✅",
    accent:  "blue",
    name:    "Smart Attendance System",
    tags:    ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    desc:    "A smart attendance management system for tracking student attendance, managing sessions, and maintaining daily records using HTML, CSS, JavaScript, PHP, and MySQL.",
    github:  "",
    //live:    ""
  }
  // ── add a project ─────────────────────────────────────────
  // ,{
  //   emoji:   "🔧",
  //   accent:  "purple",
  //   name:    "My New Project",
  //   tags:    ["HTML", "CSS", "JS"],
  //   desc:    "What this project does.",
  //   github:  "",
  //   live:    ""
  // }
];


/* ─────────────────────────────────────────────────────────
   CERTIFICATES
   
   category → "Development" | "AI" | "Data" | "Skills" | "Career" | "General"
              (a new category name also works — it gets its own filter button)
   src      → path to the image inside the certs/ folder

   TO ADD ONE:
     1. Copy the image into the  certs/  folder
     2. Add a line below, e.g.
        { name: "My Cert", issuer: "Coursera", category: "Development", src: "certs/my-cert.jpg" },
   ───────────────────────────────────────────────────────── */
const certificates = [

  // ── Development ─────────────────────────────────────────────
  { name: 'Intro to Git', issuer: 'DataCamp', category: 'Development', src: "certs/intro-to-git.png" },
  { name: 'Web Design', issuer: 'Online Course', category: 'Development', src: "certs/web-design.jpg" },
  { name: 'WordPress Development', issuer: 'Online Course', category: 'Development', src: "certs/wordpress-development.png" },
  { name: 'IT Internship Cohort IV — 2nd Position', issuer: 'Technify', category: 'Development', src: "certs/technify-2nd-position.jpg" },

  // ── AI ─────────────────────────────────────────────
  { name: 'AI Graphic Design', issuer: 'Online Course', category: 'AI', src: "certs/ai-graphic-design.jpg" },
  { name: 'AI Hackathon', issuer: 'SMIT', category: 'AI', src: "certs/ai-hackathon.jpg" },
  { name: 'Prompting Essentials', issuer: 'Google', category: 'AI', src: "certs/prompting-essentials.png" },
  { name: 'Smart Uses of AI', issuer: 'Online', category: 'AI', src: "certs/smart-uses-of-ai.jpg" },
  { name: 'Generative AI', issuer: 'LinkedIn Learning', category: 'AI', src: "certs/generative-ai.png" },
  { name: 'Claude 101', issuer: 'Anthropic', category: 'AI', src: "certs/claude-101.png" },
  { name: 'Google AI Professional Certificate', issuer: 'Google · Coursera', category: 'AI', src: "certs/google-ai.png" },
  { name: 'One Million Prompters', issuer: 'Dubai Future Foundation', category: 'AI', src: "certs/one-million-prompters.png" },
  { name: 'Early Career Track — AI Training', issuer: 'DREAM AI Academy', category: 'AI', src: "certs/dream-ai-early-career.jpg" },

  // ── Data ─────────────────────────────────────────────
  { name: 'Intro to SQL', issuer: 'DataCamp', category: 'Data', src: "certs/intro-to-sql.png" },
  { name: 'Intermediate SQL', issuer: 'DataCamp', category: 'Data', src: "certs/intermediate-sql.png" },
  { name: 'Intro to Data Science', issuer: 'Cisco', category: 'Data', src: "certs/intro-to-data-science.png" },
  { name: 'Skill Quest — Data Science', issuer: 'Google Cloud', category: 'Data', src: "certs/skill-quest-data-science.png" },
  { name: 'Data Analytics Job Simulation', issuer: 'Deloitte · Forage', category: 'Data', src: "certs/deloitte-data-analytics.png" },

  // Hackathons 
  { name: 'AI Hackathon', issuer: 'SMIT', category: 'Hackathon', src: "certs/ai-hackathon.jpg"},
  { name: 'AI powered solution', issuer: 'NYLP', category: 'Hackathon', src: "certs/NYLP-Hackathon.jpeg"},

  // ── Skills ─────────────────────────────────────────────
  { name: 'Critical Thinking', issuer: 'HP', category: 'Skills', src: "certs/critical-thinking.jpg" },

  // ── Career ─────────────────────────────────────────────
  { name: 'How to Win Your Dream Job', issuer: 'BELI', category: 'Career', src: "certs/how-to-win-your-dream-job.png" },
  { name: 'NESTGEN Digital & Marketing Masterclass', issuer: 'Nestlé', category: 'Career', src: "certs/nestgen-masterclass.png" },
  { name: 'Aspire Leaders Program', issuer: 'Aspire Institute', category: 'Career', src: "certs/aspire-leaders-program.png" },

  // ── General ─────────────────────────────────────────────
  { name: 'ALP Awareness Program', issuer: 'ALP', category: 'General', src: "certs/alp-awareness-program.png" },
  { name: 'IEEE Karachi Event', issuer: 'IEEE', category: 'General', src: "certs/ieee-karachi-event.png" },
  { name: 'IEEE RAS MUET', issuer: 'IEEE RAS', category: 'General', src: "certs/ieee-ras-muet.jpg" },
  { name: 'Indus AI Week NYLP 2026', issuer: 'NYLP', category: 'General', src: "certs/indus-ai-week-nylp-2026.jpg" },
  { name: 'Achievement Certificate', issuer: 'Organization', category: 'General', src: "certs/achievement-certificate.jpg" },
  { name: 'Achievement Certificate', issuer: 'Organization', category: 'General', src: "certs/achievement-certificate-2.jpg" },
  { name: 'Achievement Certificate', issuer: 'Organization', category: 'General', src: "certs/achievement-certificate-3.jpg" },
  { name: 'LetTech Ramzan Series', issuer: 'LetTech', category: 'General', src: "certs/lettech-ramzan-series.jpg" },
];

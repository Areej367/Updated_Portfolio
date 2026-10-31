/* ----- THEME TOGGLE -------------------------------------- */
function initTheme() {
  const btn   = document.getElementById("theme-btn");
  const saved = localStorage.getItem("theme");

  // apply saved preference, otherwise default to light
  if (saved === "dark") {
    document.body.classList.add("dark");
  }

  btn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateThemeBtn(isDark);
  });

  updateThemeBtn(document.body.classList.contains("dark"));
}

function updateThemeBtn(isDark) {
  const btn = document.getElementById("theme-btn");
  btn.innerHTML = isDark
    ? '<span class="icon">☀️</span> Light'
    : '<span class="icon">🌙</span> Dark';
}


/* ----- MOBILE MENU --------------------------------------- */
function initMobileMenu() {
  const hamburger  = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");

  hamburger.addEventListener("click", function () {
    mobileMenu.classList.toggle("open");
  });

  // close menu when a link is clicked
  mobileMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      mobileMenu.classList.remove("open");
    });
  });
}


/* ----- HERO ---------------------------------------------- */
function buildHero() {
  // badge
  if (profile.available) {
    document.getElementById("hero-badge").innerHTML =
      '<span class="dot"></span> ' + siteText.badge;
    document.getElementById("hero-badge").style.display = "inline-flex";
  } else {
    document.getElementById("hero-badge").style.display = "none";
  }

  // name, title, about
  document.getElementById("hero-name").innerHTML =
    profile.name.split(" ").map(function (word, i) {
      return i === 1 ? '<span class="highlight">' + word + "</span>" : word;
    }).join(" ");

  document.getElementById("hero-photo").src = profile.photo || "photo.png";
  document.getElementById("hero-photo").alt = profile.name;
  document.title = profile.name + " — " + profile.title;

  document.getElementById("hero-title").textContent  = profile.title;
  document.getElementById("hero-subtitle").textContent = profile.subtitle;
  document.getElementById("hero-about").textContent  = profile.about;

  // stats
  const statsEl = document.getElementById("hero-stats");
  profile.stats.forEach(function (s) {
    const card = document.createElement("div");
    card.className = "stat-card";
    card.innerHTML = '<div class="num">' + s.num + '</div><div class="label">' + s.label + '</div>';
    statsEl.appendChild(card);
  });

  // buttons
  const btns = document.getElementById("hero-buttons");
  let buttonsHTML =
    '<a href="#projects" class="btn btn-primary">View Projects</a>' +
    '<a href="#contact"  class="btn btn-lavender">Get in Touch</a>';

  if (profile.cv) {
    buttonsHTML +=
      '<a href="' + profile.cv + '" target="_blank" rel="noopener" class="btn btn-gradient">View CV</a>';
  }

  btns.innerHTML = buttonsHTML;
}


/* ----- SKILLS -------------------------------------------- */
function buildSkills() {
  const grid = document.getElementById("skills-grid");

  skills.forEach(function (s) {
    const card = document.createElement("div");
    card.className = "skill-card fade-in";
    card.innerHTML =
      '<span class="skill-icon">' + s.icon + '</span>' +
      '<div class="skill-name">'  + s.name  + '</div>' +
      '<div class="skill-level">' + s.level + '</div>';
    grid.appendChild(card);
  });
}


/* ----- PROJECTS ------------------------------------------ */
function buildProjects() {
  const grid = document.getElementById("projects-grid");

  projects.forEach(function (p) {
    // build tag pills
    const tagsHTML = p.tags.map(function (t) {
      return '<span class="tag">' + t + '</span>';
    }).join("");

    // build link buttons (only show if URL is provided)
    let linksHTML = "";
    if (p.github) {
      linksHTML += '<a href="' + p.github + '" target="_blank" class="btn btn-sm btn-ghost">GitHub</a>';
    }
    if (p.live) {
      linksHTML += '<a href="' + p.live + '" target="_blank" class="btn btn-sm btn-teal">Live</a>';
    }

    const card = document.createElement("div");
    card.className = "project-card fade-in";
    card.innerHTML =
      '<div class="project-banner banner-' + p.accent + '">' +
        '<div class="dots"></div>' +
        '<span class="emoji">' + p.emoji + '</span>' +
      '</div>' +
      '<div class="project-body">' +
        '<div class="project-tags">' + tagsHTML + '</div>' +
        '<div class="project-name">' + p.name  + '</div>' +
        '<p class="project-desc">'   + p.desc  + '</p>' +
        (linksHTML ? '<div class="project-links">' + linksHTML + '</div>' : '') +
      '</div>';

    grid.appendChild(card);
  });
}


/* ----- CERTIFICATES -------------------------------------- */
function buildCertificates(filterCat) {
  const grid = document.getElementById("certs-grid");
  grid.innerHTML = "";

  // figure out which certs to show
  const list = (filterCat === "All")
    ? certificates
    : certificates.filter(function (c) { return c.category === filterCat; });

  list.forEach(function (c) {
    // image — if no src provided, show an emoji placeholder
    let imgHTML;
    if (c.src) {
      imgHTML =
        '<div class="cert-img-wrapper">' +
          '<img src="' + c.src + '" alt="' + c.name + '" loading="lazy">' +
        '</div>';
    } else {
      imgHTML =
        '<div class="cert-img-wrapper">' +
          '<div class="cert-placeholder">🏅</div>' +
        '</div>';
    }

    const card = document.createElement("div");
    card.className = "cert-card fade-in";
    card.innerHTML =
      imgHTML +
      '<div class="cert-info">' +
        '<div class="cert-name">'     + c.name     + '</div>' +
        '<div class="cert-issuer">'   + c.issuer   + '</div>' +
        '<span class="cert-category">' + c.category + '</span>' +
      '</div>';

    // click to open lightbox
    card.addEventListener("click", function () {
      if (c.src) openLightbox(c.src, c.name + " — " + c.issuer);
    });

    grid.appendChild(card);
  });

  // trigger fade-in on newly added cards
  revealOnScroll();
}

function buildFilterBar() {
  const bar = document.getElementById("cert-filter-bar");
  const categories = ["All"];
  certificates.forEach(function (c) {
    if (categories.indexOf(c.category) === -1) categories.push(c.category);
  });

  categories.forEach(function (cat) {
    const btn = document.createElement("button");
    btn.className = "filter-btn" + (cat === "All" ? " active" : "");
    btn.textContent = cat;

    btn.addEventListener("click", function () {
      document.querySelectorAll(".filter-btn").forEach(function (b) {
        b.classList.remove("active");
      });
      btn.classList.add("active");
      buildCertificates(cat);
    });

    bar.appendChild(btn);
  });
}


/* ----- LIGHTBOX ------------------------------------------ */
function openLightbox(src, caption) {
  const overlay = document.getElementById("lightbox");
  overlay.querySelector("img").src = src;
  overlay.querySelector(".lightbox-caption").textContent = caption;
  overlay.classList.add("open");
}

function closeLightbox() {
  const overlay = document.getElementById("lightbox");
  overlay.classList.remove("open");
  overlay.querySelector("img").src = "";
}

function initLightbox() {
  const overlay = document.getElementById("lightbox");

  document.getElementById("lightbox-close").addEventListener("click", closeLightbox);

  // click outside image to close
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) closeLightbox();
  });

  // press Escape to close
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLightbox();
  });
}


/* ----- CONTACT ------------------------------------------- */
function buildContact() {
  document.getElementById("contact-sub").textContent = siteText.contactMessage;

  const linksEl = document.getElementById("contact-links");

  if (profile.email) {
  const emailLink = document.createElement("a");
  emailLink.href = "mailto:" + profile.email;
  emailLink.className = "contact-link";
  emailLink.innerHTML = 
  
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>' +
    profile.email;
  linksEl.appendChild(emailLink);
  }

  if (profile.linkedin) {
    const liLink = document.createElement("a");
    liLink.href = profile.linkedin;
    liLink.target = "_blank";
    liLink.className = "contact-link";
    liLink.innerHTML =
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>' +
      "LinkedIn";
    linksEl.appendChild(liLink);
  }

  if (profile.github) {
    const ghLink = document.createElement("a");
    ghLink.href = profile.github;
    ghLink.target = "_blank";
    ghLink.className = "contact-link";
    ghLink.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>' +
      "GitHub";
    linksEl.appendChild(ghLink);
  }
}


/* ----- FOOTER -------------------------------------------- */
function buildFooter() {
  document.getElementById("footer-text").textContent =
    "© " + new Date().getFullYear() + " " + profile.name + " — " + profile.title;
  document.getElementById("footer-right").textContent = siteText.footerRight;
  document.getElementById("skills-subtitle").textContent   = siteText.skillsSubtitle;
  document.getElementById("projects-subtitle").textContent = siteText.projectsSubtitle;
  document.getElementById("certs-subtitle").textContent    = siteText.certsSubtitle;
}


/* ----- SCROLL REVEAL ------------------------------------- */
function revealOnScroll() {
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".fade-in").forEach(function (el) {
    observer.observe(el);
  });
}


/* ----- INIT (runs when page loads) ----------------------- */
document.addEventListener("DOMContentLoaded", function () {
  initTheme();
  initMobileMenu();
  buildHero();
  buildSkills();
  buildProjects();
  buildFilterBar();
  buildCertificates("All");
  initLightbox();
  buildContact();
  buildFooter();
  revealOnScroll();
});

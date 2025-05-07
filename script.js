/**
 * Portfolio - Script principal
 */

document.addEventListener("DOMContentLoaded", () => {
  initAnimations();
  initThemeToggle();
  initSmoothScroll();
  initProjectCards();
  enhanceImages();
});

/**
 * Initialise les animations au scroll et l'animation d'accueil
 */
function initAnimations() {
  // Observer pour les animations au défilement
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          entry.target.classList.add("show");

          // Animer également les titres de section qui se trouvent à l'intérieur
          const sectionTitle = entry.target.querySelector(".section-title");
          if (sectionTitle) {
            sectionTitle.classList.add("visible");
          }
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observer les éléments animés
  document
    .querySelectorAll(".animate-section, .project-card, .section-title")
    .forEach((el) => observer.observe(el));

  // Animer la carte de présentation avec un léger délai pour un meilleur effet visuel
  setTimeout(() => {
    const card = document.querySelector(".presentation-card");
    if (card) card.classList.add("show");
  }, 500);
}

/**
 * Initialise le bouton de changement de thème
 */
function initThemeToggle() {
  const themeBtn = document.getElementById("themeToggle");
  if (!themeBtn) return;

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const icon = themeBtn.querySelector("i");
    if (!icon) return;

    if (icon.classList.contains("fa-moon")) {
      icon.classList.replace("fa-moon", "fa-sun");
    } else {
      icon.classList.replace("fa-sun", "fa-moon");
    }
  });
}

/**
 * Initialise le défilement fluide pour les liens d'ancrage
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

/**
 * Initialise les cartes de projet pour les rendre cliquables
 */
function initProjectCards() {
  const projectLinks = {
    project1: "https://github.com/AlexandreJoly76/forum-go",
    project2: "https://github.com/AlexandreJoly76/MakeYourGame-SpaceInvader",
    project3: "https://github.com/AlexandreJoly76/real-time-forum",
    project4: "https://github.com/AlexandreJoly76/GroupieTracker",
    project5: "https://github.com/AlexandreJoly76/AlexandreJoly76.github.io",
  };

  Object.entries(projectLinks).forEach(([id, url]) => {
    const card = document.getElementById(id);
    if (!card) return;

    card.addEventListener("click", (e) => {
      // N'ouvre le lien que si on n'a pas cliqué sur le bouton GitHub
      if (!e.target.closest(".github-link")) {
        window.open(url, "_blank");
      }
    });
  });
}

/**
 * Améliore la qualité d'affichage des images
 */
function enhanceImages() {
  document.querySelectorAll(".card-image img").forEach((img) => {
    img.style.transform = "translateZ(0)"; // Activer l'accélération GPU

    // Assurer que l'image est bien chargée
    if (img.complete) {
      img.classList.add("enhanced");
    } else {
      img.addEventListener("load", () => img.classList.add("enhanced"));
    }
  });
}

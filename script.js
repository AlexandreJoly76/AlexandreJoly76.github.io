/**
 * Portfolio - Script principal
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initAnimations();
  initThemeToggle();
  initSmoothScroll();
  initProjectCards();
  enhanceImages();
});

/**
 * Initialiser la navigation moderne
 */
function initNavigation() {
  // Menu hamburger pour mobile
  const menuToggle = document.getElementById("menuToggle");
  const navElements = document.querySelector(".nav-elements");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      navElements.classList.toggle("active");
    });
  }

  // Gestion des liens actifs
  const navLinks = document.querySelectorAll(".nav-item");
  const sections = document.querySelectorAll("section");

  // Fonction pour vérifier quelle section est visible
  function setActiveLink() {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }

  // Écouter le scroll pour mettre à jour le lien actif
  window.addEventListener("scroll", setActiveLink);

  // Fermer le menu mobile lors du clic sur un lien
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navElements.classList.remove("active");
    });
  });

  // Effet de transparence du header au scroll
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.background = "rgba(32, 26, 46, 0.95)";
    } else {
      header.style.background = "transparent";
    }
  });
}

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

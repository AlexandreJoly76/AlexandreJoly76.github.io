/**
 * Portfolio d'Alexandre Joly - Script principal
 * Version refactorisée pour maintenabilité et lisibilité améliorées
 */

document.addEventListener("DOMContentLoaded", () => {
  // Récupération des éléments DOM utilisés fréquemment avec vérification de leur existence
  const elements = selectDomElements();

  // Configuration du menu mobile
  setupMobileMenu(elements);

  // Configuration du thème
  setupThemeToggle(elements);

  // Configuration des animations
  setupAnimations();

  // Configuration de la navigation
  setupNavigation(elements);

  // Configuration des onglets de projets
  setupProjectTabs(elements);

  // Configuration des vidéos au survol
  setupHoverVideos();

  // Optimisations de performance
  applyPerformanceOptimizations();
});

/**
 * Sélectionne et retourne les éléments DOM utilisés fréquemment
 * @returns {Object} Éléments DOM
 */
function selectDomElements() {
  return {
    body: document.body,
    html: document.documentElement, // Ajout pour permettre [data-theme] plutôt que des classes
    menuToggle: document.getElementById("menuToggle"),
    navElements: document.querySelector(".nav-elements"),
    themeToggle: document.getElementById("themeToggle"),
    themeIcon: document.querySelector("#themeToggle i"),
    navLinks: document.querySelectorAll(".nav-item"),
    sections: document.querySelectorAll("section"),
    projectTabs: document.querySelectorAll(".project-tab"),
    projectGrids: document.querySelectorAll(".projects-grid"),
    projectCards: document.querySelectorAll(".project-card"),
  };
}

/**
 * Configure le menu mobile
 * @param {Object} elements - Les éléments DOM
 */
function setupMobileMenu({ menuToggle, navElements, navLinks }) {
  if (!menuToggle || !navElements) return;

  // Gestion de l'ouverture/fermeture du menu mobile
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navElements.classList.toggle("active");
  });

  // Fermer le menu après clic sur un lien
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navElements.classList.remove("active");
    });
  });
}

/**
 * Configure le thème et les basculements de thème
 * @param {Object} elements - Les éléments DOM
 */
function setupThemeToggle({ body, html, themeToggle, themeIcon }) {
  if (!themeToggle || !themeIcon) return;

  // Chargement du thème sauvegardé et détection des préférences
  const savedTheme = localStorage.getItem("theme");
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const isLightMode = savedTheme ? savedTheme === "light" : !prefersDarkMode;

  // Application du thème initial
  applyTheme(isLightMode, body, html, themeIcon);

  // Changement de thème au clic
  themeToggle.addEventListener("click", (e) => {
    e.preventDefault();
    const newLightMode = body.classList.toggle("light-mode");
    html.setAttribute("data-theme", newLightMode ? "light" : "dark"); // Utilisation d'attributs data
    localStorage.setItem("theme", newLightMode ? "light" : "dark");
    updateThemeIcon(newLightMode, themeIcon);
    updateRobloxLogos(newLightMode);
  });
}

/**
 * Applique le thème initial
 * @param {boolean} isLightMode - True si mode clair
 * @param {HTMLElement} body - Élément body
 * @param {HTMLElement} html - Élément html
 * @param {HTMLElement} themeIcon - Icône du thème
 */
function applyTheme(isLightMode, body, html, themeIcon) {
  body.classList.toggle("light-mode", isLightMode);
  html.setAttribute("data-theme", isLightMode ? "light" : "dark");
  updateThemeIcon(isLightMode, themeIcon);
  updateRobloxLogos(isLightMode);
}

/**
 * Met à jour l'icône de thème
 * @param {boolean} isLightMode - True si mode clair
 * @param {HTMLElement} themeIcon - Icône du thème
 */
function updateThemeIcon(isLightMode, themeIcon) {
  themeIcon.className = isLightMode ? "fas fa-moon" : "fas fa-sun";
}

/**
 * Met à jour les logos Roblox pour correspondre au thème
 * @param {boolean} isLightMode - True si mode clair
 */
function updateRobloxLogos(isLightMode) {
  document.querySelectorAll(".game-link img").forEach((img) => {
    if (img.alt === "Roblox") {
      img.src = isLightMode
        ? "./assets/svg/Roblox-light.svg"
        : "./assets/svg/Roblox-dark.svg";
    }
  });
}

/**
 * Configure les animations au défilement
 */
function setupAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible", "show");
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observer tous les éléments animés
  document
    .querySelectorAll(".animate-section, .project-card, .section-title")
    .forEach((el) => observer.observe(el));

  // Animation spéciale pour la carte de présentation
  setTimeout(() => {
    const card = document.querySelector(".presentation-card");
    if (card) card.classList.add("show");
  }, 500);
}

/**
 * Configure la navigation active
 * @param {Object} elements - Les éléments DOM
 */
function setupNavigation({ sections, navLinks }) {
  const updateActiveNavLink = () => {
    const scrollPosition = window.scrollY + 100;
    let currentSection = "";

    // Identifier la section visible
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute("id");
      }
    });

    // Cas spécial: début de la page
    if (scrollPosition < 300) {
      currentSection = "home";
    }

    // Mettre à jour les classes actives
    navLinks.forEach((link) => {
      const href = link.getAttribute("href").substring(1);
      link.classList.toggle("active", href === currentSection);
    });
  };

  // Initialiser et surveiller le défilement
  updateActiveNavLink();
  window.addEventListener("scroll", updateActiveNavLink);

  // Gestion des clics sur les liens de navigation
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((navLink) => navLink.classList.remove("active"));
      this.classList.add("active");
    });
  });
}

/**
 * Configure les onglets de projets
 * @param {Object} elements - Les éléments DOM
 */
function setupProjectTabs({ projectTabs, projectGrids }) {
  if (projectTabs.length === 0) return;

  projectTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Mise à jour des classes actives
      projectTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      // Récupération de la cible
      const targetId = tab.getAttribute("data-target");

      // Masquer toutes les grilles
      projectGrids.forEach((grid) => {
        grid.style.display = "none";
      });

      // Afficher la grille cible
      const targetGrid = document.getElementById(targetId);
      if (targetGrid) {
        targetGrid.style.display = "grid";
        animateProjectCards(targetGrid);
      }
    });
  });
}

/**
 * Anime les cartes de projet avec un délai séquentiel
 * @param {HTMLElement} targetGrid - La grille de projets cible
 */
function animateProjectCards(targetGrid) {
  const projectCards = targetGrid.querySelectorAll(".project-card");
  projectCards.forEach((card, index) => {
    card.classList.remove("show");
    setTimeout(() => {
      card.classList.add("show");
    }, 100 * index);
  });
}

/**
 * Configure les vidéos au survol
 */
function setupHoverVideos() {
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    const video = card.querySelector(".hover-video");
    if (!video) return;

    // Préchargement des vidéos
    preloadVideo(video);

    // Gestion du survol
    card.addEventListener("mouseenter", () => playVideo(video));
    card.addEventListener("mouseleave", () => pauseVideo(video));
  });
}

/**
 * Précharge une vidéo
 * @param {HTMLVideoElement} video - L'élément vidéo
 */
function preloadVideo(video) {
  if (video.readyState === 0) {
    video.load();
    video.preload = "auto";
  }
}

/**
 * Joue une vidéo avec gestion d'erreur
 * @param {HTMLVideoElement} video - L'élément vidéo
 */
function playVideo(video) {
  video.currentTime = 0;
  const playPromise = video.play();

  if (playPromise !== undefined) {
    playPromise.catch((error) => {
      console.log("Autoplay prevented:", error);
    });
  }
}

/**
 * Met en pause une vidéo
 * @param {HTMLVideoElement} video - L'élément vidéo
 */
function pauseVideo(video) {
  video.pause();
}

/**
 * Applique diverses optimisations de performance
 */
function applyPerformanceOptimizations() {
  // Marqueur pour les animations
  document.body.classList.add("animations-ready");

  // Préchargement des états de survol pour les cartes
  document.querySelectorAll(".project-card").forEach((card) => {
    card.classList.add("hover-ready");

    // Délai pour permettre le rendu initial
    setTimeout(() => {
      if (!card.classList.contains("show")) {
        card.classList.add("show");
      }
    }, 100);
  });

  // Optimisation des transitions
  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("transitionstart", () => {
      card.classList.add("transitioning");
    });

    card.addEventListener("transitionend", () => {
      card.classList.remove("transitioning");
    });
  });
}

/**
 * Script principal - Portfolio d'Alexandre Joly
 * Version optimisée et nettoyée
 */

document.addEventListener("DOMContentLoaded", () => {
  // Éléments DOM fréquemment utilisés
  const elements = {
    body: document.body,
    menuToggle: document.getElementById("menuToggle"),
    navElements: document.querySelector(".nav-elements"),
    themeToggle: document.getElementById("themeToggle"),
    navLinks: document.querySelectorAll(".nav-item"),
    sections: document.querySelectorAll("section"),
    projectTabs: document.querySelectorAll(".project-tab"),
    projectGrids: document.querySelectorAll(".projects-grid"),
  };

  const themeIcon = elements.themeToggle?.querySelector("i");

  // Navigation mobile
  if (elements.menuToggle && elements.navElements) {
    // Ouvrir/fermer le menu mobile
    elements.menuToggle.addEventListener("click", () => {
      elements.menuToggle.classList.toggle("active");
      elements.navElements.classList.toggle("active");
    });

    // Fermer le menu après clic sur un lien
    elements.navLinks.forEach((link) =>
      link.addEventListener("click", () => {
        elements.menuToggle.classList.remove("active");
        elements.navElements.classList.remove("active");
      })
    );
  }

  // Gestion du thème
  if (elements.themeToggle && themeIcon) {
    // Fonction pour mettre à jour l'icône selon le thème
    const updateThemeIcon = (isLightMode) => {
      themeIcon.className = isLightMode ? "fas fa-moon" : "fas fa-sun";
    };

    // Chargement du thème sauvegardé
    const savedTheme = localStorage.getItem("theme");
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const isLightMode = savedTheme ? savedTheme === "light" : !prefersDarkMode;

    elements.body.classList.toggle("light-mode", isLightMode);
    updateThemeIcon(isLightMode);

    // Changement de thème au clic
    elements.themeToggle.addEventListener("click", (e) => {
      e.preventDefault();
      const isLightMode = elements.body.classList.toggle("light-mode");
      localStorage.setItem("theme", isLightMode ? "light" : "dark");
      updateThemeIcon(isLightMode);
    });
  }

  // Animation des éléments au scroll
  const setupAnimations = () => {
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

    // Observer les éléments animés
    document
      .querySelectorAll(".animate-section, .project-card, .section-title")
      .forEach((el) => observer.observe(el));

    // Animation de la carte de présentation
    setTimeout(() => {
      const card = document.querySelector(".presentation-card");
      if (card) card.classList.add("show");
    }, 500);
  };

  // Navigation active
  const setupNavigation = () => {
    function setActiveNavLink() {
      const scrollPosition = window.scrollY + 100;
      let currentSection = "";

      // Identifier la section visible
      elements.sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          currentSection = section.getAttribute("id");
        }
      });

      // Mettre à jour les classes actives
      elements.navLinks.forEach((link) => {
        const href = link.getAttribute("href").substring(1);
        link.classList.toggle("active", href === currentSection);
      });

      // Cas spécial: au début de la page, activer Home
      if (scrollPosition < 300) {
        elements.navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === "#home"
          );
        });
      }
    }

    // Initialiser et surveiller le défilement
    setActiveNavLink();
    window.addEventListener("scroll", setActiveNavLink);

    // Gestion des clics sur les liens de navigation
    elements.navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        elements.navLinks.forEach((navLink) =>
          navLink.classList.remove("active")
        );
        this.classList.add("active");
      });
    });
  };

  // Gestion des onglets de projets
  if (elements.projectTabs.length > 0) {
    elements.projectTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        // Retirer la classe active de tous les onglets
        elements.projectTabs.forEach((t) => t.classList.remove("active"));

        // Ajouter la classe active à l'onglet cliqué
        tab.classList.add("active");

        // Récupérer l'ID cible
        const targetId = tab.getAttribute("data-target");

        // Cacher toutes les grilles de projets
        elements.projectGrids.forEach((grid) => {
          grid.style.display = "none";
        });

        // Afficher la grille cible
        const targetGrid = document.getElementById(targetId);
        if (targetGrid) {
          targetGrid.style.display = "grid";

          // Animer l'apparition des cartes de projet
          const projectCards = targetGrid.querySelectorAll(".project-card");
          projectCards.forEach((card, index) => {
            card.classList.remove("show");
            setTimeout(() => {
              card.classList.add("show");
            }, 100 * index);
          });
        }
      });
    });
  }

  // Gestion des vidéos au survol
  const setupHoverVideos = () => {
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach((card) => {
      const video = card.querySelector(".hover-video");
      if (!video) return;

      card.addEventListener("mouseenter", () => {
        video.currentTime = 0; // Commence toujours au début
        video.play().catch((e) => console.log("Autoplay prevented:", e));
      });

      card.addEventListener("mouseleave", () => {
        video.pause();
      });
    });
  };

  // Initialiser toutes les fonctionnalités
  setupAnimations();
  setupNavigation();
  setupHoverVideos(); // Ajouter l'initialisation des vidéos
});

// Amélioration du comportement des cartes au survol
document.addEventListener("DOMContentLoaded", function () {
  // Optimisation du comportement au survol
  const allCards = document.querySelectorAll(".project-card");

  allCards.forEach((card) => {
    // Précharger les vidéos
    const video = card.querySelector("video");
    if (video) {
      video.preload = "auto";
      video.load();
    }

    // Appliquer une transformation de base pour activer l'accélération matérielle
    card.style.transform = "translateZ(0)";

    // Optimiser le survol
    card.addEventListener("mouseenter", function () {
      // Appliquer directement les styles sans attendre la cascade CSS
      this.style.borderColor = "rgba(0, 201, 246, 0.5)";

      const staticImage = this.querySelector(".static-image");
      const hoverVideo = this.querySelector(".hover-video");

      if (staticImage) staticImage.style.opacity = "0";
      if (hoverVideo) {
        hoverVideo.style.opacity = "1";
        if (hoverVideo.paused) hoverVideo.play().catch((e) => {});
      }
    });

    card.addEventListener("mouseleave", function () {
      this.style.borderColor = "rgba(0, 201, 246, 0.25)";

      const staticImage = this.querySelector(".static-image");
      const hoverVideo = this.querySelector(".hover-video");

      if (staticImage) staticImage.style.opacity = "1";
      if (hoverVideo) {
        hoverVideo.style.opacity = "0";
        hoverVideo.pause();
      }
    });
  });
});

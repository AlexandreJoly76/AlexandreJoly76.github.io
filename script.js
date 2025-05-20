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

  // Gestion des vidéos au survol - optimisée
  const setupHoverVideos = () => {
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach((card) => {
      const video = card.querySelector(".hover-video");
      if (!video) return;

      // Préchargement des vidéos
      if (video.readyState === 0) {
        video.load();
        video.preload = "auto";
      }

      // Lecture optimisée au survol
      card.addEventListener("mouseenter", () => {
        // Position immédiate au début pour démarrage instantané
        video.currentTime = 0;

        // Lecture instantanée de la vidéo
        const playPromise = video.play();

        // Gestion propre des promesses de lecture
        if (playPromise !== undefined) {
          playPromise.catch((e) => {
            console.log("Lecture automatique empêchée:", e);
          });
        }
      });

      // Optimisation pour réduire la charge CPU lors de la sortie du survol
      card.addEventListener("mouseleave", () => {
        video.pause();
      });
    });
  };

  // Optimisation des animations au chargement
  const setupFastAnimations = () => {
    // Ajouter une classe d'optimisation au body
    document.body.classList.add("animations-ready");

    // Précharger les états de survol pour toutes les cartes
    document.querySelectorAll(".project-card").forEach((card) => {
      // Ajouter classe d'optimisation
      card.classList.add("hover-ready");

      // Précharger l'état de survol avec un délai de 100ms
      setTimeout(() => {
        if (!card.classList.contains("show")) {
          card.classList.add("show");
        }
      }, 100);
    });
  };

  // Optimisation des images et des transitions
  const optimizeCardTransitions = () => {
    // Sélectionner toutes les cartes de projet
    const cards = document.querySelectorAll(".project-card");

    // Ajouter des gestionnaires d'événements optimisés
    cards.forEach((card) => {
      card.addEventListener("transitionstart", (e) => {
        // Ajouter une classe pendant les transitions
        card.classList.add("transitioning");
      });

      card.addEventListener("transitionend", (e) => {
        // Retirer la classe après la transition
        card.classList.remove("transitioning");
      });
    });
  };

  // Initialiser toutes les fonctionnalités avec optimisation
  setupAnimations();
  setupNavigation();
  setupHoverVideos();
  setupFastAnimations();
  optimizeCardTransitions();
});

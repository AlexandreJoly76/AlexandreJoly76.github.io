/**
 * Portfolio - Main script
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
 * Initialize modern navigation
 */
function initNavigation() {
  // Mobile hamburger menu
  const menuToggle = document.getElementById("menuToggle");
  const navElements = document.querySelector(".nav-elements");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      navElements.classList.toggle("active");
    });
  }

  // Active link management
  const navLinks = document.querySelectorAll(".nav-item");
  const sections = document.querySelectorAll("section");

  // Function to check which section is visible
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

  // Listen for scroll to update the active link
  window.addEventListener("scroll", setActiveLink);

  // Close mobile menu when clicking a link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navElements.classList.remove("active");
    });
  });

  // Header transparency effect on scroll
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.background = "rgba(32, 26, 46, 0.95)";
    } else {
      header.style.background = "transparent";
    }
  });

  // NEW: Add smooth navigation for the logo
  const logoLink = document.querySelector(".logo-link");
  if (logoLink) {
    logoLink.addEventListener("click", function (e) {
      e.preventDefault();

      // Smooth fade animation before scrolling
      const currentScroll = window.scrollY;
      if (currentScroll > 0) {
        // Fade effect on the site body
        document.body.style.opacity = "0.9";
        document.body.style.transition = "opacity 0.3s ease";

        // Smooth scroll to top
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });

          // Restore opacity after scrolling
          setTimeout(() => {
            document.body.style.opacity = "1";
          }, 300);
        }, 100);
      }
    });
  }
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

document.addEventListener("DOMContentLoaded", function () {
  // Animation pour les sections au scroll
  const animateSections = document.querySelectorAll(".animate-section");
  const projectCards = document.querySelectorAll(".project-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  animateSections.forEach((section) => {
    observer.observe(section);
  });

  // Observer pour les cartes de projet
  const cardObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  projectCards.forEach((card) => {
    cardObserver.observe(card);
  });

  // Navigation mobile
  const menuToggle = document.getElementById("menuToggle");
  const navElements = document.querySelector(".nav-elements");

  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      this.classList.toggle("active");
      navElements.classList.toggle("active");
    });
  }

  // Fermer le menu au clic sur un lien
  const navLinks = document.querySelectorAll(".nav-item");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navElements.classList.remove("active");
    });
  });

  // Items actifs de navigation
  window.addEventListener("scroll", () => {
    let current = "";
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === current) {
        link.classList.add("active");
      }
    });
  });

  // Basculement du thème
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = themeToggle.querySelector("i");

  // Vérifier s'il y a un thème sauvegardé
  const savedTheme = localStorage.getItem("theme");

  // Appliquer le thème sauvegardé ou utiliser les préférences du système
  if (savedTheme) {
    document.body.classList.toggle("light-mode", savedTheme === "light");
    updateThemeIcon(savedTheme === "light");
  } else {
    // Détecter les préférences du système
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    document.body.classList.toggle("light-mode", !prefersDarkMode);
    updateThemeIcon(!prefersDarkMode);
  }

  // Ajouter l'écouteur d'événement pour le changement de thème
  themeToggle.addEventListener("click", function () {
    const isLightMode = document.body.classList.toggle("light-mode");
    updateThemeIcon(isLightMode);
    localStorage.setItem("theme", isLightMode ? "light" : "dark");
  });

  function updateThemeIcon(isLightMode) {
    themeIcon.className = isLightMode ? "fas fa-moon" : "fas fa-sun";
  }
});

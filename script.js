/**
 * Script principal simplifié - Remplace tout le contenu précédent pour éviter les conflits
 */

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded");

  // 1. Menu burger - implémentation simple et directe
  const menuToggle = document.getElementById("menuToggle");
  const navElements = document.querySelector(".nav-elements");

  if (menuToggle && navElements) {
    console.log("Menu elements found");

    // Écouteur de clic sur le bouton du menu
    menuToggle.addEventListener("click", function (e) {
      console.log("Menu button clicked");
      this.classList.toggle("active");
      navElements.classList.toggle("active");
    });

    // Fermeture du menu au clic sur un lien
    document.querySelectorAll(".nav-item").forEach((link) => {
      link.addEventListener("click", function () {
        menuToggle.classList.remove("active");
        navElements.classList.remove("active");
      });
    });
  }

  // 2. Theme toggle - implémentation simplifiée
  const themeToggle = document.getElementById("themeToggle");

  if (themeToggle) {
    // Récupérer l'icône à l'intérieur du bouton
    const themeIcon = themeToggle.querySelector("i");
    console.log(
      "Theme toggle found:",
      themeIcon ? themeIcon.className : "no icon"
    );

    // Charger le thème sauvegardé s'il existe
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.body.classList.toggle("light-mode", savedTheme === "light");
      updateThemeIcon(savedTheme === "light");
    } else {
      // Utiliser les préférences système par défaut
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      document.body.classList.toggle("light-mode", !prefersDarkMode);
      updateThemeIcon(!prefersDarkMode);
    }

    // Basculer le thème au clic
    themeToggle.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("Theme button clicked");
      const isLightMode = document.body.classList.toggle("light-mode");
      localStorage.setItem("theme", isLightMode ? "light" : "dark");
      updateThemeIcon(isLightMode);
    });
  }

  // Fonction pour mettre à jour l'icône du thème
  function updateThemeIcon(isLightMode) {
    const themeIcon = document.querySelector("#themeToggle i");
    if (themeIcon) {
      // Remplacer complètement la classe plutôt que de juste changer une partie
      themeIcon.className = isLightMode ? "fas fa-moon" : "fas fa-sun";
      console.log("Icon updated to:", themeIcon.className);
    }
  }

  // 3. Animations au scroll - version simplifiée
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.1 }
  );

  document
    .querySelectorAll(".animate-section, .project-card, .section-title")
    .forEach((el) => {
      observer.observe(el);
    });

  // Animation de la carte de présentation
  setTimeout(() => {
    const card = document.querySelector(".presentation-card");
    if (card) card.classList.add("show");
  }, 500);

  // Amélioration de la fonction de détection de section active
  function setActiveNavLink() {
    // Obtenir tous les liens de navigation et sections
    const navLinks = document.querySelectorAll(".nav-item");
    const sections = document.querySelectorAll("section");
    
    // Obtenir la position actuelle du défilement avec une marge
    const scrollPosition = window.scrollY + 100; // Marge pour une détection anticipée
    
    // Trouver la section actuellement visible
    let currentSection = "";
    
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id");
      }
    });
    
    // Mettre à jour la classe active sur les liens de navigation
    navLinks.forEach((link) => {
      const href = link.getAttribute("href").substring(1); // Enlever le # du href
      
      if (href === currentSection) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
    
    // Si nous sommes au tout début de la page, activer Home
    if (scrollPosition < 300) {
      navLinks.forEach((link) => {
        if (link.getAttribute("href") === "#home") {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  }
  
  // Exécuter au chargement et au défilement
  setActiveNavLink();
  window.addEventListener("scroll", setActiveNavLink);
  
  // Gérer les clics sur les liens de navigation
  document.querySelectorAll(".nav-item").forEach((link) => {
    link.addEventListener("click", function (e) {
      // e.preventDefault();
      
      const targetId = this.getAttribute("href");
      
      // Mise à jour manuelle de la classe active lors du clic
      document.querySelectorAll(".nav-item").forEach((navLink) => {
        navLink.classList.remove("active");
      });
      this.classList.add("active");
      
      // Fermer le menu mobile si ouvert
      const menuToggle = document.getElementById("menuToggle");
      const navElements = document.querySelector(".nav-elements");
      if (menuToggle && menuToggle.classList.contains("active")) {
        menuToggle.classList.remove("active");
        navElements.classList.remove("active");
      }
    });
  });
});

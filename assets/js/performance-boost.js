/**
 * Script d'optimisation des performances pour le portfolio
 * Élimine la latence dans les animations de carte
 */

// Exécuter immédiatement pour maximiser les performances
(function () {
  // Précharger les états d'animation avant même que la page soit complètement chargée
  document.addEventListener("DOMContentLoaded", function () {
    // Optimisation des cartes de projet
    const cards = document.querySelectorAll(".project-card");

    // Ajouter des classes d'optimisation sur toutes les cartes
    cards.forEach((card) => {
      // Activer l'accélération matérielle
      card.style.transform = "translateZ(0)";
      card.style.willChange = "transform, box-shadow";

      // Précharger le contenu pour les images et vidéos
      const image = card.querySelector("img");
      if (image) {
        image.fetchPriority = "high";
      }

      const video = card.querySelector("video");
      if (video) {
        // Précharger la vidéo
        video.preload = "auto";
        video.load();

        // Préparer pour une lecture instantanée
        video.muted = true;
        video.playsInline = true;
      }
    });

    // Optimisation des onglets de projets
    const tabs = document.querySelectorAll(".project-tab");
    tabs.forEach((tab) => {
      tab.style.willChange = "transform";
      tab.style.transform = "translateZ(0)";
    });

    // Forcer le navigateur à recalculer les styles pour éviter la latence
    setTimeout(() => {
      document.body.style.transform = "translateZ(0)";
      void document.body.offsetHeight; // Forcer le reflow
      document.body.style.transform = "";
    }, 10);
  });

  // Optimisation avancée: précharge des interactions au survol
  window.addEventListener("load", function () {
    // Optimiser les transitions au survol
    document.querySelectorAll(".project-card").forEach((card) => {
      // Simuler brièvement l'état de survol puis le retirer
      // pour que le navigateur prépare l'animation
      setTimeout(() => {
        card.classList.add("hover-sim");
        setTimeout(() => {
          card.classList.remove("hover-sim");
        }, 50);
      }, 500);
    });
  });
})();

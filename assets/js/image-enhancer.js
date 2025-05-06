/**
 * Script pour améliorer la qualité perçue des images
 */
document.addEventListener("DOMContentLoaded", function () {
  // Sélectionner toutes les images de carte de projet
  const projectImages = document.querySelectorAll(".card-image-container img");

  // Fonction pour appliquer des améliorations visuelles
  function enhanceImage(img) {
    // S'assurer que l'image est complètement chargée
    if (img.complete) {
      applyEnhancements(img);
    } else {
      img.onload = function () {
        applyEnhancements(img);
      };
    }
  }

  // Appliquer les améliorations à une image
  function applyEnhancements(img) {
    // Ajouter une classe pour le suivi
    img.classList.add("enhanced");

    // Appliquer les optimisations qui préservent la qualité
    img.style.imageRendering = "auto";
    img.style.filter = "brightness(1.05) contrast(1.08) saturate(1.1)";

    // Trouver la carte parente et désactiver les animations au survol
    const parentCard = img.closest(".card");
    if (parentCard) {
      parentCard.addEventListener("mouseenter", function () {
        img.style.animation = "none";
        img.style.filter = "brightness(1.08) contrast(1.1) saturate(1.12)";
      });

      parentCard.addEventListener("mouseleave", function () {
        img.style.filter = "brightness(1.05) contrast(1.08) saturate(1.1)";
      });
    }

    console.log("Image enhanced with quality-preserving settings:", img.src);
  }

  // Améliorer toutes les images de projet
  projectImages.forEach(enhanceImage);

  // Désactiver globalement l'animation problématique
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
      const image = this.querySelector(".card-image-container img");
      if (image) {
        image.style.animation = "none";
      }
    });
  });

  // Observer les images qui deviennent visibles
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const container = entry.target;
          container.classList.add("focused-image");

          // Appliquer un effet subtil sans altérer la qualité
          const img = container.querySelector("img");
          if (img) {
            // Transition douce vers des valeurs modérées
            setTimeout(() => {
              img.style.filter =
                "brightness(1.08) contrast(1.1) saturate(1.12)";
            }, 300);
          }
        }
      });
    },
    { threshold: 0.6 }
  );

  // Observer les conteneurs d'images
  document.querySelectorAll(".card-image-container").forEach((container) => {
    observer.observe(container);
  });
});

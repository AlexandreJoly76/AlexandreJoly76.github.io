/**
 * Fonctionnalités auxiliaires pour le portfolio
 * Optimisé pour de meilleures performances
 */

document.addEventListener("DOMContentLoaded", () => {
  console.log("Main script loaded successfully");

  // Gérer les animations au scroll
  const handleScrollAnimations = () => {
    const animateElements = document.querySelectorAll(".animate-on-scroll");

    if (animateElements.length > 0) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
      );

      animateElements.forEach((element) => observer.observe(element));
    }
  };

  // Optimisation de performance pendant le défilement
  const optimizeScrollPerformance = () => {
    let scrollTimer;
    const scrollClass = "is-scrolling";

    window.addEventListener(
      "scroll",
      () => {
        if (!document.body.classList.contains(scrollClass)) {
          document.body.classList.add(scrollClass);
        }

        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
          document.body.classList.remove(scrollClass);
        }, 150);
      },
      { passive: true }
    );
  };

  // Optimisation des images
  const optimizeImages = () => {
    // Utiliser l'API Intersection Observer pour charger les images
    // uniquement lorsqu'elles sont visibles
    const lazyImages = document.querySelectorAll(".lazy-image");

    if (lazyImages.length > 0) {
      const imageObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.classList.add("loaded");
                imageObserver.unobserve(img);
              }
            }
          });
        },
        { rootMargin: "50px" }
      );

      lazyImages.forEach((img) => imageObserver.observe(img));
    }
  };

  // Initialiser toutes les optimisations
  handleScrollAnimations();
  optimizeScrollPerformance();
  optimizeImages();
});

// Fichier principal de JavaScript pour le portfolio

document.addEventListener("DOMContentLoaded", function () {
  console.log("Main script loaded successfully");

  // Animation pour les éléments avec la classe animate-on-scroll
  const animateElements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  animateElements.forEach((element) => {
    observer.observe(element);
  });
});

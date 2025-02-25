document.getElementById("Resume").addEventListener("click", function () {
  window.open("./assets/cv/Cv.pdf", "_blank");
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".presentationCard");
  cards.forEach((card) => {
    setTimeout(() => {
      card.classList.add("show"); // Ajoute la classe qui déclenche l'animation
    }, 500); // Délai de 500ms avant l'apparition
  });
});

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transition = "all 0.5s";
    card.style.transform = "scale(1.05)";
    card.style.backgroundColor = "white";
    card.style.backdropFilter = "none";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
    card.style.transition = "all 0.5s";
    card.style.backgroundColor = "rgba(27,26,31, 0.5)";
    card.style.backdropFilter = "blur(10px)";
  });
});

document.querySelectorAll(".card").forEach((card) => {
  const title = card.querySelector("h3");

  card.addEventListener("mouseenter", () => {
    title.style.color = "black";
  });

  card.addEventListener("mouseleave", () => {
    title.style.color = "white";
  });
});

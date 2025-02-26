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
    card.style.transition = "all 0.5s ease-in-out";
    card.style.transform = "scale(1.05)";
    card.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    card.style.border = "1.5px solid rgba(255, 255, 255, 0.5)";
    card.style.boxShadow = "0 0 15px rgba(255, 255, 255, 0.6)";
    card.style.willChange = "transform"; // Optimisation pour éviter le flou
  });

  card.addEventListener("mouseleave", () => {
    card.style.transition = "all 0.5s ease-in-out";
    card.style.transform = "scale(1)";
    card.style.backgroundColor = "rgba(27, 26, 31, 0.7)"; // Un fond un peu plus opaque pour éviter le flou
    card.style.border = "1.5px solid rgba(255, 255, 255, 0.2)";
    card.style.boxShadow = "0 0 5px rgba(255, 255, 255, 0.2)";
  });
});

let cardOne = document.getElementById("1");

cardOne.addEventListener("click", function () {
  window.open("https://github.com/AlexandreJoly76/forum-go", "_blank");
});

let cardTwo = document.getElementById("2");

cardTwo.addEventListener("click", function () {
  window.open("https://github.com/AlexandreJoly76/GroupieTracker", "_blank");
});

let cardThree = document.getElementById("3");

cardThree.addEventListener("click", function () {
  window.open(
    "https://github.com/AlexandreJoly76/MakeYourGame-SpaceInvader",
    "_blank"
  );
});

let cardFour = document.getElementById("4");

cardFour.addEventListener("click", function () {
  window.open(
    "https://github.com/AlexandreJoly76/AlexandreJoly76.github.io",
    "_blank"
  );
});

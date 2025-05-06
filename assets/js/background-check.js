// Script pour vérifier que le fond d'écran fonctionne correctement

document.addEventListener("DOMContentLoaded", function () {
  // Fonction pour vérifier si une image est chargée correctement
  function isImageOk(img) {
    if (!img.complete) return false;
    if (img.naturalWidth === 0) return false;
    return true;
  }

  // Vérification du fond d'écran principal
  setTimeout(function () {
    // Créer une image temporaire pour tester les différents chemins
    const testImage1 = new Image();
    testImage1.src = "./assets/img/background.png";

    const testImage2 = new Image();
    testImage2.src = "./assets/img/background1.png";

    // Vérifier après chargement
    testImage1.onload = function () {
      if (isImageOk(testImage1)) {
        console.log("Image background.png chargée avec succès");
        document.body.style.backgroundImage =
          "url('./assets/img/background.png')";
      }
    };

    testImage2.onload = function () {
      if (isImageOk(testImage2)) {
        console.log("Image background1.png chargée avec succès");
        if (!isImageOk(testImage1)) {
          document.body.style.backgroundImage =
            "url('./assets/img/background1.png')";
        }
      }
    };

    // Si après 1 seconde aucune image n'est chargée, on utilise le gradient
    setTimeout(function () {
      if (!isImageOk(testImage1) && !isImageOk(testImage2)) {
        console.log(
          "Impossible de charger les images de fond, utilisation du fond de secours"
        );
        document.body.style.background =
          "linear-gradient(135deg, #121212 0%, #1e1e2a 100%)";
      }
    }, 1000);
  }, 300);
});

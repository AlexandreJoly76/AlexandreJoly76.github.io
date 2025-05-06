/**
 * Main script for portfolio website
 * Handles animations, interactions and UI functionality
 */

document.addEventListener("DOMContentLoaded", function () {
  // Initialize animations and interactions
  initializeScrollAnimations();
  initializeThemeToggle();
  initializeSmoothScrolling();
  animateHomeSection();
  initializeProjectLinks();
});

/**
 * Initialize animations for elements when they scroll into view
 */
function initializeScrollAnimations() {
  // Elements to animate
  const elementsToAnimate = document.querySelectorAll(
    ".animate-section, .project-card"
  );

  // Create the observer to detect when elements enter viewport
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

  // Observe all elements that should be animated
  elementsToAnimate.forEach((element) => {
    observer.observe(element);
  });
}

/**
 * Initialize theme toggle functionality
 */
function initializeThemeToggle() {
  const themeToggle = document.getElementById("themeToggle");

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");

      const icon = this.querySelector("i");
      if (icon && icon.classList.contains("fa-moon")) {
        icon.classList.replace("fa-moon", "fa-sun");
      } else if (icon) {
        icon.classList.replace("fa-sun", "fa-moon");
      }
    });
  }
}

/**
 * Initialize smooth scrolling for anchor links
 */
function initializeSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
}

/**
 * Animate the home section elements when page loads
 */
function animateHomeSection() {
  const presentationCard = document.querySelector(".presentation-card");

  // Add animation after a small delay for better visual effect
  if (presentationCard) {
    setTimeout(() => {
      presentationCard.classList.add("show");
    }, 500);
  }
}

/**
 * Initialize click handlers for project cards
 */
function initializeProjectLinks() {
  // Map of project IDs to GitHub links
  const projectLinks = {
    project1: "https://github.com/AlexandreJoly76/forum-go",
    project2: "https://github.com/AlexandreJoly76/MakeYourGame-SpaceInvader",
    project3: "https://github.com/AlexandreJoly76/real-time-forum",
    project4: "https://github.com/AlexandreJoly76/GroupieTracker",
    project5: "https://github.com/AlexandreJoly76/AlexandreJoly76.github.io",
  };

  // Add click event listeners to project cards
  Object.keys(projectLinks).forEach((projectId) => {
    const projectCard = document.getElementById(projectId);
    if (projectCard) {
      projectCard.addEventListener("click", function (e) {
        // Only trigger if click wasn't on the GitHub link itself
        if (!e.target.closest(".github-link")) {
          window.open(projectLinks[projectId], "_blank");
        }
      });

      // Add cursor style to indicate clickable
      projectCard.style.cursor = "pointer";
    }
  });
}

/**
 * Enhance image quality for project images
 */
function enhanceImageQuality() {
  const projectImages = document.querySelectorAll(".card-image img");

  projectImages.forEach((image) => {
    // Apply minimal enhancements that preserve quality
    image.style.imageRendering = "auto";
    image.style.backfaceVisibility = "hidden";

    // Add load event to ensure image is rendered properly
    image.addEventListener("load", function () {
      // Mark image as loaded with enhanced quality
      this.classList.add("enhanced");
    });
  });
}

// Call enhance image quality function
enhanceImageQuality();

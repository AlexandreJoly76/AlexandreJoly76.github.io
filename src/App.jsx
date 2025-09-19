import { useEffect } from 'react';
import backgroundImg from './assets/img/background.png';
import background1Img from './assets/img/background1.png';
import './App.css';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  // Animation au scroll, navigation active, vidéos hover
  // Gestion dynamique du background (migration background-check.js)
  useEffect(() => {
    function isImageOk(img) {
      if (!img.complete) return false;
      if (img.naturalWidth === 0) return false;
      return true;
    }

    function setBackgroundByTheme(theme) {
      let img = new window.Image();
      if (theme === 'light') {
        img.src = background1Img;
        img.onload = function () {
          if (isImageOk(img)) {
            document.body.style.backgroundImage = `url('${background1Img}')`;
          }
        };
      } else {
        img.src = backgroundImg;
        img.onload = function () {
          if (isImageOk(img)) {
            document.body.style.backgroundImage = `url('${backgroundImg}')`;
          }
        };
      }
    }

    // Initial
    const theme = localStorage.getItem('theme') || 'dark';
    setBackgroundByTheme(theme);

    // Listener pour changement de thème
    function onThemeChange() {
      const newTheme = localStorage.getItem('theme') || 'dark';
      setBackgroundByTheme(newTheme);
    }
    window.addEventListener('storage', onThemeChange);

    // Observer la classe body (pour changement via React)
    const observer = new MutationObserver(() => {
      const isLight = document.body.classList.contains('light-mode');
      setBackgroundByTheme(isLight ? 'light' : 'dark');
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    return () => {
      window.removeEventListener('storage', onThemeChange);
      observer.disconnect();
      document.body.style.backgroundImage = '';
      document.body.style.background = '';
    };
  }, []);

  // Animation au scroll, navigation active, vidéos hover, lazy loading, scroll perf (main.js)
  useEffect(() => {
    // Animation au scroll (ajout de la classe visible)
    const animateElements = document.querySelectorAll('.animate-section');
    if (animateElements.length > 0) {
      const observer = new window.IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
      );
      animateElements.forEach((element) => observer.observe(element));
    }

    // Optimisation de performance pendant le défilement
    let scrollTimer;
    const scrollClass = 'is-scrolling';
    function onScrollPerf() {
      if (!document.body.classList.contains(scrollClass)) {
        document.body.classList.add(scrollClass);
      }
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        document.body.classList.remove(scrollClass);
      }, 150);
    }
    window.addEventListener('scroll', onScrollPerf, { passive: true });

    // Lazy loading images (Intersection Observer)
    const lazyImages = document.querySelectorAll('.lazy-image');
    if (lazyImages.length > 0) {
      const imageObserver = new window.IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
              }
            }
          });
        },
        { rootMargin: '50px' }
      );
      lazyImages.forEach((img) => imageObserver.observe(img));
    }
    // Navigation active
    const navLinks = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section');
    function setActiveNavLink() {
      const scrollPosition = window.scrollY + 100;
      let currentSection = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id');
        }
      });
      navLinks.forEach((link) => {
        const href = link.getAttribute('href').substring(1);
        link.classList.toggle('active', href === currentSection);
      });
      if (scrollPosition < 300) {
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === '#home');
        });
      }
    }
    setActiveNavLink();
    window.addEventListener('scroll', setActiveNavLink);

    // Vidéos au hover sur les cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card) => {
      const video = card.querySelector('.hover-video');
      if (!video) return;
      card.addEventListener('mouseenter', () => {
        video.currentTime = 0;
        video.play().catch(() => {});
      });
      card.addEventListener('mouseleave', () => {
        video.pause();
      });
    });

    // Nettoyage listeners/observers
    return () => {
      window.removeEventListener('scroll', setActiveNavLink);
      window.removeEventListener('scroll', onScrollPerf);
      projectCards.forEach((card) => {
        card.onmouseenter = null;
        card.onmouseleave = null;
      });
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

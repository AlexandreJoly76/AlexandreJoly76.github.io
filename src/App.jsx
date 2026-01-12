import { useEffect } from 'react';
import './App.css';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  // Navigation active (ScrollSpy simplifié)
  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section');

    function setActiveNavLink() {
      const scrollPosition = window.scrollY + 200; // Offset
      
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
        // Cas spécial pour Home
        if (window.scrollY < 100 && href === 'home') {
             link.classList.add('active');
        } else {
             link.classList.toggle('active', href === currentSection);
        }
      });
    }

    window.addEventListener('scroll', setActiveNavLink);
    setActiveNavLink(); // Init

    return () => {
      window.removeEventListener('scroll', setActiveNavLink);
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

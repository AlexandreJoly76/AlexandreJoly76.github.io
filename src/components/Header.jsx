import React, { useState, useRef, useEffect } from 'react';

const Header = () => {

  // State pour menu mobile
  const [menuOpen, setMenuOpen] = useState(false);
  const navElementsRef = useRef(null);

  // State pour le thème
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  // Appliquer la classe sur le body
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.classList.toggle('light-mode', theme === 'light');
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  // Gestion du menu mobile
  const handleMenuToggle = () => {
    setMenuOpen((open) => !open);
    if (navElementsRef.current) {
      navElementsRef.current.classList.toggle('active');
    }
  };

  // Gestion du switch de thème
  const handleThemeToggle = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo">
          <a href="#" className="logo-link">
            <span className="logo-text">
              <span className="logo-primary">ALEXANDRE</span>
              <span className="logo-secondary">JOLY</span>
            </span>
          </a>
        </div>

        <div className={`menu-toggle${menuOpen ? ' active' : ''}`} id="menuToggle" onClick={handleMenuToggle}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <div className="nav-elements" ref={navElementsRef}>
          <ul className="nav-links">
            <li><a href="#home" className="nav-item active">Home</a></li>
            <li><a href="#skills" className="nav-item">Skills</a></li>
            <li><a href="#projects" className="nav-item">Projects</a></li>
            <li><a href="#contact" className="nav-item">Contact</a></li>
          </ul>
          <div className="theme-switch">
            <button id="themeToggle" aria-label="Change theme" onClick={handleThemeToggle}>
              <i className={theme === 'light' ? 'fas fa-sun' : 'fas fa-moon'}></i>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

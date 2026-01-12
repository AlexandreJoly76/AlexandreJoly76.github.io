import React, { useState, useEffect } from 'react';

const Header = () => {
  // State pour le thème
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      // Si un thème est sauvegardé, on l'utilise. Sinon, on force 'dark'.
      return savedTheme ? savedTheme : 'dark';
    }
    return 'dark';
  });

  // Appliquer la classe sur le body
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Si le thème est 'light', on ajoute la classe et l'attribut.
      // Sinon (dark), on nettoie tout pour utiliser les styles par défaut (qui sont dark).
      if (theme === 'light') {
        document.body.classList.add('light-mode');
        document.body.setAttribute('data-theme', 'light');
      } else {
        document.body.classList.remove('light-mode');
        document.body.removeAttribute('data-theme');
      }
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  // Gestion du switch de thème
  const handleThemeToggle = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo">
          <a href="#" className="logo-link">
            AJ.
          </a>
        </div>

        <div className="nav-elements">
          <ul className="nav-links">
            <li>
              <a href="#home" className="nav-item">
                <i className="fas fa-home"></i>
                <span className="nav-text">Home</span>
              </a>
            </li>
            <li>
              <a href="#skills" className="nav-item">
                <i className="fas fa-code"></i>
                <span className="nav-text">Skills</span>
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-item">
                <i className="fas fa-briefcase"></i>
                <span className="nav-text">Projects</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-item">
                <i className="fas fa-envelope"></i>
                <span className="nav-text">Contact</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="theme-switch">
            <button aria-label="Change theme" onClick={handleThemeToggle}>
              {theme === 'light' ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
            </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

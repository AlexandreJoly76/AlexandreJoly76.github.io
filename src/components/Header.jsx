import React, { useState, useEffect } from 'react';
import { useLang } from '../i18n/LangContext';

const Header = () => {
  const { t, toggleLang } = useLang();

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
                <span className="nav-text">{t.nav.home}</span>
              </a>
            </li>
            <li>
              <a href="#skills" className="nav-item">
                <i className="fas fa-code"></i>
                <span className="nav-text">{t.nav.skills}</span>
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-item">
                <i className="fas fa-briefcase"></i>
                <span className="nav-text">{t.nav.projects}</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-item">
                <i className="fas fa-envelope"></i>
                <span className="nav-text">{t.nav.contact}</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="nav-actions">
          <button
            className="lang-switch"
            aria-label={t.nav.langLabel}
            title={t.nav.langLabel}
            onClick={toggleLang}
          >
            {t.nav.langButton}
          </button>
          <div className="theme-switch">
            <button aria-label={t.nav.themeLabel} onClick={handleThemeToggle}>
              {theme === 'light' ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

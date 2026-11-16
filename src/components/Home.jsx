import React from 'react';
import profilImg from '../assets/img/profil.png';
import cvPdf from '../assets/cv/Cv.pdf';
import Typewriter from './Typewriter';
import { useLang } from '../i18n/LangContext';

const Home = () => {
  const { lang, t } = useLang();

  return (
    <section id="home">
      <div className="home-container">
        
        <div className="content-column">
          <div className="intro-header">
            <h1 className="name-headline">Alexandre Joly</h1>
            <div className="role-container">
              <Typewriter key={lang} prefix={t.home.rolePrefix} words={t.home.roles} />
            </div>
          </div>

          <div className="description">
            <p>{t.home.intro}</p>
            <p>{t.home.search}</p>
          </div>

          <div className="cta-buttons">
            <a href="#projects" className="btn-primary">
              {t.home.viewWork}
            </a>
            <a href={cvPdf} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              {t.home.resume}
            </a>
          </div>

          <div className="socials-strip">
            <a href="https://github.com/AlexandreJoly76" target="_blank" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/alexandre-joly-90813733b/" target="_blank" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="mailto:alexandre.joly.76300@gmail.com" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="profile-column">
          <div className="profile-wrapper">
            <div className="profile-glow"></div>
            <img className="profile-img" src={profilImg} alt="Alexandre Joly" />
          </div>
        </div>

      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>{t.home.scroll}</span>
      </div>
    </section>
  );
};

export default Home;

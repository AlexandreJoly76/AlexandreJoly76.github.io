import React from 'react';
import profilImg from '../assets/img/profil.png';
import cvPdf from '../assets/cv/Cv.pdf';

const Home = () => {
  return (
    <section id="home">
      <div className="home-container">
        <div className="presentation-card">
          <div className="profile-column">
            <div className="profile-frame">
              <img className="profile-img" src={profilImg} alt="Photo de profil d'Alexandre Joly" />
              <div className="profile-glow"></div>
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
          <div className="content-column">
            <div className="intro-header">
              <span className="greeting">Hello, I'm</span>
              <h1 className="name-headline">Alexandre <span className="highlight">Joly</span></h1>
              <div className="role-container">
                <h2 className="subtitle typewriter">Full-Stack Developer in training at Zone01</h2>
              </div>
            </div>
            <div className="description">
              <p>Passionate about building dynamic and efficient web applications. I am constantly learning and improving my skills in both front-end and back-end development.</p>
              <p className="margin-top">I am currently looking for an apprenticeship to gain hands-on experience and further develop my skills as a Full-Stack Developer.</p>
            </div>
            <div className="cta-buttons">
              <a href={cvPdf} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <i className="fas fa-file-download"></i>
                <span className="btn-text">Download CV</span>
              </a>
              <a href="#contact" className="btn-secondary">
                <span className="btn-text">Contact Me</span>
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

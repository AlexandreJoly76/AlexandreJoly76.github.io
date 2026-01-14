
import React, { useState, useEffect } from 'react';
import profilImg from '../assets/img/profil.png';
import cvPdf from '../assets/cv/Cv.pdf';

const Home = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');
  
  const words = ["Developer", "Designer", "Creator"];
  const typingSpeed = 150;
  const deletingSpeed = 75;
  const pauseTime = 2000;

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[textIndex % words.length];
      
      if (isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
      }

      if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setTextIndex((prev) => prev + 1);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex, words]);

  return (
    <section id="home">
      <div className="home-container">
        
        <div className="content-column">
          <div className="intro-header">
            <h1 className="name-headline">Alexandre Joly</h1>
            <div className="role-container">
              <span className="typewriter">Full-Stack <strong>{displayText}</strong></span>
            </div>
          </div>
          
          <div className="description">
            <p>
              Passionate about building dynamic and efficient web applications. I craft immersive digital experiences with modern technologies and a focus on performance.
            </p>
            <p>Currently open to apprenticeship opportunities to bring creative ideas to life.</p>
          </div>
          
          <div className="cta-buttons">
            <a href="#projects" className="btn-primary">
              View Work
            </a>
            <a href={cvPdf} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Resume
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
        <span>Scroll Down</span>
      </div>
    </section>
  );
};

export default Home;

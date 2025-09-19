import React from 'react';
import githubIcon from '../assets/svg/Githubsocial.svg';
import linkedinIcon from '../assets/svg/LinkedInsocial.svg';
import emailIcon from '../assets/svg/Emailsocial.svg';



const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container animate-section">
        <div className="contact-content">
          <div className="section-header">
            <div className="section-title">
              <span className="title-decoration"></span>
              <h2><span className="highlight">Contact</span> Me</h2>
              <span className="title-decoration"></span>
            </div>
          </div>
          <p className="contact-intro">Let's connect and build something amazing together</p>
          <div className="contact-cards">
            <div className="social-cards-wrapper">
              <a href="https://github.com/AlexandreJoly76" target="_blank" className="contact-card github-card">
                <div className="contact-icon">
                  <img src={githubIcon} alt="GitHub" />
                </div>
                <div className="contact-info">
                  <h3>GitHub</h3>
                  <p>Check out my code</p>
                </div>
                <span className="arrow-icon"><i className="fas fa-arrow-right"></i></span>
              </a>
              <a href="https://www.linkedin.com/in/alexandre-joly-90813733b/" target="_blank" className="contact-card linkedin-card">
                <div className="contact-icon">
                  <img src={linkedinIcon} alt="LinkedIn" />
                </div>
                <div className="contact-info">
                  <h3>LinkedIn</h3>
                  <p>Let's connect</p>
                </div>
                <span className="arrow-icon"><i className="fas fa-arrow-right"></i></span>
              </a>
            </div>
            <a href="mailto:alexandre.joly.76300@gmail.com" className="contact-card email-card">
              <div className="contact-icon">
                <img src={emailIcon} alt="Email" />
              </div>
              <div className="contact-info">
                <h3>Email</h3>
                <p>alexandre.joly.76300@gmail.com</p>
              </div>
              <span className="arrow-icon"><i className="fas fa-arrow-right"></i></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

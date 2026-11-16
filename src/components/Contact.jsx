import React from 'react';
import { useLang } from '../i18n/LangContext';
import githubIcon from '../assets/svg/Githubsocial.svg';
import linkedinIcon from '../assets/svg/LinkedInsocial.svg';
import emailIcon from '../assets/svg/Emailsocial.svg';

const Contact = () => {
  const { t } = useLang();
  return (
    <section id="contact">
      <div className="contact-container">
        <div className="contact-content">
          <div className="section-header">
            <div className="section-title">
              <h2>{t.contact.title}</h2>
            </div>
          </div>
          <p className="contact-intro">{t.contact.intro}</p>
          
          <div className="contact-cards">
            <a href="https://github.com/AlexandreJoly76" target="_blank" rel="noreferrer" className="contact-card">
              <div className="contact-icon">
                <img src={githubIcon} alt="GitHub" />
              </div>
              <div className="contact-info">
                <h3>GitHub</h3>
                <p>{t.contact.github}</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/alexandre-joly-90813733b/" target="_blank" rel="noreferrer" className="contact-card">
              <div className="contact-icon">
                <img src={linkedinIcon} alt="LinkedIn" />
              </div>
              <div className="contact-info">
                <h3>LinkedIn</h3>
                <p>{t.contact.linkedin}</p>
              </div>
            </a>

            <a href="mailto:alexandre.joly.76300@gmail.com" className="contact-card email-card">
              <div className="contact-icon">
                <img src={emailIcon} alt="Email" />
              </div>
              <div className="contact-info">
                <h3>Email</h3>
                <p>alexandre.joly.76300@gmail.com</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

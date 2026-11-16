import React from 'react';
import { useLang } from '../i18n/LangContext';

const Footer = () => {
  const { t } = useLang();
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          AJ. <span className="highlight">© 2026</span> — {t.footer.tagline}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

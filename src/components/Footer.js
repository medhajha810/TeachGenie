import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-wrapper">
        {/* Logo */}
        <div className="footer-logo-section">
          <img src="/TechGenieMascot.PNG" alt="TeachGenie" className="footer-logo-img" />
          <h2 className="footer-logo-text">TeachGenie</h2>
        </div>

        {/* Navigation Links */}
        <nav className="footer-nav">
          <a href="#features">FEATURES</a>
          <a href="#packages">PRICING</a>
          <a href="#how-it-works">HOW IT WORKS</a>
          <Link to="/generator">GENERATOR</Link>
          <Link to="/learn-more">ABOUT</Link>
          <Link to="/login">LOGIN</Link>
        </nav>

        {/* Copyright Badge */}
        <div className="footer-copyright">
          © {currentYear} TeachGenie. All Rights Reserved
        </div>

        {/* Credits */}
        <div className="footer-credits">
          <span className="credit-item">
            <span className="credit-label">Developer:</span>
            <span className="credit-name">Lovi Raj Gupta</span>
          </span>
          <span className="divider">•</span>
          <span className="credit-item">
            <span className="credit-label">Contributors:</span>
            <span className="credit-name">Medha Jha & Golu Kumar</span>
          </span>
          <span className="divider">•</span>
          <span className="credit-item">
            <a href="mailto:info@teachgenie.ai" className="credit-email">info@teachgenie.ai</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

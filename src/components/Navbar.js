import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Home, Package, Lightbulb, Sparkles, Sun, Moon, Wand2, Droplets, Gem } from 'lucide-react';
import '../styles/navbar.css';

export default function Navbar() {
  const { theme, toggleTheme, themes } = useTheme();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 100) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: 'Home', link: '/', icon: <Home size={18} /> },
    { name: 'Features', link: '#features', icon: <Sparkles size={18} /> },
    { name: 'Packages', link: '#packages', icon: <Package size={18} /> },
    { name: 'How It Works', link: '#how-it-works', icon: <Lightbulb size={18} /> },
    { name: 'Dashboard', link: '/generator', icon: <Wand2 size={18} />, isRoute: true },
  ];

  return (
    <nav className={`floating-navbar ${visible ? 'visible' : 'hidden'}`}>
      <div className="floating-navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/TechGenieMascot.PNG" alt="TeachGenie" className="navbar-logo-img" />
          <span className="navbar-logo-text">TeachGenie</span>
        </Link>

        <ul className="floating-nav-menu">
          {navItems.map((item, index) => (
            <li key={index}>
              {item.isRoute ? (
                <Link to={item.link} className="nav-item">
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-text">{item.name}</span>
                </Link>
              ) : (
                <a href={item.link} className="nav-item">
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-text">{item.name}</span>
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            title="Toggle theme"
            aria-label="Toggle theme"
          >
            {theme === 'light' && <Sun size={20} />}
            {theme === 'dark' && <Moon size={20} />}
            {theme === 'ocean' && <Droplets size={20} />}
            {theme === 'elegant' && <Gem size={20} />}
          </button>
          <Link to="/signup" className="nav-cta-btn">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

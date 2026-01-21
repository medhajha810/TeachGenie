import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TypingAnimation } from './TypingAnimation';
import '../styles/hero.css';

export default function Hero() {
  const [visibleWords, setVisibleWords] = useState([]);
  const staticWords = [
    { text: 'One Minute.', class: 'black-text', delay: 2500 },
    { text: 'Infinite Impact.', class: 'orange-text', delay: 2800 }
  ];

  useEffect(() => {
    staticWords.forEach((word, index) => {
      setTimeout(() => {
        setVisibleWords(prev => [...prev, index]);
      }, word.delay);
    });
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-background">
        <div className="gradient-1"></div>
        <div className="gradient-2"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-block typing-line">
              <TypingAnimation
                words={["Revolutionize Teaching."]}
                blinkCursor={true}
                duration={120}
                className="mixed-text"
              />
            </span>
            {staticWords.map((word, index) => (
              <span key={index} className="title-block">
                <span
                  className={`animated-word ${word.class} ${visibleWords.includes(index) ? 'visible' : ''}`}
                >
                  {word.text}
                </span>
              </span>
            ))}
          </h1>

          <p className="hero-subtitle">
            Your AI Teaching Companion - Transform a Topic Into Engaging Lessons, Gamified Quiz, Key Takeaways and PDF in less than a minute.
          </p>

          <div className="hero-buttons">
            <Link to="/login" className="btn btn-accent btn-large">
              Start Free Trial
            </Link>
            <Link to="/learn-more" className="btn btn-outline btn-large">
              Learn More
            </Link>
          </div>

          <div className="hero-trust">
            <span>Trusted by educators at</span>
            <div className="trust-logos">
              {/* Placeholders for trust logos or text */}
              <span>LPU</span> • <span>CGC</span> • <span>Amity</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card-wrapper">
            {/* The Character Popping Out */}
            <div className="pop-out-character">
              <img src="/TechGenieMascot.png" alt="TeachGenie Mascot" className="hero-mascot-image" />
            </div>

            {/* The Card Base with Sparkles */}
            <div className="hero-card-base">
              <div className="sparkles-container">
                <div className="sparkle"></div>
                <div className="sparkle"></div>
                <div className="sparkle"></div>
                <div className="sparkle"></div>
                <div className="sparkle"></div>
                <div className="sparkle"></div>
                <div className="sparkle"></div>
                <div className="sparkle"></div>
                <div className="sparkle"></div>
                <div className="sparkle"></div>
                <div className="sparkle"></div>
                <div className="sparkle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import '../styles/genie-loader.css';

export default function GenieLoader({ message = '' }) {
  return (
    <div className="genie-loader-container">
      <div className="genie-loading-wrapper">
        {/* Background Effects */}
        <div className="magical-background">
          <div className="magic-particle particle-1"></div>
          <div className="magic-particle particle-2"></div>
          <div className="magic-particle particle-3"></div>
          <div className="magic-particle particle-4"></div>
          <div className="magic-particle particle-5"></div>
        </div>

        {/* Main Lamp Container */}
        <div className="lamp-main-container">
          {/* Golden Lamp */}
          <div className="golden-lamp">
            {/* Lamp Spout (curved top part) */}
            <div className="lamp-spout"></div>
            
            {/* Lamp Body (main bulbous part) */}
            <div className="lamp-body">
              <div className="lamp-shine"></div>
              <div className="lamp-highlight"></div>
            </div>
            
            {/* Lamp Handle */}
            <div className="lamp-handle"></div>
            
            {/* Lamp Base/Stand */}
            <div className="lamp-base"></div>
            
            {/* Magic Smoke emerging from lamp */}
            <div className="magic-smoke">
              <div className="smoke-cloud smoke-1"></div>
              <div className="smoke-cloud smoke-2"></div>
              <div className="smoke-cloud smoke-3"></div>
            </div>

            {/* Blue Genie Character */}
            <div className="genie-character">
              {/* Genie Head */}
              <div className="genie-head">
                <div className="genie-hair"></div>
                <div className="genie-face">
                  <div className="genie-eye left-eye"></div>
                  <div className="genie-eye right-eye"></div>
                  <div className="genie-mouth"></div>
                </div>
              </div>

              {/* Genie Body */}
              <div className="genie-body">
                <div className="genie-torso"></div>
                <div className="genie-arm left-arm"></div>
                <div className="genie-arm right-arm"></div>
              </div>

              {/* Genie Bottom (magical tail) */}
              <div className="genie-tail"></div>

              {/* Magical Sparkles */}
              <div className="sparkle sparkle-1">✨</div>
              <div className="sparkle sparkle-2">✨</div>
              <div className="sparkle sparkle-3">✨</div>
              <div className="sparkle sparkle-4">✨</div>
            </div>

            {/* Glow Effect around Lamp */}
            <div className="lamp-glow"></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="loading-text-container">
          <h2 className="loading-title">Summoning Your AI Teaching Genie</h2>
          <p className="loading-message">
            {message || '✨ Creating magic... Transforming your lesson into brilliance... ✨'}
          </p>
          <div className="loading-dots">
            <span className="dot dot-1"></span>
            <span className="dot dot-2"></span>
            <span className="dot dot-3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import '../styles/auth.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert('Login successful! (Demo)');
      navigate('/');
    }, 2000);
  };

  return (
    <div className="auth-container">
      <div className="auth-background">
        <div className="gradient-1"></div>
        <div className="gradient-2"></div>
      </div>

      <div className="auth-wrapper">
        <div className="auth-card">
          <div className="auth-header">
            <div className="auth-logo">
              <img src="/TechGenieMascot.PNG" alt="TeachGenie" className="auth-logo-image" style={{width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover'}} />
              <h1>TeachGenie</h1>
            </div>
            <p className="auth-subtitle">AI-Powered Lecture Material Generation</p>
          </div>

          <div className="auth-tabs">
            <Link to="/login" className="auth-tab active">Login</Link>
            <Link to="/signup" className="auth-tab">Register</Link>
          </div>

          <div className="auth-form-container">
            <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label>
                <Mail size={20} />
                Email Address
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>
                <Lock size={20} />
                Password
              </label>
              <div className="password-field">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="auth-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <Link to="#" className="forgot-password">Forgot Password?</Link>
            </div>

            <button type="submit" className="btn btn-accent btn-large" disabled={loading}>
              {loading ? (
                <>
                  <span className="spinner"></span>
                  Logging in...
                </>
              ) : (
                'Login to Your Account'
              )}
            </button>
          </form>

          <div className="auth-divider">
            <span>or continue with</span>
          </div>

          <div className="social-login">
            <button className="social-btn">
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='16' font-weight='bold'%3EG%3C/text%3E%3C/svg%3E" alt="Google" />
              Google
            </button>
            <button className="social-btn">
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='16' font-weight='bold'%3EF%3C/text%3E%3C/svg%3E" alt="Facebook" />
              Facebook
            </button>
          </div>

          <div className="auth-footer">
            <p>
              Don't have an account?{' '}
              <Link to="/signup" className="auth-link">Sign up now</Link>
            </p>
          </div>
          </div>
        </div>

        <div className="auth-benefits">
          <h2>Why Choose Tech Genie?</h2>
          <ul>
            <li>
              <span className="benefit-icon">🤖</span>
              <div>
                <h4>AI-Powered Generation</h4>
                <p>Advanced AI agents instantly generate professional lecture materials</p>
              </div>
            </li>
            <li>
              <span className="benefit-icon">⚡</span>
              <div>
                <h4>Save Hours of Work</h4>
                <p>Create complete materials in minutes, not hours</p>
              </div>
            </li>
            <li>
              <span className="benefit-icon">🎓</span>
              <div>
                <h4>For All Levels</h4>
                <p>From school to postgraduate, we've got you covered</p>
              </div>
            </li>
            <li>
              <span className="benefit-icon">📚</span>
              <div>
                <h4>Multiple Formats</h4>
                <p>PDF, PowerPoint, Word - download in your preferred format</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

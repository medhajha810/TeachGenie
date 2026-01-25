import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Select from 'react-select'; // Added for searchable dropdowns
import { Mail, Lock, User, Building2, Eye, EyeOff, Phone, MapPin, GraduationCap, Briefcase } from 'lucide-react';
import '../styles/auth.css';

export default function Signup() {
  const [userType, setUserType] = useState('tutor');
  const [showOtherInstitution, setShowOtherInstitution] = useState(false);
  const [countries, setCountries] = useState([]);
  const [institutions, setInstitutions] = useState([]);
  const [isLoadingUnis, setIsLoadingUnis] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    countryCode: '+1',
    phoneNumber: '',
    country: null, // Store as {label, value}
    institution: null, // Store as {label, value}
    otherInstitution: '',
    level: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  // 1. Fetch Countries on Mount
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name')
      .then(res => res.json())
      .then(data => {
        const options = data
          .map(c => ({ value: c.name.common, label: c.name.common }))
          .sort((a, b) => a.label.localeCompare(b.label));
        setCountries(options);
      })
      .catch(err => console.error("Error fetching countries", err));
  }, []);

  // 2. Fetch Universities when Country changes
  useEffect(() => {
    if (formData.country) {
      setIsLoadingUnis(true);
      fetch(`http://universities.hipolabs.com/search?country=${formData.country.value}`)
        .then(res => res.json())
        .then(data => {
          const options = data.map(uni => ({ value: uni.name, label: uni.name }));
          options.push({ value: 'Other', label: 'Other (Not in list)' });
          setInstitutions(options);
          setIsLoadingUnis(false);
        })
        .catch(() => {
          setInstitutions([{ value: 'Other', label: 'Other' }]);
          setIsLoadingUnis(false);
        });
    }
  }, [formData.country]);

  const handleSelectChange = (selected, action) => {
    setFormData(prev => ({ ...prev, [action.name]: selected }));

    if (action.name === 'country') {
      setFormData(prev => ({ ...prev, institution: null })); // Reset uni if country changes
    }

    if (action.name === 'institution') {
      setShowOtherInstitution(selected?.value === 'Other');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) return alert('Passwords do not match!');
    if (!agreed) return alert('Please agree to terms');

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/');
    }, 2000);
  };

  // Custom styles moved to auth.css via class names

  return (
    <div className="auth-container">
      <div className="auth-background"><div className="gradient-1"></div><div className="gradient-2"></div></div>
      <div className="auth-wrapper">
        <div className="auth-card">
          <div className="auth-header">
            <div className="auth-logo">
              <img src="/TechGenieMascot.png" alt="TeachGenie" className="auth-logo-image" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
              <h1 className="animated-title">TeachGenie</h1>
            </div>
            <p className="auth-subtitle">Join Educators Using AI for Better Teaching</p>
          </div>

          <div className="auth-tabs">
            <Link to="/login" className="auth-tab">Login</Link>
            <Link to="/signup" className="auth-tab active">Register</Link>
          </div>

          <div className="auth-form-container">
            <div className="tutor-type-selection">
              <div className={`tutor-type-option ${userType === 'tutor' ? 'selected' : ''}`} onClick={() => setUserType('tutor')}>
                <div className="tutor-type-icon">👤</div><h4>Register as Tutor</h4>
              </div>
              <div className={`tutor-type-option ${userType === 'institution' ? 'selected' : ''}`} onClick={() => setUserType('institution')}>
                <div className="tutor-type-icon">🏛️</div><h4>Register as Institution</h4>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label><User size={20} /> Full Name</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label><Mail size={20} /> Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label><MapPin size={20} /> Country</label>
                <Select
                  name="country"
                  options={countries}
                  value={formData.country}
                  onChange={handleSelectChange}
                  className="react-select-container"
                  classNamePrefix="react-select"
                  placeholder="Select or type country..."
                  required
                />
              </div>

              {formData.country && (
                <div className="form-group">
                  <label><Building2 size={20} /> Institution</label>
                  <Select
                    name="institution"
                    options={institutions}
                    value={formData.institution}
                    onChange={handleSelectChange}
                    isLoading={isLoadingUnis}
                    className="react-select-container"
                    classNamePrefix="react-select"
                    placeholder="Select or type university..."
                    required
                  />
                </div>
              )}

              {showOtherInstitution && (
                <div className="form-group">
                  <label><Building2 size={20} /> Institution Name</label>
                  <input type="text" name="otherInstitution" value={formData.otherInstitution} onChange={handleChange} placeholder="Enter your institution" required />
                </div>
              )}

              <div className="form-group">
                <label><GraduationCap size={20} /> Level</label>
                <select name="level" value={formData.level} onChange={handleChange} required>
                  <option value="">Select Level</option>
                  <option value="School">School</option>
                  <option value="Undergraduate">Undergraduate</option>
                  <option value="Postgraduate">Postgraduate</option>
                </select>
              </div>

              <div className="form-group">
                <label><Lock size={20} /> Password</label>
                <div className="password-field">
                  <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleChange} required />
                  <button type="button" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <button type="submit" className="btn btn-accent btn-large" disabled={loading || !agreed}>
                {loading ? 'Creating Account...' : 'Create Your Free Account'}
              </button>
            </form>
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
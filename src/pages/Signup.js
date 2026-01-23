import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Building2, Eye, EyeOff, Phone, MapPin, GraduationCap, Briefcase } from 'lucide-react';
import '../styles/auth.css';

export default function Signup() {
  const [userType, setUserType] = useState('tutor');
  const [showOtherInstitution, setShowOtherInstitution] = useState(false);
  const [formData, setFormData] = useState({
    // Tutor fields
    fullName: '',
    email: '',
    countryCode: '+1',
    phoneNumber: '',
    country: '',
    institution: '',
    otherInstitution: '',
    level: '',
    // Institution fields
    institutionName: '',
    otherInstitutionName: '',
    headName: '',
    headPosition: '',
    institutionAddress: '',
    institutionCountry: '',
    // Common fields
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const countries = [
    'United States', 'United Kingdom', 'Canada', 'Australia', 'India', 
    'Germany', 'France', 'Japan', 'China', 'Brazil', 'Other'
  ];

  const countryCodes = [
    { code: '+1', country: 'US/Canada' },
    { code: '+44', country: 'UK' },
    { code: '+91', country: 'India' },
    { code: '+61', country: 'Australia' },
    { code: '+49', country: 'Germany' },
    { code: '+33', country: 'France' },
    { code: '+81', country: 'Japan' },
    { code: '+86', country: 'China' },
    { code: '+55', country: 'Brazil' }
  ];

  const institutions = {
    'United States': [
      'Harvard University', 'Stanford University', 'MIT', 'California Institute of Technology', 
      'Princeton University', 'Yale University', 'Columbia University', 'University of Chicago',
      'University of Pennsylvania', 'Johns Hopkins University', 'Northwestern University', 
      'Duke University', 'Cornell University', 'Brown University', 'Dartmouth College',
      'Vanderbilt University', 'Rice University', 'UC Berkeley', 'UCLA', 'USC',
      'University of Michigan', 'Carnegie Mellon University', 'NYU', 'Boston University',
      'Georgetown University', 'Emory University', 'Georgia Tech', 'UT Austin', 
      'University of Washington', 'University of Wisconsin', 'Other'
    ],
    'United Kingdom': [
      'University of Oxford', 'University of Cambridge', 'Imperial College London', 
      'UCL (University College London)', 'London School of Economics', 'University of Edinburgh',
      'King\'s College London', 'University of Manchester', 'University of Bristol',
      'University of Warwick', 'University of Glasgow', 'Durham University',
      'University of Birmingham', 'University of Southampton', 'University of Leeds',
      'University of Sheffield', 'Queen Mary University', 'Lancaster University',
      'University of York', 'University of Exeter', 'Cardiff University',
      'University of Liverpool', 'University of Bath', 'Newcastle University', 'Other'
    ],
    'India': [
      'IIT Bombay', 'IIT Delhi', 'IIT Madras', 'IIT Kanpur', 'IIT Kharagpur',
      'IIT Roorkee', 'IIT Guwahati', 'IIT Hyderabad', 'IISC Bangalore', 'BITS Pilani',
      'Delhi University', 'Jawaharlal Nehru University', 'University of Mumbai', 
      'University of Calcutta', 'Anna University', 'Jadavpur University', 'BHU Varanasi',
      'Aligarh Muslim University', 'University of Pune', 'NIT Trichy', 'NIT Warangal',
      'AIIMS Delhi', 'Jamia Millia Islamia', 'Manipal University', 'VIT Vellore',
      'SRM University', 'Amity University', 'Christ University', 'Symbiosis International', 'Other'
    ],
    'Canada': [
      'University of Toronto', 'University of British Columbia', 'McGill University',
      'McMaster University', 'University of Montreal', 'University of Alberta',
      'University of Ottawa', 'University of Calgary', 'Western University',
      'Queen\'s University', 'Simon Fraser University', 'Dalhousie University',
      'University of Waterloo', 'York University', 'Carleton University', 'Other'
    ],
    'Australia': [
      'University of Melbourne', 'Australian National University', 'University of Sydney',
      'University of Queensland', 'Monash University', 'UNSW Sydney',
      'University of Western Australia', 'University of Adelaide', 'University of Technology Sydney',
      'Queensland University of Technology', 'RMIT University', 'Curtin University',
      'Macquarie University', 'University of Wollongong', 'Deakin University', 'Other'
    ],
    'Germany': [
      'Technical University of Munich', 'LMU Munich', 'Heidelberg University',
      'Humboldt University Berlin', 'Free University Berlin', 'RWTH Aachen University',
      'University of Freiburg', 'University of Tübingen', 'University of Göttingen',
      'University of Bonn', 'Technical University of Berlin', 'University of Hamburg',
      'University of Cologne', 'University of Mannheim', 'Karlsruhe Institute of Technology', 'Other'
    ],
    'France': [
      'Sorbonne University', 'École Normale Supérieure', 'École Polytechnique',
      'Sciences Po', 'University of Paris', 'Université PSL', 'École Centrale Paris',
      'HEC Paris', 'INSEAD', 'Université Grenoble Alpes', 'University of Strasbourg',
      'University of Lyon', 'Aix-Marseille University', 'University of Toulouse', 'Other'
    ],
    'Japan': [
      'University of Tokyo', 'Kyoto University', 'Osaka University', 'Tohoku University',
      'Tokyo Institute of Technology', 'Nagoya University', 'Kyushu University',
      'Hokkaido University', 'Keio University', 'Waseda University', 'Tsukuba University',
      'Hiroshima University', 'Kobe University', 'Tokyo Medical and Dental University', 'Other'
    ],
    'China': [
      'Tsinghua University', 'Peking University', 'Fudan University', 'Shanghai Jiao Tong University',
      'Zhejiang University', 'University of Science and Technology of China', 'Nanjing University',
      'Wuhan University', 'Xi\'an Jiaotong University', 'Harbin Institute of Technology',
      'Sun Yat-sen University', 'Beihang University', 'Nankai University', 'Tianjin University', 'Other'
    ],
    'Brazil': [
      'University of São Paulo', 'University of Campinas', 'Federal University of Rio de Janeiro',
      'Federal University of Minas Gerais', 'Federal University of Rio Grande do Sul',
      'University of Brasília', 'Federal University of São Paulo', 'Pontifical Catholic University',
      'State University of Rio de Janeiro', 'Federal University of Paraná', 'Other'
    ],
    'Other': ['Other']
  };

  const levels = ['School', 'Undergraduate', 'Postgraduate', 'Professional'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Handle "Other" institution selection
    if (name === 'institution' || name === 'institutionName') {
      setShowOtherInstitution(value === 'Other');
    }

    // Reset institution when country changes
    if (name === 'country' || name === 'institutionCountry') {
      setFormData(prev => ({
        ...prev,
        institution: '',
        institutionName: '',
        otherInstitution: '',
        otherInstitutionName: ''
      }));
      setShowOtherInstitution(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (!agreed) {
      alert('Please agree to the terms and conditions');
      return;
    }
    
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert('Account created successfully! (Demo)');
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
              <img src="/TechGenieMascot.png" alt="TeachGenie" className="auth-logo-image" style={{width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover'}} />
              <h1 className="animated-title">
                {'TeachGenie'.split('').map((char, index) => (
                  <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                    {char}
                  </span>
                ))}
              </h1>
            </div>
            <p className="auth-subtitle">Join Educators Using AI for Better Teaching</p>
          </div>

          <div className="auth-tabs">
            <Link to="/login" className="auth-tab">Login</Link>
            <Link to="/signup" className="auth-tab active">Register</Link>
          </div>

          <div className="auth-form-container">
            <div className="tutor-type-selection">
              <div 
                className={`tutor-type-option ${userType === 'tutor' ? 'selected' : ''}`}
                onClick={() => setUserType('tutor')}
              >
                <div className="tutor-type-icon">👤</div>
                <h4>Register as Tutor</h4>
              </div>
              <div 
                className={`tutor-type-option ${userType === 'institution' ? 'selected' : ''}`}
                onClick={() => setUserType('institution')}
              >
                <div className="tutor-type-icon">🏛️</div>
                <h4>Register as Institution</h4>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
            {userType === 'tutor' ? (
              <>
                <div className="form-group">
                  <label>
                    <User size={20} />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>
                    <Mail size={20} />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>
                    <Phone size={20} />
                    Phone Number
                  </label>
                  <div className="phone-input-group">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="country-code-select"
                      required
                    >
                      {countryCodes.map(({ code, country }) => (
                        <option key={code} value={code}>
                          {code} ({country})
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      name="phoneNumber"
                      placeholder="1234567890"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>
                    <MapPin size={20} />
                    Country
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Country</option>
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>

                {formData.country && (
                  <div className="form-group">
                    <label>
                      <Building2 size={20} />
                      Institution
                    </label>
                    <select
                      name="institution"
                      value={formData.institution}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Institution</option>
                      {(institutions[formData.country] || institutions['Other']).map(inst => (
                        <option key={inst} value={inst}>{inst}</option>
                      ))}
                    </select>
                  </div>
                )}

                {showOtherInstitution && (
                  <div className="form-group">
                    <label>
                      <Building2 size={20} />
                      Institution Name
                    </label>
                    <input
                      type="text"
                      name="otherInstitution"
                      placeholder="Enter your institution name"
                      value={formData.otherInstitution}
                      onChange={handleChange}
                      required
                    />
                  </div>
                )}

                <div className="form-group">
                  <label>
                    <GraduationCap size={20} />
                    Level
                  </label>
                  <select
                    name="level"
                    value={formData.level}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Level</option>
                    {levels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>
              </>
            ) : (
              <>
                <div className="form-group">
                  <label>
                    <MapPin size={20} />
                    Country
                  </label>
                  <select
                    name="institutionCountry"
                    value={formData.institutionCountry}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Country</option>
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>

                {formData.institutionCountry && (
                  <div className="form-group">
                    <label>
                      <Building2 size={20} />
                      Institution Name
                    </label>
                    <select
                      name="institutionName"
                      value={formData.institutionName}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Institution</option>
                      {(institutions[formData.institutionCountry] || institutions['Other']).map(inst => (
                        <option key={inst} value={inst}>{inst}</option>
                      ))}
                    </select>
                  </div>
                )}

                {showOtherInstitution && (
                  <div className="form-group">
                    <label>
                      <Building2 size={20} />
                      Institution Name
                    </label>
                    <input
                      type="text"
                      name="otherInstitutionName"
                      placeholder="Enter institution name"
                      value={formData.otherInstitutionName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                )}

                <div className="form-group">
                  <label>
                    <User size={20} />
                    Institutional Head Name
                  </label>
                  <input
                    type="text"
                    name="headName"
                    placeholder="Dr. John Smith"
                    value={formData.headName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>
                    <Briefcase size={20} />
                    Position
                  </label>
                  <input
                    type="text"
                    name="headPosition"
                    placeholder="Dean / Principal / Director"
                    value={formData.headPosition}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>
                    <MapPin size={20} />
                    Institution Address
                  </label>
                  <textarea
                    name="institutionAddress"
                    placeholder="Enter complete address"
                    value={formData.institutionAddress}
                    onChange={handleChange}
                    rows="3"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>
                    <Mail size={20} />
                    Official Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="official@institution.edu"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </>
            )}

            <div className="form-group">
              <label>
                <Lock size={20} />
                Password
              </label>
              <div className="password-field">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
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

            <div className="form-group">
              <label>
                <Lock size={20} />
                Confirm Password
              </label>
              <div className="password-field">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <label className="terms-agreement">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />
              <span>
                I agree to the <Link to="#" className="terms-link">Terms of Service</Link> and{' '}
                <Link to="#" className="terms-link">Privacy Policy</Link>
              </span>
            </label>

            <button type="submit" className="btn btn-accent btn-large" disabled={loading || !agreed}>
              {loading ? (
                <>
                  <span className="spinner"></span>
                  Creating Account...
                </>
              ) : (
                'Create Your Free Account'
              )}
            </button>
          </form>

          <div className="auth-divider">
            <span>or sign up with</span>
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
              Already have an account?{' '}
              <Link to="/login" className="auth-link">Login here</Link>
            </p>
          </div>
          </div>
        </div>

        <div className="auth-benefits">
          <h2>🎉 1000 Free Credits Included!</h2>
          <ul>
            <li>
              <span className="benefit-icon">🎁</span>
              <div>
                <h4>1000 Free Credits (10 Generations)</h4>
                <p>Get 10 complete lecture materials for free (100 credits each), no credit card needed</p>
              </div>
            </li>
            <li>
              <span className="benefit-icon">⚡</span>
              <div>
                <h4>Save 10+ Hours Per Week</h4>
                <p>AI-powered generation creates materials in seconds, not hours</p>
              </div>
            </li>
            <li>
              <span className="benefit-icon">🎓</span>
              <div>
                <h4>All Academic Levels</h4>
                <p>From school to postgraduate - we support every education level</p>
              </div>
            </li>
            <li>
              <span className="benefit-icon">🔐</span>
              <div>
                <h4>100% Secure & Private</h4>
                <p>Your lessons and data are encrypted and completely private</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

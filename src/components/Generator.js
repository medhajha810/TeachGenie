import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Zap, Download, CheckCircle, AlertCircle, TrendingUp, LayoutDashboard, User, Settings, History, Users, Award, BookOpen, HelpCircle, Camera, Save, Mail, MapPin, Phone, Briefcase, MessageSquare, Shield, Bell, Eye, Lock, Trash2, ChevronRight, ExternalLink } from 'lucide-react';
import GenieLoader from './GenieLoader';
import '../styles/generator.css';
import '../styles/dashboard.css';

const Generator = ({ backButton }) => {
  const navigate = useNavigate();
  
  // Dashboard State
  const [activeSection, setActiveSection] = useState('generator');
  
  // Form Inputs
  const [topic, setTopic] = useState('');
  const [level, setLevel] = useState('undergraduate');
  const [duration, setDuration] = useState('30');
  const [contentType, setContentType] = useState('both');
  
  // Quiz Settings
  const [includeQuiz, setIncludeQuiz] = useState(false);
  const [quizDuration, setQuizDuration] = useState('10');
  const [quizMarks, setQuizMarks] = useState('20');
  
  // Generation State
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [generated, setGenerated] = useState(false);
  const [freeGenerations, setFreeGenerations] = useState(1000);
  const [totalUsed, setTotalUsed] = useState(0);
  const [disclaimerAcked, setDisclaimerAcked] = useState(false);
  
  // Profile State
  const [profileData, setProfileData] = useState({
    fullName: 'Teacher',
    email: 'teacher@example.com',
    phone: '',
    location: '',
    institution: '',
    subject: '',
    bio: '',
    profileImage: null
  });
  const [profileImagePreview, setProfileImagePreview] = useState(null);
  const [profileSaved, setProfileSaved] = useState(false);
  
  // Settings State
  const [settingsData, setSettingsData] = useState({
    emailNotifications: true,
    autoSave: true,
    pushNotifications: false,
    darkMode: false,
    language: 'English',
    visibility: 'public'
  });
  const [settingsSaved, setSettingsSaved] = useState(false);

  // Lesson State (persistent output)
  const [lessonState, setLessonState] = useState({
    lesson_plan: {},
    objectives: [],
    sections: [],
    key_takeaways: [],
    resources: [],
    quiz: null,
    ppt_path: '',
    pdf_path: ''
  });

  const canGenerate = freeGenerations > 0;

  // Simulate generation pipeline with unique messages
  const simulateGenerationPipeline = async () => {
    const steps = [
      { progress: 15, message: '✨ Summoning the Teaching Genie from the lamp...' },
      { progress: 30, message: '🔍 Genie is researching the most innovative teaching approaches for ' + (topic || 'your topic') + '...' },
      { progress: 45, message: '🧠 Crafting personalized learning pathways that inspire student engagement...' },
      { progress: 60, message: '📚 Compiling world-class content from curated academic sources...' },
      { progress: 75, message: '✨ Transforming raw content into visually stunning presentations...' },
    ];

    for (const step of steps) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setProgress(step.progress);
      setProgressMessage(step.message);
    }

    if (includeQuiz) {
      await new Promise(resolve => setTimeout(resolve, 800));
      setProgress(85);
      setProgressMessage('🎮 Designing interactive assessment that students will love...');
    }

    await new Promise(resolve => setTimeout(resolve, 800));
    setProgress(95);
    setProgressMessage('🚀 Finalizing your complete teaching suite...');

    await new Promise(resolve => setTimeout(resolve, 400));
    setProgress(100);
    setProgressMessage('✨ Magic complete! Your lesson is ready to revolutionize teaching...');
  };

  const handleGenerate = async (e) => {
    e.preventDefault();
    if (!topic.trim() || !canGenerate) return;

    setLoading(true);
    setProgress(0);
    setProgressMessage('🧞 Your AI Teaching Genie is waking up...');

    try {
      // Simulate the generation pipeline
      await simulateGenerationPipeline();

      // Generate mock lesson data with unique, engaging content
      const mockLessonData = {
        lesson_plan: {
          title: topic,
          level: level,
          duration: `${duration} minutes`,
        },
        objectives: [
          `Master the foundational principles of ${topic} and understand why it matters in today's world`,
          `Apply ${topic} to solve real-world challenges and create meaningful impact`,
          `Develop critical thinking skills through deep analysis of ${topic} concepts`,
          `Design innovative solutions using ${topic} principles and creative problem-solving`,
          `Build confidence and expertise that translates to professional success`
        ],
        sections: [
          {
            title: 'Why ' + topic + ' Matters Today',
            content: `In our rapidly evolving world, ${topic} has become essential for success. This introduction explores how ${topic} shapes industries, influences decisions, and impacts millions of lives. You'll discover why this topic is so compelling and how it connects to real-world situations you encounter daily.`
          },
          {
            title: 'Core Concepts & Foundations',
            content: `Understanding the fundamentals of ${topic} opens doors to deeper knowledge. This section breaks down complex ideas into clear, digestible concepts. Through interactive examples and visual explanations, you'll build a solid foundation that makes everything else click into place.`
          },
          {
            title: 'Real-World Success Stories',
            content: `${topic} is transforming industries and changing lives every day. Discover how leading organizations leverage ${topic} to achieve remarkable results. From startup innovations to enterprise solutions, these case studies demonstrate the practical power and unlimited potential of ${topic} in action.`
          },
          {
            title: 'Master-Level Strategies & Advanced Techniques',
            content: `Take your expertise to the next level. This advanced section explores cutting-edge strategies, emerging trends, and game-changing techniques in ${topic}. Challenge yourself with complex scenarios and develop the sophisticated understanding that separates true experts from the rest.`
          },
          {
            title: 'Your Path to Excellence',
            content: `Success with ${topic} requires continuous growth and adaptation. Learn the proven strategies that top performers use to stay ahead. This section provides actionable insights and a personalized roadmap for turning your ${topic} knowledge into competitive advantage.`
          }
        ],
        key_takeaways: [
          `${topic} is no longer optional—it's essential for staying competitive in your field`,
          `The combination of theoretical understanding and practical application creates real mastery`,
          `Innovation in ${topic} happens when you think creatively and challenge conventional wisdom`,
          `Real-world success comes from adapting ${topic} principles to your unique context and challenges`,
          `Continuous learning and staying curious about ${topic} is the secret to long-term excellence`,
          `Collaboration and knowledge-sharing accelerate your journey to expertise in ${topic}`,
          `The future belongs to those who master ${topic} and can explain it to others`
        ],
        resources: [
          { title: '🎓 Khan Academy - ' + topic + ' Mastery', url: 'https://www.khanacademy.org' },
          { title: '🎬 TED Talks - Innovation in ' + topic, url: 'https://www.ted.com' },
          { title: '📚 Coursera - Professional ' + topic + ' Specializations', url: 'https://www.coursera.org' },
          { title: '📖 Research Papers & Articles on ' + topic, url: 'https://www.wikipedia.org' },
          { title: '💼 Industry Expert Courses on ' + topic, url: 'https://www.udemy.com' },
          { title: '🔬 Advanced Research Databases', url: 'https://scholar.google.com' }
        ],
        quiz: includeQuiz ? {
          duration: quizDuration,
          marks: quizMarks,
          questions: [
            {
              scenario: `You're leading a team of professionals tasked with solving a critical challenge using ${topic}. Your approach will determine success or failure.`,
              question: `What's your first strategic move?`,
              options: {
                A: 'Jump into execution using standard best practices',
                B: 'Conduct thorough research and analysis of your specific context and requirements',
                C: 'Delegate to team members with ${topic} experience',
                D: 'Both A and C'
              },
              correct_option: 'B',
              explanation: `Strategic success with ${topic} begins with deep understanding of your unique context. Research and analysis ensure your approach is tailored for maximum impact.`
            },
            {
              scenario: `Your organization wants to implement cutting-edge ${topic} solutions to gain competitive advantage. You're designing the strategy.`,
              question: `What factor is most critical for transformational success?`,
              options: {
                A: 'Adopting the newest, most advanced technology available',
                B: 'Understanding your organization\'s unique needs and aligning ${topic} solutions accordingly',
                C: 'Copying successful implementations from competitor organizations',
                D: 'Following industry trends without question'
              },
              correct_option: 'B',
              explanation: `True competitive advantage comes from customizing ${topic} solutions to your organization's unique strengths, challenges, and opportunities.`
            },
            {
              scenario: `During implementation of ${topic}, your team discovers unexpected results that challenge your assumptions and initial strategy.`,
              question: `How do you respond?`,
              options: {
                A: 'Dismiss the anomaly and continue with the original plan',
                B: 'See it as a failure and abandon the project',
                C: 'Investigate systematically, document findings, and adjust your approach based on new insights',
                D: 'Get external opinions without conducting your own analysis'
              },
              correct_option: 'C',
              explanation: 'Unexpected results are goldmines of learning. The best leaders investigate thoroughly, adapt their strategies, and use these insights to achieve breakthrough success with ${topic}.'
            },
            {
              scenario: `You need to explain the value and impact of ${topic} to stakeholders who may be skeptical or unfamiliar with the concept.`,
              question: `What's your most effective approach?`,
              options: {
                A: 'Use technical jargon to establish credibility',
                B: 'Tell compelling stories about real-world impact and connect ${topic} to their specific pain points and goals',
                C: 'Focus on the technology without discussing outcomes',
                D: 'Overwhelm them with statistics and data'
              },
              correct_option: 'B',
              explanation: `Powerful communication about ${topic} bridges the gap between technical complexity and human impact. Stories and relevant examples create understanding and buy-in.`
            }
          ]
        } : null,
        ppt_path: `${topic.replace(/\s+/g, '_')}_presentation.pptx`,
        pdf_path: `${topic.replace(/\s+/g, '_')}_lesson_plan.pdf`
      };

      setLessonState(mockLessonData);
      setLoading(false);
      setGenerated(true);
      setFreeGenerations(freeGenerations - 100);
      setTotalUsed(totalUsed + 1);
      setDisclaimerAcked(false);
    } catch (error) {
      setLoading(false);
      alert('Error generating materials: ' + error.message);
    }
  };

  return (
    <>
      {loading && <GenieLoader message={progressMessage} />}
      
      <div className={`dashboard-container ${loading ? 'hidden' : ''}`}>
        {/* Sidebar */}
        <aside className="dashboard-sidebar">
          <div className="sidebar-header">
            <div className="tutor-profile-section">
              <div className="tutor-avatar">TG</div>
              <div className="tutor-info">
                <div className="tutor-name">Teacher</div>
                <div className="tutor-role">Free Plan</div>
              </div>
            </div>
          </div>

          <nav className="sidebar-nav">
            <div className="nav-section">
              <div className="nav-section-title">Main</div>
              <div 
                className={`nav-item ${activeSection === 'generator' ? 'active' : ''}`}
                onClick={() => setActiveSection('generator')}
              >
                <div className="nav-item-icon"><Sparkles size={20} /></div>
                <span>Generate Lesson</span>
              </div>
              <div 
                className={`nav-item ${activeSection === 'history' ? 'active' : ''}`}
                onClick={() => setActiveSection('history')}
              >
                <div className="nav-item-icon"><History size={20} /></div>
                <span>Previous Generations</span>
                <span className="nav-item-badge">{totalUsed}</span>
              </div>
            </div>

            <div className="nav-section">
              <div className="nav-section-title">Account</div>
              <div 
                className={`nav-item ${activeSection === 'profile' ? 'active' : ''}`}
                onClick={() => setActiveSection('profile')}
              >
                <div className="nav-item-icon"><User size={20} /></div>
                <span>Profile</span>
              </div>
              <div 
                className={`nav-item ${activeSection === 'settings' ? 'active' : ''}`}
                onClick={() => setActiveSection('settings')}
              >
                <div className="nav-item-icon"><Settings size={20} /></div>
                <span>Settings</span>
              </div>
            </div>

            <div className="nav-section">
              <div className="nav-section-title">Support</div>
              <div 
                className={`nav-item ${activeSection === 'help' ? 'active' : ''}`}
                onClick={() => setActiveSection('help')}
              >
                <div className="nav-item-icon"><HelpCircle size={20} /></div>
                <span>Help & Support</span>
              </div>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="dashboard-main">
          {/* Generator Section */}
          {activeSection === 'generator' && (

            <div className="dashboard-grid">
              <div className="generator-card"
                style={{ gridColumn: generated ? '1' : '1 / -1' }}
              >
                {freeGenerations === 0 && !generated && (
                  <div className="upgrade-prompt" style={{ marginBottom: '24px' }}>
                    <div className="upgrade-icon">🎉</div>
                    <h3>Great Job! You've Used Your Free Trial</h3>
                    <p>You've generated 10 amazing lessons! Ready to create more?</p>
                    <button className="btn btn-accent">
                      <Sparkles size={20} /> Upgrade to Premium
                    </button>
                  </div>
                )}

                {!generated ? (
                  <>
                    {backButton && <div style={{ marginBottom: '16px' }}>{backButton}</div>}
                    
                    <div className="generator-card-header">
                      <div className="generator-card-icon">🧞</div>
                      <h2 className="generator-card-title">Create Your Lesson</h2>
                    </div>

                    {/* Stats Cards */}
                    <div className="stats-grid" style={{ marginBottom: '28px' }}>
                      <div className="stat-card">
                        <div className="stat-header">
                          <div className="stat-icon accent">✨</div>
                          <div className="stat-trend positive">
                            <TrendingUp size={14} />
                            Active
                          </div>
                        </div>
                        <div className="stat-value">{freeGenerations}</div>
                        <div className="stat-label">Free Generations Left</div>
                      </div>

                      <div className="stat-card">
                        <div className="stat-header">
                          <div className="stat-icon primary">📚</div>
                        </div>
                        <div className="stat-value">{totalUsed}</div>
                        <div className="stat-label">Total Lessons Created</div>
                      </div>

                      <div className="stat-card">
                        <div className="stat-header">
                          <div className="stat-icon success">🎯</div>
                        </div>
                        <div className="stat-value">100%</div>
                        <div className="stat-label">Success Rate</div>
                      </div>

                      <div className="stat-card">
                        <div className="stat-header">
                          <div className="stat-icon info">⚡</div>
                        </div>
                        <div className="stat-value">~60s</div>
                        <div className="stat-label">Avg. Generation Time</div>
                      </div>
                    </div>

                    <form className="generator-form" onSubmit={handleGenerate}>
                {/* Topic Input - Featured */}
                <div className="form-section featured-section">
                  <div className="section-icon">📚</div>
                  <div className="form-group">
                    <label htmlFor="topic">What topic do you want to teach?</label>
                    <input
                      type="text"
                      id="topic"
                      className="topic-input"
                      placeholder="e.g., Quantum Physics, Renaissance Art, Data Science..."
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      required
                    />
                    <div className="input-hint">💡 Be specific for better results</div>
                  </div>
                </div>

                {/* Form Grid - 4 Options */}
                <div className="form-grid">
                  {/* Level */}
                  <div className="form-section">
                    <div className="section-icon">🎓</div>
                    <div className="form-group">
                      <label htmlFor="level">Student Level</label>
                      <select
                        id="level"
                        value={level}
                        onChange={(e) => setLevel(e.target.value)}
                      >
                        <option value="school">🏫 School</option>
                        <option value="undergraduate">🎓 Undergraduate</option>
                        <option value="postgraduate">📚 Postgraduate</option>
                        <option value="professional">💼 Professional</option>
                      </select>
                      <div className="option-description">
                        {level === 'school' && 'Beginner-friendly content'}
                        {level === 'undergraduate' && 'Intermediate complexity'}
                        {level === 'postgraduate' && 'Advanced topics'}
                        {level === 'professional' && 'Industry-ready insights'}
                      </div>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="form-section">
                    <div className="section-icon">⏱️</div>
                    <div className="form-group">
                      <label htmlFor="duration">Lesson Duration</label>
                      <select
                        id="duration"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                      >
                        <option value="20">⚡ 20 min</option>
                        <option value="30">📝 30 min</option>
                        <option value="60">📖 60 min</option>
                        <option value="90">🎯 90 min</option>
                        <option value="120">🏆 120 min</option>
                      </select>
                      <div className="option-description">
                        {duration === '20' && 'Quick overview'}
                        {duration === '30' && 'Standard class'}
                        {duration === '60' && 'Deep dive'}
                        {duration === '90' && 'Comprehensive'}
                        {duration === '120' && 'Extended course'}
                      </div>
                    </div>
                  </div>

                  {/* Content Type */}
                  <div className="form-section">
                    <div className="section-icon">📄</div>
                    <div className="form-group">
                      <label htmlFor="contentType">Format</label>
                      <select
                        id="contentType"
                        value={contentType}
                        onChange={(e) => setContentType(e.target.value)}
                      >
                        <option value="slides">🎨 Slides Only</option>
                        <option value="notes">📝 Notes Only</option>
                        <option value="both">🎯 Slides + Notes</option>
                        <option value="interactive">🎮 Interactive</option>
                      </select>
                      <div className="option-description">
                        {contentType === 'slides' && 'Visual presentations'}
                        {contentType === 'notes' && 'Detailed notes'}
                        {contentType === 'both' && 'Complete package'}
                        {contentType === 'interactive' && 'With engagement'}
                      </div>
                    </div>
                  </div>

                  {/* Quiz Toggle */}
                  <div className="form-section">
                    <div className="section-icon">🎮</div>
                    <div className="form-group">
                      <label className="quiz-checkbox-label">
                        <input
                          type="checkbox"
                          checked={includeQuiz}
                          onChange={(e) => setIncludeQuiz(e.target.checked)}
                          className="quiz-checkbox"
                        />
                        <span className="checkbox-text">
                          {includeQuiz ? '✓ Quiz Included' : 'Add Quiz'}
                        </span>
                      </label>
                      <div className="option-description">
                        {includeQuiz ? 'Assessment enabled' : 'Skip assessment'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quiz Settings - When Enabled */}
                {includeQuiz && (
                  <div className="quiz-settings animated-section">
                    <div className="quiz-settings-header">
                      <div className="quiz-icon">⚙️</div>
                      <h3>Customize Your Quiz</h3>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="quizDuration">Quiz Duration</label>
                        <input
                          type="number"
                          id="quizDuration"
                          min="5"
                          max="20"
                          step="5"
                          value={quizDuration}
                          onChange={(e) => setQuizDuration(e.target.value)}
                        />
                        <div className="input-suffix">minutes</div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="quizMarks">Total Marks</label>
                        <input
                          type="number"
                          id="quizMarks"
                          min="10"
                          max="50"
                          step="5"
                          value={quizMarks}
                          onChange={(e) => setQuizMarks(e.target.value)}
                        />
                        <div className="input-suffix">points</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Cost & Submit */}
                <div className="form-footer">
                  <div className="token-cost-info">
                    <div className="cost-icon">✨</div>
                    <div className="cost-text">
                      {freeGenerations > 0 ? (
                        <>
                          <div className="cost-label">Free Credits Left</div>
                          <div className="cost-value">{freeGenerations} of 1000</div>
                        </>
                      ) : (
                        <>
                          <div className="cost-label">Upgrade Required</div>
                          <div className="cost-value">No free generations left</div>
                        </>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className={`btn btn-generate ${!canGenerate ? 'disabled' : ''} ${loading ? 'loading' : ''}`}
                    disabled={loading || !canGenerate || !topic.trim()}
                  >
                    {loading ? (
                      <>
                        <span className="btn-spinner"></span>
                        Generating...
                      </>
                    ) : (
                      <>
                        <span className="btn-icon">🚀</span>
                        Generate Lesson
                      </>
                    )}
                  </button>
                </div>
              </form>
                  </>
                ) : null}

          {/* Lesson Outputs */}
          {generated && !loading && (
            <div className="lesson-outputs">
              
              {/* Lesson Plan Header */}
              <div className="lesson-header">
                <h2>📑 Lesson Plan</h2>
                <div className="lesson-meta">
                  <span>📌 <strong>{lessonState.lesson_plan.title}</strong></span>
                  <span>🎓 {lessonState.lesson_plan.level}</span>
                  <span>⏱️ {lessonState.lesson_plan.duration}</span>
                </div>
              </div>

              {/* Learning Objectives */}
              <div className="lesson-section">
                <h3>🎯 Learning Objectives</h3>
                <ul className="objectives-list">
                  {lessonState.objectives.map((obj, idx) => (
                    <li key={idx}>
                      <CheckCircle size={20} className="check-icon" />
                      {obj}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Lesson Sections */}
              <div className="lesson-sections">
                <h3>📚 Lesson Content</h3>
                {lessonState.sections.map((section, idx) => (
                  <div key={idx} className="section-card">
                    <h4>📌 {section.title}</h4>
                    <p>{section.content}</p>
                  </div>
                ))}
              </div>

              {/* Key Takeaways */}
              <div className="lesson-section">
                <h3>🔑 Key Takeaways</h3>
                <ul className="takeaways-list">
                  {lessonState.key_takeaways.map((takeaway, idx) => (
                    <li key={idx}>
                      <TrendingUp size={18} className="trend-icon" />
                      {takeaway}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Web Resources */}
              <div className="lesson-section">
                <h3>🌐 Web Learning Resources</h3>
                <ul className="resources-list">
                  {lessonState.resources.map((resource, idx) => (
                    <li key={idx}>
                      <a href={resource.url} target="_blank" rel="noopener noreferrer">
                        🔗 {resource.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quiz Section */}
              {includeQuiz && lessonState.quiz && (
                <div className="lesson-section">
                  <h3>🎮 Gamified Quiz</h3>
                  <div className="quiz-info">
                    <span>⏱️ Duration: {lessonState.quiz.duration} minutes</span>
                    <span>🏆 Total Marks: {lessonState.quiz.marks}</span>
                  </div>

                  <div className="quiz-questions">
                    {lessonState.quiz.questions.map((question, qIdx) => (
                      <div key={qIdx} className="quiz-card">
                        <h4>Scenario {qIdx + 1}</h4>
                        <p className="scenario-text">{question.scenario}</p>
                        <p className="question-text"><strong>❓ {question.question}</strong></p>
                        
                        <div className="options">
                          {Object.entries(question.options).map(([key, value]) => (
                            <div key={key} className="option">
                              <strong>{key}.</strong> {value}
                            </div>
                          ))}
                        </div>

                        <div className="answer-info">
                          <p className="correct-answer">✅ Correct Answer: <strong>{question.correct_option}</strong></p>
                          <p className="explanation">💡 Explanation: {question.explanation}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Downloads */}
              <div className="lesson-section downloads-section">
                <h3>📥 Download Resources</h3>
                <div className="download-buttons">
                  <button 
                    className={`btn btn-accent ${!disclaimerAcked ? 'disabled' : ''}`}
                    disabled={!disclaimerAcked}
                  >
                    <Download size={20} /> 📊 Download PPT
                  </button>
                  <button 
                    className={`btn btn-accent ${!disclaimerAcked ? 'disabled' : ''}`}
                    disabled={!disclaimerAcked}
                  >
                    <Download size={20} /> 📄 Download PDF
                  </button>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="disclaimer-section">
                <AlertCircle size={24} className="alert-icon" />
                <div className="disclaimer-content">
                  <p>
                    <strong>⚠️ Important Disclaimer:</strong> These AI-generated materials are <strong>supplemental only</strong>. 
                    Faculty and educators are advised to apply their expertise, creativity, and contextual judgment 
                    before using these materials in classroom settings.
                  </p>
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={disclaimerAcked}
                      onChange={(e) => setDisclaimerAcked(e.target.checked)}
                    />
                    I acknowledge and understand this disclaimer
                  </label>
                </div>
              </div>

              {/* Explore More Button */}
              <button
                className="btn btn-outline explore-btn"
                onClick={() => {
                  setGenerated(false);
                  setTopic('');
                  setProgress(0);
                  setProgressMessage('');
                  setDisclaimerAcked(false);
                }}
              >
                🔍 Generate Another Lesson
              </button>
            </div>
          )}
              </div>

              {/* Recent Generations Sidebar */}
              {generated && (
                <div className="recent-card">
                  <div className="recent-card-header">
                    <h3 className="recent-card-title">Recent</h3>
                    <span className="view-all-link" onClick={() => setActiveSection('history')}>View All</span>
                  </div>
                  <div className="recent-list">
                    {totalUsed > 0 ? (
                      <>
                        <div className="recent-item">
                          <div className="recent-item-icon">📚</div>
                          <div className="recent-item-content">
                            <div className="recent-item-title">{lessonState.lesson_plan.title || 'Recent Lesson'}</div>
                            <div className="recent-item-meta">Just now • {lessonState.lesson_plan.duration}</div>
                          </div>
                        </div>
                        <div className="recent-item">
                          <div className="recent-item-icon">🎓</div>
                          <div className="recent-item-content">
                            <div className="recent-item-title">Introduction to AI</div>
                            <div className="recent-item-meta">2 hours ago • 45 min</div>
                          </div>
                        </div>
                        <div className="recent-item">
                          <div className="recent-item-icon">💡</div>
                          <div className="recent-item-content">
                            <div className="recent-item-title">Data Structures</div>
                            <div className="recent-item-meta">Yesterday • 60 min</div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="empty-state">
                        <div className="empty-state-icon">📭</div>
                        <div className="empty-state-text">No recent generations yet</div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Previous Generations Section */}
          {activeSection === 'history' && (
            <div className="recent-card">
              <div className="recent-card-header">
                <h3 className="recent-card-title">All Generations ({totalUsed})</h3>
              </div>
              <div className="recent-list">
                {totalUsed > 0 ? (
                  Array.from({ length: Math.min(totalUsed, 10) }, (_, i) => (
                    <div key={i} className="recent-item">
                      <div className="recent-item-icon">📚</div>
                      <div className="recent-item-content">
                        <div className="recent-item-title">Sample Lesson {i + 1}</div>
                        <div className="recent-item-meta">{i === 0 ? 'Just now' : `${i + 1} hours ago`} • 30-60 min</div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="empty-state">
                    <div className="empty-state-icon">📭</div>
                    <div className="empty-state-text">You haven't generated any lessons yet. Start creating!</div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Profile Section */}
          {activeSection === 'profile' && (
            <div className="generator-card">
              <div className="generator-card-header">
                <div className="generator-card-icon">👤</div>
                <h2 className="generator-card-title">Edit Profile</h2>
              </div>
              
              {profileSaved && (
                <div style={{
                  margin: '20px 0',
                  padding: '16px 20px',
                  background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(22, 163, 74, 0.05))',
                  border: '1.5px solid rgba(34, 197, 94, 0.3)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <CheckCircle size={20} style={{ color: '#22c55e' }} />
                  <span style={{ fontSize: '14px', fontWeight: '600', color: '#15803d' }}>
                    Profile updated successfully!
                  </span>
                </div>
              )}

              <div style={{ padding: '24px 0' }}>
                {/* Profile Picture Section */}
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                  <div style={{ position: 'relative', display: 'inline-block' }}>
                    <div style={{
                      width: '140px',
                      height: '140px',
                      borderRadius: '50%',
                      background: profileImagePreview 
                        ? `url(${profileImagePreview}) center/cover`
                        : 'linear-gradient(135deg, var(--primary), var(--accent))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '48px',
                      fontWeight: '700',
                      color: 'white',
                      border: '4px solid var(--bg-white)',
                      boxShadow: 'var(--shadow-lg)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      {!profileImagePreview && profileData.fullName.split(' ').map(n => n[0]).join('').toUpperCase()}
                    </div>
                    <label style={{
                      position: 'absolute',
                      bottom: '8px',
                      right: '8px',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, var(--accent), #f59e0b)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      border: '3px solid var(--bg-white)',
                      boxShadow: 'var(--shadow)',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      <Camera size={18} color="white" />
                      <input 
                        type="file" 
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file) {
                            setProfileData({...profileData, profileImage: file});
                            setProfileImagePreview(URL.createObjectURL(file));
                          }
                        }}
                      />
                    </label>
                  </div>
                  <h3 style={{ 
                    fontSize: '24px', 
                    fontWeight: '700', 
                    color: 'var(--text-dark)', 
                    marginTop: '20px',
                    marginBottom: '4px'
                  }}>
                    {profileData.fullName}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-light)', fontWeight: '500' }}>
                    {profileData.email}
                  </p>
                </div>

                {/* Profile Form */}
                <div className="profile-form">
                  <div className="profile-form-grid">
                    {/* Full Name */}
                    <div className="profile-form-group">
                      <label className="profile-label">
                        <User size={16} />
                        <span>Full Name *</span>
                      </label>
                      <input
                        type="text"
                        className="profile-input"
                        value={profileData.fullName}
                        onChange={(e) => setProfileData({...profileData, fullName: e.target.value})}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="profile-form-group">
                      <label className="profile-label">
                        <Mail size={16} />
                        <span>Email Address *</span>
                      </label>
                      <input
                        type="email"
                        className="profile-input"
                        value={profileData.email}
                        onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div className="profile-form-group">
                      <label className="profile-label">
                        <Phone size={16} />
                        <span>Phone Number</span>
                      </label>
                      <input
                        type="tel"
                        className="profile-input"
                        value={profileData.phone}
                        onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    {/* Location */}
                    <div className="profile-form-group">
                      <label className="profile-label">
                        <MapPin size={16} />
                        <span>Location</span>
                      </label>
                      <input
                        type="text"
                        className="profile-input"
                        value={profileData.location}
                        onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                        placeholder="City, Country"
                      />
                    </div>

                    {/* Institution */}
                    <div className="profile-form-group">
                      <label className="profile-label">
                        <BookOpen size={16} />
                        <span>Institution/School</span>
                      </label>
                      <input
                        type="text"
                        className="profile-input"
                        value={profileData.institution}
                        onChange={(e) => setProfileData({...profileData, institution: e.target.value})}
                        placeholder="Your institution name"
                      />
                    </div>

                    {/* Subject/Specialty */}
                    <div className="profile-form-group">
                      <label className="profile-label">
                        <Briefcase size={16} />
                        <span>Subject/Specialty</span>
                      </label>
                      <input
                        type="text"
                        className="profile-input"
                        value={profileData.subject}
                        onChange={(e) => setProfileData({...profileData, subject: e.target.value})}
                        placeholder="e.g., Mathematics, Science"
                      />
                    </div>
                  </div>

                  {/* Bio - Full Width */}
                  <div className="profile-form-group" style={{ marginTop: '20px' }}>
                    <label className="profile-label">
                      <User size={16} />
                      <span>Bio</span>
                    </label>
                    <textarea
                      className="profile-textarea"
                      value={profileData.bio}
                      onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                      placeholder="Tell us about yourself, your teaching experience, and interests..."
                      rows="4"
                    />
                  </div>

                  {/* Save Button */}
                  <button
                    className="profile-save-btn"
                    onClick={() => {
                      // Here you would typically send data to backend
                      console.log('Saving profile:', profileData);
                      setProfileSaved(true);
                      setTimeout(() => setProfileSaved(false), 3000);
                    }}
                  >
                    <Save size={20} />
                    <span>Save Profile</span>
                  </button>

                  {/* Stats Section */}
                  <div className="stats-grid" style={{ marginTop: '40px' }}>
                    <div className="stat-card">
                      <div className="stat-value">{freeGenerations}</div>
                      <div className="stat-label">Free Credits</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-value">{totalUsed}</div>
                      <div className="stat-label">Lessons Generated</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-value">Free</div>
                      <div className="stat-label">Current Plan</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Settings Section */}
          {activeSection === 'settings' && (
            <div className="generator-card">
              <div className="generator-card-header">
                <div className="generator-card-icon">⚙️</div>
                <h2 className="generator-card-title">Settings</h2>
              </div>
              
              {settingsSaved && (
                <div style={{
                  margin: '20px 0',
                  padding: '16px 20px',
                  background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(22, 163, 74, 0.05))',
                  border: '1.5px solid rgba(34, 197, 94, 0.3)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <CheckCircle size={20} style={{ color: '#22c55e' }} />
                  <span style={{ fontSize: '14px', fontWeight: '600', color: '#15803d' }}>
                    Settings saved successfully!
                  </span>
                </div>
              )}

              <div className="settings-container">
                {/* Notifications Section */}
                <div className="settings-section">
                  <div className="settings-section-header">
                    <Bell size={20} />
                    <h3>Notifications</h3>
                  </div>
                  <div className="settings-options">
                    <div className="settings-option">
                      <div className="settings-option-info">
                        <Mail size={18} />
                        <div>
                          <h4>Email Notifications</h4>
                          <p>Receive lesson updates and tips via email</p>
                        </div>
                      </div>
                      <label className="settings-toggle">
                        <input 
                          type="checkbox" 
                          checked={settingsData.emailNotifications}
                          onChange={(e) => setSettingsData({...settingsData, emailNotifications: e.target.checked})}
                        />
                        <span className="toggle-slider"></span>
                      </label>
                    </div>
                    <div className="settings-option">
                      <div className="settings-option-info">
                        <Bell size={18} />
                        <div>
                          <h4>Push Notifications</h4>
                          <p>Get instant alerts about new features</p>
                        </div>
                      </div>
                      <label className="settings-toggle">
                        <input 
                          type="checkbox" 
                          checked={settingsData.pushNotifications}
                          onChange={(e) => setSettingsData({...settingsData, pushNotifications: e.target.checked})}
                        />
                        <span className="toggle-slider"></span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Preferences Section */}
                <div className="settings-section">
                  <div className="settings-section-header">
                    <Settings size={20} />
                    <h3>Preferences</h3>
                  </div>
                  <div className="settings-options">
                    <div className="settings-option">
                      <div className="settings-option-info">
                        <Save size={18} />
                        <div>
                          <h4>Auto-save Generations</h4>
                          <p>Automatically save all generated lessons</p>
                        </div>
                      </div>
                      <label className="settings-toggle">
                        <input 
                          type="checkbox" 
                          checked={settingsData.autoSave}
                          onChange={(e) => setSettingsData({...settingsData, autoSave: e.target.checked})}
                        />
                        <span className="toggle-slider"></span>
                      </label>
                    </div>
                    <div className="settings-option">
                      <div className="settings-option-info">
                        <BookOpen size={18} />
                        <div>
                          <h4>Language</h4>
                          <p>Choose your preferred language</p>
                        </div>
                      </div>
                      <select 
                        className="settings-select"
                        value={settingsData.language}
                        onChange={(e) => setSettingsData({...settingsData, language: e.target.value})}
                      >
                        <option>English</option>
                        <option>Spanish</option>
                        <option>French</option>
                        <option>German</option>
                        <option>Chinese</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Privacy Section */}
                <div className="settings-section">
                  <div className="settings-section-header">
                    <Shield size={20} />
                    <h3>Privacy & Security</h3>
                  </div>
                  <div className="settings-options">
                    <div className="settings-option">
                      <div className="settings-option-info">
                        <Eye size={18} />
                        <div>
                          <h4>Profile Visibility</h4>
                          <p>Control who can see your profile</p>
                        </div>
                      </div>
                      <select 
                        className="settings-select"
                        value={settingsData.visibility}
                        onChange={(e) => setSettingsData({...settingsData, visibility: e.target.value})}
                      >
                        <option value="public">Public</option>
                        <option value="private">Private</option>
                        <option value="friends">Friends Only</option>
                      </select>
                    </div>
                    <div className="settings-option">
                      <div className="settings-option-info">
                        <Lock size={18} />
                        <div>
                          <h4>Change Password</h4>
                          <p>Update your account password</p>
                        </div>
                      </div>
                      <button className="settings-action-btn">Change</button>
                    </div>
                  </div>
                </div>

                {/* Account Actions */}
                <div className="settings-section">
                  <div className="settings-section-header">
                    <User size={20} />
                    <h3>Account Management</h3>
                  </div>
                  <div className="settings-options">
                    <div className="settings-option danger">
                      <div className="settings-option-info">
                        <Trash2 size={18} />
                        <div>
                          <h4>Delete Account</h4>
                          <p>Permanently delete your account and all data</p>
                        </div>
                      </div>
                      <button className="settings-action-btn danger">Delete</button>
                    </div>
                  </div>
                </div>

                {/* Save Button */}
                <button
                  className="profile-save-btn"
                  onClick={() => {
                    console.log('Saving settings:', settingsData);
                    setSettingsSaved(true);
                    setTimeout(() => setSettingsSaved(false), 3000);
                  }}
                >
                  <Save size={20} />
                  <span>Save Settings</span>
                </button>
              </div>
            </div>
          )}

          {/* Help Section */}
          {activeSection === 'help' && (
            <div className="generator-card">
              <div className="generator-card-header">
                <div className="generator-card-icon">❓</div>
                <h2 className="generator-card-title">Help & Support</h2>
              </div>
              <div style={{ padding: '24px 0' }}>
                {/* FAQs Section */}
                <div style={{ marginBottom: '40px' }}>
                  <h4 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '24px' }}>Frequently Asked Questions</h4>
                  <div className="faq-container">
                    <div className="faq-item">
                      <div className="faq-question">
                        <h5>How do I generate my first lesson?</h5>
                        <ChevronRight size={20} />
                      </div>
                      <div className="faq-answer">
                        <p>Simply navigate to the Generate Lesson section, enter your topic, select your preferences (student level, duration, format), and click the Generate button. Your lesson will be ready in seconds!</p>
                      </div>
                    </div>
                    <div className="faq-item">
                      <div className="faq-question">
                        <h5>How many free generations do I get?</h5>
                        <ChevronRight size={20} />
                      </div>
                      <div className="faq-answer">
                        <p>You start with 1000 free credits, which gives you 10 free lesson generations (100 credits per generation). Each generation creates a complete lesson plan with objectives, content, activities, and optional quizzes.</p>
                      </div>
                    </div>
                    <div className="faq-item">
                      <div className="faq-question">
                        <h5>Can I customize the generated lessons?</h5>
                        <ChevronRight size={20} />
                      </div>
                      <div className="faq-answer">
                        <p>Yes! You can choose student level (K-12, Undergraduate, Graduate, Professional), lesson duration, content format (Presentation, Document, Both), and optionally include quizzes with custom settings.</p>
                      </div>
                    </div>
                    <div className="faq-item">
                      <div className="faq-question">
                        <h5>How do I download my lessons?</h5>
                        <ChevronRight size={20} />
                      </div>
                      <div className="faq-answer">
                        <p>After generating a lesson, you'll see download buttons for PowerPoint presentations and PDF documents at the bottom of the generated content. Click to download in your preferred format.</p>
                      </div>
                    </div>
                    <div className="faq-item">
                      <div className="faq-question">
                        <h5>Can I access my previous generations?</h5>
                        <ChevronRight size={20} />
                      </div>
                      <div className="faq-answer">
                        <p>Yes! Navigate to "Previous Generations" from the sidebar to view your complete generation history with timestamps and topics.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div>
                  <h4 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '20px' }}>Need More Help?</h4>
                  <div className="help-actions-grid">
                    <div className="help-action-card" onClick={() => navigate('/learn-more')}>
                      <div className="help-action-icon">
                        <BookOpen size={28} />
                      </div>
                      <h3>Documentation</h3>
                      <p>Browse comprehensive guides and tutorials</p>
                      <div className="help-action-link">
                        <span>Learn More</span>
                        <ExternalLink size={16} />
                      </div>
                    </div>
                    <div className="help-action-card" onClick={() => setActiveSection('contact')}>
                      <div className="help-action-icon">
                        <MessageSquare size={28} />
                      </div>
                      <h3>Contact Support</h3>
                      <p>Get help directly from our support team</p>
                      <div className="help-action-link">
                        <span>Contact Us</span>
                        <ChevronRight size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Contact Section */}
          {activeSection === 'contact' && (
            <div className="generator-card">
              <div className="generator-card-header">
                <div className="generator-card-icon">💬</div>
                <h2 className="generator-card-title">Contact Support</h2>
              </div>
              <div className="contact-container">
                <div className="contact-form-section">
                  <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '24px' }}>Send us a message</h3>
                  <div className="profile-form">
                    <div className="profile-form-group">
                      <label className="profile-label">
                        <User size={16} />
                        <span>Your Name *</span>
                      </label>
                      <input type="text" className="profile-input" placeholder="Enter your name" />
                    </div>
                    <div className="profile-form-group">
                      <label className="profile-label">
                        <Mail size={16} />
                        <span>Email Address *</span>
                      </label>
                      <input type="email" className="profile-input" placeholder="your.email@example.com" />
                    </div>
                    <div className="profile-form-group">
                      <label className="profile-label">
                        <MessageSquare size={16} />
                        <span>Subject *</span>
                      </label>
                      <input type="text" className="profile-input" placeholder="What's this about?" />
                    </div>
                    <div className="profile-form-group">
                      <label className="profile-label">
                        <MessageSquare size={16} />
                        <span>Message *</span>
                      </label>
                      <textarea className="profile-textarea" rows="6" placeholder="Tell us how we can help you..."></textarea>
                    </div>
                    <button className="profile-save-btn">
                      <Mail size={20} />
                      <span>Send Message</span>
                    </button>
                  </div>
                </div>
                <div className="contact-info-section">
                  <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '24px' }}>Get in touch</h3>
                  <div className="contact-info-cards">
                    <div className="contact-info-card">
                      <div className="contact-info-icon">
                        <Mail size={24} />
                      </div>
                      <h4>Email Us</h4>
                      <p>info@teachgenie.ai</p>
                      <a href="mailto:info@teachgenie.ai" className="contact-info-link">Send Email →</a>
                    </div>
                    <div className="contact-info-card">
                      <div className="contact-info-icon">
                        <Phone size={24} />
                      </div>
                      <h4>Call Us</h4>
                      <p>+91 87096 84588</p>
                      <a href="tel:+918709684588" className="contact-info-link">Call Now →</a>
                    </div>
                  </div>
                  <div style={{marginTop: '32px', padding: '20px', background: 'var(--bg-light)', borderRadius: '12px', border: '1.5px solid rgba(30, 58, 138, 0.1)'}}>
                    <h4 style={{fontSize: '16px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '12px'}}>Response Time</h4>
                    <p style={{fontSize: '14px', color: 'var(--text-light)', lineHeight: '1.6'}}>We typically respond within 24 hours during business days. For urgent issues, please call our support line.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default Generator;

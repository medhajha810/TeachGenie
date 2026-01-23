import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import GeneratorPage from './pages/GeneratorPage';
import LearnMore from './pages/LearnMore';
import Login from './pages/Login';
import Signup from './pages/Signup';
import LoadingScreen from './components/LoadingScreen';
import ScrollToHash from './components/ScrollToHash';
import { ThemeProvider } from './context/ThemeContext';
import './styles/index.css';
import './styles/theme-light.css';
import './styles/theme-dark.css';
import './styles/theme-ocean.css';
import './styles/theme-elegant.css';
import './styles/theme-elegant-hover.css';
import './styles/theme-light-overrides.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <ThemeProvider>
        <Router>
          <ScrollToHash />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/generator" element={<GeneratorPage />} />
            <Route path="/learn-more" element={<LearnMore />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;

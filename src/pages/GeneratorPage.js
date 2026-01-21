import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';
import Generator from '../components/Generator';

export default function GeneratorPage() {
  const navigate = useNavigate();

  return (
    <div className="generator-page">
      <Generator backButton={
        <button 
          onClick={() => navigate('/')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 20px',
            borderRadius: '12px',
            border: '1px solid var(--border-color)',
            background: 'var(--bg-white)',
            color: 'var(--text-dark)',
            cursor: 'pointer',
            fontWeight: 600,
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            transition: 'all 0.3s ease',
            marginBottom: '16px'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.2)';
            e.currentTarget.style.borderColor = 'var(--primary)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
            e.currentTarget.style.borderColor = 'var(--border-color)';
          }}
        >
          <Home size={20} />
          Back to Home
        </button>
      } />
    </div>
  );
}

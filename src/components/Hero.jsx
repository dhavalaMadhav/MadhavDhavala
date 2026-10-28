import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <section className="hero-bento-section">
      <nav className="hero-nav">
        <div className="nav-logo">Madhav.</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <a href="#contact" className="hero-badge nav-talk-btn desktop-only">lets talk</a>
        {/* Mobile hamburger */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`ham-line ${menuOpen ? 'open' : ''}`}></span>
          <span className={`ham-line ${menuOpen ? 'open' : ''}`}></span>
          <span className={`ham-line ${menuOpen ? 'open' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a href="#contact" className="hero-badge" onClick={closeMenu} style={{ marginTop: '1rem' }}>lets talk</a>
      </div>

      <div className="bento-grid-modern">
        
        {/* 1. Profile Introduction Card (Top Left) */}
        <div className="bento-card profile-card">
          <h1 className="bento-name">Madhav Dhavala</h1>
          <p className="bento-desc-italic">
            An aspiring AI Engineer &amp; Full-Stack Developer passionate about intelligent systems, modern web development, and creating interactive experiences.
          </p>
          <div className="hero-badge" style={{ marginTop: '1.5rem' }}>
            full stack developer / ai engineer
          </div>
          <div className="circular-arrow">↗</div>
        </div>

        {/* 2. Social Cards Grid (Center Top) */}
        <div className="socials-grid">
          <a href="https://github.com/dhavalaMadhav" target="_blank" rel="noreferrer" className="social-mini-card">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a href="#contact" className="social-mini-card">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </a>
          <a href="https://www.linkedin.com/in/madhav-dhavala/" target="_blank" rel="noreferrer" className="social-mini-card">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="/madhav_resume.pdf" target="_blank" rel="noreferrer" className="social-mini-card">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          </a>
        </div>

        {/* 3. Main Hero Statement Card (Top Right) */}
        <div className="bento-card statement-card">
          <h2 className="statement-text">Building Skills<br/>For Future.</h2>
        </div>

        {/* 4. Skills Card (Bottom Left) */}
        <div className="bento-card skills-card">
          <div className="skills-icons-grid">
            <div className="skill-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path></svg></div>
            <div className="skill-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg></div>
            <div className="skill-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></div>
            <div className="skill-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect></svg></div>
            <div className="skill-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg></div>
            <div className="skill-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg></div>
            <div className="skill-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg></div>
            <div className="skill-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></div>
          </div>
          <div className="skills-footer">
            <div>
              <p className="bento-subtitle" style={{marginBottom: 0}}>Most Use</p>
              <h3 className="card-title">Skills</h3>
            </div>
            <div className="circular-arrow">↗</div>
          </div>
        </div>

        {/* 5. Projects Showcase Card (Bottom Center) */}
        <a href="#projects" className="bento-card showcase-card">
          <div className="bg-text-overlay">MY WORKS</div>
          <div className="showcase-images-container">
            <div className="showcase-mockup">
              <img src="/proj_rag.png" alt="Project 1" />
            </div>
            <div className="showcase-mockup">
              <img src="/proj_conf.png" alt="Project 2" />
            </div>
          </div>
          <div className="showcase-footer">
            <div>
              <p className="bento-subtitle" style={{marginBottom: 0}}>Showcase</p>
              <h3 className="card-title">Projects</h3>
            </div>
            <div className="circular-arrow">↗</div>
          </div>
        </a>

        {/* 6. Hobby / Extra Card (Bottom Right) */}
        <div className="bento-card hobby-card">
          <img src="/about_image.png" alt="Hobby" className="hobby-bg" />
          <div className="hobby-footer">
            <div>
              <p className="bento-subtitle" style={{marginBottom: 0, color: '#ddd'}}>Hobbies</p>
              <h3 className="card-title" style={{color: '#fff'}}>Portraits</h3>
            </div>
            <div className="circular-arrow">↗</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

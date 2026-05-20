import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          I am an aspiring AI Engineer and Full Stack Developer with a strong interest in building scalable, real-world technology solutions that combine intelligent systems with modern web development. My work focuses on creating practical applications that solve communication, management, and automation challenges using technologies across both frontend and backend ecosystems.
        </p>
        
        <a href="#contact" className="contact-btn">CONTACT ME</a>
        
        <div className="social-links">
          <span className="social-label">GET SOCIAL</span>
          <div className="social-line"></div>
          <a href="https://github.com/dhavalaMadhav" target="_blank" rel="noreferrer"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
          <a href="https://www.linkedin.com/in/madhav-dhavala/" target="_blank" rel="noreferrer"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
          <a href="#contact"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></a>
        </div>
      </div>
      
      <div className="about-visual">
        <div className="abstract-shape shape-1"></div>
        <div className="abstract-shape shape-2"></div>
        <div className="about-image-wrapper">
          <img src="/profile_real.png" alt="Profile" className="about-image" />
        </div>
      </div>
    </section>
  );
};

export default About;

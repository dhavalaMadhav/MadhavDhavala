import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-new-section">
      <div className="contact-new-bg">
        <div className="bg-curves"></div>
      </div>

      <div className="contact-new-container">
        
        {/* Left Side */}
        <div className="contact-new-left">
          <div className="tag-badge">
            OPEN FOR CREATIVE COLLABORATIONS
          </div>
          
          <h2 className="massive-heading">
            Have an Awesome<br />Project?
          </h2>
          
          <p className="supporting-text">
            I build scalable full-stack applications and AI-powered experiences. <span className="gradient-highlight">Let's Talk.</span>
          </p>

          <div className="avatar-section">
            <div className="avatar-wrapper">
              <img src="/profile_real.png" alt="Profile" className="avatar-img" />
              {/* Floating Icons */}
              <div className="floating-icon icon-1">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              </div>
              <div className="floating-icon icon-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
              </div>
            </div>
            <div className="avatar-info">
              <h4>AI Full-Stack Developer</h4>
              <p>Available worldwide</p>
            </div>
          </div>

          <div className="arrow-doodle">
            <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 58C30 58 50 10 100 30" stroke="url(#doodle-grad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M90 20L102 31L85 38" stroke="url(#doodle-grad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <defs>
                <linearGradient id="doodle-grad" x1="0" y1="0" x2="120" y2="60" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#e0ff00" />
                  <stop offset="1" stopColor="rgba(224,255,0,0.2)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Right Side */}
        <div className="contact-new-right">
          
          {/* Glowing Centerpiece */}
          <div className="neon-centerpiece">
            <div className="neon-ring ring-1"></div>
            <div className="neon-ring ring-2"></div>
            <div className="neon-core"></div>
          </div>

          {/* Transparent Contact Details layered over the glowing core */}
          <div className="premium-form-container overlay-form transparent-form">
             <div className="direct-contact-info row-layout">
               <a href="mailto:madhavdhavala0@gmail.com" className="contact-icon-btn">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
               </a>
               <a href="https://wa.me/917207127948" className="contact-icon-btn">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
               </a>
               <a href="tel:7207127948" className="contact-icon-btn">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
               </a>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;

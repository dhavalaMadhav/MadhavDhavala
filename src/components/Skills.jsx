import React from 'react';
import './Skills.css';

const skillsList = [
  {
    name: "Machine Learning",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>
    )
  },
  {
    name: "Deep Learning",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="4" height="4" rx="1"/><rect x="10" y="4" width="4" height="4" rx="1"/><rect x="10" y="12" width="4" height="4" rx="1"/><rect x="18" y="7" width="4" height="4" rx="1"/><path d="M6 9h4M14 6h4M14 14h4M6 11h4"/></svg>
    )
  },
  {
    name: "Natural Language Processing (NLP)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="8" y1="9" x2="16" y2="9"/><line x1="8" y1="13" x2="13" y2="13"/></svg>
    )
  },
  {
    name: "Node.js",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5"/><line x1="12" y1="22" x2="12" y2="15.5"/><polyline points="22 8.5 12 15.5 2 8.5"/></svg>
    )
  },
  {
    name: "Express.js",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"/><line x1="8" y1="16" x2="8.01" y2="16"/><line x1="8" y1="20" x2="8.01" y2="20"/><line x1="12" y1="18" x2="12.01" y2="18"/><line x1="12" y1="22" x2="12.01" y2="22"/><line x1="16" y1="16" x2="16.01" y2="16"/><line x1="16" y1="20" x2="16.01" y2="20"/></svg>
    )
  },
  {
    name: "React.js",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="2"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" strokeDasharray="3 3"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(45 12 12)" strokeDasharray="3 3"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-45 12 12)" strokeDasharray="3 3"/></svg>
    )
  },
  {
    name: "FastAPI",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
    )
  },
  {
    name: "MongoDB",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><ellipse cx="12" cy="5" rx="4" ry="2"/><path d="M8 5v6c0 1.1 1.8 2 4 2s4-.9 4-2V5"/><path d="M8 11v6c0 1.1 1.8 2 4 2s4-.9 4-2v-6"/></svg>
    )
  },
  {
    name: "Docker",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="10" width="3" height="3" rx="0.5"/><rect x="6" y="10" width="3" height="3" rx="0.5"/><rect x="10" y="10" width="3" height="3" rx="0.5"/><rect x="10" y="6" width="3" height="3" rx="0.5"/><rect x="14" y="10" width="3" height="3" rx="0.5"/><path d="M2 13c0 2.8 2.2 5 5 5h9a5 5 0 0 0 5-5"/><path d="M19 13c0-1.2.8-2 2-2h1"/></svg>
    )
  },
  {
    name: "nginx",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 2 19 22 19"/><line x1="12" y1="8" x2="12" y2="14"/><line x1="9" y1="11" x2="15" y2="11"/></svg>
    )
  },
  {
    name: "Git",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M6 9v6M9 6h6"/><path d="M15 6a3 3 0 0 1 3 3v6"/></svg>
    )
  },
  {
    name: "GitHub",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
    )
  },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="bg-curves"></div>
      <div className="skills-container">
        <h2 className="skills-heading">Technical Expertise</h2>
        
        <div className="skills-grid">
          {skillsList.map((skill, index) => (
            <div className="skill-row" key={index}>
              <div className="skill-content">
                <span className="skill-index">{(index + 1).toString().padStart(2, '0')}.</span>
                <span className="skill-name">{skill.name}</span>
                <span className="skill-hover-icon">{skill.icon}</span>
              </div>
              <div className="skill-divider"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

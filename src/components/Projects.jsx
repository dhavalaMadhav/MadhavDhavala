import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="project-category">
        <h3 className="category-title">AI / ML</h3>
        <div className="project-cards-grid">

          <a href="#" className="arched-card">
            <div className="arched-image-container">
              <img src="/proj_toleran.png" alt="Toleran" />
            </div>
            <div className="arched-card-footer">
              <svg className="arched-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline></svg>
              <h4>Toleran — Engineering Drawing Intelligence & Design Compliance Copilot</h4>
            </div>
          </a>


          <a href="https://gmail-agent-lemon.vercel.app/" target="_blank" rel="noreferrer" className="arched-card">
            <div className="arched-image-container">
              <img src="/proj_gmail.png" alt="MailMind" />
            </div>
            <div className="arched-card-footer">
              <svg className="arched-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline></svg>
              <h4>MailMind - Personal Gmail Agent</h4>
            </div>
          </a>

          <a href="https://dhavalamadhav.github.io/advanced-rag-frontend/" target="_blank" rel="noreferrer" className="arched-card">
            <div className="arched-image-container">
              <img src="/proj_rag.png" alt="RAG System" />
            </div>
            <div className="arched-card-footer">
              <svg className="arched-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline></svg>
              <h4>Retrieval-Augmented Generation (RAG) system</h4>
            </div>
          </a>

          <a href="https://parkinson-s-bfjk.onrender.com/" target="_blank" rel="noreferrer" className="arched-card">
            <div className="arched-image-container">
              <img src="/proj_parkinson.png" alt="Parkinson Prediction" />
            </div>
            <div className="arched-card-footer">
              <svg className="arched-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline></svg>
              <h4>Parkinson’s Disease Prediction System</h4>
            </div>
          </a>

          <a href="https://ai-conferencing-vert.vercel.app/" target="_blank" rel="noreferrer" className="arched-card">
            <div className="arched-image-container">
              <img src="/proj_conf.png" alt="AI Conferencing" />
            </div>
            <div className="arched-card-footer">
              <svg className="arched-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline></svg>
              <h4>AI-powered conferencing platform</h4>
            </div>
          </a>

        </div>
      </div>

      <div className="project-category">
        <h3 className="category-title">Full Stack Development</h3>
        <div className="project-cards-grid">

          <a href="#" className="arched-card">
            <div className="arched-image-container">
              <img src="/proj_cloud.png" alt="Cloud Storage" />
            </div>
            <div className="arched-card-footer">
              <svg className="arched-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline></svg>
              <h4>Cloud Storage Solution</h4>
            </div>
          </a>

          <a href="#" className="arched-card">
            <div className="arched-image-container">
              <img src="/proj_chat.png" alt="Chat Platform" />
            </div>
            <div className="arched-card-footer">
              <svg className="arched-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline></svg>
              <h4>Real-time Chat Platform</h4>
            </div>
          </a>

          <a href="#" className="arched-card">
            <div className="arched-image-container offline-container">
              <span className="offline-text">OFFLINE APPLICATION</span>
            </div>
            <div className="arched-card-footer">
              <svg className="arched-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline></svg>
              <h4>MasterStream</h4>
            </div>
          </a>

        </div>
      </div>

      <div className="freelance-section">
        <h2 className="section-title">Freelancing Experience</h2>
        <div className="marquee-container">
          <div className="marquee-track row-left">
            <div className="thumb-wrapper"><a href="https://unipick.org" target="_blank" rel="noreferrer" className="thumbnail-card"><img src="/thumb_1.png?v=3" alt="UniPick" /></a><span className="thumb-underline"></span></div>
            <div className="thumb-wrapper"><a href="https://www.saikulwanth.com/" target="_blank" rel="noreferrer" className="thumbnail-card"><img src="/thumb_2.png?v=3" alt="Sai Kulwanth" /></a><span className="thumb-underline"></span></div>
            <div className="thumb-wrapper"><a href="https://www.carameshy.com/" target="_blank" rel="noreferrer" className="thumbnail-card"><img src="/thumb_3.png?v=3" alt="Carameshy" /></a><span className="thumb-underline"></span></div>
            <div className="thumb-wrapper"><a href="https://www.vexamo.in/" target="_blank" rel="noreferrer" className="thumbnail-card"><img src="/thumb_4.png?v=3" alt="Vexamo" /></a><span className="thumb-underline"></span></div>
            <div className="thumb-wrapper"><a href="https://www.halftonesystems.com/" target="_blank" rel="noreferrer" className="thumbnail-card"><img src="/thumb_5.png" alt="Halftone Systems" /></a><span className="thumb-underline"></span></div>
            <div className="thumb-wrapper"><a href="https://unipick.org" target="_blank" rel="noreferrer" className="thumbnail-card"><img src="/thumb_1.png?v=3" alt="UniPick" /></a><span className="thumb-underline"></span></div>
            <div className="thumb-wrapper"><a href="https://www.saikulwanth.com/" target="_blank" rel="noreferrer" className="thumbnail-card"><img src="/thumb_2.png?v=3" alt="Sai Kulwanth" /></a><span className="thumb-underline"></span></div>
            <div className="thumb-wrapper"><a href="https://www.carameshy.com/" target="_blank" rel="noreferrer" className="thumbnail-card"><img src="/thumb_3.png?v=3" alt="Carameshy" /></a><span className="thumb-underline"></span></div>
            <div className="thumb-wrapper"><a href="https://www.vexamo.in/" target="_blank" rel="noreferrer" className="thumbnail-card"><img src="/thumb_4.png?v=3" alt="Vexamo" /></a><span className="thumb-underline"></span></div>
            <div className="thumb-wrapper"><a href="https://www.halftonesystems.com/" target="_blank" rel="noreferrer" className="thumbnail-card"><img src="/thumb_5.png" alt="Halftone Systems" /></a><span className="thumb-underline"></span></div>
          </div>

          <div className="marquee-track row-right">
            <div className="thumb-wrapper"><a href="https://www.halftonesystems.com/" target="_blank" rel="noreferrer" className="thumbnail-card"><img src="/thumb_5.png" alt="Halftone Systems" /></a><span className="thumb-underline"></span></div>
            <div className="thumb-wrapper"><a href="https://www.vexamo.in/" target="_blank" rel="noreferrer" className="thumbnail-card"><img src="/thumb_4.png?v=3" alt="Vexamo" /></a><span className="thumb-underline"></span></div>
            <div className="thumb-wrapper"><a href="https://www.carameshy.com/" target="_blank" rel="noreferrer" className="thumbnail-card"><img src="/thumb_3.png?v=3" alt="Carameshy" /></a><span className="thumb-underline"></span></div>
            <div className="thumb-wrapper"><a href="https://www.saikulwanth.com/" target="_blank" rel="noreferrer" className="thumbnail-card"><img src="/thumb_2.png?v=3" alt="Sai Kulwanth" /></a><span className="thumb-underline"></span></div>
            <div className="thumb-wrapper"><a href="https://unipick.org" target="_blank" rel="noreferrer" className="thumbnail-card"><img src="/thumb_1.png?v=3" alt="UniPick" /></a><span className="thumb-underline"></span></div>
            <div className="thumb-wrapper"><a href="https://www.halftonesystems.com/" target="_blank" rel="noreferrer" className="thumbnail-card"><img src="/thumb_5.png" alt="Halftone Systems" /></a><span className="thumb-underline"></span></div>
            <div className="thumb-wrapper"><a href="https://www.vexamo.in/" target="_blank" rel="noreferrer" className="thumbnail-card"><img src="/thumb_4.png?v=3" alt="Vexamo" /></a><span className="thumb-underline"></span></div>
            <div className="thumb-wrapper"><a href="https://www.carameshy.com/" target="_blank" rel="noreferrer" className="thumbnail-card"><img src="/thumb_3.png?v=3" alt="Carameshy" /></a><span className="thumb-underline"></span></div>
            <div className="thumb-wrapper"><a href="https://www.saikulwanth.com/" target="_blank" rel="noreferrer" className="thumbnail-card"><img src="/thumb_2.png?v=3" alt="Sai Kulwanth" /></a><span className="thumb-underline"></span></div>
            <div className="thumb-wrapper"><a href="https://unipick.org" target="_blank" rel="noreferrer" className="thumbnail-card"><img src="/thumb_1.png?v=3" alt="UniPick" /></a><span className="thumb-underline"></span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

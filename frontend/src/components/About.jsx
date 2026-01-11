import React from 'react';
import { Code, Zap, Award } from 'lucide-react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title animate-on-scroll">About Me</h2>
          <div className="section-line"></div>
        </div>

        <div className="about-content">
          <div className="about-text animate-on-scroll">
            <p className="about-description">
              I'm a <span className="highlight">Computer Engineering student</span> from Nashik, Maharashtra, 
              currently pursuing my B.E. with a CGPA of <span className="highlight">9.2</span>. 
            </p>
            <p className="about-description">
              My passion lies in <span className="highlight">Full Stack Development</span> and creating 
              innovative solutions that make a real impact. With experience across multiple internships, 
              I've honed my skills in building scalable applications, working with modern frameworks, 
              and solving complex problems.
            </p>
            <p className="about-description">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or learning about AI-driven applications and software architecture.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-card animate-on-scroll">
              <div className="stat-icon">
                <Code size={32} />
              </div>
              <h3 className="stat-number">15+</h3>
              <p className="stat-label">Projects Completed</p>
            </div>

            <div className="stat-card animate-on-scroll">
              <div className="stat-icon">
                <Zap size={32} />
              </div>
              <h3 className="stat-number">3</h3>
              <p className="stat-label">Internships</p>
            </div>

            <div className="stat-card animate-on-scroll">
              <div className="stat-icon">
                <Award size={32} />
              </div>
              <h3 className="stat-number">9.2</h3>
              <p className="stat-label">CGPA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'WhaTok',
      description: 'Modern WhatsApp-like web interface integrating Reels, Map, and Gaming features into a single seamless experience.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.pexels.com/photos/46924/pexels-photo-46924.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveLink: '#',
      year: '2025'
    },
    {
      title: 'CNG Queue Tracker',
      description: 'Real-time tracking system for CNG stations using Firebase Realtime Database, displaying live queue updates.',
      tech: ['Firebase', 'JavaScript', 'HTML', 'CSS'],
      image: 'https://images.pexels.com/photos/9937650/pexels-photo-9937650.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveLink: '#',
      year: '2025'
    },
    {
      title: 'Healthcare Hub',
      description: 'Responsive medical web app for online consultations, appointment booking, and record management.',
      tech: ['React', 'JavaScript', 'CSS'],
      image: 'https://images.pexels.com/photos/8376277/pexels-photo-8376277.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveLink: '#',
      year: '2025'
    },
    {
      title: 'Pet Friendly City',
      description: 'Visually appealing web app promoting pet adoption with testimonial carousel and responsive layout.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.pexels.com/photos/35558885/pexels-photo-35558885.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveLink: '#',
      year: '2024'
    },
    {
      title: 'iPhone 14 Dynamic Island Clone',
      description: 'Interactive UI component mimicking Apple\'s Dynamic Island purely with CSS animations and transitions.',
      tech: ['HTML', 'CSS'],
      image: 'https://images.pexels.com/photos/5054355/pexels-photo-5054355.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveLink: '#',
      year: '2024'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title animate-on-scroll">Featured Projects</h2>
          <div className="section-line"></div>
        </div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card animate-on-scroll" data-delay={idx * 0.1}>
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
                <div className="project-overlay">
                  <a href={project.liveLink} className="project-link" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-year">{project.year}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIdx) => (
                    <span key={techIdx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
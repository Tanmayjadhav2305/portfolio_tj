import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { gsap } from 'gsap';
import '../styles/Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
      });

      gsap.from('.hero-description', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out',
      });

      gsap.from('.hero-cta', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.7,
        ease: 'power3.out',
      });

      gsap.from('.hero-social', {
        opacity: 0,
        x: -30,
        duration: 1,
        delay: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-name">Tanmay Jadhav</span>
          </h1>
          <h2 className="hero-subtitle">Full Stack Developer</h2>
          <p className="hero-description">
            Innovative Computer Engineering student passionate about building user-centric web applications
            and real-time systems. Transforming ideas into seamless digital experiences.
          </p>
          <div className="hero-cta">
            <button onClick={scrollToContact} className="btn-primary">
              Get In Touch
            </button>
            <a 
              href="https://github.com/TanmayJadhav2305" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              View GitHub
              <ExternalLink size={18} />
            </a>
          </div>
          <div className="hero-socials">
            <a 
              href="https://github.com/TanmayJadhav2305" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hero-social"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/tanmay-jadhav-795a96293/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hero-social"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:tanmayjadhav2305@gmail.com"
              className="hero-social"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-orb"></div>
          <div className="hero-grid"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

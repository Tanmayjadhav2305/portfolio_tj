import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">TJ</h3>
            <p className="footer-tagline">Building the future, one line of code at a time.</p>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <a href="#about" className="footer-link">About</a>
            <a href="#skills" className="footer-link">Skills</a>
            <a href="#projects" className="footer-link">Projects</a>
            <a href="#experience" className="footer-link">Experience</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>

          <div className="footer-social">
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-social-links">
              <a 
                href="https://github.com/TanmayJadhav2305" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/tanmay-jadhav-795a96293/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:tanmayjadhav2305@gmail.com"
                className="footer-social-link"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://tanmayjadhav.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Tanmay Jadhav. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: 'Web Developer Intern',
      company: 'CollegeTips.in',
      period: '2024',
      description: 'Created and deployed a live project "Pet Friendly City", featuring responsive layouts, interactive forms, and engaging animations using HTML, CSS, and JavaScript.',
      skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design']
    },
    {
      role: 'Software Developer Intern',
      company: 'Cognifyz Technologies',
      period: '2024',
      description: 'Worked on API integration, database handling, and data-driven backend modules ensuring reliability and optimized execution.',
      skills: ['API Integration', 'Database Management', 'Backend Development']
    },
    {
      role: 'Python Developer Intern',
      company: 'Tech Octanet Services Pvt. Ltd.',
      period: '2024',
      description: 'Developed Python automation and backend logic, improved code structure, and implemented modular functionalities to optimize performance.',
      skills: ['Python', 'Automation', 'Backend Logic']
    }
  ];

  const achievements = [
    'Campus Ambassador at Unstop',
    'Internshala Student Partner (ISP) - Letter of Recommendation',
    'Ranked 33rd in Unstop Weekly Case Challenge',
    'Certified in Python, MySQL, JavaScript, and Cyber Security'
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <div className="section-header">
          <h2 className="section-title animate-on-scroll">Experience & Achievements</h2>
          <div className="section-line"></div>
        </div>

        <div className="experience-content">
          <div className="experience-timeline">
            {experiences.map((exp, idx) => (
              <div key={idx} className="timeline-item animate-on-scroll">
                <div className="timeline-icon">
                  <Briefcase size={20} />
                </div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3 className="timeline-role">{exp.role}</h3>
                    <span className="timeline-period">
                      <Calendar size={16} />
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="timeline-company">{exp.company}</h4>
                  <p className="timeline-description">{exp.description}</p>
                  <div className="timeline-skills">
                    {exp.skills.map((skill, skillIdx) => (
                      <span key={skillIdx} className="timeline-skill">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="achievements-section animate-on-scroll">
            <h3 className="achievements-title">Achievements & Recognition</h3>
            <div className="achievements-list">
              {achievements.map((achievement, idx) => (
                <div key={idx} className="achievement-item">
                  <div className="achievement-dot"></div>
                  <p className="achievement-text">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'C++', level: 80 },
        { name: 'SQL', level: 85 },
        { name: 'HTML/CSS', level: 95 }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Flask', level: 80 },
        { name: 'Firebase', level: 85 },
        { name: 'GSAP', level: 75 }
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'VS Code', level: 95 },
        { name: 'Postman', level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title animate-on-scroll">Skills & Expertise</h2>
          <div className="section-line"></div>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category animate-on-scroll">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="areas-of-interest animate-on-scroll">
          <h3 className="interest-title">Areas of Interest</h3>
          <div className="interest-tags">
            <span className="interest-tag">Full Stack Development</span>
            <span className="interest-tag">Software Engineering</span>
            <span className="interest-tag">AI-Driven Applications</span>
            <span className="interest-tag">UI/UX Design</span>
            <span className="interest-tag">API Integration</span>
            <span className="interest-tag">Database Systems</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

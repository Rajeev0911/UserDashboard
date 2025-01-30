import React from 'react';
import './SkillProgress.css';

export function SkillProgress() {
  const skills = [
    { name: "JavaScript", progress: 90, color: "#f1c40f" },
    { name: "React", progress: 85, color: "#3498db" },
    { name: "Node.js", progress: 80, color: "#2ecc71" },
    { name: "Python", progress: 75, color: "#9b59b6" }
  ];

  return (
    <div className="skills-card">
      <h3 className="skills-title">Professional Skills</h3>
      
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-item">
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percentage">{skill.progress}%</span>
            </div>
            <div className="skill-bar">
              <div 
                className="skill-progress"
                style={{ 
                  width: `${skill.progress}%`,
                  backgroundColor: "black"
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="skills-summary">
        <div className="summary-item">
          <div className="summary-icon">⭐️</div>
          <div className="summary-info">
            <span className="summary-value">Expert</span>
            <span className="summary-label">Skill Level</span>
          </div>
        </div>
        <div className="summary-item">
          <div className="summary-icon">🏆</div>
          <div className="summary-info">
            <span className="summary-value">5+</span>
            <span className="summary-label">Years Exp.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
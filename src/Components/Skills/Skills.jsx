import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillset = [
    { name: 'React & Redux', level: '85%' },
    { name: 'JavaScript / ES6+', level: '90%' },
    { name: 'Java & Spring Boot', level: '80%' },
    { name: 'Android Development', level: '75%' },
    { name: 'HTML & CSS', level: '95%' },
    { name: 'UI / UX Design', level: '70%' },
  ];

  return (
    <div className='skills' id='skills'>
      <div className="skills-title">
        <h2>My Skills</h2>
        <div className="title-underline"></div>
      </div>
      <div className="skills-container">
        {skillset.map((skill, index) => (
          <div className="skill-card" key={index} style={{ '--animation-order': index }}>
            <div className="skill-info">
              <h3>{skill.name}</h3>
              <p>{skill.level}</p>
            </div>
            <div className="skill-bar-bg">
              <div 
                className="skill-bar-fill" 
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills;

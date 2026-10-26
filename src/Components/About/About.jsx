import React from 'react';
import './About.css';
import profile_img from '../../assets/portfolio_img.png';

const About = () => {
  return (
    <div className='about' id='about'>
      <div className="about-title">
        <h2>About Me</h2>
        <div className="title-underline"></div>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <div className="about-img-container">
            <img src={profile_img} alt="Profile" />
          </div>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am a dedicated Software Engineering undergraduate passionate about crafting modern, dynamic, and responsive web applications. I consistently seek innovative solutions to complex problems by applying my knowledge of Object-Oriented Programming (OOP) and Data Structures & Algorithms.</p>
            <p>My tech stack includes programming languages such as <strong>Java, Python, and C</strong>, along with web technologies like <strong>HTML, CSS, JavaScript, and React</strong>. I also have experience working with databases like <strong>MySQL, MongoDB, and Firebase</strong>, utilizing development tools such as <strong>GitHub, Visual Studio Code, and Android Studio</strong> to bring ideas to life.</p>
          </div>
          <div className="about-skills-btn-container">
            <a href="#skills" className="about-skills-btn">View My Skills</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;

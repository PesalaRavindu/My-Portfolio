import React from 'react';
import './Hero.css';
import profile_img from '../../assets/portfolio_img.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  const handleResumeClick = () => {
    alert("Resume will be available for download soon. Feel free to contact Pesala via the contact section!");
  };

  return (
    <div id="home" className='hero'> 
      <img src={profile_img} alt="Pesala Ravindu"/>
      <h1><span>I am Pesala Ravindu,</span> Software Engineer Undergraduate Student.</h1>
      <p>I am Pesala Ravindu, a Software Engineering undergraduate with a strong interest in building modern web and mobile applications. I enjoy working with technologies such as React, Java, and Android to develop clean, efficient, and user-friendly solutions. Through academic and real-world projects, I have gained hands-on experience in application development, problem-solving, and system design. I am continuously improving my skills, exploring new technologies, and actively seeking opportunities to gain practical industry experience and grow as a software engineer.</p>
      <div className="hero-action">
        <AnchorLink className="hero-anchor-link" offset={50} href="#contact">
          <div className="hero-connect">Connect with me</div>
        </AnchorLink>
        <div className="hero-resume" onClick={handleResumeClick}>My resume</div>
      </div>
    </div>
  );
};

export default Hero;

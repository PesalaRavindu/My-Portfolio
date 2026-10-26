import React, { useState } from 'react';
import './Footer.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <div className="footer-logo">Pesala.</div>
          <p>A passionate software engineer undergraduate building modern, premium web experiences. Continuously learning, constantly creating.</p>
          <div className="footer-socials">
            <a href="https://github.com/PesalaRavindu" target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="bx bxl-github"></i>
            </a>
            <a href="mailto:pesala2003@gmail.com" aria-label="Email">
              <i className="bx bxs-envelope"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <i className="bx bx-user"></i>
            <input 
              type="email" 
              placeholder='Enter your email' 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button 
            type="button" 
            className="footer-subscribe" 
            onClick={handleSubscribe}
          >
            {subscribed ? 'Subscribed!' : 'Subscribe'}
          </button>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-bottom-left">&copy; {new Date().getFullYear()} Pesala Ravindu. All rights reserved.</p>
        <div className="footer-bottom-right">
          <AnchorLink className="footer-anchor-link" offset={50} href="#home">
            Back to Top
          </AnchorLink>
          <AnchorLink className="footer-anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

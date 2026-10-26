import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <div className="footer-logo">Pesala.</div>
          <p>A passionate software engineer undergraduate building modern, premium web experiences. Continuously learning, constantly creating.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <i className="bx bx-user"></i>
            <input type="email" placeholder='Enter your email' />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-bottom-left">&copy; {new Date().getFullYear()} Pesala Ravindu. All rights reserved.</p>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;

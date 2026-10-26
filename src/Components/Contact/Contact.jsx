import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <div className="contact-title">
        <h2>Get In Touch</h2>
        <div className="title-underline"></div>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <i className="bx bxs-envelope"></i>
              <p>pesala2003@gmail.com</p>
            </div>
            <div className="contact-detail">
              <i className="bx bxs-phone"></i>
              <p>+94 701388358</p>
            </div>
            <div className="contact-detail">
              <i className="bx bxs-map"></i>
              <p>Colombo, Sri Lanka</p>
            </div>
          </div>
        </div>
        <form className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' />

          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' />

          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows="8" placeholder='Enter your message'></textarea>

          <button type='submit' className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;

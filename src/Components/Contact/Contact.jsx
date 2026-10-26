import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // 'submitting' | 'success' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    setStatus('submitting');

    try {
      // Netlify Form Submission
      const encoded = new URLSearchParams({
        'form-name': 'contact',
        ...formData
      }).toString();

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encoded
      });

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

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

        <form 
          className="contact-right" 
          name="contact" 
          method="POST" 
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />

          {status === 'success' && (
            <div className="contact-success-msg">
              <i className="bx bx-check-circle"></i>
              <span>Thank you! Your message has been sent successfully.</span>
            </div>
          )}

          {status === 'error' && (
            <div className="contact-error-msg">
              <i className="bx bx-error-circle"></i>
              <span>Something went wrong. Please try emailing directly to pesala2003@gmail.com</span>
            </div>
          )}

          <label htmlFor="contact-name">Your Name</label>
          <input 
            type="text" 
            id="contact-name"
            placeholder='Enter your name' 
            name='name' 
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="contact-email">Your Email</label>
          <input 
            type="email" 
            id="contact-email"
            placeholder='Enter your email' 
            name='email' 
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="contact-message">Write your message here</label>
          <textarea 
            id="contact-message"
            name="message" 
            rows="6" 
            placeholder='Enter your message'
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button 
            type='submit' 
            className="contact-submit" 
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Sending...' : 'Submit now'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    alert('Message sent! (This is a demo - backend integration pending)');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title animate-on-scroll">Get In Touch</h2>
          <div className="section-line"></div>
        </div>

        <div className="contact-content">
          <div className="contact-info animate-on-scroll">
            <h3 className="contact-info-title">Let's Connect</h3>
            <p className="contact-info-text">
              I'm currently seeking internship opportunities in Software or Web Development. 
              Let's discuss how we can work together!
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <div className="contact-detail-content">
                  <span className="contact-label">Email</span>
                  <a href="mailto:tanmayjadhav2305@gmail.com" className="contact-value">
                    tanmayjadhav2305@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-icon">
                  <Phone size={24} />
                </div>
                <div className="contact-detail-content">
                  <span className="contact-label">Phone</span>
                  <a href="tel:8080281489" className="contact-value">
                    8080281489
                  </a>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-icon">
                  <MapPin size={24} />
                </div>
                <div className="contact-detail-content">
                  <span className="contact-label">Location</span>
                  <span className="contact-value">Nashik, Maharashtra</span>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form animate-on-scroll" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                rows="6"
                required
              ></textarea>
            </div>

            <button type="submit" className="form-submit">
              Send Message
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

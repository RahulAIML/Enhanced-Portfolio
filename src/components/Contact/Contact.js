import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { FaPaperPlane, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 100px 5%;
  background: ${theme.colors.backgroundLight};
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: ${theme.colors.text};
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
  grid-column: 1 / -1;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: ${theme.colors.primary};
  }
`;

const ContactInfo = styled(motion.div)`
  h3 {
    font-size: 1.8rem;
    color: ${theme.colors.text};
    margin-bottom: 2rem;
  }
  
  p {
    color: ${theme.colors.textSecondary};
    margin-bottom: 2.5rem;
    line-height: 1.8;
  }
  
  .contact-methods {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const ContactMethod = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  
  .icon {
    width: 50px;
    height: 50px;
    background: ${theme.colors.background};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.primary};
    font-size: 1.2rem;
    flex-shrink: 0;
  }
  
  .details {
    h4 {
      color: ${theme.colors.text};
      font-size: 1.1rem;
      margin-bottom: 0.3rem;
    }
    
    a, span {
      color: ${theme.colors.textSecondary};
      text-decoration: none;
      transition: all 0.3s ease;
      display: block;
      
      &:hover {
        color: ${theme.colors.primary};
      }
    }
  }
`;

const ContactForm = styled(motion.form)`
  background: ${theme.colors.background};
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: ${theme.shadows.lg};
  
  .form-group {
    margin-bottom: 1.5rem;
    
    label {
      display: block;
      color: ${theme.colors.text};
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
    }
    
    input,
    textarea {
      width: 100%;
      padding: 0.8rem 1rem;
      background: ${theme.colors.backgroundLight};
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 5px;
      color: ${theme.colors.text};
      font-family: inherit;
      font-size: 1rem;
      transition: all 0.3s ease;
      
      &:focus {
        outline: none;
        border-color: ${theme.colors.primary};
        box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.3);
      }
      
      &::placeholder {
        color: ${theme.colors.textSecondary};
        opacity: 0.7;
      }
    }
    
    textarea {
      min-height: 150px;
      resize: vertical;
    }
  }
  
  .submit-btn {
    background: ${theme.colors.primary};
    color: white;
    border: none;
    padding: 0.8rem 2rem;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
    
    &:hover {
      background: ${theme.colors.primaryLight};
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(37, 99, 235, 0.3);
    }
    
    &:disabled {
      background: #64748b;
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
    }
  }
  
  .form-message {
    margin-top: 1rem;
    padding: 0.8rem;
    border-radius: 5px;
    font-size: 0.9rem;
    text-align: center;
    
    &.success {
      background: rgba(34, 197, 94, 0.1);
      color: #22c55e;
      border: 1px solid rgba(34, 197, 94, 0.2);
    }
    
    &.error {
      background: rgba(239, 68, 68, 0.1);
      color: #ef4444;
      border: 1px solid rgba(239, 68, 68, 0.2);
    }
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    success: null,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        submitting: false,
        success: false,
        message: 'Please fill in all required fields.'
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        submitting: false,
        success: false,
        message: 'Please enter a valid email address.'
      });
      return;
    }
    
    setStatus({ submitting: true, success: null, message: '' });
    
    try {
      // Replace with your form submission logic (e.g., Formspree, EmailJS, etc.)
      // This is a mock implementation
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setStatus({
        submitting: false,
        success: true,
        message: 'Your message has been sent successfully! I will get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({
        submitting: false,
        success: false,
        message: 'Something went wrong. Please try again later.'
      });
    }
  };

  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </SectionTitle>
        
        <ContactInfo
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3>Let's talk about your project</h3>
          <p>
            I'm always open to discussing product design work or partnership opportunities. 
            Feel free to reach out to me using the contact information below or by filling out the form.
          </p>
          
          <div className="contact-methods">
            <ContactMethod>
              <div className="icon">
                <FaMapMarkerAlt />
              </div>
              <div className="details">
                <h4>Location</h4>
                <span>Kharagpur, India</span>
              </div>
            </ContactMethod>
            
            <ContactMethod>
              <div className="icon">
                <FaEnvelope />
              </div>
              <div className="details">
                <h4>Email</h4>
                <a href="mailto:bhattacharyabuddhadeb147@gmail.com">bhattacharyabuddhadeb147@gmail.com</a>
              </div>
            </ContactMethod>
            
            <ContactMethod>
              <div className="icon">
                <FaPhone />
              </div>
              <div className="details">
                <h4>Phone</h4>
                <a href="tel:+918927349484">+91 8927349484</a>
              </div>
            </ContactMethod>
          </div>
        </ContactInfo>
        
        <ContactForm
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="form-group">
            <label htmlFor="name">Your Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Your Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Let me know how I can help you"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Your Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Hi, I think we need a web application for our products at Company X. How soon can we discuss this?"
              required
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="submit-btn" 
            disabled={status.submitting}
          >
            <FaPaperPlane />
            {status.submitting ? 'Sending...' : 'Send Message'}
          </button>
          
          {status.message && (
            <div className={`form-message ${status.success ? 'success' : 'error'}`}>
              {status.message}
            </div>
          )}
        </ContactForm>
      </Container>
    </ContactSection>
  );
};

export default Contact;

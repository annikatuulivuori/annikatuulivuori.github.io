import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact-content">
        <h2>Contact</h2>
        <p>Email: atuulivuo@gmail.com</p>
        <p>
          <a href="https://www.linkedin.com/in/annikatuulivuori" target="_blank" rel="noopener noreferrer">
            linkedin
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;

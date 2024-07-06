import React, { useEffect, useState } from 'react';
import './About.css';
import experienceIcon from '../../assets/experience.png';
import educationIcon from '../../assets/education.png';

const About: React.FC = () => {
  const [aboutText, setAboutText] = useState<string>('');

  useEffect(() => {
    const fetchText = async () => {
      const response = await fetch('/about.txt');
      const text = await response.text();
      setAboutText(text);
    };
    fetchText();
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-content">
        <h1>About Me</h1>
        <div className="about-text">
          <p>{aboutText}</p>
        </div>
        <div className="about-containers">
          <div className="experience-container">
            <img className="experience-icon" src={experienceIcon} alt="experience-icon" />
            <h3>Experience</h3>
            <p>
              ~ 1 year
              <br />
              Software Development <br /> Test Automation
            </p>
          </div>
          <div className="education-container">
            <img className="education-icon" src={educationIcon} alt="education-icon" />
            <h3>Education</h3>
            <p>
              B.Sc. Computer Science
              <br />
              Information &Communication Technologies (ITCs)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

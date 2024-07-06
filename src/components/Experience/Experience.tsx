import React from 'react';
import './Experience.css';
import kelaIcon from '../../assets/kela.png';
import landisIcon from '../../assets/landis.png';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience-content">
        <h1>Experience</h1>
        <div className="experience-containers">
          <div className="kela-container">
            <h2 className="job-company">
              <img className="kela-icon" src={kelaIcon} alt="kela-icon" />
            </h2>
            <h3 className="job-title">IT-Trainee</h3>
            <p className="job-date">09/2023 - 04/2024</p>
            <p className="job-area">
              Software
              <br />
              Development
            </p>
            <p className="job-tech-stack">
              Tech: Java, Spring Boot, JavaScript,
              <br /> OpenShift, CI/CD, RF, React, Noje.js,
              <br /> Jira, Confluence, DevOps, Git (Bitbucket)
            </p>
          </div>
          <div className="landis-container">
            <h2 className="job-company">
              <img className="landis-icon" src={landisIcon} alt="landis-icon" />
            </h2>
            <h4 className="job-title">Summer Trainee</h4>
            <p className="job-date">05/2024 - 08/2024</p>
            <p className="job-area">
              Software & Test Automation
              <br /> Development
            </p>
            <p className="job-tech-stack">
              Tech: Robot Framework, Browser Library,
              <br /> Jenkins, TypeScript, Azure DevOps,
              <br /> Confluence, Git (Gerrit)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

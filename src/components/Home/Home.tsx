// TODO: add pdf-cv download link
import React from 'react';
import './Home.css';
import img from '../../assets/PAU_1477.jpg';
import linkedinIcon from '../../assets/linkedin.png';
import githubIcon from '../../assets/github.png';

const Home: React.FC = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <img src={img} alt="John Doe" className="profile-picture" />
        <h1>Annika</h1>
        <h2>Software Developer</h2>
        <p className="ingress">Web Developer with experience in Test Automation</p>
        <p className="ingress2">Future Full Stack Developer</p>
        <div className="buttons">
          <a href="https://github.com/annikatuulivuori" target="_blank" rel="noopener noreferrer">
            <img className="github-icon" src={githubIcon} alt="github-icon" />
          </a>
          <a href="https://www.linkedin.com/in/annikatuulivuori" target="_blank" rel="noopener noreferrer">
            <img className="linkedin-icon" src={linkedinIcon} alt="linkedin-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;

import React from 'react';
import './Info.css';
import reactIcon from '../../assets/react.png';
import tsIcon from '../../assets/typescript.png';
import cssIcon from '../../assets/css.png';
import reduxIcon from '../../assets/redux.png';

const Info: React.FC = () => {
  return (
    <section id="info" className="info">
      <div className="info-content">
        <h1>Project Information & Tech Stack</h1>
        <div className="tech-sections">
          <div className="front-container tech-container">
            <h3>Frontend</h3>
            <div className="tech-icons">
              <div className="tech-icon">
                <img className="icon" src={reactIcon} alt="react-icon" />
                <span>React</span>
              </div>
              <div className="tech-icon">
                <img className="icon" src={tsIcon} alt="ts-icon" />
                <span>TypeScript</span>
              </div>
              <div className="tech-icon">
                <img className="icon" src={cssIcon} alt="css-icon" />
                <span>CSS</span>
              </div>
            </div>
          </div>
          <div className="state-mgmt-container tech-container">
            <h3>State Management</h3>
            <div className="tech-icon">
              <img className="icon" src={reduxIcon} alt="redux-icon" />
              <span>Redux</span>
            </div>
          </div>
        </div>
        <div className="features-container">
          <h3>Features</h3>
          <ul>
            <li>
              <strong>State management with Redux:</strong>
              <br />
              efficient state handling, reduces unnecessary re-renders
            </li>
            <li>
              <strong>Component-based Architecture with React:</strong>
              <br />
              Breaks UI into components for easier maintenance and updates
            </li>
            <li>
              <strong>Carousel Navigation:</strong>
              <br />
              Allows users to navigate through different views using next/previous button
            </li>
          </ul>
        </div>
        <div className="improvements-container">
          <h2>Future improvements</h2>
          <ul>
            <li>
              <strong>Mobile Responsiveness:</strong> ensuring website is fully responsive on smaller screens
            </li>
            <li>
              <strong>Dynamic Content Loading:</strong> looking into lazy loading for images and other content to
              enhance performanve and quicker load times
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Info;

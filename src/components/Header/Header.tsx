import React from 'react';
import { useDispatch } from 'react-redux';
import { setView } from '../../store/slice';
import './Header.css';

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const handleNavigation = (view: number) => {
    dispatch(setView(view));
  };

  return (
    <header className="header">
      <h1 className="name">Annika Tuulivuori</h1>
      <nav className="navigation">
        <ul>
          <li>
            <a href="#home" onClick={() => handleNavigation(0)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => handleNavigation(1)}>
              About
            </a>
          </li>
          <li>
            <a href="#experience" onClick={() => handleNavigation(2)}>
              Experience
            </a>
          </li>
          <li>
            <a href="#info" onClick={() => handleNavigation(3)}>
              Info
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => handleNavigation(4)}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

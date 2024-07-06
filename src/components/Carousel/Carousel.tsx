import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { nextView, prevView, setView } from '../../store/slice';
import './Carousel.css';
import Home from '../Home/Home';
import About from '../About/About';
import Experience from '../Experience/Experience';
import rightArrowIcon from '../../assets/right_arrow.png';
import leftArrowIcon from '../../assets/left_arrow.png';
import Contact from '../Contact/Contact';
import Info from '../Info/Info';

const Carousel: React.FC = () => {
  const currentView = useSelector((state: RootState) => state.view.currentView);
  const dispatch = useDispatch();

  const views = [<Home />, <About />, <Experience />, <Info />, <Contact />];

  const handleNext = () => {
    if (currentView < views.length - 1) {
      dispatch(nextView());
    } else {
      dispatch(setView(0));
    }
  };

  const handlePrev = () => {
    if (currentView > 0) {
      dispatch(prevView());
    } else {
      dispatch(setView(views.length - 1));
    }
  };

  return (
    <div className="carousel">
      <button onClick={handlePrev} className="carousel-button left-button">
        <img className="left-button-img" src={leftArrowIcon} alt="left-button" />
      </button>
      <div className="carousel-view">{views[currentView]}</div>
      <button onClick={handleNext} className="carousel-button right-button">
        <img className="right-button-img" src={rightArrowIcon} alt="right-button" />
      </button>
    </div>
  );
};

export default Carousel;

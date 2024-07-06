import React from 'react';
import Carousel from './components/Carousel/Carousel';
import Header from './components/Header/Header';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Carousel />
    </div>
  );
};

export default App;

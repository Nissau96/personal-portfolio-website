import React from 'react';

//! Components
import Nav from './components/Nav';
import LandingPage from './components/LandingPage';
import SocialLinks from './components/SocialLinks';
import Header from './components/Header';
import About from './components/About';
import HomePage from './components/HomePage';


function App() {
  return (
    <div className='bg-primary text-gray-400'>
      <Header />
      {/* <HomePage /> */}
      <LandingPage />
      <SocialLinks />
      <About />
      <Nav />
    </div>
  );
}

export default App;

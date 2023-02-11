import React from 'react';

//! Components
import Nav from './components/Nav';
import LandingPage from './components/LandingPage';
import SocialLinks from './components/SocialLinks';


function App() {
  return (
    <div className='bg-gradient-to-b from-black to-gray-800 text-gray-500'>
      <LandingPage/>
      <SocialLinks/>
      <Nav />
    </div>
  );
}

export default App;

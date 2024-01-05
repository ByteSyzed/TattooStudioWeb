import React from 'react'

import {AboutUs, Footer, Gallery, Intro} from './container';
import {HeroSection, Navbar} from './components';
import './App.css'

const App = () => (
    <div>
      <Navbar />
      <Intro />
      <HeroSection />
      <Gallery />
      {/*
      <AboutUs />
      <Gallery />
      <Footer />
      */}
    </div>
);

export default App
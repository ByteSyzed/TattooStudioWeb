import React from 'react'

import {AboutUs, Footer, Gallery, Intro} from './container';
import {Navbar} from './components';
import './App.css'

const App = () => (
    <div>
      <Navbar />
      <Intro />
      <AboutUs />
      <Gallery />
      <Footer />
    </div>
);

export default App
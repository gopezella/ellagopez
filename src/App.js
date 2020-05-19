import React, { Component } from "react";

import Navbar from './components/Navbar'
import Home from './sections/home'
import About from './sections/about'
import Skills from './sections/skills'
import Travel from './sections/travel'
import Contact from './sections/contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Travel />
        <Skills />
        <Contact />
      </div>
    )
  }
}

export default App;

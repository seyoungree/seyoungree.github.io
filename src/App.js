import './App.css';
import Home from './Home.js';
import React from "react";
import NavbarComponent from './navigation/NavbarComponent';
import About from './About'
import Footer from './Footer'
function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <Home/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;

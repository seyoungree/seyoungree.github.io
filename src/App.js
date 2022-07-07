import './App.css';
import Home from './Home.js';
import React from "react";
import NavbarComponent from './navigation/NavbarComponent';
import About from './About'
function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <About/>
    </div>
  );
}

export default App;

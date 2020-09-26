// Add this library to enable outline by tabindex only when using keyboard.
import "focus-visible/dist/focus-visible.js";
import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js'

function App() {
  return (
    <div className="app">
      <Navbar>
      </Navbar>
    </div>
  );
}

export default App;

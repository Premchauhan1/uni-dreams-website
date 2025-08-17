import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';

import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <Navbar />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;

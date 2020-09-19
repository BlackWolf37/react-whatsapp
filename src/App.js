import React from 'react';
import './App.css';
import Sidebar from './Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar></Sidebar>
        {/* Chat window */}
      </div>
    </div>
  );
}

export default App;

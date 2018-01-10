import React from 'react';
import amazingLogo from './logo.png';
import './App.css';
import Form from './Form';

const App = () => (
  <div className="App">
    <header className="Alternate-App-header">
      <img src={amazingLogo} className="Alternate-App-logo" alt="logo" />
    </header>
    <Form />
  </div>
);

export default App;

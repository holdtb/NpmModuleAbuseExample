import React from 'react';
import amazingLogo from './logo.png';
import './App.css';
import Form from './Form';
import Cart from './Cart';

const App = () => (
  <div className="App">
    <header className="Alternate-App-header">
      <img src={amazingLogo} className="Alternate-App-logo" alt="logo" />
    </header>
    <Cart />
    <Form />
  </div>
);

export default App;

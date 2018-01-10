import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to NPM Exploits</h1>
    </header>
    <Form />
  </div>
);

export default App;

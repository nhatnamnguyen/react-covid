import React from 'react';
import logo from './logo.svg';
import './App.css';
import Global from './global/Global';
import Country from './country/Country';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Global/>
      <Country />
    </div>
  );
}

export default App;

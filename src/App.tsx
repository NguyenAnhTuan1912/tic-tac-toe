import React from 'react';
import logo from './logo.svg';
import './App.scss';

import Game from './Components/Game';

function App() {
  return (
    <div className="app">
      <div className="content">
        <div className="title">
          <h1>Online Tic-tac-toe</h1>
          <p>by Nguyen Anh Tuan</p>
        </div>
      </div>
      <Game />
    </div>
  );
}

export default App;

import './App.css';
import Button from '@mui/material/Button';
import logo from './Logo.png';
import React, { useState } from 'react';

function App() {

  const [color, setColor] = useState('red');
  const [text, setText] = useState('Subscribe');

  const handleButtonClick = () => {
    setColor('gray');
    setText('Subscribed');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" />
        <h1 className="App-title">TheIvoryCoder</h1>
        <h2 className="App-subtitle">Event Handlers in React.js</h2>

        <Button onClick={handleButtonClick} variant="contained" style={{
          backgroundColor: color,
          fontSize: 25,
          paddingLeft: 25,
          paddingRight: 25
        }}>{text}</Button>

        <a className="App-link" href="https://github.com/theivorycoder/react-event-handlers">https://github.com/theivorycoder/react-event-handlers</a>
      </header>
    </div>
  );
}

export default App;

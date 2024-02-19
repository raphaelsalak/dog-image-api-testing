import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {
  const [inputValue, setInputValue] = useState('');
  const [displayedValue, setDisplayedValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleDisplay = () => {
    setDisplayedValue(inputValue);
  };

  return (
    <div className="app">
      <div className='container-wrapper'>
        <div className='container'>
          <input 
            type="text" 
            value={inputValue} 
            onChange={handleInputChange} 
            placeholder="Type something..." 
          />
          <button onClick={handleDisplay}>submit</button>
          <p>Displayed Value: {displayedValue}</p>
        </div>
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Html5QrcodePlugin from './components/HtmlQrcodeScannerPlugin'

function App() {
  const [inputValue, setInputValue] = useState('');
  const [displayedValue, setDisplayedValue] = useState('');
  const [decodedText, setDecodedText] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleDisplay = () => {
    setDisplayedValue(inputValue);
  };

  const onNewScanResult = (decodedText, decodedResult) => {
    setDecodedText(decodedText)

      // handle decoded results here
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
      <Html5QrcodePlugin
            fps={10}
            qrbox={250}
            disableFlip={false}
            qrCodeSuccessCallback={onNewScanResult}
        />
      <div className='container-wrapper'>
        <a href={decodedText}>link</a>
      </div>
    </div>
  );
}

export default App;

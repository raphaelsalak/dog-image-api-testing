import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Html5QrcodePlugin from './components/HtmlQrcodeScannerPlugin'

function App() {
  const [inputValue, setInputValue] = useState('');
  const [displayedValue, setDisplayedValue] = useState('');
  const [decodedText, setDecodedText] = useState('');
  const [data, setData] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleDisplay = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    const fetchedData = await response.json()
    setImageUrl(fetchedData.message)
  };

  const onNewScanResult = (decodedText, decodedResult) => {
    setDecodedText(decodedText)

      // handle decoded results here
  };

  return (
    <div className="app">
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
        <Html5QrcodePlugin
              fps={10}
              qrbox={250}
              disableFlip={false}
              qrCodeSuccessCallback={onNewScanResult}
          />
        <div className='container'>
          <a href={decodedText}>link</a>
        </div>
        <div className='dog-container'>
          {imageUrl && <img src={imageUrl} alt="Displayed Image" />}
          {!imageUrl && <p>No image selected</p>}
          {imageUrl && <img src={imageUrl} alt="Displayed Image" />}
          {!imageUrl && <p>No image selected</p>}
          {imageUrl && <img src={imageUrl} alt="Displayed Image" />}
          {!imageUrl && <p>No image selected</p>}
          {imageUrl && <img src={imageUrl} alt="Displayed Image" />}
          {!imageUrl && <p>No image selected</p>}
        </div>
    </div>
  );
}

export default App;

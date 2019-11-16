import React, { useState } from 'react';
import QrReader from 'react-qr-reader';

export function QrScanner() {
  const [result, setResult] = useState('No result');

  const handleScan = data => {
    if (data) {
      setResult(data);
      document.localStorage.set('qr-code', data.toString())
    }
  };

  const handleError = err => {
    console.error(err)
  };

  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      <p>{result}</p>
    </div>
  );


}

export default QrScanner;

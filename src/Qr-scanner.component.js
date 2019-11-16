import React, { useState } from 'react'
import {FlipCameraIos} from '@material-ui/icons';

import QrReader from 'react-qr-reader'

export function QrScanner() {
  const [setResult] = useState('No result');

  const handleScan = data => {
    if (data) {
      setResult(data);
      console.log(data);
      // TODO: go to next screen
      document.localStorage.set('qr-code', data.toString())
    }
  };

  function flipCamera() {
    alert('Hello!');
  }

  const handleError = err => {
    console.error(err)
  };

  return (
    <section>
      <section className="Qr-scanner">
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
      />
      </section>
      <section className="Flip-camera" onClick={flipCamera}>
        <FlipCameraIos
          theme="secondary"
          style={{fontSize: 40, color: "acquawhite"}}></FlipCameraIos>
      </section>
    </section>
  );
}

export default QrScanner;

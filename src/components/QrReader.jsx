import React, {useState} from "react";
import QrReader from "react-qr-reader";
import axios from 'axios';
import config from '../assets/config';

import "../styles/qr-reader.less";

export function QrScanner() {
  const [setResult] = useState("No result");

  const handleScan = baggageId => {
    if (baggageId) {
      localStorage.setItem('qr-code', baggageId.toString());
      axios.put(`${config.baseUrl}${config.baggages}`, {
        baggageId: baggageId,
        deviceId: localStorage.getItem('fbToken')
      }).then(res => {
          console.log('scanned sent to backend');
          console.log(res);
        }).catch(error => {

          console.log('there is some error, try again');
      });
    }
  };

  const handleError = err => {
    console.error(err);
  };

  return (
    <section className="Qr-scanner">
      <QrReader delay={3000} onError={handleError} onScan={handleScan}/>
    </section>
  );
}

export default QrScanner;

import React, {useState} from "react";
import QrReader from "react-qr-reader";
import axios from 'axios';
import config from '../assets/config';
import "../styles/qr-reader.less";
import * as api from "../services/adminApi.js";

export function QrScanner({status}) {
  const updateDeviceId = (baggageId) => {
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

  const updateBaggageStatus = (baggageId, status) => {
    api.updateBaggageStatus(
      baggageId,
      status,
      "Istanbul"
    ).then(res => {
        console.log('status update');
        console.log(res);
      }).catch(error => {
        console.log('there is some error, try again');
    });
  };

  const handleScan = baggageId => {
    if (status) {
      updateBaggageStatus(baggageId, status);
    } else {
      updateDeviceId(baggageId);
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

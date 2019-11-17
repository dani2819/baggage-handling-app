import React, {useState} from "react";
import QrReader from "react-qr-reader";
import axios from 'axios';
import config from '../assets/config';
import "../styles/qr-reader.less";
import * as api from "../services/adminApi.js";

export function QrScanner({status, history}) {
  const updateDeviceId = (baggageId) => {
    if (baggageId) {
      baggageId = baggageId.substring(15, baggageId.length);
      localStorage.setItem('qr-code', baggageId.toString());
      axios.get("https://rafay-jun-int-backend.azurewebsites.net/api/baggages/" + baggageId + "/" + localStorage.getItem('fbToken'))
      .then(res => {
          history.push("/");
          console.log('scanned sent to backend');
          console.log(res);
        }).catch(error => {
          console.log('there is some error, try again');
      });
    }
  };

  const updateBaggageStatus = (baggageId, status) => {
    if (baggageId) {
      baggageId = baggageId.substring(15, baggageId.length);
      api.updateBaggageStatus(
        baggageId,
        status,
        "Istanbul"
      ).then(res => {
          history.push("/");
          console.log('status update');
          console.log(res);
        }).catch(error => {
          console.log('there is some error, try again');
      });
    }
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

import React, {useEffect, useState} from "react";
import { Button } from "antd-mobile";
import QRCode from 'react-qr-code';
import '../styles/Admin.less';
import axios from 'axios';
import * as api from '../services/adminApi.js';
import QrScanner from './QrReader';

const baggage_status = [
  "CHEKCED_IN",
  "LOADED",
  "UNLOADED",
  "CLAIMED",
  "DAMAGED",
  "MISSING"
];

const BaggageHandler = ({changeTitle}) => {
  const [status, setStatus] = useState('');

  const renderStatus = () => {
    return baggage_status.map((status) => {
      return (
        <Button onClick = {() => setStatus(status)} style={{"margin-top": "10px"}}>
          { status }
        </Button>
      );
    })
  };

  useEffect(() => {
    changeTitle('Baggage Handler');
  }, []);

  return(
    <div>
      {status === '' ?
        renderStatus() :
        <QrScanner />
    }
    </div>
  );
}

export default BaggageHandler;

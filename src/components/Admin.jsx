import React, {useEffect, useState} from "react";
import { Button } from "antd-mobile";
import QRCode from 'react-qr-code';
import '../styles/Admin.less';
import axios from 'axios';
import * as api from '../services/adminApi.js';

const uuid = require('uuid/v1');

const Admin = ({changeTitle}) => {
  const [id, setId] = useState('');

  useEffect(() => {
    changeTitle('Admin Panel');
  }, []);

  const generateQR = () => {
    const baggageId = uuid();
    const trimmedId = baggageId.substring(15, baggageId.length);
    const destination = "Munich";
    const source = "Helsinki";

    // send to backend
    api.sendBaggageData(trimmedId, "Munich", "Helsinki")
      .then(function (response) {
        console.log(response);
      })
        .catch(function (error) {
        console.log(error);
      });

    setId(baggageId);
  }

  return(
    <div>
      <Button onClick = {() => generateQR()} style={{"margin-top": "10px"}}>
        Generate QR code
      </Button>
      {
        id !== '' && (
          <div className="qr-code-generator">
            <QRCode value = {id} />
          </div>
        )
      }
    </div>
  );
}

export default Admin;

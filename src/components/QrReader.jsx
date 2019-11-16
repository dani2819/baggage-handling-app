import React, { useState } from "react";
import QrReader from "react-qr-reader";
import "../styles/qr-reader.less";

export function QrScanner() {
  const [result, setResult] = useState("No result");

  const handleScan = data => {
    if (data) {
      setResult(data);
      localStorage.setItem("qr-code", data.toString());
    }
  };

  const handleError = err => {
    console.error(err);
  };
  return (
    <section className="Qr-scanner">
      <QrReader delay={300} onError={handleError} onScan={handleScan} />
    </section>
  );
}

export default QrScanner;

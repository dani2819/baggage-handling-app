import React from "react";
import Button from "antd/es/button";

import QrScanner from "./Qr-scanner.component";
import "./App.css";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button type="primary">Button</Button>
        <QrScanner></QrScanner>
      </header>
      <div id="root">
      </div>

    </div>
  );
}

export default App;

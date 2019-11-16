import React from "react";
import Button from "antd/es/button";
import QrScanner from "./QrReader";
import "../styles/App.less";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <QrScanner />
      </header>
      <div id="root">
      </div>
    </div>
  );
}

export default App;

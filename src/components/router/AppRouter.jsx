import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../Home';
import QrReader from '../QrReader';

const getRoutes = () => {
    return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/qr-reader" component={ QrReader } />
        </Switch>
      </BrowserRouter>
    );
};

export default getRoutes;

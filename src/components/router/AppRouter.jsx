import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { WingBlank } from "antd-mobile";
import Home from "../Home";
import QrReader from "../QrReader";
import Header from "../Header";

class getRoutes extends React.Component {
  state = { title: "Home" };
  changeTitle(title) {
    this.setState({ title });
  }
  render() {
    return (
      <BrowserRouter>
        <Header title={this.state.title} />

        <WingBlank>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Home {...props} changeTitle={this.changeTitle.bind(this)} />
              )}
            />
            <Route
              path="/qr-reader"
              changeTitle={this.changeTitle}
              Component={QrReader}
            />
          </Switch>
        </WingBlank>
      </BrowserRouter>
    );
  }
}

export default getRoutes;

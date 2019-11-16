import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { WingBlank } from "antd-mobile";
import Home from "../Home";
import QrReader from "../QrReader";
import Header from "../Header";
import Trip from "../Trip";
import Admin from "../Admin";
import BaggageHandler from "../BaggageHandler";

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
              component={QrReader}
            />
            <Route
              path="/trip/:id"
              render={props => (
                <Trip {...props} changeTitle={this.changeTitle.bind(this)} />
              )}
              exact
            />

            <Route
              path="/admin"
              render={props => (
                <Admin {...props} changeTitle={this.changeTitle.bind(this)} />
              )}
            />

            <Route
              path="/baggage-handler"
              render={props => (
                <BaggageHandler {...props} changeTitle={this.changeTitle.bind(this)} />
              )}
            />

            <Route
              path="/**"
              render={props => (
                <Home {...props} changeTitle={this.changeTitle.bind(this)} />
              )}
            />
          </Switch>
        </WingBlank>
      </BrowserRouter>
    );
  }
}

export default getRoutes;

import React, { Component } from "react";
import { NavBar } from "antd-mobile";

class Header extends Component {
  render() {
    return (
      <NavBar>
        <b>{this.props.title}</b>
      </NavBar>
    );
  }
}

export default Header;

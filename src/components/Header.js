import React, { Component } from "react";
import { NavBar } from "antd-mobile";

class Header extends Component {
  render() {
    return <NavBar>{this.props.title}</NavBar>;
  }
}

export default Header;

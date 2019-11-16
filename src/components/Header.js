import React, { Component } from "react";
import { NavBar, WhiteSpace } from "antd-mobile";

class Header extends Component {
  render() {
    return (
      <>
        <NavBar>
          <b>{this.props.title}</b>
        </NavBar>
        <WhiteSpace />
      </>
    );
  }
}

export default Header;

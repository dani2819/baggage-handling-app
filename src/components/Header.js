import React, { Component } from "react";
import { Icon } from "antd";
import { NavBar, WhiteSpace } from "antd-mobile";

class Header extends Component {
  render() {
    return (
      <>
        <NavBar
          mode="dark"
          leftContent="Back"
          rightContent={[
            <Icon
              key="0"
              type="reload"
              style={{ marginRight: "16px" }}
              onClick={() => {
                window.location.reload();
              }}
            />
          ]}
        >
          <b>{this.props.title}</b>
        </NavBar>
        <WhiteSpace />
      </>
    );
  }
}

export default Header;

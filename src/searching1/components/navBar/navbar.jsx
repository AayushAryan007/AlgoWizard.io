import React, { Component } from "react";
import "./nav.css";

// Second way of presenting a component via Class method
class NavBar extends Component {
  render() {
    return (
      <div className="container-fluid flex flex-row justify-center">
        <span
          id="appName"
          className="badge m-2 badge-primary"
          style={{
            fontSize: "45px",
            fontStyle: "bold",

            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
            fontFamily:
              '"Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif',
          }}
        >
          Searching Algorithms
        </span>
      </div>
    );
  }
}

export default NavBar;

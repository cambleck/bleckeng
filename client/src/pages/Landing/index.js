import React, { Component } from "react";
import Display from "./Display";
import Sidenav from "./Sidenav/";

class Landing extends Component {
  state = {
    display: this.props.display,
  };

  changeDisplay = (display) => {
    this.setState({ display });
  };

  render() {
    const { display } = this.state;

    return (
      <div>
        <Sidenav
          onClick={(display) => this.changeDisplay(display)}
          display={display}
        />
        <div className="main myContainer">
          <Display display={display} />
        </div>
      </div>
    );
  }
}

export default Landing;

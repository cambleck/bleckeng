import React, { Component } from "react";
import Display from "./Display";
import Header from "./Header/";

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
        <Header
          onClick={(display) => this.changeDisplay(display)}
          display={display}
        />
        <div className="mainpage-container">
          <Display display={display} />
        </div>
      </div>
    );
  }
}

export default Landing;

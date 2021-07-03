import React from "react";
import M from "materialize-css";
import Header from "./Header/";
import Body from "./Body/";
import Footer from "./Footer/";
import "./index.css";

class Sidenav extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    const { onClick, display } = this.props;
    console.log(onClick, display);
    return (
      <ul
        id="slide-out"
        className="sidenav sidenav-fixed sidenav-background font-secondary "
      >
        <Header />

        <Body onClick={onClick} display={display} />

        <Footer />
      </ul>
    );
  }
}

export default Sidenav;

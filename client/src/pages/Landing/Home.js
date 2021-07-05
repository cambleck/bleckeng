import React from "react";
import image from "../../images/beach.jpeg";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",

        position: "relative",

        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <button
        className="clear-button transparent"
        style={{ marginLeft: -50, borderRadius: "5px 0px 0px 5px " }}
      >
        <FaAngleLeft size={30} />
      </button>
      <div
        style={{
          width: "75%",
          height: "75%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 5,
          fontWeight: "bold",
          textShadow: "0px 0px 10px black",
          fontSize: 28,
          background: "rgba(0,0,10,.5)",
          boxShadow: "0px 0px 8px black",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <div style={{ margin: 20 }}>
            <div style={{ marginBottom: 10, marginTop: -20 }}>
              BLECK ENGINEERING
            </div>
            <div style={{ fontSize: 16, fontWeight: "normal" }}>
              Providing context sensitive solutions since 1945
            </div>
            <button className="contact-button">CONTACT</button>
          </div>
        </div>
        <div style={{ display: "flex", position: "absolute", bottom: 20 }}>
          <div>●</div>
          <div>◦</div>
          <div>◦</div>
          <div>◦</div>
        </div>
      </div>
      <button
        className="clear-button transparent"
        style={{ marginRight: -50, borderRadius: "0px 5px 5px 0px " }}
      >
        <FaAngleRight size={30} />
      </button>
    </div>
  );
};

export default Home;

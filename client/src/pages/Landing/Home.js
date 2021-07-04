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
        flexDirection: "column",
        position: "relative",

        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <div
        style={{
          border: "2px solid rgb(200,200,200)",
          width: "75%",
          height: "75%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 3,
          fontWeight: "bold",
          textShadow: "0px 0px 20px black",
          fontSize: 24,

          boxShadow: "0px 0px 20px gray",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <button className="clear-button" style={{ marginLeft: -40 }}>
            <FaAngleLeft />
          </button>
          <div style={{ margin: 20 }}>
            <div style={{ marginBottom: 10, marginTop: -20 }}>
              BLECK ENGINEERING
            </div>
            <div style={{ fontSize: 16, fontWeight: "normal" }}>
              Providing context sensitive solutions since 1945
            </div>
            <button className="contact-button">CONTACT</button>
          </div>
          <button className="clear-button" style={{ marginRight: -40 }}>
            <FaAngleRight />
          </button>
        </div>
        <div style={{ display: "flex", position: "absolute", bottom: 20 }}>
          <div>●</div>
          <div>◦</div>
          <div>◦</div>
          <div>◦</div>
        </div>
      </div>
    </div>
  );
};

export default Home;

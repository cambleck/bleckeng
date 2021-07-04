import React from "react";
import image from "../../images/beach.jpeg";

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
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 3,
          fontWeight: "bold",
          textShadow: "0px 0px 20px black",
          fontSize: 24,
          flexDirection: "column",
          boxShadow: "0px 0px 20px gray",
          textAlign: "center",
        }}
      >
        <div style={{ marginBottom: 10, marginTop: -20 }}>
          BLECK ENGINEERING
        </div>
        <div style={{ fontSize: 16, fontWeight: "normal" }}>
          Providing context sensitive solutions since 1945
        </div>
      </div>
    </div>
  );
};

export default Home;

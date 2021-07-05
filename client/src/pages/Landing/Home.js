import React from "react";
import _ from "lodash";
import image from "../../images/lfh.jpeg";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { socialList } from "./Sidenav/Body/itemsList";

const SocialList = ({ list }) => {
  return _.map(list, ({ icon, href, label }) => {
    return (
      <a
        className="flex-center"
        style={{
          color: "white",
          margin: 8,
          cursor: "pointer",
        }}
        to={href}
        key={label}
      >
        {icon}
      </a>
    );
  });
};

const Home = () => {
  return (
    <>
      <div
        id="home"
        style={{
          display: "flex",
          width: "100%",
          height: "90vh",
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
            fontSize: 40,
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
            <div className="flex-center column" style={{ margin: 20 }}>
              <div style={{ marginBottom: 10 }}>
                BLECK ENGINEERING{" "}
                <div
                  style={{
                    height: 1,
                    width: "100%",
                    background: "white",
                    marginBottom: 10,
                  }}
                ></div>
              </div>

              <div style={{ fontSize: 16, fontWeight: "normal" }}>
                Providing context sensitive solutions since 1945
              </div>
              <button className="contact-button">CONTACT</button>
              <div
                style={{
                  display: "flex",
                  marginTop: 20,
                }}
              >
                <SocialList list={socialList} />
              </div>
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
      <div style={{ width: "100%", height: 1000, background: "" }}>
        <div>
          Bleck Engineering provides a full complement of civil engineering
          services for government, public facilities and private developers. In
          existence since 1945, we take projects from conception through
          construction. Our wide-ranging engineering experience includes design
          and construction of every type of infrastructure system.
        </div>
      </div>
    </>
  );
};

export default Home;

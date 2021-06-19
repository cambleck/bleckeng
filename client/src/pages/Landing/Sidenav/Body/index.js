import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import { menuList } from "./itemsList";
import "./index.css";

const MenuList = ({ list, onClick, display }) => {
  console.log(display);
  return _.map(list, ({ icon, label, pageType }) => {
    return (
      <Link
        className="sidenav-button sidenav-close"
        style={{
          display: "flex",
          alignItems: "center",
          color: display === pageType && "#00B797",
          paddingLeft: 35,
        }}
        to={`/${pageType.toLowerCase()}`}
        key={label}
        onClick={() => onClick(pageType ? pageType : "")}
      >
        {pageType}
      </Link>
    );
  });
};

const renderImage = ({ type, image }) => {
  return (
    <img
      src={image}
      alt="img"
      style={{
        width: 25,
        height: 25,
        borderRadius: type === "account" ? "50%" : 5,
        marginRight: 7,
      }}
    />
  );
};

const Body = ({ onClick, display }) => {
  return (
    <div className="body">
      <MenuList list={menuList} onClick={onClick} display={display} />
    </div>
  );
};

export default Body;

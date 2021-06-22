import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import { menuList, socialList } from "./itemsList";
import "./index.css";

const MenuList = ({ list, onClick, display }) => {
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

const Body = ({ onClick, display }) => {
  return (
    <div className="sidenav-body">
      <MenuList list={menuList} onClick={onClick} display={display} />
    </div>
  );
};

export default Body;

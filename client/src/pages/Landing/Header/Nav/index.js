import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import { menuList } from "./itemsList";

const MenuList = ({ list, onClick, display }) => {
  return _.map(list, ({ icon, label, pageType }) => {
    return (
      <Link
        to={`/${pageType.toLowerCase()}`}
        key={label}
        className="nav-tab flex-center column active"
        onClick={() => onClick(pageType ? pageType : "")}
      >
        <div>{label}</div>
        <div style={{ fontSize: 30, marginTop: -15 }}>
          {display === pageType && "⌙"}
        </div>
      </Link>
    );
  });
};

const Nav = ({ onClick, display }) => {
  return (
    <div className="flex-center nav" style={{ marginRight: 30 }}>
      <ul className="tabs flex-center">
        <MenuList list={menuList} onClick={onClick} display={display} />
      </ul>
    </div>
  );
};

export default Nav;

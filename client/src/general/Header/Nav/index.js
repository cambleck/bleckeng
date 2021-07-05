import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import { menuList } from "./itemsList";

const MenuList = ({ list, onClick, display }) => {
  return _.map(list, ({ icon, label, pageType }) => {
    return (
      <li className="tab col s3">
        <Link
          to={`/${pageType.toLowerCase()}`}
          key={label}
          className="nav-tab flex-center column"
          onClick={() => onClick(pageType ? pageType : "")}
        >
          <div>{pageType}</div>
          <div style={{ marginTop: -28, fontSize: 20 }}>
            {display === pageType && "▪︎"}
          </div>
        </Link>
      </li>
    );
  });
};

const Nav = ({ onClick, display }) => {
  return (
    <div className="col s12 flex-center">
      <ul className="tabs flex-center ">
        <MenuList list={menuList} onClick={onClick} display={display} />
      </ul>
    </div>
  );
};

export default Nav;

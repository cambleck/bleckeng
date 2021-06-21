import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import { menuList, pinnedList } from "./itemsList";
import MoreDropdown from "./MoreDropdown";
import "./index.css";

const ShowMoreButton = ({ icon, label }) => {
  return (
    <div
      className="sidenav-button dropdown-trigger"
      href="./"
      data-target="dropdown2"
      style={{
        display: "flex",
        alignItems: "center",
        paddingLeft: 25,
        width: "100%",
      }}
    >
      <i
        className="material-icons small"
        style={{ marginRight: icon !== "" && 10 }}
      >
        {icon}
      </i>
      <span id="sideNav-label" style={{ textAlign: "left" }}>
        {label}
      </span>

      <MoreDropdown />
    </div>
  );
};

const MenuList = ({ list, onClick, display }) => {
  console.log(display);
  return _.map(list, ({ icon, label, pageType }) => {
    return (
      <>
        {pageType === "more" ? (
          <ShowMoreButton icon={icon} label={label} />
        ) : (
          <Link
            className="sidenav-button sidenav-close"
            style={{
              display: "flex",
              alignItems: "center",
              color: display === pageType && "#00B797",
              paddingLeft: 25,
            }}
            to={`/${pageType.toLowerCase()}`}
            key={label}
            onClick={() => onClick(pageType ? pageType : "")}
          >
            <i
              className="material-icons small"
              style={{ marginRight: icon !== "" && 10 }}
            >
              {icon}
            </i>
            <span id="sideNav-label" style={{ textAlign: "left" }}>
              {label}
            </span>
          </Link>
        )}
      </>
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

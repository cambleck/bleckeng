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
const PinnedList = ({ list, onClick, display }) => {
  console.log(display);
  return _.map(list, ({ name, type, username, image }) => {
    return (
      <Link
        className="sidenav-button sidenav-close"
        style={{
          display: "flex",
          alignItems: "center",
          paddingLeft: 20,
        }}
        to={`/${username.toLowerCase()}`}
        key={username}
        onClick={() => onClick("PROFILE")}
      >
        {renderImage({ type, image })}
        <span
          id={"sideNav-label"}
          style={{
            textAlign: "left",
            maxWidth: 150,
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
            fontSize: 14,
          }}
        >
          {name}
        </span>
      </Link>
    );
  });
};

const divider = () => {
  return (
    <div
      style={{
        width: "100%",
        height: 1,
        boxShadow: "0px 0px 2px rgb(20,30,50)",
        marginTop: "20px",
        marginBottom: 15,
      }}
    ></div>
  );
};

const pinnedLabel = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: 10,
        color: "rgb(190,190,190)",
        margin: 15,
      }}
    >
      <i className="material-icons tiny" style={{ marginRight: 5 }}>
        radio_button_checked
      </i>{" "}
      <span>Pinned</span>
    </div>
  );
};

const Body = ({ onClick, display }) => {
  return (
    <div className="body">
      <MenuList list={menuList} onClick={onClick} display={display} />
      {divider()}
      {pinnedLabel()}
      <PinnedList list={pinnedList} onClick={onClick} display={display} />
    </div>
  );
};

export default Body;

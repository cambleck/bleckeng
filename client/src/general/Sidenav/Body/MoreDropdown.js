import React from "react";

const MoreDropdown = () => {
  return (
    <ul id="dropdown2" class="dropdown-content more-content">
      <li>
        <a href="../settings">
          <i className="material-icons">settings</i>Settings
        </a>
      </li>
      <li>
        <a>
          <i className="material-icons">help</i>Help
        </a>
      </li>
      <li class="divider"></li>
      <li>
        <a>
          <i className="material-icons">exit_to_app</i>Logout
        </a>
      </li>
    </ul>
  );
};

export default MoreDropdown;

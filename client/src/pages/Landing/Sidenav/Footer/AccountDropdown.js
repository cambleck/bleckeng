import React from "react";

const AccountDropdown = () => {
  return (
    <ul id="dropdown1" class="dropdown-content">
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

export default AccountDropdown;

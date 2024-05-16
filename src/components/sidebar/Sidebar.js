import React from "react";

function Sidebar() {
  return (
    <div id="sidebar">
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <i class="fa-solid fa-gauge"></i> Dashboard
        </li>
        <li className="sidebar-list-item">
          <i class="fa-solid fa-building"></i>
          Company
        </li>
        <li className="sidebar-list-item">
          <i class=" fa-solid fa-rocket"></i>
          Project
        </li>
        <li className="sidebar-list-item1">Create Project</li>
        <li className="sidebar-list-item2">Manage Project</li>
        <li className="sidebar-list-item">
          <i class="fa-solid fa-file"></i>
          Reporting
        </li>
        <li className="sidebar-list-item">
          <i class="fa-solid fa-user-tie"></i>
          Administration
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

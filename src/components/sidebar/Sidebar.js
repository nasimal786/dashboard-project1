import React from "react";

function Sidebar() {
  return (
    <div id="sidebar">
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <i class="fa-solid fa-gauge"></i> 
          Dashboard
          <i className="arrow fa-solid fa-chevron-right"></i>
        </li>
        <li className="sidebar-list-item">
          <i class="fa-solid fa-building"></i>
          Company
          <i className="arrow fa-solid fa-chevron-right"></i>
        </li>
        <li className="sidebar-list-item">
          <i class=" fa-solid fa-rocket"></i>
          Project
          <i className="arrow fa-solid fa-chevron-down"></i>
        </li>
        <li className="sidebar-list-item1">Create Project</li>
        <li className="sidebar-list-item2">Manage Project</li>
        <li className="sidebar-list-item">
          <i class="fa-solid fa-file"></i>
          Reporting
          <i className="arrow fa-solid fa-chevron-right"></i>
        </li>
        <li className="sidebar-list-item">
          <i class="fa-solid fa-user-tie"></i>
          Administration
          <i className="arrow fa-solid fa-chevron-right"></i>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

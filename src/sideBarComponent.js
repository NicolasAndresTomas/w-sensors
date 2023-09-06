//import libaries
import React from 'react';
import './index.css'; 
import { NavLink } from "react-router-dom";

//side bar function
function SideBarComponent() {
  return (
    <div className="sidebar">
      <div className="sidebar-title">Account</div>
      <div className="sidebar-links">
        <NavLink to="/overview" activeClassName="active">Overview</NavLink>
        <NavLink to="/profile" activeClassName="active">Profile Info</NavLink>
      </div>
    </div>
  );
}

export default SideBarComponent;
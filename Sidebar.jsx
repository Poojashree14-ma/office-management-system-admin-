import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/employees">Employees</Link>
      <Link to="/attendance">Attendance</Link>
      <Link to="/leave">Leave</Link>
      <Link to="/tasks">Tasks</Link>
      <Link to="/reports">Reports</Link>
      <Link to="/notifications">Notifications</Link>
      <Link to="/profile">Profile</Link>
    </div>
  );
};

export default Sidebar;
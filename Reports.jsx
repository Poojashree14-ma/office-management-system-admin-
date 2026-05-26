import React from "react";

const Reports = () => {

  return (
    <div className="content">

      <h1>Reports</h1>

      <div className="card">
        <h3>Total Employees</h3>
        <p>25</p>
      </div>

      <div className="card">
        <h3>Attendance Today</h3>
        <p>20 Present</p>
      </div>

      <div className="card">
        <h3>Pending Leaves</h3>
        <p>5 Requests</p>
      </div>

      <div className="card">
        <h3>Tasks Completed</h3>
        <p>18 Completed</p>
      </div>

    </div>
  );
};

export default Reports;
import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {

  const [data, setData] = useState({
    employees: 0,
    attendance: 0,
    leaves: 0,
  });

  useEffect(() => {
    fetchDashboard();
  }, []);


  const fetchDashboard = async () => {

    const res = await axios.get(
      "http://localhost:8000/dashboard"
    );

    setData(res.data);
  };


  return (
    <div>
      <h1>Dashboard</h1>

      <div className="cards">
        <div className="card">
          Employees: {data.employees}
        </div>

        <div className="card">
          Attendance: {data.attendance}
        </div>

        <div className="card">
          Leaves: {data.leaves}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
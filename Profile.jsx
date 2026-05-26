import React from "react";

const Profile = () => {

  const admin = {
    name: "Admin",
    email: "admin@gmail.com",
    password: "123456",
  };

  return (
    <div className="content">

      <h1>Profile</h1>

      <div className="employee-card">

        <h3>Admin Details</h3>

        <p>
          <strong>Name:</strong>
          {" "}
          {admin.name}
        </p>

        <p>
          <strong>Email:</strong>
          {" "}
          {admin.email}
        </p>

        <p>
          <strong>Password:</strong>
          {" "}
          {admin.password}
        </p>

      </div>

    </div>
  );
};

export default Profile;
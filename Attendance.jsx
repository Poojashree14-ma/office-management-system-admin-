import React, { useState } from "react";

const Attendance = () => {

  const [attendance, setAttendance] = useState([]);

  const [form, setForm] = useState({
    empId: "",
    name: "",
    checkIn: "",
    checkOut: "",
    status: "",
  });

  const handleSubmit = (e) => {

    e.preventDefault();

    setAttendance([
      ...attendance,
      form
    ]);

    setForm({
      empId: "",
      name: "",
      checkIn: "",
      checkOut: "",
      status: "",
    });
  };

  return (
    <div className="content">

      <h1>Attendance</h1>

      <form onSubmit={handleSubmit}>

        <input
          placeholder="Employee ID"
          value={form.empId}
          onChange={(e) =>
            setForm({
              ...form,
              empId: e.target.value
            })
          }
        />

        <input
          placeholder="Employee Name"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value
            })
          }
        />

        <input
          type="time"
          value={form.checkIn}
          onChange={(e) =>
            setForm({
              ...form,
              checkIn: e.target.value
            })
          }
        />

        <input
          type="time"
          value={form.checkOut}
          onChange={(e) =>
            setForm({
              ...form,
              checkOut: e.target.value
            })
          }
        />

        <select
          value={form.status}
          onChange={(e) =>
            setForm({
              ...form,
              status: e.target.value
            })
          }
        >
          <option value="">
            Select Status
          </option>

          <option value="Present">
            Present
          </option>

          <option value="Absent">
            Absent
          </option>
        </select>

        <button type="submit">
          Save Attendance
        </button>

      </form>

      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {attendance.map((item, index) => (

            <tr key={index}>
              <td>{item.empId}</td>
              <td>{item.name}</td>
              <td>{item.checkIn}</td>
              <td>{item.checkOut}</td>
              <td>{item.status}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default Attendance;
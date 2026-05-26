import React, { useState } from "react";

const Leave = () => {

  const [leaves, setLeaves] = useState([]);

  const [form, setForm] = useState({
    empId: "",
    reason: "",
    days: "",
  });

  const handleSubmit = (e) => {

    e.preventDefault();

    setLeaves([
      ...leaves,
      form
    ]);

    setForm({
      empId: "",
      reason: "",
      days: "",
    });
  };

  return (
    <div className="content">

      <h1>Leave Management</h1>

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

        <textarea
          placeholder="Reason for Leave"
          value={form.reason}
          onChange={(e) =>
            setForm({
              ...form,
              reason: e.target.value
            })
          }
        />

        <input
          type="number"
          placeholder="Days of Leave"
          value={form.days}
          onChange={(e) =>
            setForm({
              ...form,
              days: e.target.value
            })
          }
        />

        <button type="submit">
          Apply Leave
        </button>

      </form>

      <table>

        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Reason</th>
            <th>Days</th>
          </tr>
        </thead>

        <tbody>

          {leaves.map((item, index) => (

            <tr key={index}>
              <td>{item.empId}</td>
              <td>{item.reason}</td>
              <td>{item.days}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default Leave;
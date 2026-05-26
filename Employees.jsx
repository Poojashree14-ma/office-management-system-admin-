import React, { useEffect, useState } from "react";
import axios from "axios";

const Employees = () => {

  const [employees, setEmployees] = useState([]);

  const [form, setForm] = useState({
    name: "",
    department: "",
    designation: "",
    email: "",
  });

  // FETCH EMPLOYEES
  const fetchEmployees = async () => {

    try {

      const res = await axios.get(
        "http://localhost:8000/employees"
      );

      setEmployees(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  // LOAD DATA
  useEffect(() => {
    fetchEmployees();
  }, []);

  // ADD EMPLOYEE
  const addEmployee = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:8000/employees",
        form
      );

      fetchEmployees();

      setForm({
        name: "",
        department: "",
        designation: "",
        email: "",
      });

    } catch (error) {
      console.log(error);
    }
  };

  // DELETE EMPLOYEE
  const deleteEmployee = async (id) => {

    try {

      await axios.delete(
        `http://localhost:8000/employees/${id}`
      );

      fetchEmployees();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="content">

      <h1>Employees</h1>

      <form onSubmit={addEmployee}>

        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="Department"
          value={form.department}
          onChange={(e) =>
            setForm({
              ...form,
              department: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="Designation"
          value={form.designation}
          onChange={(e) =>
            setForm({
              ...form,
              designation: e.target.value,
            })
          }
        />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />

        <button type="submit">
          Add Employee
        </button>

      </form>

      <div>

        {employees.map((emp) => (

          <div
            key={emp.id}
            className="employee-card"
          >

            <h3>{emp.name}</h3>

            <p>
              Department: {emp.department}
            </p>

            <p>
              Designation: {emp.designation}
            </p>

            <p>
              Email: {emp.email}
            </p>

            <button
              onClick={() =>
                deleteEmployee(emp.id)
              }
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Employees;
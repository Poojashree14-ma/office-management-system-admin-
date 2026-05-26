import React, { useState } from "react";

const Tasks = () => {

  const [tasks, setTasks] = useState([]);

  const [form, setForm] = useState({
    empId: "",
    task: "",
    deadline: "",
  });

  const handleSubmit = (e) => {

    e.preventDefault();

    setTasks([
      ...tasks,
      form
    ]);

    setForm({
      empId: "",
      task: "",
      deadline: "",
    });
  };

  return (
    <div className="content">

      <h1>Task Management</h1>

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
          placeholder="Assign Task"
          value={form.task}
          onChange={(e) =>
            setForm({
              ...form,
              task: e.target.value
            })
          }
        />

        <input
          type="date"
          value={form.deadline}
          onChange={(e) =>
            setForm({
              ...form,
              deadline: e.target.value
            })
          }
        />

        <button type="submit">
          Assign Task
        </button>

      </form>

      <table>

        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Task</th>
            <th>Deadline</th>
          </tr>
        </thead>

        <tbody>

          {tasks.map((item, index) => (

            <tr key={index}>
              <td>{item.empId}</td>
              <td>{item.task}</td>
              <td>{item.deadline}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default Tasks;
import React, { useState } from "react";
import UserList from "./UserList";

const App = () => {
  const [users, setUsers] = useState([
    { name: "Alice", email: "alice@example.com", age: 25 },
    { name: "Bob", email: "bob@example.com", age: 30 },
  ]);

  const [form, setForm] = useState({ name: "", email: "", age: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!emailRegex.test(form.email)) newErrors.email = "Invalid email.";
    if (!form.age || isNaN(form.age) || Number(form.age) <= 0)
      newErrors.age = "Age must be a positive number.";

    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      setUsers([...users, { ...form, age: Number(form.age) }]);
      setForm({ name: "", email: "", age: "" });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>👤 User List</h1>

      <form onSubmit={handleAddUser} style={{ marginBottom: "20px" }}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />
          <div style={{ color: "red" }}>{errors.name}</div>
        </div>

        <div>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <div style={{ color: "red" }}>{errors.email}</div>
        </div>

        <div>
          <input
            type="text"
            name="age"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
          />
          <div style={{ color: "red" }}>{errors.age}</div>
        </div>

        <button type="submit" style={{ marginTop: "10px" }}>
          Add User
        </button>
      </form>

      <UserList users={users} />
    </div>
  );
};

export default App;

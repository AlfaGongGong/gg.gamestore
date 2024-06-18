import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar.js";
import Widget from "../components/Widget/Widget.js";

function AdminPage() {
  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({ username: "", email: "" });

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  const handleEdit = (user) => {
    setEditing(true);
    setFormData({ username: user.username, email: user.email });
  };

  const handleSave = async () => {
    // Perform update operation with formData
    setEditing(false);
  };

  const handleDelete = async (userId) => {
    // Perform delete operation for the user with userId
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Admin Dashboard</h1>
        {users.map((user) => (
          <Widget key={user.id}>
            {editing && user.id === formData.id ? (
              <div>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <button onClick={handleSave}>Save</button>
              </div>
            ) : (
              <>
                <p>{user.username}</p>
                <p>{user.email}</p>
                <button onClick={() => handleEdit(user)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </>
            )}
          </Widget>
        ))}
      </div>
    </>
  );
}

export default AdminPage;

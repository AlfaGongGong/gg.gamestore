import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar.js";

function UserProfile() {
  const [user, setUser] = useState({});
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({ username: "", email: "" });

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch("/api/user");
      const data = await response.json();
      setUser(data);
    };

    fetchUser();
  }, []);

  const handleEdit = () => {
    setEditing(true);
    setFormData({ username: user.username, email: user.email });
  };

  const handleSave = async () => {
    // Perform update operation with formData
    setEditing(false);
  };

  const handleDelete = async () => {
    // Perform delete operation
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>User Profile</h1>
        {editing ? (
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
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </>
        )}
      </div>
    </>
  );
}

export default UserProfile;

import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar.js";

function UserDashboard() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch("/api/user");
      const data = await response.json();
      setUser(data);
    };

    fetchUser();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>User Dashboard</h1>
        <p>{user.username}</p>
        <p>{user.email}</p>
      </div>
    </>
  );
}

export default UserDashboard;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedAuth from "./auth/ProtectedAuth.js";

import HomePage from "./pages/HomePage.js";
import UserDashboard from "./pages/UserDashboard.js";
import AdminDashboard from "./pages/AdminDashboard.js";
import GameDetails from "./pages/GameDetails.js";
import GamesList from "./pages/GamesList.js";
import Error404 from "./pages/errors/Error404.js"; // Corrected import
import Error401 from "./pages/errors/Error401.js"; // Corrected import
import Error403 from "./pages/errors/Error403.js";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <ProtectedAuth path="/admin" element={<AdminDashboard />} />
        <ProtectedAuth path="/profile" element={<UserDashboard />} />
        <Route path="/games" element={<GamesList />} />
        <Route path="/games/:id" element={<GameDetails />} />
        <Route path="/401" element={<Error401 />} />
        <Route path="/403" element={<Error403 />} />
        <Route path="/404" element={<Error404 />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

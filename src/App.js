import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedAuth from "./auth/ProtectedAuth.js";

import HomePage from "./pages/HomePage.js";
import AdminPage from "./pages/AdminPage.js";
import UserProfile from "./pages/UserProfile.js";
import GamesList from "./pages/GamesList.js";
import GameDetails from "./pages/GameDetails.js";
import Error from "./pages/Error.js";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/admin"
          element={
            <ProtectedAuth roles={["admin"]}>
              <AdminPage />
            </ProtectedAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedAuth>
              <UserProfile />
            </ProtectedAuth>
          }
        />
        <Route path="/games" element={<GamesList />} />
        <Route path="/game/:id" element={<GameDetails />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

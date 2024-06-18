import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedAuth from "./auth/ProtectedAuth.js";

import HomePage from "./pages/HomePage.js";
import AdminPage from "./pages/AdminPage.js";
import UserProfile from "./pages/UserProfile.js";
import GamesList from "./pages/GamesList.js";
import GameDetails from "./pages/GameDetails.js";
import Error401 from "./pages/errors/Error401.js";
import Error403 from "./pages/errors/Error403.js";
import Error404 from "./pages/errors/Error404.js";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/admin"
          element={<ProtectedAuth roles={["admin"]} element={<AdminPage />} />}
        />
        <Route
          path="/profile"
          element={<ProtectedAuth element={<UserProfile />} />}
        />
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

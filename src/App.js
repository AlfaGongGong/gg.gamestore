import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ProtectedAuth from './auth/ProtectedAuth';


import HomePage from './pages/HomePage.js';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import Error404 from './pages/errors/Error401.js';
import Error401 from './pages/errors/Error404.js';
import Error403 from './pages/errors/Error403.js';


import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user-dashboard" element={
          <ProtectedAuth
            roles={['user']}
          >
            <UserDashboard />
          </ProtectedAuth>
        } />
        <Route path="/admin-dashboard" element={
          <ProtectedAuth
            roles={['admin']}
          >
            <AdminDashboard />
          </ProtectedAuth>
        } />
        <Route path="/404" element={<Error404 />} />
        <Route path="/401" element={<Error401 />} />
        <Route path="/403" element={<Error403 />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;

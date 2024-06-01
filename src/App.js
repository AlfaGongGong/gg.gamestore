import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route  path="/" element={<HomePage />} />
        <Route path="/user-dashboard" component={UserDashboard} />
        <Route path="/admin-dashboard" component={AdminDashboard} />
        <Route path="/404" component={NotFoundPage} />
        <Route path='*' component={NotFoundPage} />
      </Routes>
     </BrowserRouter>
  );
}

export default App;

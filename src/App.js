import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={HomePage} />
        <Route path="/user-dashboard" component={UserDashboard} />
        <Route path="/admin-dashboard" component={AdminDashboard} />
        <Route path="/404" component={NotFoundPage} />
        <Route path='*' component={NotFoundPage} />
      </Routes>
    </Router>
  );
}

export default App;

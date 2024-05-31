import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import AdminDashboard from './pages/AdminDashboard.js';
import UserDashboard from './pages/UserDashboard.js';
import NotFoundPage from './pages/NotFoundPage.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/user-dashboard" component={UserDashboard} />
        <Route path="/admin-dashboard" component={AdminDashboard} />
        <Route path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;

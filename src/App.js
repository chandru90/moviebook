import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Tvcards from './Tvcards';
import Showdetails from './Showdetails'; // Create this component for the show details screen

import Signup from './Signup';
import Sucess from './Sucess';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/home" element={<Tvcards />} />
        <Route path="/details/:id" element={<ProtectedRoute />} />
        <Route path="/sucess" element={<Sucess />} />
        
      </Routes>
    </Router>
  );
};

const ProtectedRoute = () => {
  const loggedInUser = JSON.parse(localStorage.getItem('userData'));

  if (!loggedInUser) {
    return <Navigate to="/" />;
  }

  return <Showdetails />;
};

export default App;

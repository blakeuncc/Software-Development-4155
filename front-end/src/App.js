import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login.jsx'; // Make sure the path is correct to your login component

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/Login" />} />
          <Route path="/Login" element={<Login />} />
          {/* Add other routes as needed */}
        </Routes>
      </Router>
  );
};

export default App;
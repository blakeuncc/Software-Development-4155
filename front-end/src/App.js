import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate,  } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Contact from './pages/Contact.jsx';
import Report from './pages/Report.jsx';
import Home from './pages/Home.jsx';
import Map from './pages/Map.jsx';
import Register from './pages/Register';
import Profile from './pages/Profile';


const App = () => {
  const [user, setUser] = useState(null);


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Report" element={<Report />} />
        <Route path="/Map" element={<Map />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Profile" element={<Profile />} 

        />
      </Routes>
    </Router>
  );
};


export default App;
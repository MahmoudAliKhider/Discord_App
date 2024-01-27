import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';

import Login from './Pages/auth/Login/Login';
import Register from './Pages/auth/Register/Register';
import Dashboard from './Pages/Dashbord/dashbord';
import AlertNotification from './components/AlertNotification';

function App() {
  return (
    < >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/dashboard" element={<Dashboard />} />
          
        </Routes>
      </BrowserRouter>
      <AlertNotification />
    </>
  );
}

export default App;

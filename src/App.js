import Login from './components/Login/Login'
import Registartion from './components/Registartion/Registration'
import Dashboard from './components/Dashboard/Dashboard'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react'
import { PrivateRoutes } from './utils/ProtectedRoutes/ProtectedRoutes'
import { PublicRoutes } from './utils/ProtectedRoutes/PublicRoutes';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
          <Route element={<PublicRoutes />}>
            <Route path='/' element={<Login />} />
            <Route path='/registration?' element={<Registartion />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;


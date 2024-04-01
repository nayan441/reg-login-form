import Login from './components/Login/Login'
import Registartion from './components/Registartion/Registration'
import Dashboard from './components/Dashboard/Dashboard'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'

function App() {
  let isAuth=JSON.parse(sessionStorage.getItem('userDetail'))??false
  return (
    <div className="App">
      <Router>  
              <Routes>
                  <Route path='/' element={isAuth?<Navigate  to="/dashboard"/>:<Login/>}/>
                  <Route path='/registration?' element={<Registartion />}/>
                  <Route path='/dashboard?' element={<Dashboard />}/>
              </Routes>
      </Router>
    </div>
  );
}
export default App;

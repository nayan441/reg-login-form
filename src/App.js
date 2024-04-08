import Login from './components/Login/Login'
import Registartion from './components/Registartion/Registration'
import Dashboard from './components/Dashboard/Dashboard'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'

function App() {
  const [isAuth,setIsAuth]=useState(false)

  useEffect(()=>{
    let token=JSON.parse(sessionStorage.getItem('userDetail'))
    if(token){setIsAuth(true)}
    else{setIsAuth(false)}
  },[])

  console.log("This happens on EVERY render.");

  return (
    <div className="App">
      <Router>  
      <Routes>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/' element={<Login />}/>
         <Route path='/registration' element={<Registartion />}/>
        </Routes>
      </Router>
    </div>
  );
}
export default App;

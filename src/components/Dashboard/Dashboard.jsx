import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  const navigate = useNavigate()
  const userDetail=JSON.parse(sessionStorage.getItem('userDetail'))
  
  const handleLogout =()=>{
    sessionStorage.clear();
    navigate('/')
  }

  useEffect( ()=>{
   if (!userDetail){
    navigate('/')
  }}
  ,[])

  return (
    <div className='container mt-2'>
    <h1 className='d-flex  justify-content-center'> Dashboard Page</h1>
    <p>Welcome</p>
    <p>{userDetail?.email}</p>
    <p>{userDetail?.userName}</p>
    <button className="btn btn-danger mt-3" onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard